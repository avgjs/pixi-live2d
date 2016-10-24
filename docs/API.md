# API

**new PIXI.Live2DSprite(modelDefine, options)**

`json` modelDefine: The content of [name].model.json.<br>
`json` options: optional parameters

- eyeBlink `boolean` `default: true`
- lipSyncWithSound `boolean` `default: true`
- debugLog `boolean` `default: false`
- debugMouseLog `boolean` `default: false`
- randomMotion `boolean` `default: true`
- defaultMotionGroup `string` `default: 'idle'`
- priorityDefault `number` `default: 1`
- priorityForce `number` `default: 3`
- audioPlayer `function` Custom audio player, pass (filename, rootPath) as - parameters

**.adjustScale(cx, cy, scale)**

cx: center for scale, between 0-1.<br>
cy: center for scale, between 0-1.<br>
scale: ratio for scale.

**.adjustTranslate(shiftX, shiftY)**

shiftX: between 0-1.<br>
shiftY: between 0-1\.

**.setLipSync(value)**

**.setRandomExpression()**

**.startRandomMotion(name, priority)**

**.startRandomMotionOnce(name, priority)**

**.stopRandomMotion()**

**.startMotion(name, no, priority)**

**.playSound(filename, host='/')**

**.hitTest(id, x, y)**

If `id` is not `null`, it will test a specific part of model. Or it will test all parts, which will return `true` if only any part of model returns true.

**.setViewPoint(x, y)**

**.getParamFloat(key)**

**.setParamFloat(key, value, weight=1)**

**.addToParamFloat(key, value, weight=1)**

**.multParamFloat(key, value, weight=1)**
