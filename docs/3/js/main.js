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
    //const strip = new PIXI.SimpleRope(PIXI.Texture.from('./asset/image/eye-0.png'), points); // examples/assets/snake.png
    const strip = new PIXI.SimpleRope(PIXI.Texture.from('./asset/image/mepachi/mabuta-ue.png'), points);
    strip.x = (IMG_W / 2) * -1
    const snakeContainer = new PIXI.Container();
    snakeContainer.x = 400;
    snakeContainer.y = 300;
    app.stage.addChild(snakeContainer);
    snakeContainer.addChild(strip);
    app.ticker.add(() => {
        count += 0.1;
        /*
        const step = (points[10].y < 150) ? 1 : -1
        //const step = (points[10].y < 100) ? -1 : 1
        for (let i = 0; i < points.length; i++) {
            //points[i].y += 1
            //points[i].y += step
            points[i].y += Math.abs(i - (20 / 2)) * 1
            //points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 20;
        }
        */
        points[0].y += 0.2
        points[1].y += 0.2
        points[2].y += 0.2
        points[3].y += 0.2
        points[4].y += 0.2
        points[5].y += 0.2
        points[6].y += 0.3
        points[7].y += 0.5
        points[8].y += 1.0
        points[9].y += 1.5
        points[10].y += 2
        points[11].y += 1.5
        points[12].y += 1.0
        points[13].y += 0.5
        points[14].y += 0.3
        points[15].y += 0.2
        points[16].y += 0.2
        points[17].y += 0.2
        points[18].y += 0.2
        points[19].y += 0.2
        /*
        for (let i = 0; i < points.length; i++) {
            points[i].y = Math.sin((i * 0.5) + count) * 30;
            points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 20;
        }
        */
    });
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

