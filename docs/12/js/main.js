// https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-basic.js
// https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-advanced.js
window.addEventListener('DOMContentLoaded', (event) => {
    const app = new PIXI.Application({
        view: document.getElementById('my-canvas'),
        backgroundColor: 0x1099bb
    });
    const vertex = new Vertex()
    app.stage.addChild(vertex.Graphics);
    document.body.appendChild(app.view);
    //const points = [0,0, 0,100, 100,0, 100,100]
    //const points = [new PIXI.Point(0,0), new PIXI.Point(0,100), new PIXI.Point(100,0), new PIXI.Point(100,100)]
    function toPoints(ary) {
        const points = []
        for (let i = 0; i < ary.length / 2; i++) {
            points.push(new PIXI.Point(ary[(i*2)], ary[(i*2)+1]))
        }
        return points
    }
    const _points = [0,0, 0,100, 100,0, 100,100]
    const points = toPoints(_points)
    const geometry = new PIXI.Geometry()
        .addAttribute('aVertexPosition', _points); // PIXI.DRAW_MODES.TRIANGLE_STRIP 前の頂点2つを再利用する
        //.addAttribute('aVertexPosition', [0,0, 0,100, 100,0, 100,100]); // PIXI.DRAW_MODES.TRIANGLE_STRIP 前の頂点2つを再利用する
//        .addAttribute('aVertexPosition', [-50,50, -50,-50, 50,-50, 50,50]);
//        .addAttribute('aVertexPosition', [0,0, 100,0, 100,100, 0,100]); // rectangle ?
//        .addAttribute('aVertexPosition', [-50,-50, -50,50, 50,50, 50,-50]);
//        .addAttribute('aVertexPosition', [-100, -50, 100, -50, 0, 100]); // triangle
    //gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    //        gl_Position = vec4(aVertexPosition, 1.0);
    console.log(geometry )
    console.log(geometry.attributes.aVertexPosition)
    console.log(geometry.buffers[0].data)
    /*
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
    */
    // https://pixijs.download/dev/docs/PIXI.Mesh.html
    // https://tkengo.github.io/blog/2015/01/03/opengl-es-2-2d-knowledge-2/
    //const rectangle = new PIXI.Mesh(geometry, shader);
    //const rectangle = new PIXI.Mesh(geometry, shader, PIXI.State.for2d, PIXI.DRAW_MODES.TRIANGLE_STRIP);
    
//    const material = new PIXI.MeshMaterial(PIXI.Texture.from('./asset/image/mepachi/mabuta-ue.png'))
//    const rectangle = new PIXI.Mesh(geometry, material, PIXI.State.for2d, PIXI.DRAW_MODES.TRIANGLE_STRIP);
    
//    const rectangle = new PIXI.SimpleMesh(PIXI.Texture.from('./asset/image/mepachi/mabuta-ue.png'), geometry)
//    rectangle.indices = [0, 1, 2, 3]
//    rectangle.drawMode = PIXI.DRAW_MODES.TRIANGLE_STRIP

        //.addAttribute('aVertexPosition', [0,0, 0,100, 100,0, 100,100]); // PIXI.DRAW_MODES.TRIANGLE_STRIP 前の頂点2つを再利用する

    // https://pixijs.download/dev/docs/PIXI.SimpleMesh.html
    // https://tkengo.github.io/blog/2015/01/03/opengl-es-2-2d-knowledge-2/
    const texture = PIXI.Texture.from('./asset/image/mepachi/mabuta-ue.png')
    const vertices = new Float32Array(4*2)
    vertices[0] =   0; vertices[1] =   0; 
    vertices[2] =   0; vertices[3] = 100; 
    vertices[4] = 100; vertices[5] =   0; 
    vertices[6] = 100; vertices[7] = 100; 
    const uvs = new Float32Array(4*2)
    uvs[0] = 0; uvs[1] = 0;
    uvs[2] = 0; uvs[3] = 1;
    uvs[4] = 1; uvs[5] = 0;
    uvs[6] = 1; uvs[7] = 1;
    const indices = new Uint16Array(6)
    indices[0] = 0; indices[1] = 1;  indices[2] = 2; 
    indices[3] = 2; indices[4] = 3;  indices[5] = 0; 
    const rectangle = new PIXI.SimpleMesh(texture, vertices, uvs, indices, PIXI.DRAW_MODES.TRIANGLE_STRIP)

    /*
    const rectangle = new PIXI.SimpleMesh(
        PIXI.Texture.from('./asset/image/mepachi/mabuta-ue.png'), // texture
        //geometry, // vertices [0,0, 0,100, 100,0, 100,100]
        _points, // vertices [0,0, 0,100, 100,0, 100,100]
        [0,0, 0,1, 1,0, 1,1], // uvs
        [0, 1, 2, 3], // indices
        PIXI.DRAW_MODES.TRIANGLE_STRIP // drawMode
        )
    */
    /*
    const rectangle = new PIXI.SimpleMesh(
        PIXI.Texture.from('./asset/image/mepachi/mabuta-ue.png'), // texture
        geometry, // vertices
        material, PIXI.State.for2d, PIXI.DRAW_MODES.TRIANGLE_STRIP);
    */
    vertex.Graphics.x = 400
    vertex.Graphics.y = 300
    rectangle.position.set(400, 300);
    app.stage.addChild(rectangle);
    app.ticker.add((delta) => {
        rectangle.rotation += 0.01;
        vertex.draw(points)
    });
    gsap.to(points[0], {x:50, duration:2, yoyo:true, repeat:-1})
    gsap.to(points[2], {x:50, duration:2, yoyo:true, repeat:-1})


//    gsap.to(rectangle, {vertices[0]:400, duration:2, yoyo:true, repeat:-1})



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

