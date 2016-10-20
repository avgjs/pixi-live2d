import PIXI from 'pixi.js';
import { Live2D } from '../src/lib/live2d';
import Live2DSprite from '../src/index';
// import Live2DSprite from '../src/Live2DSprite';


const renderer = new PIXI.WebGLRenderer(800, 600);
document.getElementById('app').appendChild(renderer.view);
const stage = new PIXI.Container();



const modelEpsilon = {
  'type':'Live2D Model Setting',
  'name':'Epsilon2.1',
  'model':'assets/Epsilon2.1/Epsilon2.1.moc',
  'textures':[
    'assets/Epsilon2.1/Epsilon2.1.2048/texture_00.png',
  ]
};

const modelHaru = {
  "type":"Live2D Model Setting",
  "name":"haru",
  "model":"assets/haru/haru_01.moc",
  "textures":
  [
    "assets/haru/haru_01.1024/texture_00.png",
    "assets/haru/haru_01.1024/texture_01.png",
    "assets/haru/haru_01.1024/texture_02.png"
  ],
  "physics":"assets/haru/haru.physics.json",
  "pose":"assets/haru/haru.pose.json",
  "expressions":
  [
    {"name":"f01","file":"assets/haru/expressions/f01.exp.json"},
    {"name":"f02","file":"assets/haru/expressions/f02.exp.json"},
    {"name":"f03","file":"assets/haru/expressions/f03.exp.json"},
    {"name":"f04","file":"assets/haru/expressions/f04.exp.json"},
    {"name":"f05","file":"assets/haru/expressions/f05.exp.json"},
    {"name":"f06","file":"assets/haru/expressions/f06.exp.json"},
    {"name":"f07","file":"assets/haru/expressions/f07.exp.json"},
    {"name":"f08","file":"assets/haru/expressions/f08.exp.json"}
  ],
  "layout":
  {
    "center_x": 0.8,
    "y": 1.2,
    "width": 2.9
  },
  "hit_areas":
  [
    {"name":"head", "id":"D_REF.HEAD"},
    {"name":"body", "id":"D_REF.BODY"}
  ],
  "motions":
  {
    "idle":
    [
      {"file":"assets/haru/motions/idle_00.mtn" ,"fade_in":2000, "fade_out":2000},
      {"file":"assets/haru/motions/idle_01.mtn" ,"fade_in":2000, "fade_out":2000},
      {"file":"assets/haru/motions/idle_02.mtn" ,"fade_in":2000, "fade_out":2000}
    ],
    "tap_body":
    [
      { "file":"assets/haru/motions/tapBody_00.mtn" , "sound":"assets/haru/sounds/tapBody_00.mp3"},
      { "file":"assets/haru/motions/tapBody_01.mtn" , "sound":"assets/haru/sounds/tapBody_01.mp3"},
      { "file":"assets/haru/motions/tapBody_02.mtn" , "sound":"assets/haru/sounds/tapBody_02.mp3"}
    ],
    "pinch_in":
    [
      { "file":"assets/haru/motions/pinchIn_00.mtn", "sound":"assets/haru/sounds/pinchIn_00.mp3" }
    ],
    "pinch_out":
    [
      { "file":"assets/haru/motions/pinchOut_00.mtn", "sound":"assets/haru/sounds/pinchOut_00.mp3" }
    ],
    "shake":
    [
      { "file":"assets/haru/motions/shake_00.mtn", "sound":"assets/haru/sounds/shake_00.mp3","fade_in":500 }
    ],
    "flick_head":
    [
      { "file":"assets/haru/motions/flickHead_00.mtn", "sound":"assets/haru/sounds/flickHead_00.mp3" }
    ]
  }
};


// sprite.x = 800;
const sprite = new PIXI.Sprite.fromImage('./7_room2_a.jpg');
stage.addChild(sprite);
// const live2dSprite2 = new Live2DSprite(modelEpsilon, renderer.view);
// stage.addChild(live2dSprite2);
const live2dSprite = new Live2DSprite(modelHaru, {
  debugLog: false,
  randomMotion: false,
  eyeBlink: false,
  // audioPlayer: (...args) => console.log(...args)
});
stage.addChild(live2dSprite);
live2dSprite.startRandomMotion('idle');
// live2dSprite.startMotion('pinch_out', 0);
live2dSprite.playSound('111111111111.mp3', 'sound/');
// live2dSprite.setLipSync(0);
const sprite2 = new PIXI.Sprite.fromImage('./pixiv4.jpg');
sprite2.y = 550;
// live2dSprite.interactive = true;
// live2dSprite.buttonMode = true;
// live2dSprite.on('click', () => console.log('click'))
// stage.addChild(sprite2);

// let t = null;
//
// setInterval(() => {
//     t && t.destroy({ baseTexture: true });
//     const texture = PIXI.RenderTexture.create(800, 600);
//     renderer.render(sprite, texture, false);
//     t = texture;
// }, 16)

// setTimeout(() => stage.removeChild(sprite), 3000)

/* live2d */




/* live2d */

function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}
// window.animate = animate;
animate();
