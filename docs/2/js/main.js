// https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-basic.js
window.addEventListener('DOMContentLoaded', (event) => {
    const app = new PIXI.Application({
        view: document.getElementById('my-canvas'),
        backgroundColor: 0x1099bb
    });
    document.body.appendChild(app.view);
    let count = 0;
    const IMG_W = 512
    const ropeLength = IMG_W / 20; // 918
    const points = [];
    for (let i = 0; i < 20; i++) {
        points.push(new PIXI.Point(i * ropeLength, 0));
    }
    const strip = new PIXI.SimpleRope(PIXI.Texture.from('./asset/image/eye-0.png'), points); // examples/assets/snake.png
    strip.x = (IMG_W / 2) * -1
    const snakeContainer = new PIXI.Container();
    snakeContainer.x = 400;
    snakeContainer.y = 300;
    app.stage.addChild(snakeContainer);
    snakeContainer.addChild(strip);
    app.ticker.add(() => {
        count += 0.1;
        for (let i = 0; i < points.length; i++) {
            points[i].y = Math.sin((i * 0.5) + count) * 30;
            points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 20;
        }
    });
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

