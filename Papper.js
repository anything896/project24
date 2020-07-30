class Papper{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        }
        this.x = x;
        this.y=y;
        this.r=r
        this.body = Bodies.rectangle(this.x, this.y,this.r/2, options);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
        strokeWeight(3)
        fill (255,0,255)
        ellipse(0,0,this.r,this.r)
        pop();
      }
}