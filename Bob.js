class Bob {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':0.75,
          'density':0.8 , 
          'isStatic':false , 
          frictionAir:0
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 60;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("yellow");
      ellipseMode(CENTER);
      ellipse(pos.x , pos.y , this.radius , this.radius);
      pop();
    }
  }