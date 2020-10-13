class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.image=loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        fill("red");
        image(this.image,0,0, this.w, this.h);
        pop()
    }
};