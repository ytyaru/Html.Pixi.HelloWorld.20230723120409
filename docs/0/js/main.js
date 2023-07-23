window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const app = new PIXI.Application({
        width: 760,
        height: 400,
        view: document.getElementById('my-canvas'),
        resolution: window.devicePixelRatio || 1,
        autoResize: true,
        backgroundColor: 0xafeeee,
    });
    const sprite = PIXI.Sprite.from('./asset/image/eye-0.png');
    app.stage.addChild(sprite);
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

