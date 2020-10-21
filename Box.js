class Box {
    constructor(x, y, height) {
      
      this.body = Bodies.rectangle(x, y, 20, height);
      this.width = 20;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER)
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
      

    }
  }