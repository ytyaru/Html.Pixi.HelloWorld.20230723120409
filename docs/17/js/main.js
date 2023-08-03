// https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-basic.js
// https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-advanced.js
window.addEventListener('DOMContentLoaded', async(event) => {
    const res = await fetch('md/0.md')
    const md = await res.text()
    document.querySelector('#md').innerHTML = marked.parse(md);
    hljs.highlightAll();

    console.log(earcut([10,0, 0,50, 60,60, 70,10]))
    //const coords = [0,0, 0,100, 100,0, 100,100]
    const coords = [0,0, 0,100, 100,100, 100,0]
    const delaunay = new Delaunator(coords);
    console.log(delaunay.triangles);

    const app = new PIXI.Application({
        view: document.getElementById('my-canvas'),
        backgroundColor: 0x1099bb
    });
    const vertex = new Vertex()
    app.stage.addChild(vertex.Graphics);
    document.body.appendChild(app.view);

    // https://pixijs.download/dev/docs/PIXI.SimpleMesh.html
    // https://tkengo.github.io/blog/2015/01/03/opengl-es-2-2d-knowledge-2/
    const texture = PIXI.Texture.from('./asset/image/mepachi/mabuta-ue.png')
    //const vertices = new Float32Array([0,0, 0,100, 100,0, 100,100])
    const vertices = new Float32Array([0,0, 0,100, 100,100, 100,0]) // 四角形。左上から半時計回りに。
    //const uvs = new Float32Array([0,0, 0,1, 1,0, 1,1])
    const uvs = new Float32Array([0,0, 0,1, 1,1, 1,0])
    console.log([10,0, 0,50, 60,60, 70,10]) // 期待値:[0,1,2, 2,3,0]
    console.log(earcut([10,0, 0,50, 60,60, 70,10])); // returns [1,0,3, 3,2,1]
    console.log(vertices)         // [0,0, 0,100, 100,100, 100,0]
    console.log(earcut(vertices)) // [1,0,3, 3,2,1]
    //const indices = new Uint16Array([0,1,2, 2,3,0])
    const indices = new Uint16Array(earcut(vertices))
    const rectangle = new PIXI.SimpleMesh(texture, vertices, uvs, indices, PIXI.DRAW_MODES.TRIANGLE_STRIP)
    vertex.Graphics.x = 400
    vertex.Graphics.y = 300
    rectangle.position.set(400, 300);
    app.stage.addChild(rectangle);
    let direct = 1
    app.ticker.add((delta) => {
        vertex.draw(vertices)
    });
    // https://greensock.com/forums/topic/25391-animate-vertices-in-threejs-with-gsap/
                                 // from  [ 0,0, 0,100, 100,0, 100,100]
    //gsap.to(rectangle.vertices, {endArray:[50,0, 0,100,  50,0, 100,100], duration:2, yoyo:true, repeat:-1})
                                 // from  [ 0,0, 0,100, 100,100, 100,0]
    gsap.to(rectangle.vertices, {endArray:[50,0, 0,100, 100,100, 50,0], duration:2, yoyo:true, repeat:-1})
    /*
    const tl = gsap.timeline();
    tl.to(rectangle, { vertices[0]:50, duration:2, yoyo:true, repeat:-1 })
    tl.to(rectangle, { vertices[6]:50, duration:2, yoyo:true, repeat:-1 })
    */
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

