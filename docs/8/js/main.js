// https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-basic.js
// https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-advanced.js
window.addEventListener('DOMContentLoaded', (event) => {
    const app = new PIXI.Application({
        view: document.getElementById('my-canvas'),
        backgroundColor: 0x1099bb
    });
    document.body.appendChild(app.view);

    const geometry = new PIXI.Geometry()
        .addAttribute('aVertexPosition', [-100, -50, 100, -50, 0, 100]);
    const shader = PIXI.Shader.from(`
        precision mediump float;
        attribute vec2 aVertexPosition;

        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;

        void main() {
            gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
        }`,
    `precision mediump float;
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `);

    const triangle = new PIXI.Mesh(geometry, shader);
    triangle.position.set(400, 300);
    app.stage.addChild(triangle);
    app.ticker.add((delta) => {
        triangle.rotation += 0.01;
    });







    /*
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
    gsap.to(points[0], {y:180, duration:2, yoyo:true, repeat:-1})
    gsap.to(points[1], {y:200, duration:2, yoyo:true, repeat:-1})
    gsap.to(points[2], {y:240, duration:2, yoyo:true, repeat:-1})
    gsap.to(points[3], {y:240, duration:2, yoyo:true, repeat:-1})
    gsap.to(points[4], {y:200, duration:2, yoyo:true, repeat:-1})
    gsap.to(points[5], {y:180, duration:2, yoyo:true, repeat:-1})
    */
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

