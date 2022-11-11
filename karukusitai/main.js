var assets = {
    back: "images/back2.png",
    player: "images/raiden3 k.png",
    aaa: "images/ppl.png",
    bullet: "images/wimn3.png",
    enemybullet: "images/gba.png",
    enemybullet2: "images/gba22.png",
    enemybullet3: "images/aba2.png",
    enemy1: "images/enemy1.png",
    enemy2: "images/enemy2.png",
    enemy3: "images/enemy3.5.png",
    enemy31: "images/enemy3.2.png",
    enemy32: "images/enemy3.3.png",
    enemy33: "images/enemy3.4.png",
    laser: "images/laser.png",
    item: "images/item.png",
    item2: "images/pt22.png",
    map: "images/map.png",
    ten: "sounds/ten.mp3",
    op: "images/op.png",
    lz: "images/wiez21.png",
    mark: "images/mark.png",
    aura: "images/baria.png",
    lests: "images/zannki.png",
    bomb: "images/bomb319-319 2.png",
    nidlbl: "images/nidlr2.png",
    rba: "images/rba.png",
    rba2: "images/rba2.png",
};
var core;

enchant();

window.onload = function () {

    core = new Core(360, 480);


    // core = new Core(560, 680);
    core.fps = 60;
    // setInterval(function(){
       
    //        if (core.fps <= 59) {
    //     core.fps = 60;
    // }},10

    // )
  

    

    core.preload(assets);
    core.onload = function () {
        titleStart();
    };

    // HACK: core.start を core.debug に変えてみましょう
    // スプライトが赤く囲われて大きさがわかるようになります
    core.debug();
    // core.start();
}

// 配列の要素を繰り返す
// var ary = [1,2,3].repeatOneByOne(3);
// console.log(ary);
// -> [1,1,1,2,2,2,3,3,3] 
Array.prototype.repeatOneByOne = function (count) {
    var ary = [];
    var _ary = this;
    while ((__ary = _ary.shift()) !== undefined) {
        for (var i = 0; i < count; i++) {
            ary.push(__ary);
        }
    }
    return ary;
}
