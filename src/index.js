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
const PIXI = require('pixi.js');
import LAppModel from './lib/LAppModel';
import { Live2DFramework, L2DTargetPoint, L2DViewMatrix, L2DMatrix44 } from './lib/Live2DFramework';
import MatrixStack from './lib/MatrixStack';

/**
 * @class
 * @memberof PIXI
 * @param modelDefine {object} Content of {name}.model.js file
 * @param [options] {object} The optional parameters
 * @param [options.eyeBlink=true] {boolean}
 * @param [options.lipSyncWithSound=true] {boolean}
 * @param [options.debugLog=false] {boolean}
 * @param [options.debugMouseLog=false] {boolean}
 * @param [options.randomMotion=true] {boolean}
 * @param [options.defaultMotionGroup="idle"] {string}
 * @param [options.priorityDefault=1] {number}
 * @param [options.priorityForce=3] {number}
 * @param [options.audioPlayer=3] {function} Custom audio player, pass (filename, rootPath) as parameters
 *
 */
export default class Live2DSprite extends PIXI.Sprite {
  constructor(modelDefine, options) {
    super();

    this.interactive = true;

    this.platform = window.navigator.platform.toLowerCase();

    const fullOptions = Object.assign({
      priorityForce: 3,
      priorityDefault: 1,
      debugLog: false,
      debugMouseLog: false,
      eyeBlink: true,
      lipSyncWithSound: true,
      randomMotion: true,
      defaultMotionGroup: "idle",
      audioPlayer: null
    }, options);

    Live2D.init();
    this.model = new LAppModel(fullOptions);

    this.gl = null;
    this.canvas = null;

    this.dragMgr = null; /*new L2DTargetPoint();*/
    this.viewMatrix = null; /*new L2DViewMatrix();*/
    this.projMatrix = null; /*new L2DMatrix44()*/
    this.deviceToScreen = null; /*new L2DMatrix44();*/

    this.texture = null;

    this.modelReady = false;
    this.onModelReady = [];
    this.modelDefine = modelDefine;

  }

  /**
   * @private
   */
  init() {


    var width = this.canvas.width;
    var height = this.canvas.height;

    this.texture = PIXI.RenderTexture.create(width, height);

    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;

    this.dragMgr = new L2DTargetPoint();

    var ratio = height / width;
    var left = -1;
    var right = 1;
    var bottom = -ratio;
    var top = ratio;

    this.viewMatrix = new L2DViewMatrix();
    this.viewMatrix.setMaxScreenRect(-2, 2, -2, 2);
    this.viewMatrix.setScreenRect(left, right, bottom, top);
    // this.viewMatrix.setMaxScale(2);
    // this.viewMatrix.setMinScale(0.5);
    // this.viewMatrix.adjustScale(0, 0, 0.7);

    this.projMatrix = new L2DMatrix44();
    this.projMatrix.multScale(ratio, 1);  // flip for rtt

    this.deviceToScreen = new L2DMatrix44();
    this.deviceToScreen.multTranslate( -width / 2.0, -height / 2.0);
    this.deviceToScreen.multScale(2 / width, -2 / height);

    Live2D.setGL(this.gl);

    this.x = width / 2;
    this.y = height / 2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.scale.y = -1;

    this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
    this.model.load(this.gl, this.modelDefine, () => {
      this.modelReady = true;
    });
  }

  /**
   * @private
   */
  draw() {
    MatrixStack.reset();
    MatrixStack.loadIdentity();

    this.dragMgr.update();
    this.model.setDrag(this.dragMgr.getX(), this.dragMgr.getY());

    // this.viewMatrix.adjustTranslate(-this.x / this.canvasWidth, -this.y / this.canvasHeight);
    // this.viewMatrix.adjustScale(this.anchor.x, this.anchor.y, this.scale.x, this.scale.y);

    MatrixStack.multMatrix(this.projMatrix.getArray());
    MatrixStack.multMatrix(this.viewMatrix.getArray());
    // MatrixStack.multMatrix(this.deviceToScreen.getArray());
    MatrixStack.push();

    this.model.update();
    this.model.draw(this.gl);

    MatrixStack.pop();
  }

  _renderWebGL(renderer) {
    if (!this.gl) {
      this.gl = renderer.gl;
      this.canvas = renderer.view;
      this.modelDefine && this.init(this.modelDefine);
    }

    if (!this.modelReady) {
      return;
    }

    while (this.onModelReady.length) {
      const func = this.onModelReady.shift();
      func();
    }

    if (!this.visible) {
      return
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

    const frontFace = gl.getParameter(gl.FRONT_FACE);
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

    const _activeTextureLocation = renderer._activeTextureLocation;
    const _activeRenderTarget = renderer._activeRenderTarget;

    renderer.bindRenderTexture(this.texture);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.frontFace(gl.CW);
    this.draw();
    renderer._activeTextureLocation = _activeTextureLocation;
    gl.activeTexture(gl.TEXTURE0 + _activeTextureLocation);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.useProgram(currentProgram);
    renderer.bindRenderTarget(_activeRenderTarget);

    gl.bindBuffer(gl.ARRAY_BUFFER, arrayBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementArrayBuffer);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture0);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture1);

