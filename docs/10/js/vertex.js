class Vertex {
    constructor() { // PIXI.mesh.Rope
    //constructor(rope) { // PIXI.mesh.Rope
        this.g = new PIXI.Graphics();
//        this.g.x = rope.x + 400;
//        this.g.y = rope.y + 400;
//        this.rope = rope
    }
    get Graphics() { return this.g }
//    get Rope() { return this.rope }
    draw(points) {
        this.g.clear();
        this.g.lineStyle(2, 0xffc2c2);
        //this.g.moveTo(points[0].x, points[0].y);
        this.g.moveTo(points[0], points[1]);
        for (let i = 0; i < points.length / 2; i++) {
            this.g.lineTo(points[(i*2)], points[(i*2)+1]);
        }
        for (let i = 0; i < points.length / 2; i++) {
            this.g.beginFill(0xff0022);
            this.g.drawCircle(points[(i*2)], points[(i*2)+1], 10);
            this.g.endFill();
        }
        /*
        for (let i = 0; i < points.length; i++) {
            this.g.lineTo(points[i].x, points[i].y);
        }
        for (let i = 0; i < points.length; i++) {
            this.g.beginFill(0xff0022);
            this.g.drawCircle(points[i].x, points[i].y, 10);
            this.g.endFill();
        }
        */
    }
    /*
    draw() {
        this.g.clear();
        this.g.lineStyle(2, 0xffc2c2);
        this.g.moveTo(this.rope.points[0].x, this.rope.points[0].y);
        for (let i = 1; i < this.rope.points.length; i++) {
            this.g.lineTo(this.rope.points[i].x, this.rope.points[i].y);
        }
        for (let i = 1; i < this.rope.points.length; i++) {
            this.g.beginFill(0xff0022);
            this.g.drawCircle(this.rope.points[i].x, this.rope.points[i].y, 10);
            this.g.endFill();
        }
    }
    */
}
