// タイトル画面
function titleStart() {
    var scene = new Scene();
    core.replaceScene(scene, TRANSITION.FADEIN);

    // 背景色
    scene.backgroundColor = "black";

    // ゲームタイトル
    var title = new Label();
    title.width = scene.width;
    title.x = 0;
    title.y = -60;
    title.color = "white";
    title.textAlign = "center";
    title.font = "30px PixelMplus10";
    // HACK: タイトルをつけましょう
    title.text = "シューティング";

    // タイトルを上から下に移動する
    title.tl.setTimeBased();
    title.tl.delay(1000);
    title.tl.moveTo(0, scene.height * 0.3, 2000);
    scene.addChild(title);

    var message = new Label();
    message.width = scene.width;
    message.x = 0;
    message.y = scene.height * 0.6;
    message.color = "white";
    message.textAlign = "center";
    message.font = "15px PixelMplus10";
    message.text = "TAP TO START";
    scene.addChild(message);
    message.opacity = 0;

    // タイトルの移動が終わったら
    title.tl.then(function () {
        // メッセージを点滅
        message.tl.setTimeBased();
        message.tl.fadeTo(0, 1000);
        message.tl.fadeTo(1, 1000);
        message.tl.loop();
    });

    // 画面をクリックしたとき    
    scene.on(enchant.Event.TOUCH_START, function () {
        gameStart();
    });

}
