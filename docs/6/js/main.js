// https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-basic.js
// https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-advanced.js
window.addEventListener('DOMContentLoaded', (event) => {
    const app = new PIXI.Application({
        view: document.getElementById('my-canvas'),
        backgroundColor: 0x1099bb
    });
    document.body.appendChild(app.view);
    let [direct, amount] = [1, 8]
    const [IMG_W, VTX_N] = [256, 6]
    const ropeLength = IMG_W / VTX_N;
    const points = [];
    for (let i = 0; i < VTX_N; i++) {
        //points.push(new PIXI.Point(i * ropeLength, ((1===i) ? IMG_W : IMG_W / 2)));
        points.push(new PIXI.Point(i * ropeLength, 0));
    }
    const rope = new PIXI.SimpleRope(PIXI.Texture.from('./asset/image/mepachi/mabuta-ue.png'), points);
    rope.x = (IMG_W / 2) * -1
    const vertex = new Vertex(rope)
    app.stage.addChild(vertex.Graphics);
    const container = new PIXI.Container();
    container.x = 400;
    container.y = 400;
    app.stage.addChild(container);
    container.addChild(rope);
    app.ticker.add(() => {
        points[1].y += (amount * 0.6) * direct
        points[2].y += amount * direct
        points[3].y += amount * direct
        points[4].y += (amount * 0.6) * direct
        if (0 < direct && (IMG_W / 2) <= points[2].y) { direct = -1 }
        else if (direct < 0 && points[2].y < 0) { direct = 1 }
        else {}
        vertex.draw(points)
    });
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

