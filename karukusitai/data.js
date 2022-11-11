var enemies = [
    //  enemy1が左から２匹直進する
    { type: "a", x: 15, item: true, hp: 8 },
    { type: "a", x: 15, item: true, hp: 8 },
    { type: "a", x: 15, item: true, hp: 8 },
    { type: "a", x: 15, item: true, hp: 8 },
    { type: "a", x: 15, item: true, hp: 8 },
    // enemy1が右から２匹直進する
    { type: "a", x: 15, item: true, hp: 8 },
    { type: "a", x: 15, item: true, hp: 8 },
    { type: "a", x: 15, item: true, hp: 8 },
    { type: "a", x: 15, item: true, hp: 8 },
    { type: "a", x: 15, item: true, hp: 8 },
    //  { type: "b", x: 256, hp: 21 },
    // { type: "b", x: 128, hp: 21 },
    
    //  enemy2が左から１匹ジグザグに移動する
   
    //  enemy2が左から１匹ジグザグに移動する
  
];

var createEnemy = {};
createEnemy["a"] = function (data) {

    var enemy = new Sprite(32, 32);
    // enemy.n= new Node();
    enemy.image = core.assets.enemy1;
    enemy.hp = data.hp;
    // enemy.tl.moveBy(-64, 0, 50, enchant.Easing.QUAD_EASEINOUT);
    // enemy.tl.moveBy(64, 0, 50, enchant.Easing.QUAD_EASEINOUT);
    // enemy.tl.moveBy(64, 0, 100, enchant.Easing.QUAD_EASEINOUT);
    // enemy.tl.loop();
    enemy.centerX = data.x + getRandom(0, 330);
    enemy.y = 50;
    enemy.item = data.item;
    enemy.on(Event.ENTER_FRAME, function () {

        if (this.y > 560) this.remove();

        // this.remove();



    });
    return enemy;
}
createEnemy["b"] = function (data) {
    var enemy = new Sprite(32, 32);
    enemy.scale (2,2)
    enemy.image = core.assets.enemy2;
    enemy.centerX = data.x;
    enemy.y = 32;
    enemy.item = data.item;
    enemy.hp=data.hp;
    enemy.tl.moveBy(-64, 0, 100, enchant.Easing.QUAD_EASEINOUT);

    enemy.tl.moveBy(64, 0, 100, enchant.Easing.QUAD_EASEINOUT);


    // enemy.tl.scaleTo(5, 5, 10)
    // enemy.tl.loop();
    enemy.on(Event.ENTER_FRAME, function () {


        if (this.y > 560) this.remove();
    });
    return enemy;
}
var objectpool = [];
var objectpool2 = [];
var objectpool3 = [];
