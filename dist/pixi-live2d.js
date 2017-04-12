/*!
 * The following license applies to some parts of the software which is from Live2D Inc.
 * 
 * This is a Software Development Kit (SDK) for developing Live2D-Cubism-powered applications on WebGL.
 * The SDK contains proprietary libraries and sample projects.
 * Read this document when using the SDK.
 * 
 * 	Read Live2D License Agreement
 * 	for business
 * 	http://live2d.com/en/sdk_license_cubism
 * 
 * 	for indie
 * 	http://live2d.com/en/sdk_license_cubism_indie
 * 
 * 	After agree and accept Live2D SDK License Agreement, the content in the following folders may be placed in the server which you control
 * 
 * ==========================
 * 
 * The following license applies to pixi.js.
 * 
 * https://github.com/pixijs/pixi.js/blob/master/LICENSE
 * 
 * ==========================
 * 
 * The following license applies to the other parts of the software.
 * 
 * MIT License
 * 
 * Copyright (c) 2016 Icemic Jia <bingfeng.web@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("pixi.js"));
	else if(typeof define === 'function' && define.amd)
		define(["pixi.js"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("pixi.js")) : factory(root["pixi.js"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _live2d = __webpack_require__(1);
	
	var _LAppModel = __webpack_require__(2);
	
	var _LAppModel2 = _interopRequireDefault(_LAppModel);
	
	var _Live2DFramework = __webpack_require__(3);
	
	var _MatrixStack = __webpack_require__(5);
	
	var _MatrixStack2 = _interopRequireDefault(_MatrixStack);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PIXI = __webpack_require__(9);
	
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
	var Live2DSprite = function (_PIXI$Sprite) {
	  _inherits(Live2DSprite, _PIXI$Sprite);
	
	  function Live2DSprite(modelDefine, options) {
	    _classCallCheck(this, Live2DSprite);
	
	    var _this = _possibleConstructorReturn(this, (Live2DSprite.__proto__ || Object.getPrototypeOf(Live2DSprite)).call(this));
	
	    _this.interactive = true;
	
	    _this.platform = window.navigator.platform.toLowerCase();
	
	    var fullOptions = Object.assign({
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
	
	    _live2d.Live2D.init();
	    _this.model = new _LAppModel2.default(fullOptions);
	
	    _this.gl = null;
	    _this.canvas = null;
	
	    _this.dragMgr = null; /*new L2DTargetPoint();*/
	    _this.viewMatrix = null; /*new L2DViewMatrix();*/
	    _this.projMatrix = null; /*new L2DMatrix44()*/
	    _this.deviceToScreen = null; /*new L2DMatrix44();*/
	
	    _this.texture = null;
	
	    _this.modelReady = false;
	    _this.onModelReady = [];
	    _this.modelDefine = modelDefine;
	
	    return _this;
	  }
	
	  /**
	   * @private
	   */
	
	
	  _createClass(Live2DSprite, [{
	    key: 'init',
	    value: function init() {
	      var _this2 = this;
	
	      var width = this.canvas.width;
	      var height = this.canvas.height;
	
	      this.texture = PIXI.RenderTexture.create(width, height);
	
	      this.canvasWidth = this.canvas.width;
	      this.canvasHeight = this.canvas.height;
	
	      this.dragMgr = new _Live2DFramework.L2DTargetPoint();
	
	      var ratio = height / width;
	      var left = -1;
	      var right = 1;
	      var bottom = -ratio;
	      var top = ratio;
	
	      this.viewMatrix = new _Live2DFramework.L2DViewMatrix();
	      this.viewMatrix.setMaxScreenRect(-2, 2, -2, 2);
	      this.viewMatrix.setScreenRect(left, right, bottom, top);
	      // this.viewMatrix.setMaxScale(2);
	      // this.viewMatrix.setMinScale(0.5);
	      // this.viewMatrix.adjustScale(0, 0, 0.7);
	
	      this.projMatrix = new _Live2DFramework.L2DMatrix44();
	      this.projMatrix.multScale(ratio, 1); // flip for rtt
	
	      this.deviceToScreen = new _Live2DFramework.L2DMatrix44();
	      this.deviceToScreen.multTranslate(-width / 2.0, -height / 2.0);
	      this.deviceToScreen.multScale(2 / width, -2 / height);
	
	      _live2d.Live2D.setGL(this.gl);
	
	      this.x = width / 2;
	      this.y = height / 2;
	      this.anchor.x = 0.5;
	      this.anchor.y = 0.5;
	      this.scale.y = -1;
	
	      this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
	      this.model.load(this.gl, this.modelDefine, function () {
	        _this2.modelReady = true;
	      });
	    }
	
	    /**
	     * @private
	     */
	
	  }, {
	    key: 'draw',
	    value: function draw() {
	      _MatrixStack2.default.reset();
	      _MatrixStack2.default.loadIdentity();
	
	      this.dragMgr.update();
	      this.model.setDrag(this.dragMgr.getX(), this.dragMgr.getY());
	
	      // this.viewMatrix.adjustTranslate(-this.x / this.canvasWidth, -this.y / this.canvasHeight);
	      // this.viewMatrix.adjustScale(this.anchor.x, this.anchor.y, this.scale.x, this.scale.y);
	
	      _MatrixStack2.default.multMatrix(this.projMatrix.getArray());
	      _MatrixStack2.default.multMatrix(this.viewMatrix.getArray());
	      // MatrixStack.multMatrix(this.deviceToScreen.getArray());
	      _MatrixStack2.default.push();
	
	      this.model.update();
	      this.model.draw(this.gl);
	
	      _MatrixStack2.default.pop();
	    }
	  }, {
	    key: '_renderWebGL',
	    value: function _renderWebGL(renderer) {
	      if (!this.gl) {
	        this.gl = renderer.gl;
	        this.canvas = renderer.view;
	        this.modelDefine && this.init(this.modelDefine);
	      }
	
	      if (!this.modelReady) {
	        var _gl = renderer.gl;
	        // it is unreasonable how the next line works...😂
	        _gl.activeTexture(_gl.TEXTURE0);
	        return;
	      }
	
	      while (this.onModelReady.length) {
	        var func = this.onModelReady.shift();
	        func();
	      }
	
	      if (!this.visible) {
	        return;
	      }
	
	      var useVAO = !!(renderer.createVao && renderer.bindVao);
	
	      var _activeVao = void 0;
	      if (useVAO) {
	        _activeVao = renderer._activeVao;
	      } else {
	        renderer.flush();
	      }
	
	      var gl = renderer.gl;
	
	      var arrayBuffer = gl.getParameter(gl.ARRAY_BUFFER_BINDING);
	      var elementArrayBuffer = gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
	      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);
	
	      var activeTexture = void 0;
	      if (!useVAO) {
	        activeTexture = gl.getParameter(gl.ACTIVE_TEXTURE);
	      }
	
	      gl.activeTexture(gl.TEXTURE0);
	      var texture0 = gl.getParameter(gl.TEXTURE_BINDING_2D);
	      gl.activeTexture(gl.TEXTURE1);
	      var texture1 = gl.getParameter(gl.TEXTURE_BINDING_2D);
	
	      var frontFace = gl.getParameter(gl.FRONT_FACE);
	      var colorWhiteMask = gl.getParameter(gl.COLOR_WRITEMASK);
	
	      var vertexAttr0Enabled = void 0,
	          vertexAttr1Enabled = void 0,
	          vertexAttr2Enabled = void 0,
	          vertexAttr3Enabled = void 0;
	      if (!useVAO) {
	        vertexAttr0Enabled = gl.getVertexAttrib(0, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
	        vertexAttr1Enabled = gl.getVertexAttrib(1, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
	        vertexAttr2Enabled = gl.getVertexAttrib(2, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
	        vertexAttr3Enabled = gl.getVertexAttrib(3, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
	      }
	      var scissorTestEnabled = gl.isEnabled(gl.SCISSOR_TEST);
	      var stencilTestEnabled = gl.isEnabled(gl.STENCIL_TEST);
	      var depthTestEnabled = gl.isEnabled(gl.DEPTH_TEST);
	      var cullFaceEnabled = gl.isEnabled(gl.CULL_FACE);
	      var blendEnabled = gl.isEnabled(gl.BLEND);
	
	      var _activeTextureLocation = renderer._activeTexture ? renderer._activeTextureLocation : 0;
	      var _activeRenderTarget = renderer._activeRenderTarget;
	
	      var vao = void 0;
	      if (useVAO) {
	        vao = renderer.createVao();
	        renderer.bindVao(vao);
	      }
	      renderer.bindRenderTexture(this.texture);
	      gl.clearColor(0.0, 0.0, 0.0, 0.0);
	      gl.clear(gl.COLOR_BUFFER_BIT);
	      gl.frontFace(gl.CW);
	      this.draw();
	      if (!useVAO) {
	        renderer._activeTextureLocation = _activeTextureLocation;
	        gl.activeTexture(gl.TEXTURE0 + _activeTextureLocation);
	      }
	      gl.bindTexture(gl.TEXTURE_2D, null);
	      gl.useProgram(currentProgram);
	      renderer.bindRenderTarget(_activeRenderTarget);
	
	      gl.bindBuffer(gl.ARRAY_BUFFER, arrayBuffer);
	      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementArrayBuffer);
	
	      gl.activeTexture(gl.TEXTURE0);
	      gl.bindTexture(gl.TEXTURE_2D, texture0);
	      gl.activeTexture(gl.TEXTURE1);
	      gl.bindTexture(gl.TEXTURE_2D, texture1);
	
	      if (!useVAO) {
	        gl.activeTexture(activeTexture);
	      }
	      gl.frontFace(frontFace);
	      gl.colorMask.apply(gl, _toConsumableArray(colorWhiteMask));
	      //
	      if (!useVAO) {
	        vertexAttr0Enabled ? gl.enableVertexAttribArray(0) : gl.disableVertexAttribArray(0);
	        vertexAttr1Enabled ? gl.enableVertexAttribArray(1) : gl.disableVertexAttribArray(1);
	        vertexAttr2Enabled ? gl.enableVertexAttribArray(2) : gl.disableVertexAttribArray(2);
	        vertexAttr3Enabled ? gl.enableVertexAttribArray(3) : gl.disableVertexAttribArray(3);
	      }
	      scissorTestEnabled ? gl.enable(gl.SCISSOR_TEST) : gl.disable(gl.SCISSOR_TEST);
	      stencilTestEnabled ? gl.enable(gl.STENCIL_TEST) : gl.disable(gl.STENCIL_TEST);
	      depthTestEnabled ? gl.enable(gl.DEPTH_TEST) : gl.disable(gl.DEPTH_TEST);
	      cullFaceEnabled ? gl.enable(gl.CULL_FACE) : gl.disable(gl.CULL_FACE);
	      blendEnabled ? gl.enable(gl.BLEND) : gl.disable(gl.BLEND);
	
	      if (useVAO) {
	        vao.unbind();
	        vao.destroy();
	        renderer.bindVao(_activeVao);
	      }
	
	      _get(Live2DSprite.prototype.__proto__ || Object.getPrototypeOf(Live2DSprite.prototype), '_renderWebGL', this).call(this, renderer);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _get2;
	
	      this.model.release();
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      (_get2 = _get(Live2DSprite.prototype.__proto__ || Object.getPrototypeOf(Live2DSprite.prototype), 'destroy', this)).call.apply(_get2, [this].concat(args));
	    }
	  }, {
	    key: 'containsPoint',
	    value: function containsPoint(point) {
	      if (this.modelReady) {
	        return this.hitTest(null, point.x, point.y);
	      }
	      return false;
	    }
	
	    /* Live2D methods */
	
	    /* Transforms */
	
	  }, {
	    key: 'adjustScale',
	    value: function adjustScale(cx, cy, scale) {
	      var _this3 = this;
	
	      this.onModelReady.push(function () {
	        _this3.viewMatrix.adjustScale(cx, cy, scale);
	      });
	    }
	  }, {
	    key: 'adjustTranslate',
	    value: function adjustTranslate(shiftX, shiftY) {
	      var _this4 = this;
	
	      this.onModelReady.push(function () {
	        _this4.viewMatrix.adjustTranslate(shiftX, -shiftY);
	      });
	    }
	
	    /**
	     * specify `PARAM_MOUTH_OPEN_Y` of Live2D model.
	     * @param value {Number} between 0~1, set to `null` will disable it.
	     */
	
	  }, {
	    key: 'setLipSync',
	    value: function setLipSync(value) {
	      if (value === null) {
	        this.model.setLipSync(false);
	      } else {
	        this.model.setLipSync(true);
	        this.model.setLipSyncValue(value);
	      }
	    }
	  }, {
	    key: 'setRandomExpression',
	    value: function setRandomExpression() {
	      var _this5 = this;
	
	      this.onModelReady.push(function () {
	        _this5.model.setRandomExpression();
	      });
	    }
	  }, {
	    key: 'startRandomMotion',
	    value: function startRandomMotion(name, priority) {
	      var _this6 = this;
	
	      this.onModelReady.push(function () {
	        _this6.model.startRandomMotion(name, priority);
	      });
	    }
	  }, {
	    key: 'startRandomMotionOnce',
	    value: function startRandomMotionOnce(name, priority) {
	      var _this7 = this;
	
	      this.onModelReady.push(function () {
	        _this7.model.startRandomMotionOnce(name, priority);
	      });
	    }
	  }, {
	    key: 'stopRandomMotion',
	    value: function stopRandomMotion() {
	      var _this8 = this;
	
	      this.onModelReady.push(function () {
	        _this8.model.stopRandomMotion();
	      });
	    }
	  }, {
	    key: 'startMotion',
	    value: function startMotion(name, no, priority) {
	      var _this9 = this;
	
	      this.onModelReady.push(function () {
	        _this9.model.startMotion(name, no, priority);
	      });
	    }
	  }, {
	    key: 'playSound',
	    value: function playSound(filename) {
	      var _this10 = this;
	
	      var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
	
	      this.onModelReady.push(function () {
	        _this10.model.playSound(filename, host);
	      });
	    }
	
	    /* Event methods */
	
	  }, {
	    key: 'hitTest',
	    value: function hitTest(id, x, y) {
	      return this.model.hitTest(id, this.viewMatrix.invertTransformX(this.deviceToScreen.transformX(x)), this.viewMatrix.invertTransformY(this.deviceToScreen.transformY(y)));
	    }
	  }, {
	    key: 'setViewPoint',
	    value: function setViewPoint(x, y) {
	      this.dragMgr.setPoint(this.viewMatrix.invertTransformX(this.deviceToScreen.transformX(x)), this.viewMatrix.invertTransformY(this.deviceToScreen.transformY(y)));
	    }
	
	    /* Some raw methods of Live2D */
	
	  }, {
	    key: 'getParamFloat',
	    value: function getParamFloat(key) {
	      return this.model.getLive2DModel().getParamFloat(key);
	    }
	  }, {
	    key: 'setParamFloat',
	    value: function setParamFloat(key, value) {
	      var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	
	      this.model.getLive2DModel().setParamFloat(key, value, weight);
	    }
	  }, {
	    key: 'addToParamFloat',
	    value: function addToParamFloat(key, value) {
	      var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	
	      this.model.getLive2DModel().addToParamFloat(key, value, weight);
	    }
	  }, {
	    key: 'multParamFloat',
	    value: function multParamFloat(key, value) {
	      var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	
	      this.model.getLive2DModel().multParamFloat(key, value, weight);
	    }
	  }]);
	
	  return Live2DSprite;
	}(PIXI.Sprite);
	
	exports.default = Live2DSprite;
	
	
	if (PIXI) {
	  PIXI.Live2DSprite = Live2DSprite;
	} else {
	  console.error('Error: Cannot find global variable `PIXI`, Live2D plguin will not be installed.');
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// const log = console.log;
	// console.log = () => {};
	// const __ = require('./live2dsdk');
	// console.log = log;
	
	exports.UtSystem = UtSystem;
	exports.UtDebug = UtDebug;
	exports.LDTransform = LDTransform;
	exports.LDGL = LDGL;
	exports.Live2D = Live2D;
	exports.Live2DModelWebGL = Live2DModelWebGL;
	exports.Live2DModelJS = Live2DModelJS;
	exports.Live2DMotion = Live2DMotion;
	exports.MotionQueueManager = MotionQueueManager;
	exports.PhysicsHair = PhysicsHair;
	exports.AMotion = AMotion;
	exports.PartsDataID = PartsDataID;
	exports.DrawDataID = DrawDataID;
	exports.BaseDataID = BaseDataID;
	exports.ParamID = ParamID;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = LAppModel;
	
	var _Live2DFramework = __webpack_require__(3);
	
	var _MatrixStack = __webpack_require__(5);
	
	var _MatrixStack2 = _interopRequireDefault(_MatrixStack);
	
	var _ModelSettingJson = __webpack_require__(8);
	
	var _ModelSettingJson2 = _interopRequireDefault(_ModelSettingJson);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function LAppModel(options) {
	    //L2DBaseModel.apply(this, arguments);
	    _Live2DFramework.L2DBaseModel.prototype.constructor.call(this);
	
	    this.options = options;
	
	    this.randomMotion = this.options.randomMotion;
	    this.randomMotionGroup = null;
	    this.randomMotionPriority = null;
	
	    this.modelHomeDir = "";
	    this.modelSetting = null;
	    this.tmpMatrix = [];
	
	    this.audioElement = null;
	    this.audioContext = null;
	    this.audioAnalyser = null;
	} //============================================================
	//============================================================
	//  class LAppModel     extends L2DBaseModel
	//============================================================
	//============================================================
	
	LAppModel.prototype = new _Live2DFramework.L2DBaseModel();
	
	LAppModel.prototype.load = function (gl, modelDefine, callback) {
	    this.setUpdating(true);
	    this.setInitialized(false);
	
	    this.modelHomeDir = './';
	
	    this.modelSetting = new _ModelSettingJson2.default(modelDefine);
	
	    var thisRef = this;
	
	    // this.modelSetting.loadModelSetting(modelSettingPath, function(){
	
	    var path = thisRef.modelHomeDir + thisRef.modelSetting.getModelFile();
	    thisRef.loadModelData(path, function (model) {
	
	        for (var i = 0; i < thisRef.modelSetting.getTextureNum(); i++) {
	
	            var texPaths = thisRef.modelHomeDir + thisRef.modelSetting.getTextureFile(i);
	
	            thisRef.loadTexture(gl, i, texPaths, function () {
	
	                if (thisRef.isTexLoaded) {
	
	                    if (thisRef.modelSetting.getExpressionNum() > 0) {
	
	                        thisRef.expressions = {};
	
	                        for (var j = 0; j < thisRef.modelSetting.getExpressionNum(); j++) {
	                            var expName = thisRef.modelSetting.getExpressionName(j);
	                            var expFilePath = thisRef.modelHomeDir + thisRef.modelSetting.getExpressionFile(j);
	
	                            thisRef.loadExpression(expName, expFilePath);
	                        }
	                    } else {
	                        thisRef.expressionManager = null;
	                        thisRef.expressions = {};
	                    }
	
	                    if (!thisRef.eyeBlink) {
	                        thisRef.eyeBlink = new _Live2DFramework.L2DEyeBlink();
	                    }
	
	                    if (thisRef.modelSetting.getPhysicsFile()) {
	                        thisRef.loadPhysics(thisRef.modelHomeDir + thisRef.modelSetting.getPhysicsFile());
	                    } else {
	                        thisRef.physics = null;
	                    }
	
	                    if (thisRef.modelSetting.getPoseFile()) {
	                        thisRef.loadPose(thisRef.modelHomeDir + thisRef.modelSetting.getPoseFile(), function () {
	                            thisRef.pose.updateParam(thisRef.live2DModel);
	                        });
	                    } else {
	                        thisRef.pose = null;
	                    }
	
	                    if (thisRef.modelSetting.getLayout()) {
	                        var layout = thisRef.modelSetting.getLayout();
	                        if (layout["width"] != null) thisRef.modelMatrix.setWidth(layout["width"]);
	                        if (layout["height"] != null) thisRef.modelMatrix.setHeight(layout["height"]);
	
	                        if (layout["x"] != null) thisRef.modelMatrix.setX(layout["x"]);
	                        if (layout["y"] != null) thisRef.modelMatrix.setY(layout["y"]);
	                        if (layout["center_x"] != null) thisRef.modelMatrix.centerX(layout["center_x"]);
	                        if (layout["center_y"] != null) thisRef.modelMatrix.centerY(layout["center_y"]);
	                        if (layout["top"] != null) thisRef.modelMatrix.top(layout["top"]);
	                        if (layout["bottom"] != null) thisRef.modelMatrix.bottom(layout["bottom"]);
	                        if (layout["left"] != null) thisRef.modelMatrix.left(layout["left"]);
	                        if (layout["right"] != null) thisRef.modelMatrix.right(layout["right"]);
	                    }
	
	                    for (var j = 0; j < thisRef.modelSetting.getInitParamNum(); j++) {
	
	                        thisRef.live2DModel.setParamFloat(thisRef.modelSetting.getInitParamID(j), thisRef.modelSetting.getInitParamValue(j));
	                    }
	
	                    for (var j = 0; j < thisRef.modelSetting.getInitPartsVisibleNum(); j++) {
	
	                        thisRef.live2DModel.setPartsOpacity(thisRef.modelSetting.getInitPartsVisibleID(j), thisRef.modelSetting.getInitPartsVisibleValue(j));
	                    }
	
	                    thisRef.live2DModel.saveParam();
	                    // thisRef.live2DModel.setGL(gl);
	
	
	                    thisRef.preloadMotionGroup(thisRef.options.defaultMotionGroup);
	                    thisRef.mainMotionManager.stopAllMotions();
	
	                    thisRef.setUpdating(false);
	                    thisRef.setInitialized(true);
	
	                    if (typeof callback == "function") callback();
	                }
	            });
	        }
	    });
	    // });
	};
	
	LAppModel.prototype.release = function (gl) {
	    // this.live2DModel.deleteTextures();
	    // var pm = Live2DFramework.getPlatformManager();
	    //
	    // gl.deleteTexture(pm.texture);
	};
	
	LAppModel.prototype.preloadMotionGroup = function (name) {
	    var thisRef = this;
	
	    for (var i = 0; i < this.modelSetting.getMotionNum(name); i++) {
	        var file = this.modelSetting.getMotionFile(name, i);
	        this.loadMotion(file, this.modelHomeDir + file, function (motion) {
	            motion.setFadeIn(thisRef.modelSetting.getMotionFadeIn(name, i));
	            motion.setFadeOut(thisRef.modelSetting.getMotionFadeOut(name, i));
	        });
	    }
	};
	
	LAppModel.prototype.update = function () {
	    // console.log("--> LAppModel.update()");
	
	    if (!this.live2DModel) {
	        if (this.options.debugLog) console.error("Failed to update.");
	
	        return;
	    }
	
	    var timeMSec = UtSystem.getUserTimeMSec() - this.startTimeMSec;
	    var timeSec = timeMSec / 1000.0;
	    var t = timeSec * 2 * Math.PI;
	
	    if (this.mainMotionManager.isFinished() && this.randomMotion) {
	        this.startRandomMotion(this.randomMotionGroup || this.options.defaultMotionGroup, this.randomMotionPriority || this.options.priorityDefault);
	    }
	
	    //-----------------------------------------------------------------
	
	
	    this.live2DModel.loadParam();
	
	    var update = this.mainMotionManager.updateParam(this.live2DModel);
	    if (!update) {
	
	        if (this.eyeBlink && this.options.eyeBlink) {
	            this.eyeBlink.updateParam(this.live2DModel);
	        }
	    }
	
	    this.live2DModel.saveParam();
	
	    //-----------------------------------------------------------------
	
	
	    if (this.expressionManager && this.expressions && !this.expressionManager.isFinished()) {
	        this.expressionManager.updateParam(this.live2DModel);
	    }
	
	    this.live2DModel.addToParamFloat("PARAM_ANGLE_X", this.dragX * 30, 1);
	    this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", this.dragY * 30, 1);
	    this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1);
	
	    this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", this.dragX * 10, 1);
	
	    this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1);
	    this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1);
	
	    // this.live2DModel.addToParamFloat("PARAM_ANGLE_X",
	    //                                  Number((15 * Math.sin(t / 6.5345))), 0.5);
	    // this.live2DModel.addToParamFloat("PARAM_ANGLE_Y",
	    //                                  Number((8 * Math.sin(t / 3.5345))), 0.5);
	    // this.live2DModel.addToParamFloat("PARAM_ANGLE_Z",
	    //                                  Number((10 * Math.sin(t / 5.5345))), 0.5);
	    // this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X",
	    //                                  Number((4 * Math.sin(t / 15.5345))), 0.5);
	    // this.live2DModel.setParamFloat("PARAM_BREATH",
	    //                                Number((0.5 + 0.5 * Math.sin(t / 3.2345))), 1);
	
	
	    if (this.physics) {
	        this.physics.updateParam(this.live2DModel);
	    }
	
	    if (this.lipSync) {
	        this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", this.lipSyncValue);
	    }
	
	    if (this.pose) {
	        this.pose.updateParam(this.live2DModel);
	    }
	
	    this.live2DModel.update();
	};
	
	LAppModel.prototype.setRandomExpression = function () {
	    var tmp = [];
	    for (var name in this.expressions) {
	        tmp.push(name);
	    }
	
	    var no = parseInt(Math.random() * tmp.length);
	
	    this.setExpression(tmp[no]);
	};
	
	LAppModel.prototype.startRandomMotion = function (name, priority) {
	    var max = this.modelSetting.getMotionNum(name);
	    var no = parseInt(Math.random() * max);
	    this.startMotion(name, no, priority);
	    this.randomMotion = true;
	    this.randomMotionGroup = name;
	    this.randomMotionPriority = priority;
	};
	LAppModel.prototype.startRandomMotionOnce = function (name, priority) {
	    var max = this.modelSetting.getMotionNum(name);
	    var no = parseInt(Math.random() * max);
	    this.startMotion(name, no, priority);
	};
	
	LAppModel.prototype.stopRandomMotion = function () {
	    this.randomMotion = false;
	    this.randomMotionGroup = null;
	    this.randomMotionPriority = null;
	};
	
	LAppModel.prototype.startMotion = function (name, no, priority) {
	    // console.log("startMotion : " + name + " " + no + " " + priority);
	
	    var motionName = this.modelSetting.getMotionFile(name, no);
	
	    if (motionName == null || motionName == "") {
	        if (this.options.debugLog) console.warn("Failed to motion.");
	        return;
	    }
	
	    if (priority == this.options.priorityForce) {
	        this.mainMotionManager.setReservePriority(priority);
	    } else if (!this.mainMotionManager.reserveMotion(priority)) {
	        if (this.options.debugLog) console.log("Motion is running.");
	        return;
	    }
	
	    var thisRef = this;
	    var motion;
	
	    if (this.motions[name] == null) {
	        this.loadMotion(null, this.modelHomeDir + motionName, function (mtn) {
	            motion = mtn;
	
	            thisRef.setFadeInFadeOut(name, no, priority, motion);
	        });
	    } else {
	        motion = this.motions[name];
	
	        thisRef.setFadeInFadeOut(name, no, priority, motion);
	    }
	};
	
	LAppModel.prototype.setFadeInFadeOut = function (name, no, priority, motion) {
	    var motionName = this.modelSetting.getMotionFile(name, no);
	
	    motion.setFadeIn(this.modelSetting.getMotionFadeIn(name, no));
	    motion.setFadeOut(this.modelSetting.getMotionFadeOut(name, no));
	
	    if (this.options.debugLog) console.log("Start motion : " + motionName);
	
	    if (this.modelSetting.getMotionSound(name, no) == null) {
	        this.mainMotionManager.startMotionPrio(motion, priority);
	    } else {
	        var soundName = this.modelSetting.getMotionSound(name, no);
	        // var player = new Sound(this.modelHomeDir + soundName);
	
	        if (this.options.debugLog) console.log("Start sound : " + soundName);
	
	        this.playSound(soundName, this.modelHomeDir);
	
	        this.mainMotionManager.startMotionPrio(motion, priority);
	    }
	};
	
	LAppModel.prototype.playSound = function (filename, host) {
	    var _this = this;
	
	    if (this.options.audioPlayer) {
	        this.options.audioPlayer(filename, host);
	    } else {
	        var audio = this.audioElement || document.createElement("audio");
	        !this.audioElement && (this.audioElement = audio);
	        audio.src = host + filename;
	
	        var AudioContext = window.AudioContext || window.webkitAudioContext;
	        if (AudioContext && this.options.lipSyncWithSound) {
	            var context = this.audioContext || new AudioContext();
	            if (!this.audioContext) {
	                this.audioContext = context;
	                this.audioElementSource = context.createMediaElementSource(audio);
	            }
	            var source = this.audioElementSource;
	            var analyser = this.audioAnalyser || context.createAnalyser();
	            !this.audioAnalyser && (this.audioAnalyser = analyser);
	
	            analyser.fftSize = 32;
	            var bufferLength = analyser.frequencyBinCount;
	            var cache = [];
	            var lastTime = Date.now();
	            var intervalId = setInterval(function () {
	                var dataArray = new Uint8Array(bufferLength);
	                analyser.getByteFrequencyData(dataArray);
	                var value = (dataArray[9] + dataArray[10] + dataArray[11]) / 3;
	                if (Date.now() - lastTime < 33) {
	                    cache.push(value);
	                } else {
	                    var lipValue = cache.length ? cache.reduce(function (previous, current) {
	                        return current += previous;
	                    }) / cache.length / 100 : _this.lipSyncValue;
	                    _this.lipSync = true;
	                    _this.lipSyncValue = lipValue;
	                    lastTime = Date.now();
	                    cache = [];
	                }
	            }, 0);
	            audio.addEventListener('ended', function () {
	                clearInterval(intervalId);
	                _this.lipSyncValue = 0;
	            });
	            source.connect(analyser);
	            analyser.connect(context.destination);
	        }
	        audio.play();
	    }
	};
	
	LAppModel.prototype.setExpression = function (name) {
	    var motion = this.expressions[name];
	
	    if (this.options.debugLog) console.log("Expression : " + name);
	
	    this.expressionManager.startMotion(motion, false);
	};
	
	LAppModel.prototype.draw = function (gl) {
	    //console.log("--> LAppModel.draw()");
	
	    // if(this.live2DModel == null) return;
	
	
	    _MatrixStack2.default.push();
	
	    _MatrixStack2.default.multMatrix(this.modelMatrix.getArray());
	
	    this.tmpMatrix = _MatrixStack2.default.getMatrix();
	    this.live2DModel.setMatrix(this.tmpMatrix);
	    this.live2DModel.draw();
	
	    _MatrixStack2.default.pop();
	};
	
	LAppModel.prototype.hitTest = function (id, testX, testY) {
	    var len = this.modelSetting.getHitAreaNum();
	    var hit = false;
	    for (var i = 0; i < len; i++) {
	        // NOTE: id == null means to test all ids.
	        if (id == null) {
	            var drawID = this.modelSetting.getHitAreaID(i);
	            hit = this.hitTestSimple(drawID, testX, testY);
	            if (hit) {
	                return hit;
	            }
	        } else if (id == this.modelSetting.getHitAreaName(i)) {
	            var drawID = this.modelSetting.getHitAreaID(i);
	
	            return this.hitTestSimple(drawID, testX, testY);
	        }
	    }
	
	    return false;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.L2DBaseModel = L2DBaseModel;
	exports.L2DExpressionMotion = L2DExpressionMotion;
	exports.L2DExpressionParam = L2DExpressionParam;
	exports.L2DEyeBlink = L2DEyeBlink;
	exports.L2DMatrix44 = L2DMatrix44;
	exports.L2DModelMatrix = L2DModelMatrix;
	exports.L2DMotionManager = L2DMotionManager;
	exports.L2DPhysics = L2DPhysics;
	exports.L2DPose = L2DPose;
	exports.L2DPartsParam = L2DPartsParam;
	exports.L2DTargetPoint = L2DTargetPoint;
	exports.L2DViewMatrix = L2DViewMatrix;
	
	var _live2d = __webpack_require__(1);
	
	var _netUtils = __webpack_require__(4);
	
	//============================================================
	//============================================================
	//  class L2DBaseModel
	//============================================================
	//============================================================
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	function L2DBaseModel() {
	    this.live2DModel = null; // ALive2DModel
	    this.modelMatrix = null; // L2DModelMatrix
	    this.eyeBlink = null; // L2DEyeBlink
	    this.physics = null; // L2DPhysics
	    this.pose = null; // L2DPose
	    this.debugMode = false;
	    this.initialized = false;
	    this.updating = false;
	    this.alpha = 1;
	    this.accAlpha = 0;
	    this.lipSync = false;
	    this.lipSyncValue = 0;
	    this.accelX = 0;
	    this.accelY = 0;
	    this.accelZ = 0;
	    this.dragX = 0;
	    this.dragY = 0;
	    this.startTimeMSec = null;
	    this.mainMotionManager = new L2DMotionManager(); //L2DMotionManager
	    this.expressionManager = new L2DMotionManager(); //L2DMotionManager
	    this.motions = {};
	    this.expressions = {};
	
	    this.isTexLoaded = false;
	}
	
	var texCounter = 0;
	
	//============================================================
	//    L2DBaseModel # getModelMatrix()
	//============================================================
	L2DBaseModel.prototype.getModelMatrix = function () {
	    return this.modelMatrix;
	};
	
	//============================================================
	//    L2DBaseModel # setAlpha()
	//============================================================
	L2DBaseModel.prototype.setAlpha = function (a /*float*/) {
	    if (a > 0.999) a = 1;
	    if (a < 0.001) a = 0;
	    this.alpha = a;
	};
	
	//============================================================
	//    L2DBaseModel # getAlpha()
	//============================================================
	L2DBaseModel.prototype.getAlpha = function () {
	    return this.alpha;
	};
	
	//============================================================
	//    L2DBaseModel # isInitialized()
	//============================================================
	L2DBaseModel.prototype.isInitialized = function () {
	    return this.initialized;
	};
	
	//============================================================
	//    L2DBaseModel # setInitialized()
	//============================================================
	L2DBaseModel.prototype.setInitialized = function (v /*boolean*/) {
	    this.initialized = v;
	};
	
	//============================================================
	//    L2DBaseModel # isUpdating()
	//============================================================
	L2DBaseModel.prototype.isUpdating = function () {
	    return this.updating;
	};
	
	//============================================================
	//    L2DBaseModel # setUpdating()
	//============================================================
	L2DBaseModel.prototype.setUpdating = function (v /*boolean*/) {
	    this.updating = v;
	};
	
	//============================================================
	//    L2DBaseModel # getLive2DModel()
	//============================================================
	L2DBaseModel.prototype.getLive2DModel = function () {
	    return this.live2DModel;
	};
	
	//============================================================
	//    L2DBaseModel # setLipSync()
	//============================================================
	L2DBaseModel.prototype.setLipSync = function (v /*boolean*/) {
	    this.lipSync = v;
	};
	
	//============================================================
	//    L2DBaseModel # setLipSyncValue()
	//============================================================
	L2DBaseModel.prototype.setLipSyncValue = function (v /*float*/) {
	    this.lipSyncValue = v;
	};
	
	//============================================================
	//    L2DBaseModel # setAccel()
	//============================================================
	L2DBaseModel.prototype.setAccel = function (x /*float*/, y /*float*/, z /*float*/) {
	    this.accelX = x;
	    this.accelY = y;
	    this.accelZ = z;
	};
	
	//============================================================
	//    L2DBaseModel # setDrag()
	//============================================================
	L2DBaseModel.prototype.setDrag = function (x /*float*/, y /*float*/) {
	    this.dragX = x;
	    this.dragY = y;
	};
	
	//============================================================
	//    L2DBaseModel # getMainMotionManager()
	//============================================================
	L2DBaseModel.prototype.getMainMotionManager = function () {
	    return this.mainMotionManager;
	};
	
	//============================================================
	//    L2DBaseModel # getExpressionManager()
	//============================================================
	L2DBaseModel.prototype.getExpressionManager = function () {
	    return this.expressionManager;
	};
	
	//============================================================
	//    L2DBaseModel # loadModelData()
	//============================================================
	L2DBaseModel.prototype.loadModelData = function (path /*String*/, callback) {
	    /*
	    if( this.live2DModel != null ) {
	        this.live2DModel.deleteTextures();
	    }
	    */
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
	    if (this.debugMode) console.log("Load model : " + path);
	
	    var thisRef = this;
	    (0, _netUtils.loadBytes)(path, 'arraybuffer', function (buf) {
	        thisRef.live2DModel = _live2d.Live2DModelWebGL.loadModel(buf);
	        thisRef.live2DModel.saveParam();
	
	        var _err = _live2d.Live2D.getError();
	
	        if (_err != 0) {
	            console.error("Error : Failed to loadModelData().");
	            return;
	        }
	
	        thisRef.modelMatrix = new L2DModelMatrix(thisRef.live2DModel.getCanvasWidth(), thisRef.live2DModel.getCanvasHeight()); //L2DModelMatrix
	        thisRef.modelMatrix.setWidth(2);
	        thisRef.modelMatrix.setCenterPosition(0, 0);
	
	        callback(thisRef.live2DModel);
	    });
	};
	
	//============================================================
	//    L2DBaseModel # loadTexture()
	//============================================================
	L2DBaseModel.prototype.loadTexture = function (gl, no /*int*/, path /*String*/, callback) {
	    texCounter++;
	
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
	
	    if (this.debugMode) console.log("Load Texture : " + path);
	
	    var thisRef = this;
	    this._loadTexture(gl, this.live2DModel, no, path, function () {
	        texCounter--;
	        if (texCounter == 0) thisRef.isTexLoaded = true;
	        if (typeof callback == "function") callback();
	    });
	};
	
	L2DBaseModel.prototype._loadTexture = function (gl, model, no, path, callback) {
	    // load textures
	    var loadedImage = new Image();
	    loadedImage.src = path;
	
	    var thisRef = this;
	    loadedImage.onload = function () {
	
	        // create texture
	        //  var canvas = document.getElementById("glcanvas");
	        // var gl = getWebGLContext(canvas, {premultipliedAlpha : true});
	        var texture = gl.createTexture();
	        if (!texture) {
	            console.error("Failed to generate gl texture name.");return -1;
	        }
	
	        if (model.isPremultipliedAlpha() == false) {
	            // 乗算済アルファテクスチャ以外の場合
	            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
	        }
	        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
	        gl.activeTexture(gl.TEXTURE0);
	        gl.bindTexture(gl.TEXTURE_2D, texture);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, loadedImage);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
	        gl.generateMipmap(gl.TEXTURE_2D);
	        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
	
	        model.setTexture(no, texture);
	
	        if (typeof callback == "function") callback();
	    };
	
	    loadedImage.onerror = function () {
	        console.error("Failed to load image : " + path);
	    };
	};
	
	//============================================================
	//    L2DBaseModel # loadMotion()
	//============================================================
	L2DBaseModel.prototype.loadMotion = function (name /*String*/, path /*String*/, callback) {
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
	
	    if (this.debugMode) console.log("Load Motion : " + path);
	
	    var motion = null; //Live2DMotion
	
	    var thisRef = this;
	    (0, _netUtils.loadBytes)(path, 'arraybuffer', function (buf) {
	        motion = _live2d.Live2DMotion.loadMotion(buf);
	        if (name != null) {
	            thisRef.motions[name] = motion;
	        }
	        callback(motion);
	    });
	};
	
	//============================================================
	//    L2DBaseModel # loadExpression()
	//============================================================
	L2DBaseModel.prototype.loadExpression = function (name /*String*/, path /*String*/, callback) {
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
	
	    if (this.debugMode) console.log("Load Expression : " + path);
	
	    var thisRef = this;
	    (0, _netUtils.loadBytes)(path, 'json', function (json) {
	        if (name != null) {
	            thisRef.expressions[name] = L2DExpressionMotion.loadJson(json);
	        }
	        if (typeof callback == "function") callback();
	    });
	};
	
	//============================================================
	//    L2DBaseModel # loadPose()
	//============================================================
	L2DBaseModel.prototype.loadPose = function (path /*String*/, callback) {
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
	    if (this.debugMode) console.log("Load Pose : " + path);
	    var thisRef = this;
	    try {
	        (0, _netUtils.loadBytes)(path, 'json', function (json) {
	            thisRef.pose = L2DPose.load(json);
	            if (typeof callback == "function") callback();
	        });
	    } catch (e) {
	        console.warn(e);
	    }
	};
	
	//============================================================
	//    L2DBaseModel # loadPhysics()
	//============================================================
	L2DBaseModel.prototype.loadPhysics = function (path /*String*/) {
	    // var pm = Live2DFramework.getPlatformManager(); //IPlatformManager
	    if (this.debugMode) console.log("Load Physics : " + path);
	    var thisRef = this;
	    try {
	        (0, _netUtils.loadBytes)(path, 'json', function (json) {
	            thisRef.physics = L2DPhysics.load(json);
	        });
	    } catch (e) {
	        console.warn(e);
	    }
	};
	
	//============================================================
	//    L2DBaseModel # hitTestSimple()
	//============================================================
	L2DBaseModel.prototype.hitTestSimple = function (drawID, testX, testY) {
	    var drawIndex = this.live2DModel.getDrawDataIndex(drawID);
	
	    if (drawIndex < 0) return false;
	
	    var points = this.live2DModel.getTransformedPoints(drawIndex);
	    var left = this.live2DModel.getCanvasWidth();
	    var right = 0;
	    var top = this.live2DModel.getCanvasHeight();
	    var bottom = 0;
	
	    for (var j = 0; j < points.length; j = j + 2) {
	        var x = points[j];
	        var y = points[j + 1];
	
	        if (x < left) left = x;
	        if (x > right) right = x;
	        if (y < top) top = y;
	        if (y > bottom) bottom = y;
	    }
	    var tx = this.modelMatrix.invertTransformX(testX);
	    var ty = this.modelMatrix.invertTransformY(testY);
	    //  console.log(left << 0, right << 0, tx << 0)
	    //  console.log(bottom << 0, top << 0, ty << 0)
	    return left <= tx && tx <= right && top <= ty && ty <= bottom;
	};
	
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	//============================================================
	//============================================================
	//  class L2DExpressionMotion  extends     AMotion
	//============================================================
	//============================================================
	function L2DExpressionMotion() {
	    _live2d.AMotion.prototype.constructor.call(this);
	    this.paramList = new Array(); //ArrayList<L2DExpressionParam>
	}
	
	L2DExpressionMotion.prototype = new _live2d.AMotion(); // L2DExpressionMotion extends AMotion
	
	//============================================================
	L2DExpressionMotion.EXPRESSION_DEFAULT = "DEFAULT";
	L2DExpressionMotion.TYPE_SET = 0;
	L2DExpressionMotion.TYPE_ADD = 1;
	L2DExpressionMotion.TYPE_MULT = 2;
	
	//============================================================
	//    static L2DExpressionMotion.loadJson()
	//============================================================
	L2DExpressionMotion.loadJson = function (json) {
	    var ret = new L2DExpressionMotion();
	
	    // var pm = Live2DFramework.getPlatformManager();
	    //  var json = jsonParseFromBytes(buf);
	
	    ret.setFadeIn(parseInt(json.fade_in) > 0 ? parseInt(json.fade_in) : 1000);
	    ret.setFadeOut(parseInt(json.fade_out) > 0 ? parseInt(json.fade_out) : 1000);
	
	    if (json.params == null) {
	        return ret;
	    }
	
	    var params = json.params;
	    var paramNum = params.length;
	    ret.paramList = []; //ArrayList<L2DExpressionParam>
	    for (var i = 0; i < paramNum; i++) {
	        var param = params[i];
	        var paramID = param.id.toString();
	        var value = parseFloat(param.val);
	        var calcTypeInt = L2DExpressionMotion.TYPE_ADD;
	        var calc = param.calc != null ? param.calc.toString() : "add";
	        if (calc === "add") {
	            calcTypeInt = L2DExpressionMotion.TYPE_ADD;
	        } else if (calc === "mult") {
	            calcTypeInt = L2DExpressionMotion.TYPE_MULT;
	        } else if (calc === "set") {
	            calcTypeInt = L2DExpressionMotion.TYPE_SET;
	        } else {
	            calcTypeInt = L2DExpressionMotion.TYPE_ADD;
	        }
	        if (calcTypeInt == L2DExpressionMotion.TYPE_ADD) {
	            var defaultValue = param.def == null ? 0 : parseFloat(param.def);
	            value = value - defaultValue;
	        } else if (calcTypeInt == L2DExpressionMotion.TYPE_MULT) {
	            var defaultValue = param.def == null ? 1 : parseFloat(param.def);
	            if (defaultValue == 0) defaultValue = 1;
	            value = value / defaultValue;
	        }
	
	        var item = new L2DExpressionParam();
	        item.id = paramID;
	        item.type = calcTypeInt;
	        item.value = value;
	
	        ret.paramList.push(item);
	    }
	
	    return ret;
	};
	
	//============================================================
	//    L2DExpressionMotion # updateParamExe()
	//============================================================
	L2DExpressionMotion.prototype.updateParamExe = function (model /*ALive2DModel*/, timeMSec /*long*/, weight /*float*/, motionQueueEnt /*MotionQueueEnt*/) {
	    for (var i = this.paramList.length - 1; i >= 0; --i) {
	        var param = this.paramList[i]; //L2DExpressionParam
	        // if (!param || !param.type) continue;
	        if (param.type == L2DExpressionMotion.TYPE_ADD) {
	            model.addToParamFloat(param.id, param.value, weight);
	        } else if (param.type == L2DExpressionMotion.TYPE_MULT) {
	            model.multParamFloat(param.id, param.value, weight);
	        } else if (param.type == L2DExpressionMotion.TYPE_SET) {
	            model.setParamFloat(param.id, param.value, weight);
	        }
	    }
	};
	
	//============================================================
	//============================================================
	//  class L2DExpressionParam
	//============================================================
	//============================================================
	function L2DExpressionParam() {
	    this.id = "";
	    this.type = -1;
	    this.value = null;
	}
	
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	//============================================================
	//============================================================
	//  class L2DEyeBlink
	//============================================================
	//============================================================
	function L2DEyeBlink() {
	    this.nextBlinkTime = null /* TODO NOT INIT */; //
	    this.stateStartTime = null /* TODO NOT INIT */; //
	    this.blinkIntervalMsec = null /* TODO NOT INIT */; //
	    this.eyeState = EYE_STATE.STATE_FIRST;
	    this.blinkIntervalMsec = 4000;
	    this.closingMotionMsec = 100;
	    this.closedMotionMsec = 50;
	    this.openingMotionMsec = 150;
	    this.closeIfZero = true;
	    this.eyeID_L = "PARAM_EYE_L_OPEN";
	    this.eyeID_R = "PARAM_EYE_R_OPEN";
	}
	
	//============================================================
	//    L2DEyeBlink # calcNextBlink()
	//============================================================
	L2DEyeBlink.prototype.calcNextBlink = function () {
	    var time /*long*/ = _live2d.UtSystem.getUserTimeMSec();
	    var r /*Number*/ = Math.random();
	    return (/*(long)*/time + r * (2 * this.blinkIntervalMsec - 1)
	    );
	};
	
	//============================================================
	//    L2DEyeBlink # setInterval()
	//============================================================
	L2DEyeBlink.prototype.setInterval = function (blinkIntervalMsec /*int*/) {
	    this.blinkIntervalMsec = blinkIntervalMsec;
	};
	
	//============================================================
	//    L2DEyeBlink # setEyeMotion()
	//============================================================
	L2DEyeBlink.prototype.setEyeMotion = function (closingMotionMsec /*int*/, closedMotionMsec /*int*/, openingMotionMsec /*int*/) {
	    this.closingMotionMsec = closingMotionMsec;
	    this.closedMotionMsec = closedMotionMsec;
	    this.openingMotionMsec = openingMotionMsec;
	};
	
	//============================================================
	//    L2DEyeBlink # updateParam()
	//============================================================
	L2DEyeBlink.prototype.updateParam = function (model /*ALive2DModel*/) {
	    var time /*:long*/ = _live2d.UtSystem.getUserTimeMSec();
	    var eyeParamValue /*:Number*/;
	    var t /*:Number*/ = 0;
	    switch (this.eyeState) {
	        case EYE_STATE.STATE_CLOSING:
	            t = (time - this.stateStartTime) / this.closingMotionMsec;
	            if (t >= 1) {
	                t = 1;
	                this.eyeState = EYE_STATE.STATE_CLOSED;
	                this.stateStartTime = time;
	            }
	            eyeParamValue = 1 - t;
	            break;
	        case EYE_STATE.STATE_CLOSED:
	            t = (time - this.stateStartTime) / this.closedMotionMsec;
	            if (t >= 1) {
	                this.eyeState = EYE_STATE.STATE_OPENING;
	                this.stateStartTime = time;
	            }
	            eyeParamValue = 0;
	            break;
	        case EYE_STATE.STATE_OPENING:
	            t = (time - this.stateStartTime) / this.openingMotionMsec;
	            if (t >= 1) {
	                t = 1;
	                this.eyeState = EYE_STATE.STATE_INTERVAL;
	                this.nextBlinkTime = this.calcNextBlink();
	            }
	            eyeParamValue = t;
	            break;
	        case EYE_STATE.STATE_INTERVAL:
	            if (this.nextBlinkTime < time) {
	                this.eyeState = EYE_STATE.STATE_CLOSING;
	                this.stateStartTime = time;
	            }
	            eyeParamValue = 1;
	            break;
	        case EYE_STATE.STATE_FIRST:
	        default:
	            this.eyeState = EYE_STATE.STATE_INTERVAL;
	            this.nextBlinkTime = this.calcNextBlink();
	            eyeParamValue = 1;
	            break;
	    }
	    if (!this.closeIfZero) eyeParamValue = -eyeParamValue;
	    model.setParamFloat(this.eyeID_L, eyeParamValue);
	    model.setParamFloat(this.eyeID_R, eyeParamValue);
	};
	
	//== enum EYE_STATE ==
	var EYE_STATE = function EYE_STATE() {};
	
	EYE_STATE.STATE_FIRST = "STATE_FIRST";
	EYE_STATE.STATE_INTERVAL = "STATE_INTERVAL";
	EYE_STATE.STATE_CLOSING = "STATE_CLOSING";
	EYE_STATE.STATE_CLOSED = "STATE_CLOSED";
	EYE_STATE.STATE_OPENING = "STATE_OPENING";
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	//============================================================
	//============================================================
	//  class L2DMatrix44
	//============================================================
	//============================================================
	function L2DMatrix44() {
	    this.tr = new Float32Array(16); //
	    this.identity();
	}
	
	//============================================================
	//    static L2DMatrix44.mul()
	//============================================================
	L2DMatrix44.mul = function (a /*float[]*/, b /*float[]*/, dst /*float[]*/) {
	    var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	    var n = 4;
	    var i, j, k;
	    for (i = 0; i < n; i++) {
	        for (j = 0; j < n; j++) {
	            for (k = 0; k < n; k++) {
	                c[i + j * 4] += a[i + k * 4] * b[k + j * 4];
	            }
	        }
	    }
	    for (i = 0; i < 16; i++) {
	        dst[i] = c[i];
	    }
	};
	
	//============================================================
	//    L2DMatrix44 # identity()
	//============================================================
	L2DMatrix44.prototype.identity = function () {
	    for (var i /*:int*/ = 0; i < 16; i++) {
	        this.tr[i] = i % 5 == 0 ? 1 : 0;
	    }
	};
	
	//============================================================
	//    L2DMatrix44 # getArray()
	//============================================================
	L2DMatrix44.prototype.getArray = function () {
	    return this.tr;
	};
	
	//============================================================
	//    L2DMatrix44 # getCopyMatrix()
	//============================================================
	L2DMatrix44.prototype.getCopyMatrix = function () {
	    return new Float32Array(this.tr); // this.tr.clone();
	};
	
	//============================================================
	//    L2DMatrix44 # setMatrix()
	//============================================================
	L2DMatrix44.prototype.setMatrix = function (tr /*float[]*/) {
	    if (this.tr == null || this.tr.length != this.tr.length) return;
	    for (var i /*:int*/ = 0; i < 16; i++) {
	        this.tr[i] = tr[i];
	    }
	};
	
	//============================================================
	//    L2DMatrix44 # getScaleX()
	//============================================================
	L2DMatrix44.prototype.getScaleX = function () {
	    return this.tr[0];
	};
	
	//============================================================
	//    L2DMatrix44 # getScaleY()
	//============================================================
	L2DMatrix44.prototype.getScaleY = function () {
	    return this.tr[5];
	};
	
	//============================================================
	//    L2DMatrix44 # transformX()
	//============================================================
	L2DMatrix44.prototype.transformX = function (src /*float*/) {
	    return this.tr[0] * src + this.tr[12];
	};
	
	//============================================================
	//    L2DMatrix44 # transformY()
	//============================================================
	L2DMatrix44.prototype.transformY = function (src /*float*/) {
	    return this.tr[5] * src + this.tr[13];
	};
	
	//============================================================
	//    L2DMatrix44 # invertTransformX()
	//============================================================
	L2DMatrix44.prototype.invertTransformX = function (src /*float*/) {
	    return (src - this.tr[12]) / this.tr[0];
	};
	
	//============================================================
	//    L2DMatrix44 # invertTransformY()
	//============================================================
	L2DMatrix44.prototype.invertTransformY = function (src /*float*/) {
	    return (src - this.tr[13]) / this.tr[5];
	};
	
	//============================================================
	//    L2DMatrix44 # multTranslate()
	//============================================================
	L2DMatrix44.prototype.multTranslate = function (shiftX /*float*/, shiftY /*float*/) {
	    var tr1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, shiftX, shiftY, 0, 1];
	    L2DMatrix44.mul(tr1, this.tr, this.tr);
	};
	
	//============================================================
	//    L2DMatrix44 # translate()
	//============================================================
	L2DMatrix44.prototype.translate = function (x /*float*/, y /*float*/) {
	    this.tr[12] = x;
	    this.tr[13] = y;
	};
	
	//============================================================
	//    L2DMatrix44 # translateX()
	//============================================================
	L2DMatrix44.prototype.translateX = function (x /*float*/) {
	    this.tr[12] = x;
	};
	
	//============================================================
	//    L2DMatrix44 # translateY()
	//============================================================
	L2DMatrix44.prototype.translateY = function (y /*float*/) {
	    this.tr[13] = y;
	};
	
	//============================================================
	//    L2DMatrix44 # multScale()
	//============================================================
	L2DMatrix44.prototype.multScale = function (scaleX /*float*/, scaleY /*float*/) {
	    var tr1 = [scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    L2DMatrix44.mul(tr1, this.tr, this.tr);
	};
	
	//============================================================
	//    L2DMatrix44 # scale()
	//============================================================
	L2DMatrix44.prototype.scale = function (scaleX /*float*/, scaleY /*float*/) {
	    this.tr[0] = scaleX;
	    this.tr[5] = scaleY;
	};
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	//============================================================
	//============================================================
	//  class L2DModelMatrix       extends     L2DMatrix44
	//============================================================
	//============================================================
	function L2DModelMatrix(w /*float*/, h /*float*/) {
	    L2DMatrix44.prototype.constructor.call(this);
	    this.width = w;
	    this.height = h;
	}
	
	//L2DModelMatrix extends L2DMatrix44
	L2DModelMatrix.prototype = new L2DMatrix44();
	
	//============================================================
	//    L2DModelMatrix # setPosition()
	//============================================================
	L2DModelMatrix.prototype.setPosition = function (x /*float*/, y /*float*/) {
	    this.translate(x, y);
	};
	
	//============================================================
	//    L2DModelMatrix # setCenterPosition()
	//============================================================
	L2DModelMatrix.prototype.setCenterPosition = function (x /*float*/, y /*float*/) {
	    var w = this.width * this.getScaleX();
	    var h = this.height * this.getScaleY();
	    this.translate(x - w / 2, y - h / 2);
	};
	
	//============================================================
	//    L2DModelMatrix # top()
	//============================================================
	L2DModelMatrix.prototype.top = function (y /*float*/) {
	    this.setY(y);
	};
	
	//============================================================
	//    L2DModelMatrix # bottom()
	//============================================================
	L2DModelMatrix.prototype.bottom = function (y /*float*/) {
	    var h = this.height * this.getScaleY();
	    this.translateY(y - h);
	};
	
	//============================================================
	//    L2DModelMatrix # left()
	//============================================================
	L2DModelMatrix.prototype.left = function (x /*float*/) {
	    this.setX(x);
	};
	
	//============================================================
	//    L2DModelMatrix # right()
	//============================================================
	L2DModelMatrix.prototype.right = function (x /*float*/) {
	    var w = this.width * this.getScaleX();
	    this.translateX(x - w);
	};
	
	//============================================================
	//    L2DModelMatrix # centerX()
	//============================================================
	L2DModelMatrix.prototype.centerX = function (x /*float*/) {
	    var w = this.width * this.getScaleX();
	    this.translateX(x - w / 2);
	};
	
	//============================================================
	//    L2DModelMatrix # centerY()
	//============================================================
	L2DModelMatrix.prototype.centerY = function (y /*float*/) {
	    var h = this.height * this.getScaleY();
	    this.translateY(y - h / 2);
	};
	
	//============================================================
	//    L2DModelMatrix # setX()
	//============================================================
	L2DModelMatrix.prototype.setX = function (x /*float*/) {
	    this.translateX(x);
	};
	
	//============================================================
	//    L2DModelMatrix # setY()
	//============================================================
	L2DModelMatrix.prototype.setY = function (y /*float*/) {
	    this.translateY(y);
	};
	
	//============================================================
	//    L2DModelMatrix # setHeight()
	//============================================================
	L2DModelMatrix.prototype.setHeight = function (h /*float*/) {
	    var scaleX = h / this.height;
	    var scaleY = -scaleX;
	    this.scale(scaleX, scaleY);
	};
	
	//============================================================
	//    L2DModelMatrix # setWidth()
	//============================================================
	L2DModelMatrix.prototype.setWidth = function (w /*float*/) {
	    var scaleX = w / this.width;
	    var scaleY = -scaleX;
	    this.scale(scaleX, scaleY);
	};
	
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	//============================================================
	//============================================================
	//  class L2DMotionManager     extends     MotionQueueManager
	//============================================================
	//============================================================
	function L2DMotionManager() {
	    _live2d.MotionQueueManager.prototype.constructor.call(this);
	    this.currentPriority = null;
	    this.reservePriority = null;
	
	    this.super = _live2d.MotionQueueManager.prototype;
	}
	
	L2DMotionManager.prototype = new _live2d.MotionQueueManager();
	
	//============================================================
	//    L2DMotionManager # getCurrentPriority()
	//============================================================
	L2DMotionManager.prototype.getCurrentPriority = function () {
	    return this.currentPriority;
	};
	
	//============================================================
	//    L2DMotionManager # getReservePriority()
	//============================================================
	L2DMotionManager.prototype.getReservePriority = function () {
	    return this.reservePriority;
	};
	
	//============================================================
	//    L2DMotionManager # reserveMotion()
	//============================================================
	L2DMotionManager.prototype.reserveMotion = function (priority /*int*/) {
	    if (this.reservePriority >= priority) {
	        return false;
	    }
	    if (this.currentPriority >= priority) {
	        return false;
	    }
	
	    this.reservePriority = priority;
	
	    return true;
	};
	
	//============================================================
	//    L2DMotionManager # setReservePriority()
	//============================================================
	L2DMotionManager.prototype.setReservePriority = function (val /*int*/) {
	    this.reservePriority = val;
	};
	
	//============================================================
	//    L2DMotionManager # updateParam()
	//============================================================
	L2DMotionManager.prototype.updateParam = function (model /*ALive2DModel*/) {
	    var updated = _live2d.MotionQueueManager.prototype.updateParam.call(this, model);
	
	    if (this.isFinished()) {
	        this.currentPriority = 0;
	    }
	
	    return updated;
	};
	
	//============================================================
	//    L2DMotionManager # startMotionPrio()
	//============================================================
	L2DMotionManager.prototype.startMotionPrio = function (motion /*AMotion*/, priority /*int*/) {
	    if (priority == this.reservePriority) {
	        this.reservePriority = 0;
	    }
	    this.currentPriority = priority;
	    return this.startMotion(motion, false);
	};
	
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	//============================================================
	//============================================================
	//  class L2DPhysics
	//============================================================
	//============================================================
	function L2DPhysics() {
	    this.physicsList = new Array(); //ArrayList<PhysicsHair>
	    this.startTimeMSec = _live2d.UtSystem.getUserTimeMSec();
	}
	
	//============================================================
	//    static L2DPhysics.load()
	//============================================================
	L2DPhysics.load = function (json) {
	    var ret = new L2DPhysics(); //L2DPhysicsL2DPhysics
	    // var pm = Live2DFramework.getPlatformManager();
	    //  var json = jsonParseFromBytes(buf);
	    var params = json.physics_hair;
	    var paramNum = params.length;
	    for (var i = 0; i < paramNum; i++) {
	        var param = params[i]; //Value
	        var physics = new _live2d.PhysicsHair(); //PhysicsHairPhysicsHair
	        var setup = param.setup; //Value
	        var length = parseFloat(setup.length);
	        var resist = parseFloat(setup.regist);
	        var mass = parseFloat(setup.mass);
	        physics.setup(length, resist, mass);
	        var srcList = param.src; //Value
	        var srcNum = srcList.length;
	        for (var j = 0; j < srcNum; j++) {
	            var src = srcList[j]; //Value
	            var id = src.id; //String
	            var type = _live2d.PhysicsHair.Src.SRC_TO_X;
	            var typeStr = src.ptype; //String
	            if (typeStr === "x") {
	                type = _live2d.PhysicsHair.Src.SRC_TO_X;
	            } else if (typeStr === "y") {
	                type = _live2d.PhysicsHair.Src.SRC_TO_Y;
	            } else if (typeStr === "angle") {
	                type = _live2d.PhysicsHair.Src.SRC_TO_G_ANGLE;
	            } else {
	                _live2d.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src");
	            }
	            var scale = parseFloat(src.scale);
	            var weight = parseFloat(src.weight);
	            physics.addSrcParam(type, id, scale, weight);
	        }
	        var targetList = param.targets; //Value
	        var targetNum = targetList.length;
	        for (var j = 0; j < targetNum; j++) {
	            var target = targetList[j]; //Value
	            var id = target.id; //String
	            var type = _live2d.PhysicsHair.Target.TARGET_FROM_ANGLE;
	            var typeStr = target.ptype; //String
	            if (typeStr === "angle") {
	                type = _live2d.PhysicsHair.Target.TARGET_FROM_ANGLE;
	            } else if (typeStr === "angle_v") {
	                type = _live2d.PhysicsHair.Target.TARGET_FROM_ANGLE_V;
	            } else {
	                _live2d.UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target");
	            }
	            var scale = parseFloat(target.scale);
	            var weight = parseFloat(target.weight);
	            physics.addTargetParam(type, id, scale, weight);
	        }
	        ret.physicsList.push(physics);
	    }
	    return ret;
	};
	
	//============================================================
	//    L2DPhysics # updateParam()
	//============================================================
	L2DPhysics.prototype.updateParam = function (model /*ALive2DModel*/) {
	    var timeMSec = _live2d.UtSystem.getUserTimeMSec() - this.startTimeMSec;
	    for (var i = 0; i < this.physicsList.length; i++) {
	        this.physicsList[i].update(model, timeMSec);
	    }
	};
	
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	//============================================================
	//============================================================
	//  class L2DPose
	//============================================================
	//============================================================
	function L2DPose() {
	    this.lastTime = 0;
	    this.lastModel = null; //ALive2DModel
	    this.partsGroups = new Array(); //ArrayList<L2DPartsParam[]>
	}
	
	//============================================================
	//    static L2DPose.load()
	//============================================================
	L2DPose.load = function (json) {
	    var ret = new L2DPose(); //L2DPose
	    // var pm = Live2DFramework.getPlatformManager();
	    //  var json = jsonParseFromBytes(buf);
	    var poseListInfo = json.parts_visible; //Value
	    var poseNum = poseListInfo.length;
	    for (var i_pose = 0; i_pose < poseNum; i_pose++) {
	        var poseInfo = poseListInfo[i_pose]; //Value
	        var idListInfo = poseInfo.group; //Value
	        var idNum = idListInfo.length;
	        var partsGroup /*L2DPartsParam*/ = new Array();
	        for (var i_group = 0; i_group < idNum; i_group++) {
	            var partsInfo = idListInfo[i_group]; //Value
	            var parts = new L2DPartsParam(partsInfo.id); //L2DPartsParamL2DPartsParam
	            partsGroup[i_group] = parts;
	            if (partsInfo.link == null) continue;
	            var linkListInfo = partsInfo.link; //Value
	            var linkNum = linkListInfo.length;
	            parts.link = new Array(); //ArrayList<L2DPartsParam>
	            for (var i_link = 0; i_link < linkNum; i_link++) {
	                var linkParts = new L2DPartsParam(linkListInfo[i_link]); //L2DPartsParamL2DPartsParam
	                parts.link.push(linkParts);
	            }
	        }
	        ret.partsGroups.push(partsGroup);
	    }
	
	    return ret;
	};
	
	//============================================================
	//    L2DPose # updateParam()
	//============================================================
	L2DPose.prototype.updateParam = function (model /*ALive2DModel*/) {
	    if (model == null) return;
	
	    if (!(model == this.lastModel)) {
	        this.initParam(model);
	    }
	    this.lastModel = model;
	
	    var curTime = _live2d.UtSystem.getUserTimeMSec();
	    var deltaTimeSec = this.lastTime == 0 ? 0 : (curTime - this.lastTime) / 1000.0;
	    this.lastTime = curTime;
	    if (deltaTimeSec < 0) deltaTimeSec = 0;
	    for (var i = 0; i < this.partsGroups.length; i++) {
	        this.normalizePartsOpacityGroup(model, this.partsGroups[i], deltaTimeSec);
	        this.copyOpacityOtherParts(model, this.partsGroups[i]);
	    }
	};
	
	//============================================================
	//    L2DPose # initParam()
	//============================================================
	L2DPose.prototype.initParam = function (model /*ALive2DModel*/) {
	    if (model == null) return;
	    for (var i = 0; i < this.partsGroups.length; i++) {
	        var partsGroup = this.partsGroups[i]; //L2DPartsParam
	        for (var j = 0; j < partsGroup.length; j++) {
	            partsGroup[j].initIndex(model);
	            var partsIndex = partsGroup[j].partsIndex;
	            var paramIndex = partsGroup[j].paramIndex;
	            if (partsIndex < 0) continue;
	            var v /*:Boolean*/ = model.getParamFloat(paramIndex) != 0;
	            model.setPartsOpacity(partsIndex, v ? 1.0 : 0.0);
	            model.setParamFloat(paramIndex, v ? 1.0 : 0.0);
	            if (partsGroup[j].link == null) continue;
	            for (var k = 0; k < partsGroup[j].link.length; k++) {
	                partsGroup[j].link[k].initIndex(model);
	            }
	        }
	    }
	};
	
	//============================================================
	//    L2DPose # normalizePartsOpacityGroup()
	//============================================================
	L2DPose.prototype.normalizePartsOpacityGroup = function (model /*ALive2DModel*/, partsGroup /*L2DPartsParam[]*/, deltaTimeSec /*float*/) {
	    var visibleParts = -1;
	    var visibleOpacity = 1.0;
	    var CLEAR_TIME_SEC = 0.5;
	    var phi = 0.5;
	    var maxBackOpacity = 0.15;
	    for (var i = 0; i < partsGroup.length; i++) {
	        var partsIndex = partsGroup[i].partsIndex;
	        var paramIndex = partsGroup[i].paramIndex;
	        if (partsIndex < 0) continue;if (model.getParamFloat(paramIndex) != 0) {
	            if (visibleParts >= 0) {
	                break;
	            }
	            visibleParts = i;
	            visibleOpacity = model.getPartsOpacity(partsIndex);
	            visibleOpacity += deltaTimeSec / CLEAR_TIME_SEC;
	            if (visibleOpacity > 1) {
	                visibleOpacity = 1;
	            }
	        }
	    }
	    if (visibleParts < 0) {
	        visibleParts = 0;
	        visibleOpacity = 1;
	    }
	    for (var i = 0; i < partsGroup.length; i++) {
	        var partsIndex = partsGroup[i].partsIndex;
	        if (partsIndex < 0) continue;if (visibleParts == i) {
	            model.setPartsOpacity(partsIndex, visibleOpacity);
	        } else {
	            var opacity = model.getPartsOpacity(partsIndex);
	            var a1;
	            if (visibleOpacity < phi) {
	                a1 = visibleOpacity * (phi - 1) / phi + 1;
	            } else {
	                a1 = (1 - visibleOpacity) * phi / (1 - phi);
	            }
	            var backOp = (1 - a1) * (1 - visibleOpacity);
	            if (backOp > maxBackOpacity) {
	                a1 = 1 - maxBackOpacity / (1 - visibleOpacity);
	            }
	            if (opacity > a1) {
	                opacity = a1;
	            }
	            model.setPartsOpacity(partsIndex, opacity);
	        }
	    }
	};
	
	//============================================================
	//    L2DPose # copyOpacityOtherParts()
	//============================================================
	L2DPose.prototype.copyOpacityOtherParts = function (model /*ALive2DModel*/, partsGroup /*L2DPartsParam[]*/) {
	    for (var i_group = 0; i_group < partsGroup.length; i_group++) {
	        var partsParam = partsGroup[i_group]; //L2DPartsParam
	        if (partsParam.link == null) continue;
	        if (partsParam.partsIndex < 0) continue;
	        var opacity = model.getPartsOpacity(partsParam.partsIndex);
	        for (var i_link = 0; i_link < partsParam.link.length; i_link++) {
	            var linkParts = partsParam.link[i_link]; //L2DPartsParam
	            if (linkParts.partsIndex < 0) continue;
	            model.setPartsOpacity(linkParts.partsIndex, opacity);
	        }
	    }
	};
	
	//============================================================
	//============================================================
	//  class L2DPartsParam
	//============================================================
	//============================================================
	function L2DPartsParam(id /*String*/) {
	    this.paramIndex = -1;
	    this.partsIndex = -1;
	    this.link = null; // ArrayList<L2DPartsParam>
	    this.id = id;
	}
	
	//============================================================
	//    L2DPartsParam # initIndex()
	//============================================================
	L2DPartsParam.prototype.initIndex = function (model /*ALive2DModel*/) {
	    this.paramIndex = model.getParamIndex("VISIBLE:" + this.id);
	    this.partsIndex = model.getPartsDataIndex(_live2d.PartsDataID.getID(this.id));
	    model.setParamFloat(this.paramIndex, 1);
	};
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	//============================================================
	//============================================================
	//  class L2DTargetPoint
	//============================================================
	//============================================================
	function L2DTargetPoint() {
	    this.EPSILON = 0.01; // 変化の最小値（この値以下は無視される）
	    this.faceTargetX = 0;
	    this.faceTargetY = 0;
	    this.faceX = 0;
	    this.faceY = 0;
	    this.faceVX = 0;
	    this.faceVY = 0;
	    this.lastTimeSec = 0;
	}
	
	//============================================================
	L2DTargetPoint.FRAME_RATE = 30;
	
	//============================================================
	//    L2DTargetPoint # set()
	//============================================================
	L2DTargetPoint.prototype.setPoint = function (x /*float*/, y /*float*/) {
	    this.faceTargetX = x;
	    this.faceTargetY = y;
	};
	
	//============================================================
	//    L2DTargetPoint # getX()
	//============================================================
	L2DTargetPoint.prototype.getX = function () {
	    return this.faceX;
	};
	
	//============================================================
	//    L2DTargetPoint # getY()
	//============================================================
	L2DTargetPoint.prototype.getY = function () {
	    return this.faceY;
	};
	
	//============================================================
	//    L2DTargetPoint # update()
	//============================================================
	L2DTargetPoint.prototype.update = function () {
	    var TIME_TO_MAX_SPEED = 0.15;
	    var FACE_PARAM_MAX_V = 40.0 / 7.5;
	    var MAX_V = FACE_PARAM_MAX_V / L2DTargetPoint.FRAME_RATE;
	    if (this.lastTimeSec == 0) {
	        this.lastTimeSec = _live2d.UtSystem.getUserTimeMSec();
	        return;
	    }
	    var curTimeSec = _live2d.UtSystem.getUserTimeMSec();
	    var deltaTimeWeight = (curTimeSec - this.lastTimeSec) * L2DTargetPoint.FRAME_RATE / 1000.0;
	    this.lastTimeSec = curTimeSec;
	    var FRAME_TO_MAX_SPEED = TIME_TO_MAX_SPEED * L2DTargetPoint.FRAME_RATE;
	    var MAX_A = deltaTimeWeight * MAX_V / FRAME_TO_MAX_SPEED;
	    var dx = this.faceTargetX - this.faceX;
	    var dy = this.faceTargetY - this.faceY;
	    // if(dx == 0 && dy == 0) return;
	    if (Math.abs(dx) <= this.EPSILON && Math.abs(dy) <= this.EPSILON) return;
	    var d = Math.sqrt(dx * dx + dy * dy);
	    var vx = MAX_V * dx / d;
	    var vy = MAX_V * dy / d;
	    var ax = vx - this.faceVX;
	    var ay = vy - this.faceVY;
	    var a = Math.sqrt(ax * ax + ay * ay);
	    if (a < -MAX_A || a > MAX_A) {
	        ax *= MAX_A / a;
	        ay *= MAX_A / a;
	        a = MAX_A;
	    }
	    this.faceVX += ax;
	    this.faceVY += ay;
	    {
	        var max_v = 0.5 * (Math.sqrt(MAX_A * MAX_A + 16 * MAX_A * d - 8 * MAX_A * d) - MAX_A);
	        var cur_v = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
	        if (cur_v > max_v) {
	            this.faceVX *= max_v / cur_v;
	            this.faceVY *= max_v / cur_v;
	        }
	    }
	    this.faceX += this.faceVX;
	    this.faceY += this.faceVY;
	};
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	//============================================================
	//============================================================
	//  class L2DViewMatrix        extends     L2DMatrix44
	//============================================================
	//============================================================
	function L2DViewMatrix() {
	    L2DMatrix44.prototype.constructor.call(this);
	    this.screenLeft = null;
	    this.screenRight = null;
	    this.screenTop = null;
	    this.screenBottom = null;
	    this.maxLeft = null;
	    this.maxRight = null;
	    this.maxTop = null;
	    this.maxBottom = null;
	    this.max = Number.MAX_VALUE;
	    this.min = 0;
	}
	
	L2DViewMatrix.prototype = new L2DMatrix44(); //L2DViewMatrix extends L2DMatrix44
	
	//============================================================
	//    L2DViewMatrix # getMaxScale()
	//============================================================
	L2DViewMatrix.prototype.getMaxScale = function () {
	    return this.max;
	};
	
	//============================================================
	//    L2DViewMatrix # getMinScale()
	//============================================================
	L2DViewMatrix.prototype.getMinScale = function () {
	    return this.min;
	};
	
	//============================================================
	//    L2DViewMatrix # setMaxScale()
	//============================================================
	L2DViewMatrix.prototype.setMaxScale = function (v /*float*/) {
	    this.max = v;
	};
	
	//============================================================
	//    L2DViewMatrix # setMinScale()
	//============================================================
	L2DViewMatrix.prototype.setMinScale = function (v /*float*/) {
	    this.min = v;
	};
	
	//============================================================
	//    L2DViewMatrix # isMaxScale()
	//============================================================
	L2DViewMatrix.prototype.isMaxScale = function () {
	    return this.getScaleX() == this.max;
	};
	
	//============================================================
	//    L2DViewMatrix # isMinScale()
	//============================================================
	L2DViewMatrix.prototype.isMinScale = function () {
	    return this.getScaleX() == this.min;
	};
	
	//============================================================
	//    L2DViewMatrix # adjustTranslate()
	//============================================================
	L2DViewMatrix.prototype.adjustTranslate = function (shiftX /*float*/, shiftY /*float*/) {
	    // comment them, for don't know their function
	    //
	    //  if(this.tr[0] * this.maxLeft + (this.tr[12] + shiftX) > this.screenLeft)
	    //      shiftX = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12];
	    //  if(this.tr[0] * this.maxRight + (this.tr[12] + shiftX) < this.screenRight)
	    //      shiftX = this.screenRight - this.tr[0] * this.maxRight - this.tr[12];
	    //  if(this.tr[5] * this.maxTop + (this.tr[13] + shiftY) < this.screenTop)
	    //      shiftY = this.screenTop - this.tr[5] * this.maxTop - this.tr[13];
	    //  if(this.tr[5] * this.maxBottom + (this.tr[13] + shiftY) > this.screenBottom)
	    //      shiftY = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13];
	
	    var tr1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, shiftX, shiftY, 0, 1];
	    L2DMatrix44.mul(tr1, this.tr, this.tr);
	};
	
	//============================================================
	//    L2DViewMatrix # adjustScale()
	//============================================================
	L2DViewMatrix.prototype.adjustScale = function (cx /*float*/, cy /*float*/, scaleX /*float*/, scaleY) {
	    if (!scaleY) {
	        scaleY = scaleX;
	    }
	    //  var targetScaleX = scaleX * this.tr[0];
	    //  if(targetScaleX < this.min) {
	    //      if(this.tr[0] > 0) scaleX = this.min / this.tr[0];
	    //  }
	    //  else if(targetScaleX > this.max) {
	    //      if(this.tr[0] > 0) scaleX = this.max / this.tr[0];
	    //  }
	    //  var targetScaleY = scaleY * this.tr[0];
	    //  if(targetScaleY < this.min) {
	    //      if(this.tr[0] > 0) scaleY = this.min / this.tr[0];
	    //  }
	    //  else if(targetScaleY > this.max) {
	    //      if(this.tr[0] > 0) scaleY = this.max / this.tr[0];
	    //  }
	    var tr1 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, cx, cy, 0, 1];
	    var tr2 = [scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    var tr3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -cx, -cy, 0, 1];
	    L2DMatrix44.mul(tr3, this.tr, this.tr);
	    L2DMatrix44.mul(tr2, this.tr, this.tr);
	    L2DMatrix44.mul(tr1, this.tr, this.tr);
	};
	
	//============================================================
	//    L2DViewMatrix # setScreenRect()
	//============================================================
	L2DViewMatrix.prototype.setScreenRect = function (left /*float*/, right /*float*/, bottom /*float*/, top /*float*/) {
	    this.screenLeft = left;
	    this.screenRight = right;
	    this.screenTop = top;
	    this.screenBottom = bottom;
	};
	
	//============================================================
	//    L2DViewMatrix # setMaxScreenRect()
	//============================================================
	L2DViewMatrix.prototype.setMaxScreenRect = function (left /*float*/, right /*float*/, bottom /*float*/, top /*float*/) {
	    this.maxLeft = left;
	    this.maxRight = right;
	    this.maxTop = top;
	    this.maxBottom = bottom;
	};
	
	//============================================================
	//    L2DViewMatrix # getScreenLeft()
	//============================================================
	L2DViewMatrix.prototype.getScreenLeft = function () {
	    return this.screenLeft;
	};
	
	//============================================================
	//    L2DViewMatrix # getScreenRight()
	//============================================================
	L2DViewMatrix.prototype.getScreenRight = function () {
	    return this.screenRight;
	};
	
	//============================================================
	//    L2DViewMatrix # getScreenBottom()
	//============================================================
	L2DViewMatrix.prototype.getScreenBottom = function () {
	    return this.screenBottom;
	};
	
	//============================================================
	//    L2DViewMatrix # getScreenTop()
	//============================================================
	L2DViewMatrix.prototype.getScreenTop = function () {
	    return this.screenTop;
	};
	
	//============================================================
	//    L2DViewMatrix # getMaxLeft()
	//============================================================
	L2DViewMatrix.prototype.getMaxLeft = function () {
	    return this.maxLeft;
	};
	
	//============================================================
	//    L2DViewMatrix # getMaxRight()
	//============================================================
	L2DViewMatrix.prototype.getMaxRight = function () {
	    return this.maxRight;
	};
	
	//============================================================
	//    L2DViewMatrix # getMaxBottom()
	//============================================================
	L2DViewMatrix.prototype.getMaxBottom = function () {
	    return this.maxBottom;
	};
	
	//============================================================
	//    L2DViewMatrix # getMaxTop()
	//============================================================
	L2DViewMatrix.prototype.getMaxTop = function () {
	    return this.maxTop;
	};
	
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 */
	
	//============================================================
	//============================================================
	//  class Live2DFramework
	//============================================================
	//============================================================
	// export function Live2DFramework()
	// {
	// }
	//
	// //============================================================
	// Live2DFramework.platformManager  = null;
	//
	// //============================================================
	// //    static Live2DFramework.getPlatformManager()
	// //============================================================
	// Live2DFramework.getPlatformManager = function()
	// {
	//     return Live2DFramework.platformManager;
	// }
	//
	// //============================================================
	// //    static Live2DFramework.setPlatformManager()
	// //============================================================
	// Live2DFramework.setPlatformManager = function( platformManager /*IPlatformManager*/ )
	// {
	//     Live2DFramework.platformManager = platformManager;
	// }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loadBytes = loadBytes;
	
	var _live2d = __webpack_require__(1);
	
	function loadBytes(path, type, callback) {
	  var request = new XMLHttpRequest();
	  request.open('GET', path, true);
	  request.responseType = type;
	  request.onload = function () {
	    switch (request.status) {
	      case 200:
	        callback(request.response);
	        break;
	      default:
	        console.error('Failed to load (' + request.status + ') : ' + path);
	        break;
	    }
	  };
	  request.send(null);
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 *
	 *  You can modify and use this source freely
	 *  only for the development of application related Live2D.
	 *
	 *  (c) Live2D Inc. All rights reserved.
	 *  (c) Modified by Icemic <bingfeng.web@gmail.com>
	 */
	
	var mat4 = __webpack_require__(6);
	
	var MatrixStack = {};
	
	exports.default = MatrixStack;
	
	
	MatrixStack.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	
	MatrixStack.depth = 0;
	
	MatrixStack.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	
	MatrixStack.tmp = new Array(16);
	
	MatrixStack.reset = function () {
	    this.depth = 0;
	};
	
	MatrixStack.loadIdentity = function () {
	    // for (var i = 0; i < 16; i++)
	    // {
	    //     this.currentMatrix[i] = (i % 5 == 0) ? 1 : 0;
	    // }
	    this.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	};
	
	MatrixStack.push = function () {
	    // var offset = this.depth * 16;
	    // var nextOffset = (this.depth + 1) * 16;
	
	    // if (this.matrixStack.length < nextOffset + 16)
	    // {
	    //     this.matrixStack.length = nextOffset + 16;
	    // }
	
	    // for (var i = 0; i < 16; i++)
	    // {
	    //     this.matrixStack[nextOffset + i] = this.currentMatrix[i];
	    // }
	    this.matrixStack.push(this.currentMatrix);
	
	    this.depth++;
	};
	
	MatrixStack.pop = function () {
	    this.depth--;
	    if (this.depth < 0) {
	        myError("Invalid matrix stack.");
	        this.depth = 0;
	    }
	
	    // var offset = this.depth * 16;
	    // for (var i = 0; i < 16; i++)
	    // {
	    //     this.currentMatrix[i] = this.matrixStack[offset + i];
	    // }
	    this.currentMatrix = this.matrixStack.pop();
	};
	
	MatrixStack.getMatrix = function () {
	    return this.currentMatrix;
	};
	
	MatrixStack.multMatrix = function (matNew) {
	    // var i, j, k;
	
	    // for (i = 0; i < 16; i++)
	    // {
	    //     this.tmp[i] = 0;
	    // }
	
	    // for (i = 0; i < 4; i++)
	    // {
	    //     for (j = 0; j < 4; j++)
	    //     {
	    //         for (k = 0; k < 4; k++)
	    //         {
	    //             this.tmp[i + j * 4] += this.currentMatrix[i + k * 4] * matNew[k + j * 4];
	    //         }
	    //     }
	    // }
	    // for (i = 0; i < 16; i++)
	    // {
	    //     this.currentMatrix[i] = this.tmp[i];
	    // }
	    mat4.multiply(this.currentMatrix, this.currentMatrix, matNew);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(7);
	
	/**
	 * @class 4x4 Matrix
	 * @name mat4
	 */
	var mat4 = {
	    scalar: {},
	    SIMD: {}
	};
	
	/**
	 * Creates a new identity mat4
	 *
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.create = function () {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a new mat4 initialized with values from an existing matrix
	 *
	 * @param {mat4} a matrix to clone
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.clone = function (a) {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Copy the values from one mat4 to another
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.copy = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Create a new mat4 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} A new mat4
	 */
	mat4.fromValues = function (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m03;
	    out[4] = m10;
	    out[5] = m11;
	    out[6] = m12;
	    out[7] = m13;
	    out[8] = m20;
	    out[9] = m21;
	    out[10] = m22;
	    out[11] = m23;
	    out[12] = m30;
	    out[13] = m31;
	    out[14] = m32;
	    out[15] = m33;
	    return out;
	};
	
	/**
	 * Set the components of a mat4 to the given values
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} out
	 */
	mat4.set = function (out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m03;
	    out[4] = m10;
	    out[5] = m11;
	    out[6] = m12;
	    out[7] = m13;
	    out[8] = m20;
	    out[9] = m21;
	    out[10] = m22;
	    out[11] = m23;
	    out[12] = m30;
	    out[13] = m31;
	    out[14] = m32;
	    out[15] = m33;
	    return out;
	};
	
	/**
	 * Set a mat4 to the identity matrix
	 *
	 * @param {mat4} out the receiving matrix
	 * @returns {mat4} out
	 */
	mat4.identity = function (out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.transpose = function (out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1],
	            a02 = a[2],
	            a03 = a[3],
	            a12 = a[6],
	            a13 = a[7],
	            a23 = a[11];
	
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a01;
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a02;
	        out[9] = a12;
	        out[11] = a[14];
	        out[12] = a03;
	        out[13] = a13;
	        out[14] = a23;
	    } else {
	        out[0] = a[0];
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a[1];
	        out[5] = a[5];
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a[2];
	        out[9] = a[6];
	        out[10] = a[10];
	        out[11] = a[14];
	        out[12] = a[3];
	        out[13] = a[7];
	        out[14] = a[11];
	        out[15] = a[15];
	    }
	
	    return out;
	};
	
	/**
	 * Transpose the values of a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.transpose = function (out, a) {
	    var a0, a1, a2, a3, tmp01, tmp23, out0, out1, out2, out3;
	
	    a0 = SIMD.Float32x4.load(a, 0);
	    a1 = SIMD.Float32x4.load(a, 4);
	    a2 = SIMD.Float32x4.load(a, 8);
	    a3 = SIMD.Float32x4.load(a, 12);
	
	    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	    out0 = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
	    out1 = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
	    SIMD.Float32x4.store(out, 0, out0);
	    SIMD.Float32x4.store(out, 4, out1);
	
	    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	    out2 = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
	    out3 = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
	    SIMD.Float32x4.store(out, 8, out2);
	    SIMD.Float32x4.store(out, 12, out3);
	
	    return out;
	};
	
	/**
	 * Transpse a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.transpose = glMatrix.USE_SIMD ? mat4.SIMD.transpose : mat4.scalar.transpose;
	
	/**
	 * Inverts a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.invert = function (out, a) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11],
	        a30 = a[12],
	        a31 = a[13],
	        a32 = a[14],
	        a33 = a[15],
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,
	
	
	    // Calculate the determinant
	    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	
	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;
	
	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	
	    return out;
	};
	
	/**
	 * Inverts a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.invert = function (out, a) {
	    var row0,
	        row1,
	        row2,
	        row3,
	        tmp1,
	        minor0,
	        minor1,
	        minor2,
	        minor3,
	        det,
	        a0 = SIMD.Float32x4.load(a, 0),
	        a1 = SIMD.Float32x4.load(a, 4),
	        a2 = SIMD.Float32x4.load(a, 8),
	        a3 = SIMD.Float32x4.load(a, 12);
	
	    // Compute matrix adjugate
	    tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	    row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	    row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
	    row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
	    tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	    row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	    row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
	    row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);
	
	    tmp1 = SIMD.Float32x4.mul(row2, row3);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    minor0 = SIMD.Float32x4.mul(row1, tmp1);
	    minor1 = SIMD.Float32x4.mul(row0, tmp1);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
	    minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
	    minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);
	
	    tmp1 = SIMD.Float32x4.mul(row1, row2);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
	    minor3 = SIMD.Float32x4.mul(row0, tmp1);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
	    minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
	    minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);
	
	    tmp1 = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    row2 = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
	    minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
	    minor2 = SIMD.Float32x4.mul(row0, tmp1);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
	    minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
	    minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);
	
	    tmp1 = SIMD.Float32x4.mul(row0, row1);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
	    minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
	    minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));
	
	    tmp1 = SIMD.Float32x4.mul(row0, row3);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
	    minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
	    minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));
	
	    tmp1 = SIMD.Float32x4.mul(row0, row2);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
	    minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
	    minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);
	
	    // Compute matrix determinant
	    det = SIMD.Float32x4.mul(row0, minor0);
	    det = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 2, 3, 0, 1), det);
	    det = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 1, 0, 3, 2), det);
	    tmp1 = SIMD.Float32x4.reciprocalApproximation(det);
	    det = SIMD.Float32x4.sub(SIMD.Float32x4.add(tmp1, tmp1), SIMD.Float32x4.mul(det, SIMD.Float32x4.mul(tmp1, tmp1)));
	    det = SIMD.Float32x4.swizzle(det, 0, 0, 0, 0);
	    if (!det) {
	        return null;
	    }
	
	    // Compute matrix inverse
	    SIMD.Float32x4.store(out, 0, SIMD.Float32x4.mul(det, minor0));
	    SIMD.Float32x4.store(out, 4, SIMD.Float32x4.mul(det, minor1));
	    SIMD.Float32x4.store(out, 8, SIMD.Float32x4.mul(det, minor2));
	    SIMD.Float32x4.store(out, 12, SIMD.Float32x4.mul(det, minor3));
	    return out;
	};
	
	/**
	 * Inverts a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.invert = glMatrix.USE_SIMD ? mat4.SIMD.invert : mat4.scalar.invert;
	
	/**
	 * Calculates the adjugate of a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.adjoint = function (out, a) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11],
	        a30 = a[12],
	        a31 = a[13],
	        a32 = a[14],
	        a33 = a[15];
	
	    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
	    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
	    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
	    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
	    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
	    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
	    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
	    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
	    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
	    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
	    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
	    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
	    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
	    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
	    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
	    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.adjoint = function (out, a) {
	    var a0, a1, a2, a3;
	    var row0, row1, row2, row3;
	    var tmp1;
	    var minor0, minor1, minor2, minor3;
	
	    a0 = SIMD.Float32x4.load(a, 0);
	    a1 = SIMD.Float32x4.load(a, 4);
	    a2 = SIMD.Float32x4.load(a, 8);
	    a3 = SIMD.Float32x4.load(a, 12);
	
	    // Transpose the source matrix.  Sort of.  Not a true transpose operation
	    tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	    row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	    row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
	    row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
	
	    tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	    row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	    row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
	    row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);
	
	    tmp1 = SIMD.Float32x4.mul(row2, row3);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    minor0 = SIMD.Float32x4.mul(row1, tmp1);
	    minor1 = SIMD.Float32x4.mul(row0, tmp1);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
	    minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
	    minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);
	
	    tmp1 = SIMD.Float32x4.mul(row1, row2);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
	    minor3 = SIMD.Float32x4.mul(row0, tmp1);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
	    minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
	    minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);
	
	    tmp1 = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    row2 = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
	    minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
	    minor2 = SIMD.Float32x4.mul(row0, tmp1);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
	    minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
	    minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);
	
	    tmp1 = SIMD.Float32x4.mul(row0, row1);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
	    minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
	    minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));
	
	    tmp1 = SIMD.Float32x4.mul(row0, row3);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
	    minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
	    minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));
	
	    tmp1 = SIMD.Float32x4.mul(row0, row2);
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	    minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
	    minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
	    tmp1 = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	    minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
	    minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);
	
	    SIMD.Float32x4.store(out, 0, minor0);
	    SIMD.Float32x4.store(out, 4, minor1);
	    SIMD.Float32x4.store(out, 8, minor2);
	    SIMD.Float32x4.store(out, 12, minor3);
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.adjoint = glMatrix.USE_SIMD ? mat4.SIMD.adjoint : mat4.scalar.adjoint;
	
	/**
	 * Calculates the determinant of a mat4
	 *
	 * @param {mat4} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat4.determinant = function (a) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11],
	        a30 = a[12],
	        a31 = a[13],
	        a32 = a[14],
	        a33 = a[15],
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32;
	
	    // Calculate the determinant
	    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	};
	
	/**
	 * Multiplies two mat4's explicitly using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand, must be a Float32Array
	 * @param {mat4} b the second operand, must be a Float32Array
	 * @returns {mat4} out
	 */
	mat4.SIMD.multiply = function (out, a, b) {
	    var a0 = SIMD.Float32x4.load(a, 0);
	    var a1 = SIMD.Float32x4.load(a, 4);
	    var a2 = SIMD.Float32x4.load(a, 8);
	    var a3 = SIMD.Float32x4.load(a, 12);
	
	    var b0 = SIMD.Float32x4.load(b, 0);
	    var out0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 0, 0, 0, 0), a0), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 1, 1, 1, 1), a1), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 2, 2, 2, 2), a2), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 0, out0);
	
	    var b1 = SIMD.Float32x4.load(b, 4);
	    var out1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 0, 0, 0, 0), a0), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 1, 1, 1, 1), a1), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 2, 2, 2, 2), a2), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 4, out1);
	
	    var b2 = SIMD.Float32x4.load(b, 8);
	    var out2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 0, 0, 0, 0), a0), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 1, 1, 1, 1), a1), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 2, 2, 2, 2), a2), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 8, out2);
	
	    var b3 = SIMD.Float32x4.load(b, 12);
	    var out3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 0, 0, 0, 0), a0), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 1, 1, 1, 1), a1), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 2, 2, 2, 2), a2), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 12, out3);
	
	    return out;
	};
	
	/**
	 * Multiplies two mat4's explicitly not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.scalar.multiply = function (out, a, b) {
	    var a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11],
	        a30 = a[12],
	        a31 = a[13],
	        a32 = a[14],
	        a33 = a[15];
	
	    // Cache only the current line of the second matrix
	    var b0 = b[0],
	        b1 = b[1],
	        b2 = b[2],
	        b3 = b[3];
	    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	
	    b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
	    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	
	    b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
	    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	
	    b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
	    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	    return out;
	};
	
	/**
	 * Multiplies two mat4's using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.multiply = glMatrix.USE_SIMD ? mat4.SIMD.multiply : mat4.scalar.multiply;
	
	/**
	 * Alias for {@link mat4.multiply}
	 * @function
	 */
	mat4.mul = mat4.multiply;
	
	/**
	 * Translate a mat4 by the given vector not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.scalar.translate = function (out, a, v) {
	    var x = v[0],
	        y = v[1],
	        z = v[2],
	        a00,
	        a01,
	        a02,
	        a03,
	        a10,
	        a11,
	        a12,
	        a13,
	        a20,
	        a21,
	        a22,
	        a23;
	
	    if (a === out) {
	        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
	        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
	        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
	        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	    } else {
	        a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
	        a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
	        a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];
	
	        out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
	        out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
	        out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;
	
	        out[12] = a00 * x + a10 * y + a20 * z + a[12];
	        out[13] = a01 * x + a11 * y + a21 * z + a[13];
	        out[14] = a02 * x + a12 * y + a22 * z + a[14];
	        out[15] = a03 * x + a13 * y + a23 * z + a[15];
	    }
	
	    return out;
	};
	
	/**
	 * Translates a mat4 by the given vector using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.SIMD.translate = function (out, a, v) {
	    var a0 = SIMD.Float32x4.load(a, 0),
	        a1 = SIMD.Float32x4.load(a, 4),
	        a2 = SIMD.Float32x4.load(a, 8),
	        a3 = SIMD.Float32x4.load(a, 12),
	        vec = SIMD.Float32x4(v[0], v[1], v[2], 0);
	
	    if (a !== out) {
	        out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];
	        out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];
	        out[8] = a[8];out[9] = a[9];out[10] = a[10];out[11] = a[11];
	    }
	
	    a0 = SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0));
	    a1 = SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1));
	    a2 = SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2));
	
	    var t0 = SIMD.Float32x4.add(a0, SIMD.Float32x4.add(a1, SIMD.Float32x4.add(a2, a3)));
	    SIMD.Float32x4.store(out, 12, t0);
	
	    return out;
	};
	
	/**
	 * Translates a mat4 by the given vector using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.translate = glMatrix.USE_SIMD ? mat4.SIMD.translate : mat4.scalar.translate;
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	mat4.scalar.scale = function (out, a, v) {
	    var x = v[0],
	        y = v[1],
	        z = v[2];
	
	    out[0] = a[0] * x;
	    out[1] = a[1] * x;
	    out[2] = a[2] * x;
	    out[3] = a[3] * x;
	    out[4] = a[4] * y;
	    out[5] = a[5] * y;
	    out[6] = a[6] * y;
	    out[7] = a[7] * y;
	    out[8] = a[8] * z;
	    out[9] = a[9] * z;
	    out[10] = a[10] * z;
	    out[11] = a[11] * z;
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 using vectorization
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	mat4.SIMD.scale = function (out, a, v) {
	    var a0, a1, a2;
	    var vec = SIMD.Float32x4(v[0], v[1], v[2], 0);
	
	    a0 = SIMD.Float32x4.load(a, 0);
	    SIMD.Float32x4.store(out, 0, SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0)));
	
	    a1 = SIMD.Float32x4.load(a, 4);
	    SIMD.Float32x4.store(out, 4, SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1)));
	
	    a2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(out, 8, SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2)));
	
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 */
	mat4.scale = glMatrix.USE_SIMD ? mat4.SIMD.scale : mat4.scalar.scale;
	
	/**
	 * Rotates a mat4 by the given angle around the given axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.rotate = function (out, a, rad, axis) {
	    var x = axis[0],
	        y = axis[1],
	        z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s,
	        c,
	        t,
	        a00,
	        a01,
	        a02,
	        a03,
	        a10,
	        a11,
	        a12,
	        a13,
	        a20,
	        a21,
	        a22,
	        a23,
	        b00,
	        b01,
	        b02,
	        b10,
	        b11,
	        b12,
	        b20,
	        b21,
	        b22;
	
	    if (Math.abs(len) < glMatrix.EPSILON) {
	        return null;
	    }
	
	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;
	
	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;
	
	    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
	    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
	    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];
	
	    // Construct the elements of the rotation matrix
	    b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
	    b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
	    b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;
	
	    // Perform rotation-specific matrix multiplication
	    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
	
	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged last row
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateX = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];
	
	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged rows
	        out[0] = a[0];
	        out[1] = a[1];
	        out[2] = a[2];
	        out[3] = a[3];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[4] = a10 * c + a20 * s;
	    out[5] = a11 * c + a21 * s;
	    out[6] = a12 * c + a22 * s;
	    out[7] = a13 * c + a23 * s;
	    out[8] = a20 * c - a10 * s;
	    out[9] = a21 * c - a11 * s;
	    out[10] = a22 * c - a12 * s;
	    out[11] = a23 * c - a13 * s;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateX = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged rows
	        out[0] = a[0];
	        out[1] = a[1];
	        out[2] = a[2];
	        out[3] = a[3];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_1 = SIMD.Float32x4.load(a, 4);
	    var a_2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(out, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_2, s)));
	    SIMD.Float32x4.store(out, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_2, c), SIMD.Float32x4.mul(a_1, s)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis using SIMD if availabe and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateX = glMatrix.USE_SIMD ? mat4.SIMD.rotateX : mat4.scalar.rotateX;
	
	/**
	 * Rotates a matrix by the given angle around the Y axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateY = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];
	
	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged rows
	        out[4] = a[4];
	        out[5] = a[5];
	        out[6] = a[6];
	        out[7] = a[7];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c - a20 * s;
	    out[1] = a01 * c - a21 * s;
	    out[2] = a02 * c - a22 * s;
	    out[3] = a03 * c - a23 * s;
	    out[8] = a00 * s + a20 * c;
	    out[9] = a01 * s + a21 * c;
	    out[10] = a02 * s + a22 * c;
	    out[11] = a03 * s + a23 * c;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Y axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateY = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged rows
	        out[4] = a[4];
	        out[5] = a[5];
	        out[6] = a[6];
	        out[7] = a[7];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_0 = SIMD.Float32x4.load(a, 0);
	    var a_2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(out, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_2, s)));
	    SIMD.Float32x4.store(out, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, s), SIMD.Float32x4.mul(a_2, c)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Y axis if SIMD available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateY = glMatrix.USE_SIMD ? mat4.SIMD.rotateY : mat4.scalar.rotateY;
	
	/**
	 * Rotates a matrix by the given angle around the Z axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateZ = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7];
	
	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged last row
	        out[8] = a[8];
	        out[9] = a[9];
	        out[10] = a[10];
	        out[11] = a[11];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c + a10 * s;
	    out[1] = a01 * c + a11 * s;
	    out[2] = a02 * c + a12 * s;
	    out[3] = a03 * c + a13 * s;
	    out[4] = a10 * c - a00 * s;
	    out[5] = a11 * c - a01 * s;
	    out[6] = a12 * c - a02 * s;
	    out[7] = a13 * c - a03 * s;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Z axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateZ = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) {
	        // If the source and destination differ, copy the unchanged last row
	        out[8] = a[8];
	        out[9] = a[9];
	        out[10] = a[10];
	        out[11] = a[11];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_0 = SIMD.Float32x4.load(a, 0);
	    var a_1 = SIMD.Float32x4.load(a, 4);
	    SIMD.Float32x4.store(out, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_1, s)));
	    SIMD.Float32x4.store(out, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_0, s)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Z axis if SIMD available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateZ = glMatrix.USE_SIMD ? mat4.SIMD.rotateZ : mat4.scalar.rotateZ;
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromTranslation = function (out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.scale(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromScaling = function (out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = v[1];
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = v[2];
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a matrix from a given angle around a given axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotate(dest, dest, rad, axis);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.fromRotation = function (out, rad, axis) {
	    var x = axis[0],
	        y = axis[1],
	        z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s,
	        c,
	        t;
	
	    if (Math.abs(len) < glMatrix.EPSILON) {
	        return null;
	    }
	
	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;
	
	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;
	
	    // Perform rotation-specific matrix multiplication
	    out[0] = x * x * t + c;
	    out[1] = y * x * t + z * s;
	    out[2] = z * x * t - y * s;
	    out[3] = 0;
	    out[4] = x * y * t - z * s;
	    out[5] = y * y * t + c;
	    out[6] = z * y * t + x * s;
	    out[7] = 0;
	    out[8] = x * z * t + y * s;
	    out[9] = y * z * t - x * s;
	    out[10] = z * z * t + c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a matrix from the given angle around the X axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateX(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromXRotation = function (out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = c;
	    out[6] = s;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = -s;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a matrix from the given angle around the Y axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateY(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromYRotation = function (out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0] = c;
	    out[1] = 0;
	    out[2] = -s;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = s;
	    out[9] = 0;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a matrix from the given angle around the Z axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateZ(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromZRotation = function (out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0] = c;
	    out[1] = s;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = -s;
	    out[5] = c;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation and vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslation = function (out, q, v) {
	    // Quaternion math
	    var x = q[0],
	        y = q[1],
	        z = q[2],
	        w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - (yy + zz);
	    out[1] = xy + wz;
	    out[2] = xz - wy;
	    out[3] = 0;
	    out[4] = xy - wz;
	    out[5] = 1 - (xx + zz);
	    out[6] = yz + wx;
	    out[7] = 0;
	    out[8] = xz + wy;
	    out[9] = yz - wx;
	    out[10] = 1 - (xx + yy);
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Returns the translation vector component of a transformation
	 *  matrix. If a matrix is built with fromRotationTranslation,
	 *  the returned vector will be the same as the translation vector
	 *  originally supplied.
	 * @param  {vec3} out Vector to receive translation component
	 * @param  {mat4} mat Matrix to be decomposed (input)
	 * @return {vec3} out
	 */
	mat4.getTranslation = function (out, mat) {
	    out[0] = mat[12];
	    out[1] = mat[13];
	    out[2] = mat[14];
	
	    return out;
	};
	
	/**
	 * Returns the scaling factor component of a transformation
	 *  matrix. If a matrix is built with fromRotationTranslationScale
	 *  with a normalized Quaternion paramter, the returned vector will be 
	 *  the same as the scaling vector
	 *  originally supplied.
	 * @param  {vec3} out Vector to receive scaling factor component
	 * @param  {mat4} mat Matrix to be decomposed (input)
	 * @return {vec3} out
	 */
	mat4.getScaling = function (out, mat) {
	    var m11 = mat[0],
	        m12 = mat[1],
	        m13 = mat[2],
	        m21 = mat[4],
	        m22 = mat[5],
	        m23 = mat[6],
	        m31 = mat[8],
	        m32 = mat[9],
	        m33 = mat[10];
	
	    out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
	    out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
	    out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
	
	    return out;
	};
	
	/**
	 * Returns a quaternion representing the rotational component
	 *  of a transformation matrix. If a matrix is built with
	 *  fromRotationTranslation, the returned quaternion will be the
	 *  same as the quaternion originally supplied.
	 * @param {quat} out Quaternion to receive the rotation component
	 * @param {mat4} mat Matrix to be decomposed (input)
	 * @return {quat} out
	 */
	mat4.getRotation = function (out, mat) {
	    // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
	    var trace = mat[0] + mat[5] + mat[10];
	    var S = 0;
	
	    if (trace > 0) {
	        S = Math.sqrt(trace + 1.0) * 2;
	        out[3] = 0.25 * S;
	        out[0] = (mat[6] - mat[9]) / S;
	        out[1] = (mat[8] - mat[2]) / S;
	        out[2] = (mat[1] - mat[4]) / S;
	    } else if (mat[0] > mat[5] & mat[0] > mat[10]) {
	        S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
	        out[3] = (mat[6] - mat[9]) / S;
	        out[0] = 0.25 * S;
	        out[1] = (mat[1] + mat[4]) / S;
	        out[2] = (mat[8] + mat[2]) / S;
	    } else if (mat[5] > mat[10]) {
	        S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
	        out[3] = (mat[8] - mat[2]) / S;
	        out[0] = (mat[1] + mat[4]) / S;
	        out[1] = 0.25 * S;
	        out[2] = (mat[6] + mat[9]) / S;
	    } else {
	        S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
	        out[3] = (mat[1] - mat[4]) / S;
	        out[0] = (mat[8] + mat[2]) / S;
	        out[1] = (mat[6] + mat[9]) / S;
	        out[2] = 0.25 * S;
	    }
	
	    return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScale = function (out, q, v, s) {
	    // Quaternion math
	    var x = q[0],
	        y = q[1],
	        z = q[2],
	        w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2,
	        sx = s[0],
	        sy = s[1],
	        sz = s[2];
	
	    out[0] = (1 - (yy + zz)) * sx;
	    out[1] = (xy + wz) * sx;
	    out[2] = (xz - wy) * sx;
	    out[3] = 0;
	    out[4] = (xy - wz) * sy;
	    out[5] = (1 - (xx + zz)) * sy;
	    out[6] = (yz + wx) * sy;
	    out[7] = 0;
	    out[8] = (xz + wy) * sz;
	    out[9] = (yz - wx) * sz;
	    out[10] = (1 - (xx + yy)) * sz;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     mat4.translate(dest, origin);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *     mat4.translate(dest, negativeOrigin);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @param {vec3} o The origin vector around which to scale and rotate
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScaleOrigin = function (out, q, v, s, o) {
	    // Quaternion math
	    var x = q[0],
	        y = q[1],
	        z = q[2],
	        w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2,
	        sx = s[0],
	        sy = s[1],
	        sz = s[2],
	        ox = o[0],
	        oy = o[1],
	        oz = o[2];
	
	    out[0] = (1 - (yy + zz)) * sx;
	    out[1] = (xy + wz) * sx;
	    out[2] = (xz - wy) * sx;
	    out[3] = 0;
	    out[4] = (xy - wz) * sy;
	    out[5] = (1 - (xx + zz)) * sy;
	    out[6] = (yz + wx) * sy;
	    out[7] = 0;
	    out[8] = (xz + wy) * sz;
	    out[9] = (yz - wx) * sz;
	    out[10] = (1 - (xx + yy)) * sz;
	    out[11] = 0;
	    out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
	    out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
	    out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Calculates a 4x4 matrix from the given quaternion
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat} q Quaternion to create matrix from
	 *
	 * @returns {mat4} out
	 */
	mat4.fromQuat = function (out, q) {
	    var x = q[0],
	        y = q[1],
	        z = q[2],
	        w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - yy - zz;
	    out[1] = yx + wz;
	    out[2] = zx - wy;
	    out[3] = 0;
	
	    out[4] = yx - wz;
	    out[5] = 1 - xx - zz;
	    out[6] = zy + wx;
	    out[7] = 0;
	
	    out[8] = zx + wy;
	    out[9] = zy - wx;
	    out[10] = 1 - xx - yy;
	    out[11] = 0;
	
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Generates a frustum matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Number} left Left bound of the frustum
	 * @param {Number} right Right bound of the frustum
	 * @param {Number} bottom Bottom bound of the frustum
	 * @param {Number} top Top bound of the frustum
	 * @param {Number} near Near bound of the frustum
	 * @param {Number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.frustum = function (out, left, right, bottom, top, near, far) {
	    var rl = 1 / (right - left),
	        tb = 1 / (top - bottom),
	        nf = 1 / (near - far);
	    out[0] = near * 2 * rl;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = near * 2 * tb;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = (right + left) * rl;
	    out[9] = (top + bottom) * tb;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = far * near * 2 * nf;
	    out[15] = 0;
	    return out;
	};
	
	/**
	 * Generates a perspective projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} fovy Vertical field of view in radians
	 * @param {number} aspect Aspect ratio. typically viewport width/height
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspective = function (out, fovy, aspect, near, far) {
	    var f = 1.0 / Math.tan(fovy / 2),
	        nf = 1 / (near - far);
	    out[0] = f / aspect;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = f;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 2 * far * near * nf;
	    out[15] = 0;
	    return out;
	};
	
	/**
	 * Generates a perspective projection matrix with the given field of view.
	 * This is primarily useful for generating projection matrices to be used
	 * with the still experiemental WebVR API.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspectiveFromFieldOfView = function (out, fov, near, far) {
	    var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0),
	        downTan = Math.tan(fov.downDegrees * Math.PI / 180.0),
	        leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0),
	        rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0),
	        xScale = 2.0 / (leftTan + rightTan),
	        yScale = 2.0 / (upTan + downTan);
	
	    out[0] = xScale;
	    out[1] = 0.0;
	    out[2] = 0.0;
	    out[3] = 0.0;
	    out[4] = 0.0;
	    out[5] = yScale;
	    out[6] = 0.0;
	    out[7] = 0.0;
	    out[8] = -((leftTan - rightTan) * xScale * 0.5);
	    out[9] = (upTan - downTan) * yScale * 0.5;
	    out[10] = far / (near - far);
	    out[11] = -1.0;
	    out[12] = 0.0;
	    out[13] = 0.0;
	    out[14] = far * near / (near - far);
	    out[15] = 0.0;
	    return out;
	};
	
	/**
	 * Generates a orthogonal projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} left Left bound of the frustum
	 * @param {number} right Right bound of the frustum
	 * @param {number} bottom Bottom bound of the frustum
	 * @param {number} top Top bound of the frustum
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.ortho = function (out, left, right, bottom, top, near, far) {
	    var lr = 1 / (left - right),
	        bt = 1 / (bottom - top),
	        nf = 1 / (near - far);
	    out[0] = -2 * lr;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = -2 * bt;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 2 * nf;
	    out[11] = 0;
	    out[12] = (left + right) * lr;
	    out[13] = (top + bottom) * bt;
	    out[14] = (far + near) * nf;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Generates a look-at matrix with the given eye position, focal point, and up axis
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	mat4.lookAt = function (out, eye, center, up) {
	    var x0,
	        x1,
	        x2,
	        y0,
	        y1,
	        y2,
	        z0,
	        z1,
	        z2,
	        len,
	        eyex = eye[0],
	        eyey = eye[1],
	        eyez = eye[2],
	        upx = up[0],
	        upy = up[1],
	        upz = up[2],
	        centerx = center[0],
	        centery = center[1],
	        centerz = center[2];
	
	    if (Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON) {
	        return mat4.identity(out);
	    }
	
	    z0 = eyex - centerx;
	    z1 = eyey - centery;
	    z2 = eyez - centerz;
	
	    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	    z0 *= len;
	    z1 *= len;
	    z2 *= len;
	
	    x0 = upy * z2 - upz * z1;
	    x1 = upz * z0 - upx * z2;
	    x2 = upx * z1 - upy * z0;
	    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	    if (!len) {
	        x0 = 0;
	        x1 = 0;
	        x2 = 0;
	    } else {
	        len = 1 / len;
	        x0 *= len;
	        x1 *= len;
	        x2 *= len;
	    }
	
	    y0 = z1 * x2 - z2 * x1;
	    y1 = z2 * x0 - z0 * x2;
	    y2 = z0 * x1 - z1 * x0;
	
	    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	    if (!len) {
	        y0 = 0;
	        y1 = 0;
	        y2 = 0;
	    } else {
	        len = 1 / len;
	        y0 *= len;
	        y1 *= len;
	        y2 *= len;
	    }
	
	    out[0] = x0;
	    out[1] = y0;
	    out[2] = z0;
	    out[3] = 0;
	    out[4] = x1;
	    out[5] = y1;
	    out[6] = z1;
	    out[7] = 0;
	    out[8] = x2;
	    out[9] = y2;
	    out[10] = z2;
	    out[11] = 0;
	    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Returns a string representation of a mat4
	 *
	 * @param {mat4} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat4.str = function (a) {
	    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat4
	 *
	 * @param {mat4} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat4.frob = function (a) {
	    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
	};
	
	/**
	 * Adds two mat4's
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.add = function (out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    out[6] = a[6] + b[6];
	    out[7] = a[7] + b[7];
	    out[8] = a[8] + b[8];
	    out[9] = a[9] + b[9];
	    out[10] = a[10] + b[10];
	    out[11] = a[11] + b[11];
	    out[12] = a[12] + b[12];
	    out[13] = a[13] + b[13];
	    out[14] = a[14] + b[14];
	    out[15] = a[15] + b[15];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.subtract = function (out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    out[6] = a[6] - b[6];
	    out[7] = a[7] - b[7];
	    out[8] = a[8] - b[8];
	    out[9] = a[9] - b[9];
	    out[10] = a[10] - b[10];
	    out[11] = a[11] - b[11];
	    out[12] = a[12] - b[12];
	    out[13] = a[13] - b[13];
	    out[14] = a[14] - b[14];
	    out[15] = a[15] - b[15];
	    return out;
	};
	
	/**
	 * Alias for {@link mat4.subtract}
	 * @function
	 */
	mat4.sub = mat4.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat4} out
	 */
	mat4.multiplyScalar = function (out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    out[6] = a[6] * b;
	    out[7] = a[7] * b;
	    out[8] = a[8] * b;
	    out[9] = a[9] * b;
	    out[10] = a[10] * b;
	    out[11] = a[11] * b;
	    out[12] = a[12] * b;
	    out[13] = a[13] * b;
	    out[14] = a[14] * b;
	    out[15] = a[15] * b;
	    return out;
	};
	
	/**
	 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat4} out the receiving vector
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat4} out
	 */
	mat4.multiplyScalarAndAdd = function (out, a, b, scale) {
	    out[0] = a[0] + b[0] * scale;
	    out[1] = a[1] + b[1] * scale;
	    out[2] = a[2] + b[2] * scale;
	    out[3] = a[3] + b[3] * scale;
	    out[4] = a[4] + b[4] * scale;
	    out[5] = a[5] + b[5] * scale;
	    out[6] = a[6] + b[6] * scale;
	    out[7] = a[7] + b[7] * scale;
	    out[8] = a[8] + b[8] * scale;
	    out[9] = a[9] + b[9] * scale;
	    out[10] = a[10] + b[10] * scale;
	    out[11] = a[11] + b[11] * scale;
	    out[12] = a[12] + b[12] * scale;
	    out[13] = a[13] + b[13] * scale;
	    out[14] = a[14] + b[14] * scale;
	    out[15] = a[15] + b[15] * scale;
	    return out;
	};
	
	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat4.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat4.equals = function (a, b) {
	    var a0 = a[0],
	        a1 = a[1],
	        a2 = a[2],
	        a3 = a[3],
	        a4 = a[4],
	        a5 = a[5],
	        a6 = a[6],
	        a7 = a[7],
	        a8 = a[8],
	        a9 = a[9],
	        a10 = a[10],
	        a11 = a[11],
	        a12 = a[12],
	        a13 = a[13],
	        a14 = a[14],
	        a15 = a[15];
	
	    var b0 = b[0],
	        b1 = b[1],
	        b2 = b[2],
	        b3 = b[3],
	        b4 = b[4],
	        b5 = b[5],
	        b6 = b[6],
	        b7 = b[7],
	        b8 = b[8],
	        b9 = b[9],
	        b10 = b[10],
	        b11 = b[11],
	        b12 = b[12],
	        b13 = b[13],
	        b14 = b[14],
	        b15 = b[15];
	
	    return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
	};
	
	module.exports = mat4;

/***/ },
/* 7 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	/**
	 * @class Common utilities
	 * @name glMatrix
	 */
	var glMatrix = {};
	
	// Configuration Constants
	glMatrix.EPSILON = 0.000001;
	glMatrix.ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
	glMatrix.RANDOM = Math.random;
	glMatrix.ENABLE_SIMD = false;
	
	var self = undefined || window || global;
	
	// Capability detection
	glMatrix.SIMD_AVAILABLE = glMatrix.ARRAY_TYPE === self.Float32Array && 'SIMD' in self;
	glMatrix.USE_SIMD = glMatrix.ENABLE_SIMD && glMatrix.SIMD_AVAILABLE;
	
	/**
	 * Sets the type of array used when creating new vectors and matrices
	 *
	 * @param {Type} type Array type, such as Float32Array or Array
	 */
	glMatrix.setMatrixArrayType = function (type) {
	  glMatrix.ARRAY_TYPE = type;
	};
	
	var degree = Math.PI / 180;
	
	/**
	* Convert Degree To Radian
	*
	* @param {Number} a Angle in Degrees
	*/
	glMatrix.toRadian = function (a) {
	  return a * degree;
	};
	
	/**
	 * Tests whether or not the arguments have approximately the same value, within an absolute
	 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less 
	 * than or equal to 1.0, and a relative tolerance is used for larger values)
	 * 
	 * @param {Number} a The first number to test.
	 * @param {Number} b The second number to test.
	 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
	 */
	glMatrix.equals = function (a, b) {
	  return Math.abs(a - b) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
	};
	
	module.exports = glMatrix;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ModelSettingJson;
	function ModelSettingJson(json) {
	    this.NAME = "name";
	    this.ID = "id";
	    this.MODEL = "model";
	    this.TEXTURES = "textures";
	    this.HIT_AREAS = "hit_areas";
	    this.PHYSICS = "physics";
	    this.POSE = "pose";
	    this.EXPRESSIONS = "expressions";
	    this.MOTION_GROUPS = "motions";
	    this.SOUND = "sound";
	    this.FADE_IN = "fade_in";
	    this.FADE_OUT = "fade_out";
	    this.LAYOUT = "layout";
	    this.INIT_PARAM = "init_param";
	    this.INIT_PARTS_VISIBLE = "init_parts_visible";
	    this.VALUE = "val";
	    this.FILE = "file";
	
	    this.json = json || {};
	}
	
	// ModelSettingJson.prototype.loadModelSetting = function(path, callback)
	// {
	//     var thisRef = this;
	//     var pm = Live2DFramework.getPlatformManager();
	//     pm.loadBytes(path, function(buf) {
	//         var str = String.fromCharCode.apply(null,new Uint8Array(buf));
	//         thisRef.json = JSON.parse(str);
	//         callback();
	//     });
	// };
	
	
	ModelSettingJson.prototype.getTextureFile = function (n) {
	    if (this.json[this.TEXTURES] == null || this.json[this.TEXTURES][n] == null) return null;
	
	    return this.json[this.TEXTURES][n];
	};
	
	ModelSettingJson.prototype.getModelFile = function () {
	    return this.json[this.MODEL];
	};
	
	ModelSettingJson.prototype.getTextureNum = function () {
	    if (this.json[this.TEXTURES] == null) return 0;
	
	    return this.json[this.TEXTURES].length;
	};
	
	ModelSettingJson.prototype.getHitAreaNum = function () {
	    if (this.json[this.HIT_AREAS] == null) return 0;
	
	    return this.json[this.HIT_AREAS].length;
	};
	
	ModelSettingJson.prototype.getHitAreaID = function (n) {
	    if (this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][n] == null) return null;
	
	    return this.json[this.HIT_AREAS][n][this.ID];
	};
	
	ModelSettingJson.prototype.getHitAreaName = function (n) {
	    if (this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][n] == null) return null;
	
	    return this.json[this.HIT_AREAS][n][this.NAME];
	};
	
	ModelSettingJson.prototype.getPhysicsFile = function () {
	    return this.json[this.PHYSICS];
	};
	
	ModelSettingJson.prototype.getPoseFile = function () {
	    return this.json[this.POSE];
	};
	
	ModelSettingJson.prototype.getExpressionNum = function () {
	    return this.json[this.EXPRESSIONS] == null ? 0 : this.json[this.EXPRESSIONS].length;
	};
	
	ModelSettingJson.prototype.getExpressionFile = function (n) {
	    if (this.json[this.EXPRESSIONS] == null) return null;
	    return this.json[this.EXPRESSIONS][n][this.FILE];
	};
	
	ModelSettingJson.prototype.getExpressionName = function (n) {
	    if (this.json[this.EXPRESSIONS] == null) return null;
	    return this.json[this.EXPRESSIONS][n][this.NAME];
	};
	
	ModelSettingJson.prototype.getLayout = function () {
	    return this.json[this.LAYOUT];
	};
	
	ModelSettingJson.prototype.getInitParamNum = function () {
	    return this.json[this.INIT_PARAM] == null ? 0 : this.json[this.INIT_PARAM].length;
	};
	
	ModelSettingJson.prototype.getMotionNum = function (name) {
	    if (this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][name] == null) return 0;
	
	    return this.json[this.MOTION_GROUPS][name].length;
	};
	
	ModelSettingJson.prototype.getMotionFile = function (name, n) {
	    if (this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][name] == null || this.json[this.MOTION_GROUPS][name][n] == null) return null;
	
	    return this.json[this.MOTION_GROUPS][name][n][this.FILE];
	};
	
	ModelSettingJson.prototype.getMotionSound = function (name, n) {
	    if (this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][name] == null || this.json[this.MOTION_GROUPS][name][n] == null || this.json[this.MOTION_GROUPS][name][n][this.SOUND] == null) return null;
	
	    return this.json[this.MOTION_GROUPS][name][n][this.SOUND];
	};
	
	ModelSettingJson.prototype.getMotionFadeIn = function (name, n) {
	    if (this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][name] == null || this.json[this.MOTION_GROUPS][name][n] == null || this.json[this.MOTION_GROUPS][name][n][this.FADE_IN] == null) return 1000;
	
	    return this.json[this.MOTION_GROUPS][name][n][this.FADE_IN];
	};
	
	ModelSettingJson.prototype.getMotionFadeOut = function (name, n) {
	    if (this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][name] == null || this.json[this.MOTION_GROUPS][name][n] == null || this.json[this.MOTION_GROUPS][name][n][this.FADE_OUT] == null) return 1000;
	
	    return this.json[this.MOTION_GROUPS][name][n][this.FADE_OUT];
	};
	
	ModelSettingJson.prototype.getInitParamID = function (n) {
	    if (this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][n] == null) return null;
	
	    return this.json[this.INIT_PARAM][n][this.ID];
	};
	
	ModelSettingJson.prototype.getInitParamValue = function (n) {
	    if (this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][n] == null) return NaN;
	
	    return this.json[this.INIT_PARAM][n][this.VALUE];
	};
	
	ModelSettingJson.prototype.getInitPartsVisibleNum = function () {
	    return this.json[this.INIT_PARTS_VISIBLE] == null ? 0 : this.json[this.INIT_PARTS_VISIBLE].length;
	};
	
	ModelSettingJson.prototype.getInitPartsVisibleID = function (n) {
	    if (this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][n] == null) return null;
	    return this.json[this.INIT_PARTS_VISIBLE][n][this.ID];
	};
	
	ModelSettingJson.prototype.getInitPartsVisibleValue = function (n) {
	    if (this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][n] == null) return NaN;
	
	    return this.json[this.INIT_PARTS_VISIBLE][n][this.VALUE];
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=pixi-live2d.js.map