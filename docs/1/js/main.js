window.addEventListener('DOMContentLoaded', (event) => {
    console.log('A!!')
    const app = new PIXI.Application({
        view: document.getElementById('my-canvas'),
        backgroundColor: 0x1099bb
    });
    const container = new PIXI.Container();
    const texture = PIXI.Texture.from('./asset/image/eye-0.png');
    console.log(texture )
    texture.once('update', function () {
        console.log('update!!')
        const verticesX = 3;
        const verticesY = 3;
        const mesh = new PIXI.SimplePlane(texture, verticesX, verticesY);
        mesh.x = 200;
        mesh.y = 200;
        /*
        mesh.height = 0.7;
        mesh.width = 0.7;
        mesh.scale.x = 0.3
        mesh.scale.y = 0.3
        */
        console.log(mesh.geometry.buffers[0].data)
        container.addChild(mesh);
        app.stage.addChild(container);
        app.ticker.add(function (delta) {
            const uvs = mesh.geometry.buffers[0].data;
            for (let i = 0; i < uvs.length; i++) {
                uvs[i] += Math.floor(Math.random() * Math.floor(3)) - 1;
            }
            mesh.geometry.buffers[0].update();
        })
    });
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

