//============================================================
//============================================================
//  class LAppModel     extends L2DBaseModel
//============================================================
//============================================================

import { L2DBaseModel, L2DEyeBlink } from './Live2DFramework';
import MatrixStack from './MatrixStack';
import ModelSettingJson from './ModelSettingJson';

export default function LAppModel(options)
{
    //L2DBaseModel.apply(this, arguments);
    L2DBaseModel.prototype.constructor.call(this);

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
}

LAppModel.prototype = new L2DBaseModel();


LAppModel.prototype.load = function(gl, modelDefine, callback)
{
    this.setUpdating(true);
    this.setInitialized(false);

    this.modelHomeDir = './';

    this.modelSetting = new ModelSettingJson(modelDefine);

    var thisRef = this;

    // this.modelSetting.loadModelSetting(modelSettingPath, function(){

        var path = thisRef.modelHomeDir + thisRef.modelSetting.getModelFile();
        thisRef.loadModelData(path, function(model){

            for (var i = 0; i < thisRef.modelSetting.getTextureNum(); i++)
            {

                var texPaths = thisRef.modelHomeDir +
                    thisRef.modelSetting.getTextureFile(i);

                thisRef.loadTexture(gl, i, texPaths, function() {

                    if( thisRef.isTexLoaded ) {

                        if (thisRef.modelSetting.getExpressionNum() > 0)
                        {

                            thisRef.expressions = {};

                            for (var j = 0; j < thisRef.modelSetting.getExpressionNum(); j++)
                            {
                                var expName = thisRef.modelSetting.getExpressionName(j);
                                var expFilePath = thisRef.modelHomeDir +
                                    thisRef.modelSetting.getExpressionFile(j);

                                thisRef.loadExpression(expName, expFilePath);
                            }
                        }
                        else
                        {
                            thisRef.expressionManager = null;
                            thisRef.expressions = {};
                        }



                        if (!thisRef.eyeBlink)
                        {
                            thisRef.eyeBlink = new L2DEyeBlink();
                        }


                        if (thisRef.modelSetting.getPhysicsFile())
                        {
                            thisRef.loadPhysics(thisRef.modelHomeDir +
                                                thisRef.modelSetting.getPhysicsFile());
                        }
                        else
                        {
                            thisRef.physics = null;
                        }



                        if (thisRef.modelSetting.getPoseFile())
                        {
                            thisRef.loadPose(
                                thisRef.modelHomeDir +
                                thisRef.modelSetting.getPoseFile(),
                                function() {
                                    thisRef.pose.updateParam(thisRef.live2DModel);
                                }
                            );
                        }
                        else
                        {
                            thisRef.pose = null;
                        }



                        if (thisRef.modelSetting.getLayout())
                        {
                            var layout = thisRef.modelSetting.getLayout();
                            if (layout["width"] != null)
                                thisRef.modelMatrix.setWidth(layout["width"]);
                            if (layout["height"] != null)
                                thisRef.modelMatrix.setHeight(layout["height"]);

                            if (layout["x"] != null)
                                thisRef.modelMatrix.setX(layout["x"]);
                            if (layout["y"] != null)
                                thisRef.modelMatrix.setY(layout["y"]);
                            if (layout["center_x"] != null)
                                thisRef.modelMatrix.centerX(layout["center_x"]);
                            if (layout["center_y"] != null)
                                thisRef.modelMatrix.centerY(layout["center_y"]);
                            if (layout["top"] != null)
                                thisRef.modelMatrix.top(layout["top"]);
                            if (layout["bottom"] != null)
                                thisRef.modelMatrix.bottom(layout["bottom"]);
                            if (layout["left"] != null)
                                thisRef.modelMatrix.left(layout["left"]);
                            if (layout["right"] != null)
                                thisRef.modelMatrix.right(layout["right"]);
                        }

                        for (var j = 0; j < thisRef.modelSetting.getInitParamNum(); j++)
                        {

                            thisRef.live2DModel.setParamFloat(
                                thisRef.modelSetting.getInitParamID(j),
                                thisRef.modelSetting.getInitParamValue(j)
                            );
                        }

                        for (var j = 0; j < thisRef.modelSetting.getInitPartsVisibleNum(); j++)
                        {

                            thisRef.live2DModel.setPartsOpacity(
                                thisRef.modelSetting.getInitPartsVisibleID(j),
                                thisRef.modelSetting.getInitPartsVisibleValue(j)
                            );
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



LAppModel.prototype.release = function(gl)
{
    // this.live2DModel.deleteTextures();
    // var pm = Live2DFramework.getPlatformManager();
    //
    // gl.deleteTexture(pm.texture);
}



LAppModel.prototype.preloadMotionGroup = function(name)
{
    var thisRef = this;

    for (var i = 0; i < this.modelSetting.getMotionNum(name); i++)
    {
        var file = this.modelSetting.getMotionFile(name, i);
        this.loadMotion(file, this.modelHomeDir + file, function(motion) {
            motion.setFadeIn(thisRef.modelSetting.getMotionFadeIn(name, i));
            motion.setFadeOut(thisRef.modelSetting.getMotionFadeOut(name, i));
        });

    }
}


LAppModel.prototype.update = function()
{
    // console.log("--> LAppModel.update()");

    if(!this.live2DModel)
    {
        if (this.options.debugLog) console.error("Failed to update.");

        return;
    }

    var timeMSec = UtSystem.getUserTimeMSec() - this.startTimeMSec;
    var timeSec = timeMSec / 1000.0;
    var t = timeSec * 2 * Math.PI;


    if (this.mainMotionManager.isFinished() && this.randomMotion)
    {
        this.startRandomMotion(this.randomMotionGroup || this.options.defaultMotionGroup, this.randomMotionPriority || this.options.priorityDefault);
    }

    //-----------------------------------------------------------------


    this.live2DModel.loadParam();



    var update = this.mainMotionManager.updateParam(this.live2DModel);
    if (!update) {

        if(this.eyeBlink && this.options.eyeBlink) {
            this.eyeBlink.updateParam(this.live2DModel);
        }
    }


    this.live2DModel.saveParam();

    //-----------------------------------------------------------------


    if (this.expressionManager &&
        this.expressions &&
        !this.expressionManager.isFinished())
    {
        this.expressionManager.updateParam(this.live2DModel);
    }



    this.live2DModel.addToParamFloat("PARAM_ANGLE_X", this.dragX * 30, 1);
    this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", this.dragY * 30, 1);
    this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", (this.dragX * this.dragY) * -30, 1);



    this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", this.dragX*10, 1);



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


    if (this.physics)
    {
        this.physics.updateParam(this.live2DModel);
    }

    if (this.lipSync)
    {
        this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y",
                                       this.lipSyncValue);
    }


    if( this.pose ) {
        this.pose.updateParam(this.live2DModel);
    }

    this.live2DModel.update();
};



LAppModel.prototype.setRandomExpression = function()
{
    var tmp = [];
    for (var name in this.expressions)
    {
        tmp.push(name);
    }

    var no = parseInt(Math.random() * tmp.length);

    this.setExpression(tmp[no]);
}



LAppModel.prototype.startRandomMotion = function(name, priority)
{
    var max = this.modelSetting.getMotionNum(name);
    var no = parseInt(Math.random() * max);
    this.startMotion(name, no, priority);
    this.randomMotion = true;
    this.randomMotionGroup = name;
    this.randomMotionPriority = priority;
}
LAppModel.prototype.startRandomMotionOnce = function(name, priority)
{
    var max = this.modelSetting.getMotionNum(name);
    var no = parseInt(Math.random() * max);
    this.startMotion(name, no, priority);
}

LAppModel.prototype.stopRandomMotion = function()
{
    this.randomMotion = false;
    this.randomMotionGroup = null;
    this.randomMotionPriority = null;
}



LAppModel.prototype.startMotion = function(name, no, priority)
{
    // console.log("startMotion : " + name + " " + no + " " + priority);

    var motionName = this.modelSetting.getMotionFile(name, no);

    if (motionName == null || motionName == "")
    {
        if (this.options.debugLog)
            console.warn("Failed to motion.");
        return;
    }

    if (priority == this.options.priorityForce)
    {
        this.mainMotionManager.setReservePriority(priority);
    }
    else if (!this.mainMotionManager.reserveMotion(priority))
    {
        if (this.options.debugLog)
            console.log("Motion is running.")
        return;
    }

    var thisRef = this;
    var motion;

    if (this.motions[name] == null)
    {
        this.loadMotion(null, this.modelHomeDir + motionName, function(mtn) {
            motion = mtn;


            thisRef.setFadeInFadeOut(name, no, priority, motion);

        });
    }
    else
    {
        motion = this.motions[name];


        thisRef.setFadeInFadeOut(name, no, priority, motion);
    }
}


LAppModel.prototype.setFadeInFadeOut = function(name, no, priority, motion)
{
    var motionName = this.modelSetting.getMotionFile(name, no);

    motion.setFadeIn(this.modelSetting.getMotionFadeIn(name, no));
    motion.setFadeOut(this.modelSetting.getMotionFadeOut(name, no));


    if (this.options.debugLog)
            console.log("Start motion : " + motionName);

    if (this.modelSetting.getMotionSound(name, no) == null)
    {
        this.mainMotionManager.startMotionPrio(motion, priority);
    }
    else
    {
        var soundName = this.modelSetting.getMotionSound(name, no);
        // var player = new Sound(this.modelHomeDir + soundName);

        if (this.options.debugLog)
            console.log("Start sound : " + soundName);

        this.playSound(soundName, this.modelHomeDir);

        this.mainMotionManager.startMotionPrio(motion, priority);
    }
}

LAppModel.prototype.playSound = function(filename, host)
{
    if (this.options.audioPlayer) {
        this.options.audioPlayer(filename, host);
    } else {
        const audio = this.audioElement || document.createElement("audio");
        !this.audioElement && (this.audioElement = audio);
        audio.src = host + filename;

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext && this.options.lipSyncWithSound) {
            const context = this.audioContext || new AudioContext();
            if (!this.audioContext) {
                this.audioContext = context;
                this.audioElementSource = context.createMediaElementSource(audio);
            }
            const source = this.audioElementSource;
            const analyser = this.audioAnalyser || context.createAnalyser();
            !this.audioAnalyser && (this.audioAnalyser = analyser);

            analyser.fftSize = 32;
            var bufferLength = analyser.frequencyBinCount;
            let cache = [];
            let lastTime = Date.now();
            const intervalId = setInterval(() => {
                const dataArray = new Uint8Array(bufferLength);
                analyser.getByteFrequencyData(dataArray);
                const value = (dataArray[9] + dataArray[10] + dataArray[11]) / 3;
                if (Date.now() - lastTime  < 33) {
                    cache.push(value);
                } else {
                    const lipValue = cache.length ?
                    (cache.reduce((previous, current) => current += previous) / cache.length / 100)
                    : this.lipSyncValue;
                    this.lipSync = true;
                    this.lipSyncValue = lipValue;
                    lastTime = Date.now();
                    cache = [];
                }
            }, 0);
            audio.addEventListener('ended', () => {
                clearInterval(intervalId);
                this.lipSyncValue = 0;
            });
            source.connect(analyser);
            analyser.connect(context.destination);
        }
        audio.play();
    }
}


LAppModel.prototype.setExpression = function(name)
{
    var motion = this.expressions[name];

    if (this.options.debugLog)
        console.log("Expression : " + name);

    this.expressionManager.startMotion(motion, false);
}



LAppModel.prototype.draw = function(gl)
{
    //console.log("--> LAppModel.draw()");

    // if(this.live2DModel == null) return;


    MatrixStack.push();

    MatrixStack.multMatrix(this.modelMatrix.getArray());

    this.tmpMatrix = MatrixStack.getMatrix()
    this.live2DModel.setMatrix(this.tmpMatrix);
    this.live2DModel.draw();

    MatrixStack.pop();

};



LAppModel.prototype.hitTest = function(id, testX, testY)
{
    var len = this.modelSetting.getHitAreaNum();
    let hit = false;
    for (var i = 0; i < len; i++)
    {
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
}