    gl.activeTexture(activeTexture);
    gl.frontFace(frontFace);
    gl.colorMask(...colorWhiteMask);
    //
    vertexAttr0Enabled ? gl.enableVertexAttribArray(0) : gl.disableVertexAttribArray(0);
    vertexAttr1Enabled ? gl.enableVertexAttribArray(1) : gl.disableVertexAttribArray(1);
    vertexAttr2Enabled ? gl.enableVertexAttribArray(2) : gl.disableVertexAttribArray(2);
    vertexAttr3Enabled ? gl.enableVertexAttribArray(3) : gl.disableVertexAttribArray(3);
    scissorTestEnabled ? gl.enable(gl.SCISSOR_TEST) : gl.disable(gl.SCISSOR_TEST);
    stencilTestEnabled ? gl.enable(gl.STENCIL_TEST) : gl.disable(gl.STENCIL_TEST);
    depthTestEnabled   ? gl.enable(gl.DEPTH_TEST) : gl.disable(gl.DEPTH_TEST);
    cullFaceEnabled    ? gl.enable(gl.CULL_FACE) : gl.disable(gl.CULL_FACE);
    blendEnabled       ? gl.enable(gl.BLEND) : gl.disable(gl.BLEND);

    super._renderWebGL(renderer);
  }

  destroy(...args) {
    this.model.release();
    super.destroy(...args);
  }

  containsPoint(point) {
    if (this.modelReady) {
      return this.hitTest(null, point.x, point.y);
    }
    return false;
  }

  /* Live2D methods */


  /* Transforms */

  adjustScale(cx, cy, scale) {
    this.onModelReady.push(() => {
      this.viewMatrix.adjustScale(cx, cy, scale);
    });
  }
  adjustTranslate(shiftX, shiftY) {
    this.onModelReady.push(() => {
      this.viewMatrix.adjustTranslate(shiftX, -shiftY);
    });
  }

  /**
   * specify `PARAM_MOUTH_OPEN_Y` of Live2D model.
   * @param value {Number} between 0~1, set to `null` will disable it.
   */
  setLipSync(value) {
    if (value === null) {
      this.model.setLipSync(false);
    } else {
      this.model.setLipSync(true);
      this.model.setLipSyncValue(value);
    }
  }
  setRandomExpression() {
    this.onModelReady.push(() => {
      this.model.setRandomExpression();
    });
  }
  startRandomMotion(name, priority) {
    this.onModelReady.push(() => {
      this.model.startRandomMotion(name, priority);
    });
  }
  startRandomMotionOnce(name, priority) {
    this.onModelReady.push(() => {
      this.model.startRandomMotionOnce(name, priority);
    });
  }
  stopRandomMotion() {
    this.onModelReady.push(() => {
      this.model.stopRandomMotion();
    });
  }
  startMotion(name, no, priority) {
    this.onModelReady.push(() => {
      this.model.startMotion(name, no, priority);
    });
  }
  playSound(filename, host='/') {
    this.onModelReady.push(() => {
      this.model.playSound(filename, host);
    });
  }

  /* Event methods */
  hitTest(id, x, y) {
    return this.model.hitTest(id,
      this.viewMatrix.invertTransformX(this.deviceToScreen.transformX(x)),
      this.viewMatrix.invertTransformY(this.deviceToScreen.transformY(y)));
  }
  setViewPoint(x, y) {
    this.dragMgr.setPoint(this.viewMatrix.invertTransformX(this.deviceToScreen.transformX(x)),
    this.viewMatrix.invertTransformY(this.deviceToScreen.transformY(y)));
  }


  /* Some raw methods of Live2D */
  getParamFloat(key) {
    return this.model.getLive2DModel().getParamFloat(key);
  }
  setParamFloat(key, value, weight=1) {
    this.model.getLive2DModel().setParamFloat(key, value, weight);
  }
  addToParamFloat(key, value, weight=1) {
    this.model.getLive2DModel().addToParamFloat(key, value, weight);
  }
  multParamFloat(key, value, weight=1) {
    this.model.getLive2DModel().multParamFloat(key, value, weight);
  }

}

if (PIXI) {
  PIXI.Live2DSprite = Live2DSprite;
} else {
  console.error('Error: Cannot find global variable `PIXI`, Live2D plguin will not be installed.');
}
