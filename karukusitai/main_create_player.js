// ゲーム画面
function createPlayer() {
    window.addEventListener("gc.controller.found", (event) => {
        const controller = event.detail.controller;
        console.log("コントローラー接続:" + controller.index);
        console.log(controller.name + " is ready!");
    }, false);
    window.addEventListener("gc.controller.lost", (event) => {
        console.log("コントローラー解除:" + event.detail.index);
        console.log(Controller.getController(0));
    }, false);
    Controller.search();// コントローラー制御開始
    // プレイヤー
    var player = new EntityGroup(32, 32);


    // プレイヤー画像
    var playerSprite = new Sprite(32, 32);
    playerSprite.image = core.assets.player;
    playerSprite.frameRow = 0;
    player.addChild(playerSprite);
    // プレイヤーの上（外側）
    var outerTop = new Sprite(4, 2);
    outerTop.centerX = player.centerX;
    outerTop.y = -outerTop.height;
    player.addChild(outerTop);
    // プレイヤーの上（中側）
    var innerTop = new Sprite(4, 2);
    innerTop.centerX = player.centerX;
    innerTop.y = 0;
    player.addChild(innerTop);
    // プレイヤーの下（外側）
    var outerBottom = new Sprite(4, 2);
    outerBottom.centerX = player.centerX;
    outerBottom.y = player.height;
    player.addChild(outerBottom);
    // プレイヤーの下（内側）
    var innerBottom = new Sprite(2, 2);
    innerBottom.centerX = player.centerX;
    innerBottom.y = player.height - innerBottom.height;
    player.addChild(innerBottom);
    // プレイヤーの左（外側）
    var outerLeft = new Sprite(2, 4);
    outerLeft.x = -outerLeft.width;
    outerLeft.centerY = player.centerY;
    player.addChild(outerLeft);
    // プレイヤーの左（内側）
    var innerLeft = new Sprite(2, 4);
    innerLeft.x = 0;
    innerLeft.centerY = player.centerY;
    player.addChild(innerLeft);
    // プレイヤーの右（外側）
    var outerRight = new Sprite(2, 4);
    outerRight.x = player.width;
    outerRight.centerY = player.centerY;
    player.addChild(outerRight);
    // プレイヤーの右（内側）
    var innerRight = new Sprite(2, 4);
    innerRight.x = player.width - innerRight.width;
    innerRight.centerY = player.centerY;
    player.addChild(innerRight);
    // プレイヤーとはしごの判定
    var ladderUp = new Sprite(2, player.height);
    ladderUp.centerX = player.centerX;
    ladderUp.y = 0;
    player.addChild(ladderUp);
    // プレイヤーとはしごの判定
    var ladderDown = new Sprite(2, 1);
    ladderDown.centerX = player.centerX;
    ladderDown.bottomY = player.height + 1;
    player.addChild(ladderDown);
    // プレイヤーの中央
    var center = new Sprite(4, 4);
    center.centerX = player.centerX;
    center.centerY = player.centerY;
    player.addChild(center);

    player.sprite = playerSprite;
    player.innerTop = innerTop;
    player.innerBottom = innerBottom;
    player.innerLeft = innerLeft;
    player.innerRight = innerRight;
    player.outerTop = outerTop;
    player.outerBottom = outerBottom;
    player.outerLeft = outerLeft;
    player.outerRight = outerRight;
    player.ladderUp = ladderUp;
    player.ladderDown = ladderDown;
    player.center = center;

    // 作成したプレイヤーを呼び出し元に戻す
    return player;

}

enchant.Player = enchant.Class.create(enchant.Sprite, {
    initialize: function (width, height) {
        var core = enchant.Core.instance;
        enchant.Sprite.call(this, width, height);
    }
});