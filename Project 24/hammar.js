class Hammar {
    constructor(x, y, width, height) {
      var options = {
          'restitution':2,
          'friction':1.0,
          'density':0.5,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("green");
      fill("cyan");
      rect(0, 0, this.width, this.height);
      pop();