// ゲーム画面
function gameStart() {

    // window.addEventListener("gc.controller.found", (event) => {
    //     const controller = event.detail.controller;
    //     console.log("コントローラー接続:" );
    //     console.log(controller.name + " is ready!");
    // }, false);
    // window.addEventListener("gc.controller.lost", (event) => {
    //     console.log("コントローラー解除:");
    //     console.log(Controller.getController(0));
    // }, false);

    // Controller.search();// コントローラー制御開始




    var scene = new Scene();
    core.replaceScene(scene);
    scene.backgroundColor = "#ffffff";
    // ステージグループ
    var stage = new Group();
    scene.addChild(stage);
    // 背景グループ
    var backGroup = new Group();
    stage.addChild(backGroup);

    // 敵グループ
    var enemyGroup = new Group();
    stage.addChild(enemyGroup);
    // アイテムグループ
    var itemGroup = new Group();
    stage.addChild(itemGroup);
    // 弾グループ
    var shotGroup = new Group();
    stage.addChild(shotGroup);
    // 弾グループ
    var shotGroup2 = new Group();
    stage.addChild(shotGroup2);
    // プレイヤーグループ
    var playerGroup = new Group();
    stage.addChild(playerGroup);
    // 敵の攻撃グループ
    var enemyShotGroup = new Group();
    stage.addChild(enemyShotGroup);
    // var back = new Sprite(360, 2400);
    // back.image = core.assets.back;
    // back.y = -2080;
    // back.x = 0;
    // backGroup.addChild(back);
    // back.tl.moveTo(0, 0, 00);
    // back.tl.then(function () {
    //     scene.tl.clear();
    var layer1 = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

    ];
    var layer2 = [
        [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    var back = new Map(16, 16);
    back.image = core.assets.map;
    // TODO: ➀タイルを追加してみよう
    // タイルマップを重ねて表示する

    back.loadData(layer1, layer2);

    backGroup.addChild(back);
    var stairsDown = new Sprite(32, 32);
    stairsDown.image = core.assets.map;
    stairsDown.x = 32 * 5;
    stairsDown.y = 32 * 1;
    stairsDown.frame = 14;
    backGroup.addChild(stairsDown);
    back.tl.moveTo(0, 0, 12);
    // back.tl.delay(400);
    back.tl.then(function () {

        // enemyGroup.remove();
        // enemyShotGroup.remove();
        scene.tl.clear();
        // target.remove();
        enemyGroup.remove();

        // スクロールが終わったらボス出現
        var boss3 = new Sprite(36, 65);
        boss3.image = core.assets.enemy32;
        boss3.centerX = 242;
        boss3.y = -boss3.height - 45;
        stage.addChild(boss3);
        boss3.hp = 1000;
        // boss3.tl.delay(150);
        boss3.tl.moveBy(0, 150, 10);
        // boss3.tl.delay(32)
        boss3.tl.then(function () {
            boss3.tl.then(function () {

                if (enemyShotGroup.childNodes.length > 500) return;
                for (var i = -10; i <= 0; i++) {
                    var bullet = new ExSprite(7, 7);
                    bullet.image = core.assets.enemybullet;
                    bullet.centerX = boss3.centerX;
                    bullet.centerY = boss3.centerY + i * 0.5;
                    enemyShotGroup.addChild(bullet);
                    bullet.tl.moveBy(i * 40, scene.height, 200);
                    bullet.tl.then(function () {
                        this.remove();
                    });
                }
            });
            boss3.tl.then(function () {

                if (enemyShotGroup.childNodes.length > 500) return;
                for (var i = 1; i <= 10; i++) {
                    var bullet = new ExSprite(7, 7);
                    bullet.image = core.assets.enemybullet;
                    bullet.centerX = boss3.centerX;
                    bullet.centerY = boss3.centerY - i * 0.5;
                    enemyShotGroup.addChild(bullet);
                    bullet.tl.moveBy(i * 40, scene.height, 200);
                    bullet.tl.then(function () {
                        this.remove();
                    });
                }
            });
            boss3.tl.delay(100);
            boss3.tl.then(function () {
                if (enemyShotGroup.childNodes.length > 500) return;
                for (var i = -6; i <= 7; i++) {
                    var tama = new Sprite(3, 3);
                    tama.backgroundColor = "000000"
                    tama.centerX = this.centerX;
                    tama.centerY = this.centerY;
                    enemyShotGroup.addChild(tama);
                    // ２点間の角度
                    // scoreLabel.addScore(1);
                    var radian = Math.atan2(tama.y - playerEntityGroup.y, tama.x - playerEntityGroup.x);
                    var angle = radian / (Math.PI / 180) + 180;
                    // 距離と角度から座標
                    angle += i * 5 + 5;
                    tama.moveX = 3 * Math.cos(angle * (Math.PI / 180));
                    tama.moveY = 3 * Math.sin(angle * (Math.PI / 180));

                    tama.on(Event.ENTER_FRAME, function () {

                        this.x += this.moveX;
                        this.y += this.moveY;


                        if (this.y > 540) this.remove();
                        if (this.y < -0) this.remove();
                        if (this.x > scene.width) this.remove();
                        if (this.x < 0) this.remove();

                    });
                }
            });
            boss3.tl.delay(64);
            boss3.tl.loop();
        });
        boss3.addCollision(shotGroup2);
        boss3.addCollision(shotGroup);
        boss3.on(Event.COLLISION, function (e) {
            if (this.hp > 0) {
                scoreLabel2.addScore(10);
                // scoreLabel.addScore(-1);
                this.hp -= 1;
            } else {
                scoreLabel2.addScore(10000000);
                this.remove();
                // enemyShotGroup.remove();
                // gameClear();
                // floor1Start();

            }
            e.collision.target.remove();
        });
        var boss2 = new Sprite(36, 65);
        boss2.image = core.assets.enemy31;
        boss2.centerX = 112;
        boss2.y = -boss2.height - 45;
        stage.addChild(boss2);
        boss2.hp = 1000;
        // boss2.tl.delay(150);
        boss2.tl.moveBy(0, 150, 10);
        boss2.tl.then(function () {
            boss2.tl.then(function () {

                if (enemyShotGroup.childNodes.length > 500) return;
                for (var i = -10; i <= 0; i++) {
                    var bullet = new ExSprite(7, 7);
                    bullet.image = core.assets.enemybullet;
                    bullet.centerX = boss2.centerX;
                    bullet.centerY = boss2.centerY + i * 0.5;
                    enemyShotGroup.addChild(bullet);
                    bullet.tl.moveBy(i * 40, scene.height, 200);
                    bullet.tl.then(function () {
                        this.remove();
                    });
                }

            });
            boss2.tl.then(function () {

                if (enemyShotGroup.childNodes.length > 500) return;
                for (var i = 1; i <= 10; i++) {
                    var bullet = new ExSprite(7, 7);
                    bullet.image = core.assets.enemybullet;
                    bullet.centerX = boss2.centerX;
                    bullet.centerY = boss2.centerY - i * 0.5;
                    enemyShotGroup.addChild(bullet);
                    bullet.tl.moveBy(i * 40, scene.height, 200);
                    bullet.tl.then(function () {
                        this.remove();
                    });
                }

            });
            boss.tl.delay(100);
            boss2.tl.then(function () {
                if (enemyShotGroup.childNodes.length > 500) return;
                for (var i = -6; i <= 7; i++) {
                    var tama = new Sprite(3, 3);
                    tama.backgroundColor = "000000"
                    tama.centerX = this.centerX;
                    tama.centerY = this.centerY;
                    enemyShotGroup.addChild(tama);
                    // ２点間の角度
                    // scoreLabel.addScore(1);
                    var radian = Math.atan2(tama.y - playerEntityGroup.y, tama.x - playerEntityGroup.x);
                    var angle = radian / (Math.PI / 180) + 180;
                    // 距離と角度から座標
                    angle += i * 5 + 5;
                    tama.moveX = 3 * Math.cos(angle * (Math.PI / 180));
                    tama.moveY = 3 * Math.sin(angle * (Math.PI / 180));

                    tama.on(Event.ENTER_FRAME, function () {

                        this.x += this.moveX;
                        this.y += this.moveY;


                        if (this.y > 540) this.remove();
                        if (this.y < -0) this.remove();
                        if (this.x > scene.width) this.remove();
                        if (this.x < 0) this.remove();

                    });
                }
            });
            boss2.tl.delay(64);
            boss2.tl.loop();
        });
        boss2.addCollision(shotGroup2);
        boss2.addCollision(shotGroup);
        boss2.on(Event.COLLISION, function (e) {
            if (this.hp > 0) {
                scoreLabel2.addScore(soten.score);
                // scoreLabel.addScore(-1);
                this.hp -= 1;
            } else {
                scoreLabel2.addScore(10000000);
                this.remove();

                // enemyShotGroup.remove();
                // gameClear();
                // floor1Start();

            }
            e.collision.target.remove();
        });
        var boss = new Sprite(100, 66);
        boss.image = core.assets.enemy3;
        boss.centerX = 180;
        boss.y = -boss.height - 50;
        stage.addChild(boss);
        boss.hp = 6000;
        // boss.tl.delay(150);
        boss.tl.moveBy(0, 150, 10);
        boss.tl.then(function () {


            // boss.tl.delay(25);
            boss.tl.then(function () {
                // boss.tl.moveTo(-64,32,20)
                if (enemyShotGroup.childNodes.length > 500) return;
                for (var i = -7; i <= 7; i++) {
                    var tama = new Sprite(3, 3);
                    tama.backgroundColor = "000000"
                    tama.centerX = this.centerX;
                    tama.centerY = this.centerY;
                    enemyShotGroup.addChild(tama);
                    // ２点間の角度
                    // scoreLabel.addScore(1);
                    var radian = Math.atan2(tama.y - playerEntityGroup.y, tama.x - playerEntityGroup.x);
                    var angle = radian / (Math.PI / 180) + 180;
                    // 距離と角度から座標
                    angle += i * 5;
                    tama.moveX = 3 * Math.cos(angle * (Math.PI / 180));
                    tama.moveY = 3 * Math.sin(angle * (Math.PI / 180));

                    tama.on(Event.ENTER_FRAME, function () {

                        this.x += this.moveX;
                        this.y += this.moveY;


                        if (this.y > 540) this.remove();
                        if (this.y < -0) this.remove();
                        if (this.x > scene.width) this.remove();
                        if (this.x < 0) this.remove();

                    });
                }
            });
            // boss.tl.delay(15);

            boss.tl.delay(20);

            boss.tl.loop();
            player.image = core.assets.player;

        });

        boss.addCollision(shotGroup);
        boss.addCollision(shotGroup2);
        boss.on(Event.COLLISION, function (e) {
            if (this.hp > 0) {
                scoreLabel2.addScore(10);
                scoreLabel.addScore(-1);
                this.hp -= 1;
            } else {
                scoreLabel2.addScore(10000000);
                this.remove();
                enemyShotGroup.remove();
                gameClear();
                // floor1Start();

            }
            e.collision.target.remove();
        });
    });

    // プレイヤーエンティティグループ
    var playerEntityGroup = new EntityGroup(2, 2);
    playerEntityGroup.x = 180;
    playerEntityGroup.y = 480;
    playerGroup.addChild(playerEntityGroup);


    var player = new Sprite(2, 2);
    player.image = core.assets.player;

    player.x = 160;
    player.y = 280;
    player.on(Event.ENTER_FRAME, function () {
        this.x = playerEntityGroup.x;
        this.y = playerEntityGroup.y;
    });
    // player.scale(5, 4);

    stage.addChild(player);
    player.tl.fadeTo(0.1, 0);
    var player2 = new Sprite(28, 24);
    player2.image = core.assets.player;

    player2.x = playerEntityGroup.x;
    player2.y = playerEntityGroup.y;
    player2.on(Event.ENTER_FRAME, function () {
        this.x = playerEntityGroup.x - 28 * 0.5 + 1.5;
        this.y = playerEntityGroup.y - 24 * 0.5;
        if (this.age % 2 !== 0) return;
        if (time.text > 0) {
            if (time.text == 0) return;
            time.addScore(-1);
        }
        if (time.text == 0) {
            if (player.shotPatern == 3 || player.shotPatern == 4) {
                player.shotPatern -= 2;
            }
        }
    });
    scene.tl.loop();
    // player2.scale(0.7, 0.6);
    stage.addChild(player2)
    var op = new Sprite(16, 16);
    op.image = core.assets.op;
    op.centerX = playerEntityGroup.x + 16
    op.centerY = playerEntityGroup.y + 16
    op.on(Event.ENTER_FRAME, function () {
        if (player.shotPatern == 2 && core.input.x || player.shotPatern == 4 && core.input.x) {
            this.centerX = playerEntityGroup.x - 6;
            this.centerY = playerEntityGroup.y - 16;
        } else {
            this.centerX = playerEntityGroup.x - 24;
            this.centerY = playerEntityGroup.y + 8;
        }
    });
    op.scale(0.6, 0.6);
    stage.addChild(op)
    var op2 = new Sprite(16, 16);
    op2.image = core.assets.op;
    op2.centerX = playerEntityGroup.x + 16
    op2.centerY = playerEntityGroup.y + 16
    op2.on(Event.ENTER_FRAME, function () {
        if (player.shotPatern == 2 && core.input.x || player.shotPatern == 4 && core.input.x) {
            this.centerX = playerEntityGroup.x + 9;
            this.centerY = playerEntityGroup.y - 16;
        } else {
            this.centerX = playerEntityGroup.x + 26;
            this.centerY = playerEntityGroup.y + 8;
        }
    });
    op2.scale(0.6, 0.6);
    stage.addChild(op2)
    // player2.tl.fadeTo(0.1, 0);
    // TODO: ➂プレイヤーの中心オブジェクト作成
    var playerCenter = new Sprite(1, 1);
    playerCenter.centerX = 32 / 2;
    playerCenter.centerY = 32 / 2;
    playerEntityGroup.addChild(playerCenter);
    // var player2 = new Sprite(32, 32);
    // player2.image = core.assets.player;
    // player2.centerX = 160;
    // player2.y = 280;
    // player.scale(0.4, 0.6);

    // stage.addChild(player2);
    // stage.addChild(player);
    // 弾のパターン
    player.shotPatern = 1;

    // 弾を作る
    var bullet = function (x, y) {
        var shot = new Sprite(64, 28);
        shot.image = core.assets.bullet;

        shot.centerX = op.centerX + 1;
        shot.y = op.centerY;
        shotGroup.addChild(shot);
        // shot.tl.fadeTo(0, 0);

        shot.tl.moveBy(x, -540, y);

        // shot.scale(4, 7);
        // shot.tl.fadeTo(0.3, 0);
        shot.tl.removeFromScene();

    }
    var bullet2 = function (x, y) {
        var shot2 = new Sprite(64, 28);
        shot2.image = core.assets.bullet;

        shot2.centerX = op2.centerX + 1;
        shot2.y = op2.centerY;
        shotGroup.addChild(shot2);
        // shot.tl.fadeTo(0, 0);

        shot2.tl.moveBy(x, -540, y);

        // shot2.scale(4, 7);
        // shot2.tl.fadeTo(0.3, 0);
        shot2.tl.removeFromScene();
    }
    var bullet3 = function (x) {
        var shot3 = new Sprite(64, 24);
        shot3.image = core.assets.lz;

        shot3.centerX = playerEntityGroup.x + 1;
        shot3.y = playerEntityGroup.y;
        shotGroup.addChild(shot3);
        // shot.tl.fadeTo(0, 0);
        shot3.on(Event.ENTER_FRAME, function () {
            shot3.centerX = playerEntityGroup.x + 1;
        });
        shot3.tl.moveBy(x, -540, 40);

        // shot3.scale(2.0, 3.0);
        // shot3.tl.fadeTo(0.3, 0);
        //    shot3.frame = [0, 1, 2, 3, 4, 5].repeatOneByOne(8);
        shot3.tl.removeFromScene();

    }
    var bullet4 = function (x, y, z, v) {
        var shot4 = new Sprite(64, 28);
        shot4.image = core.assets.bullet;

        shot4.centerX = playerEntityGroup.x + 1;
        shot4.centerY = playerEntityGroup.y + v;
        shotGroup.addChild(shot4);
        // shot.tl.fadeTo(0, 0);
        // shot4.on(Event.ENTER_FRAME, function () {
        // shot3.centerX = playerEntityGroup.x + 1;
        // });
        shot4.tl.moveBy(x, -y, z);

        // shot4.scale(w, o);
        // shot4.tl.fadeTo(0.3, 0);
        shot4.tl.removeFromScene();
    }
    var bullet5 = function (x) {
        var shot5 = new Sprite(54, 24);
        shot5.image = core.assets.lz;

        shot5.centerX = playerEntityGroup.x + 1;
        shot5.y = playerEntityGroup.y;
        shotGroup2.addChild(shot5);
        // shot.tl.fadeTo(0, 0);
        shot5.on(Event.ENTER_FRAME, function () {
            shot5.centerX = playerEntityGroup.x + 1;
        });
        shot5.tl.moveBy(x, -540, 40);

        // shot5.scale(2.0, 3.0);
        // shot3.tl.fadeTo(0.3, 0);
        //    shot3.frame = [0, 1, 2, 3, 4, 5].repeatOneByOne(8);
        shot5.tl.removeFromScene();

    }
    var bullet6 = function (x, y, z, v) {
        var shot6 = new Sprite(64, 28);
        shot6.image = core.assets.bullet;

        shot6.centerX = playerEntityGroup.x + 1;
        shot6.centerY = playerEntityGroup.y + v;
        shotGroup2.addChild(shot6);
        // shot.tl.fadeTo(0, 0);
        // shot4.on(Event.ENTER_FRAME, function () {
        // shot3.centerX = playerEntityGroup.x + 1;
        // });
        shot6.tl.moveBy(x, -y, z);

        // shot6.scale(w, o);
        // shot4.tl.fadeTo(0.3, 0);
        shot6.tl.removeFromScene();
    }
    // 弾を撃つ
    player.shot = function () {
        // 連射できるか
        // 連射


        if (this.shotPatern == 1) {

            // １方向か
            if (shotGroup.childNodes.length > 28) return;
            bullet(-120, 40);
            bullet2(120, 40);
            bullet4(60, 540, 40, 0);
            bullet4(-60, 540, 40, 0);
        } else if (this.shotPatern == 2) {
            // １方向か



            bullet5(0);
            bullet5(0);
            bullet6(0, 0, 2, -15);
            bullet6(0, 0, 2, -15);
            bullet6(0, 0, 2, -15);
            bullet6(0, 0, 2, -15);
            bullet6(0, 0, 2, 5);







        } else if (this.shotPatern == 3) {

            // １方向か
            if (shotGroup.childNodes.length > 40) return;
            bullet(-120, 30);
            bullet2(120, 30);
            bullet4(60, 540, 30, 0);
            bullet4(-60, 540, 30, 0);
        } else if (this.shotPatern == 4) {
            // １方向か



            bullet5(0);
            bullet5(0);
            bullet5(0);
            bullet6(0, 0, 2, -15);
            bullet6(0, 0, 2, -15);
            bullet6(0, 0, 2, -15);
            bullet6(0, 0, 2, -15);
            bullet6(0, 0, 2, 5);







        }
        // １方向か  

        // bullet(0);
        // } else if (this.shotPatern == 2) {
        //     // １方向か
        //     bullet(0);
        // } else if (this.shotPatern == 3) {
        //     // ３方向
        //     for (var i = -1; i <= 1; i++) {
        //         // TODO: i の変化を確認しよう
        //         // -1, 0, 1
        //         bullet(i * 40);
        //     }
        // } else if (this.shotPatern >= 1) {
        // ５方向


        // TODO: i の変化を確認しよう
        // -2, -1, 0, 1, 2


    };

    // 定期的に弾を発射する

    // player.on(Event.ENTER_FRAME, function () {
    //     this.shot();

    // });

    // var playerCenter = new Sprite(4, 4);
    // playerCenter.centerX = 16;
    // playerCenter.centerY = 16;
    // playerEntityGroup.addChild(playerCenter);
    // playerCenter.addCollision(stairsDown);
    playerCenter.on(Event.COLLISION, function (e) {
        // floor1Start();
        playerEntityGroup.x = e.collision.target.x;
        playerEntityGroup.y = e.collision.target.y;

    });
    player.addCollision(itemGroup);
    player.addCollision(enemyGroup);
    player.addCollision(enemyShotGroup);
    player2.addCollision(itemGroup);
    player2.addCollision(enemyGroup);
    player2.addCollision(enemyShotGroup);
    // 衝突設定
    player.on(Event.COLLISION, function (e) {
        // TODO: 衝突の振り分けを理解しましょう
        // addCollisionに設定した衝突対象はすべてEvent.COLLISIONでイベントが発生します
        // 衝突対象の所属するグループで判定しましょう
        var target = e.collision.target;
        var parent = target.parentNode;
        // アイテムと衝突したとき
        if (parent == itemGroup) {
            // パワーアップ
            // this.shotPatern += 1;





            scoreLabel2.addScore(soten.text * 10);


            target.remove();
        }
        // 敵と衝突したとき
        if (parent == enemyGroup || parent == enemyShotGroup) {
            gameOver();
        }

    });
    player2.on(Event.COLLISION, function (e) {

        // TODO: 衝突の振り分けを理解しましょう
        // addCollisionに設定した衝突対象はすべてEvent.COLLISIONでイベントが発生します
        // 衝突対象の所属するグループで判定しましょう
        var target = e.collision.target;
        var parent = target.parentNode;
        if (parent == itemGroup) {
            if (hy.text == 100 && player.shotPatern == 2) {

            } else if (hy.text < 100 && player.shotPatern == 1) {
                hy.addScore(2);
            }
            if (hy.text == 100 && player.shotPatern == 1) {

            } else if (hy.text < 100 && player.shotPatern == 2) {
                hy.addScore(2);
            }
            // パワーアップ
            // this.shotPatern += 1;
            soten.addScore(100);
            scoreLabel2.addScore(soten.text * 10);
            target.remove();
            var sound = core.assets.ten.clone();
            // sound.play();
            sound.volume = 0.1;
        }
        if (parent == enemyGroup || parent == enemyShotGroup) {
            soten.addScore(1)
            scoreLabel2.addScore(soten.text * 1);
        }
    });

    core.keybind("90", "x");
    core.keybind("88", "z");
    core.keybind("67", "c");
    // keyflag = false;
    // keyflag2 = true;
    // プレイヤーの移動
    player.on(Event.ENTER_FRAME, function () {
        // 左のキーが押されている時
        // if (core.input.c) {
        //     keyflag = false;
        // } else {
        //     keyflag = true;
        // } if (core.input.z) {
        //     keyflag2 = false;
        // } else {
        //     keyflag2 = true;
        // }
        if (core.input.c == true && core.input.x == false) {

            if (this.shotPatern == 2) {

                this.shotPatern -= 1;

            } else if (this.shotPatern == 4) {
                this.shotPatern -= 1;
            }
            this.shot();
        }
        if (core.input.z && hy.text == 100) {
            if (this.shotPatern == 1 || this.shotPatern == 2) {
                this.shotPatern += 2;
                hy.addScore(-100);
                time.addScore(400);





            }
            // hy.addScore(-100);
            //         hy.on(Event.ENTER_FRAME, function () {

            //             if (this.age % 4 !== 0) return;
            //             if (hy.text >= 100) {
            //                 hy.addScore(-2);
            //             }
            //             if (hy.text == 0) {
            //                 if (player.shotPatern == 3 || player.shotPatern == 4) {
            //                     player.shotPatern -= 2;
            //                 }
            //             }
            //         });
            //  scene.tl.loop();
        }
        if (core.input.x == true) {
            if (this.shotPatern == 1) {
                this.shotPatern += 1;
            } else if (this.shotPatern == 3) {
                this.shotPatern += 1;
            }
            this.shot();



            // } else {
            // this.shotPatern = 1;
        }


        if (core.input.left && player2.x > 0) {
            if (this.shotPatern == 2 || this.shotPatern == 4) {
                playerEntityGroup.x = playerEntityGroup.x - 1.5;
            } else {
                playerEntityGroup.x = playerEntityGroup.x - 2.8;
            }

        }


        // 右キーが押されている時
        if (core.input.right && player2.x < scene.width - 28) {
            if (this.shotPatern == 2 || this.shotPatern == 4) {
                playerEntityGroup.x = playerEntityGroup.x + 1.5;
            } else {
                playerEntityGroup.x = playerEntityGroup.x + 2.8;
            }

        }




        // 上のキーが押されている時
        if (core.input.up && player2.y > 0) {
            if (this.shotPatern == 2 || this.shotPatern == 4) {
                playerEntityGroup.y = playerEntityGroup.y - 1.5;

            } else {
                playerEntityGroup.y = playerEntityGroup.y - 2.8;

            }



        }
        // 上キーが押されている時
        if (core.input.down && player2.y < 516) {

            if (this.shotPatern == 2 || this.shotPatern == 4) {
                playerEntityGroup.y = playerEntityGroup.y + 1.5;

            } else {
                playerEntityGroup.y = playerEntityGroup.y + 2.8;

            }
        }


    });

    // 定期的に敵が出現する
    scene.tl.delay(4);

    scene.tl.then(function () {
        if (enemyGroup.childNodes.length > 24) return;


        // TODO: [ctrl]+[Shift]+[F]で[enemies]を検索してみましょう
        // データの先頭を１件取り出して末尾に追加する
        // TODO: インターネットで３つのキーワード[javascript array shift]で検索してみましょう
        var enemyData = enemies.shift();
        // TODO: インターネットで３つのキーワード[javascript array push]で検索してみましょう
        enemies.push(enemyData);
        // TODO: enemyDataの中をコンソールで確認しましょう
        // console.log(this.shotPatern);
        // 敵
        // TODO: [ctrl]+[Shift]+[F]で[createEnemy]を検索してみましょう
        var enemy = createEnemy[enemyData.type](enemyData);

        enemyGroup.addChild(enemy);


        enemy.addCollision(shotGroup);
        enemy.addCollision(shotGroup2);
        //    enemy.hp=20
        enemy.on(Event.COLLISION, function () {
            if (this.hp > 0) {
                scoreLabel2.addScore(10);
                this.hp -= 1;
            } else {
                scoreLabel2.addScore(soten.text * 10);
                this.remove();

            }
            if (this.item) {
                // for (var i = -1; i <= 1; i++) {
                var item = new Sprite(10, 16);
                item.image = core.assets.item2;
                item.x = this.x;
                item.y = this.y;
                itemGroup.addChild(item);
                // item.tl.fadeTo(0.5, 0)
                item.scale(2, 2)
                // TODO: [ctrl]+[Shift]+[F]で「repeatOneByOne」を検索してみましょう
                item.frame = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].repeatOneByOne(8);
                item.on(Event.ENTER_FRAME, function () {

                    if (core.input.x == false && core.input.z == false && core.input.c == false) {
                        var radian = Math.atan2(item.y - playerEntityGroup.y, item.x - playerEntityGroup.x);
                        var angle = radian / (Math.PI / 180) + 180;
                        // 距離と角度から座標
                        // angle += i * 0;
                        item.moveX = 1 * Math.cos(angle * (Math.PI / 180));
                        item.moveY = 1 * Math.sin(angle * (Math.PI / 180));

                        item.on(Event.ENTER_FRAME, function () {

                            this.x += this.moveX;
                            this.y += this.moveY;


                            if (this.y > 580) this.remove();
                            if (this.y < -0) this.remove();
                            if (this.x > scene.width) this.remove();
                            if (this.x < 0) this.remove();

                        });
                    } else { this.y += 2; }
                })
                // if (this.y > 340) this.remove();

                // }
            }
            this.remove();
            e.collision.target.remove();
        });

        enemy.on(Event.ENTER_FRAME, function () {
            this.y += 2;
            if (this.age % 12 !== 0) return;
            if (enemyShotGroup.childNodes.length > 256) return;
            if (time.text > 370 || time.text == 1) return;
            // for (var i = -1; i <= 1; i++) {
            var tama = new Sprite(4, 4);
            tama.backgroundColor = "000000"
            tama.centerX = this.centerX;
            tama.centerY = this.centerY;
            enemyShotGroup.addChild(tama);
            // ２点間の角度
            // scoreLabel.addScore(1);
            var radian = Math.atan2(tama.y - playerEntityGroup.y, tama.x - playerEntityGroup.x);
            var angle = radian / (Math.PI / 180) + 180;
            // 距離と角度から座標
            // angle += i * 0;
            tama.moveX = 3 * Math.cos(angle * (Math.PI / 180));
            tama.moveY = 3 * Math.sin(angle * (Math.PI / 180));

            tama.on(Event.ENTER_FRAME, function () {

                this.x += this.moveX;
                this.y += this.moveY;


                if (this.y > 540) this.remove();
                if (this.y < -0) this.remove();
                if (this.x > scene.width) this.remove();
                if (this.x < 0) this.remove();
                if (core.input.z == true && time.text > 395) this.remove();
                if (time.text == 1) this.remove();
            });
            // var qw = new Sprite(8, 8);
            // qw.image = core.assets.enemybullet;
            // qw.centerX = tama.centerX;
            // qw.centerY = tama.centerY;
            // // qw.fade(0.1);
            // stage.addChild(qw);
            // qw.on(Event.ENTER_FRAME, function () {
            //     this.x = tama.centerX - 4;
            //     this.y = tama.centerY - 2;
            //     if (this.y > 355) this.remove();
            //     if (this.y < 5) this.remove();
            //     if (this.x > scene.width - 5) this.remove();
            //     if (this.x < 5) this.remove();
            // });


            // }
            // var bullet = new ExSprite(4, 4);
            // bullet.image = core.assets.enemybullet;
            // bullet.centerX = this.centerX;
            // bullet.centerY = this.centerY ;
            // enemyShotGroup.addChild(bullet);
            // bullet.tl.moveBy(i*30, scene.height, 70 );
            // bullet.tl.then(function () {
            //     this.remove();
            // });
            // }
        });
        // enemyShotGroup.addChild(tama);

    });
    scene.tl.loop();

    // HACK: フォントを変えてみましょう
    // style.css の font-family に指定されている文字列を設定してみましょう
    // 得点表示
    var scoreLabel = new Label();
    scoreLabel.width = 90;
    scoreLabel.x = 220;
    scoreLabel.y = 10;
    scoreLabel.font = "14px Robot";
    scoreLabel.color = "white";
    scoreLabel.textAlign = "right";
    scoreLabel.score = 6000;
    scoreLabel.text = 0;
    scoreLabel.addScore = function (score) {
        this.score = this.score + score;
        scoreLabel.text = this.score;
    }
    scene.addChild(scoreLabel);

    var scoreLabel2 = new Label();
    scoreLabel2.width = 90;
    scoreLabel2.x = 60;
    scoreLabel2.y = 10;
    scoreLabel2.font = "14px Robot";
    scoreLabel2.color = "white";
    scoreLabel2.textAlign = "right";
    scoreLabel2.score = 0;
    scoreLabel2.text = 0;
    scoreLabel2.addScore = function (score2) {
        this.score = this.score + score2;
        scoreLabel2.text = this.score;
    }
    scene.addChild(scoreLabel2);

    var soten = new Label();
    soten.width = 90;
    soten.x = 160;
    soten.y = 10;
    soten.font = "14px Robot";
    soten.color = "white";
    soten.textAlign = "right";
    soten.score = 0;
    soten.text = 0;
    soten.addScore = function (score3) {
        this.score = this.score + score3;
        soten.text = this.score;
    }
    scene.addChild(soten);


    var hy = new Label();
    hy.width = 90;
    hy.x = 100;
    hy.y = 10;
    hy.font = "14px Robot";
    hy.color = "#656464";
    hy.textAlign = "right";
    hy.score = 0;
    hy.text = 0;
    hy.addScore = function (score4) {
        this.score = this.score + score4;
        hy.text = this.score;
    }
    scene.addChild(hy);
    var time = new Label();
    time.width = 90;
    time.x = 80;
    time.y = 10;
    time.font = "14px Robot";
    time.color = "#656464";
    time.textAlign = "right";
    time.score = 0;
    time.text = 0;
    time.addScore = function (score5) {
        this.score = this.score + score5;
        time.text = this.score;
    }
    scene.addChild(time);
}



        // TODO: オリジナル制作について
        // 1. 背景、自機、敵機を変えましょう
        // 2. 敵機の種類を増やしてみましょう
        // 3. アイテム取得時の変化を考えてみましょう
        // 4. ステージ２を作ってみましょう
