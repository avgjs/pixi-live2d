import PIXI from 'pixi.js';
import {
  UtSystem,
  UtDebug,
  LDTransform,
  LDGL,
  Live2D,
  Live2DModelWebGL,
  Live2DModelJS,
  Live2DMotion,
  MotionQueueManager,
  PhysicsHair,
  AMotion,
  PartsDataID,
  DrawDataID,
  BaseDataID,
  ParamID
} from '../src/lib/live2d';
import LAppModel from './lib/LAppModel';
import { Live2DFramework, L2DTargetPoint, L2DViewMatrix, L2DMatrix44 } from './lib/Live2DFramework';
import MatrixStack from './lib/MatrixStack';

function getWebGLContext(canvas) {
  var NAMES = [ "webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
  var param = {
    alpha : true,
    premultipliedAlpha : true
  };
  for (var i = 0; i < NAMES.length; i++) {
    try {
      var ctx = canvas.getContext(NAMES[i], param);
      if (ctx) {
        return ctx;
      }
    } catch (e) {}
  }
  return null;
};

export default class Live2DSprite extends PIXI.Container {
  constructor(modelDefine, canvas) {
    super();

    this.platform = window.navigator.platform.toLowerCase();

    Live2D.init();
    this.model = new LAppModel();

    this.isDrawStart = false;

    this.gl = null;
    this.canvas = null;

    this.dragMgr = null; /*new L2DTargetPoint();*/
    this.viewMatrix = null; /*new L2DViewMatrix();*/
    this.projMatrix = null; /*new L2DMatrix44()*/
    this.deviceToScreen = null; /*new L2DMatrix44();*/

    this.drag = false;
    this.oldLen = 0;

    this.lastMouseX = 0;
    this.lastMouseY = 0;

    this.isModelShown = false;

    this.canvas = canvas

    this.modelReady = false;
    this.init(modelDefine);

  }

  init(modelDefine) {

    var width = this.canvas.width;
    var height = this.canvas.height;

    this.dragMgr = new L2DTargetPoint();


    var ratio = height / width;
    var left = -1;  //VIEW_LOGICAL_LEFT;
    var right = 1;  //VIEW_LOGICAL_RIGHT;
    var bottom = -ratio;
    var top = ratio;

    this.viewMatrix = new L2DViewMatrix();


    this.viewMatrix.setScreenRect(left, right, bottom, top);


    this.viewMatrix.setMaxScreenRect(-2, 2, -2, 2);
    //VIEW_LOGICAL_MAX_LEFT,
                                    //  VIEW_LOGICAL_MAX_RIGHT,
                                    //  VIEW_LOGICAL_MAX_BOTTOM,
                                    //  VIEW_LOGICAL_MAX_TOP

    this.viewMatrix.setMaxScale(2);
    this.viewMatrix.setMinScale(0.8);

    this.projMatrix = new L2DMatrix44();
    // this.projMatrix.multScale(1, (width / height));
    this.projMatrix.multScale(ratio, 1);


    this.deviceToScreen = new L2DMatrix44();
    // this.deviceToScreen.multTranslate( 0, 1);
    this.deviceToScreen.multScale(0.7, 0.7);



    this.gl = getWebGLContext(this.canvas);
    if (!this.gl) {
        console.error("Failed to create WebGL context.");
        return;
    }

    Live2D.setGL(this.gl);


    this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
    this.model.load(this.gl, modelDefine, () => {
      this.modelReady = true;
    });
  }

  draw() {
    MatrixStack.reset();
    MatrixStack.loadIdentity();

    this.dragMgr.update();
    // this.live2DMgr.setDrag(this.dragMgr.getX(), this.dragMgr.getY());


    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    MatrixStack.multMatrix(this.projMatrix.getArray());
    MatrixStack.multMatrix(this.viewMatrix.getArray());
    MatrixStack.multMatrix(this.deviceToScreen.getArray());
    MatrixStack.push();

    this.model.update();
    this.model.draw(this.gl);

    MatrixStack.pop();
  }

  _renderWebGL(renderer) {
    if (!this.modelReady) {
      return;
    }

    renderer.flush();

    const gl = renderer.gl;

    const arrayBuffer = gl.getParameter(gl.ARRAY_BUFFER_BINDING);
    const elementArrayBuffer = gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
    const currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);
    const activeTexture = gl.getParameter(gl.ACTIVE_TEXTURE);

    gl.activeTexture(gl.TEXTURE0);
    const texture0 = gl.getParameter(gl.TEXTURE_BINDING_2D);
    gl.activeTexture(gl.TEXTURE1);
    const texture1 = gl.getParameter(gl.TEXTURE_BINDING_2D);

    // const frontFace = gl.getParameter(gl.FRONT_FACE);
    const colorWhiteMask = gl.getParameter(gl.COLOR_WRITEMASK);

    const vertexAttr0Enabled = gl.getVertexAttrib(0, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
    const vertexAttr1Enabled = gl.getVertexAttrib(1, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
    const vertexAttr2Enabled = gl.getVertexAttrib(2, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
    const vertexAttr3Enabled = gl.getVertexAttrib(3, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
    const scissorTestEnabled = gl.isEnabled(gl.SCISSOR_TEST);
    const stencilTestEnabled = gl.isEnabled(gl.STENCIL_TEST);
    const depthTestEnabled = gl.isEnabled(gl.DEPTH_TEST);
    const cullFaceEnabled = gl.isEnabled(gl.CULL_FACE);
    const blendEnabled = gl.isEnabled(gl.BLEND);

    const clear = gl.clear;
    gl.clear = () => {};
    this.draw();
    gl.clear = clear;

    gl.bindBuffer(gl.ARRAY_BUFFER, arrayBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementArrayBuffer);
    gl.useProgram(currentProgram);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture0);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture1);

    gl.activeTexture(activeTexture);
    // gl.frontFace(frontFace);
    gl.colorMask(...colorWhiteMask);

    vertexAttr0Enabled && gl.enableVertexAttribArray(0);
    vertexAttr1Enabled && gl.enableVertexAttribArray(1);
    vertexAttr2Enabled && gl.enableVertexAttribArray(2);
    vertexAttr3Enabled && gl.enableVertexAttribArray(3);
    scissorTestEnabled && gl.enable(gl.SCISSOR_TEST);
    stencilTestEnabled && gl.enable(gl.STENCIL_TEST);
    depthTestEnabled   && gl.enable(gl.DEPTH_TEST);
    cullFaceEnabled    && gl.enable(gl.CULL_FACE);
    blendEnabled       && gl.enable(gl.BLEND);

    super._renderWebGL(renderer);
  }

  destroy(...args) {
    this.model.release();
    super.destroy(...args);
  }

}
