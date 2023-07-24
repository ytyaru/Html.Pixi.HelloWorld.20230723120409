// https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-basic.js
window.addEventListener('DOMContentLoaded', (event) => {
    const app = new PIXI.Application({
        view: document.getElementById('my-canvas'),
        backgroundColor: 0x1099bb
    });
    document.body.appendChild(app.view);
    let [direct, amount] = [0, 1, 8]
    const [IMG_W, VTX_N] = [256, 3]
    const ropeLength = IMG_W / VTX_N;
    const points = [];
    for (let i = 0; i < VTX_N; i++) {
        //points.push(new PIXI.Point(i * ropeLength, ((1===i) ? IMG_W : IMG_W / 2)));
        points.push(new PIXI.Point(i * ropeLength, 0));
    }
    const rope = new PIXI.SimpleRope(PIXI.Texture.from('./asset/image/mepachi/mabuta-ue.png'), points);
    rope.x = (IMG_W / 2) * -1
    const container = new PIXI.Container();
    container.x = 400;
    container.y = 400;
    app.stage.addChild(container);
    container.addChild(rope);
    app.ticker.add(() => {
        points[1].y += amount * direct
        if (0 < direct && (IMG_W / 2) <= points[1].y) { direct = -1 }
        else if (direct < 0 && points[1].y < 0) { direct = 1 }
        else {}
    });
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

