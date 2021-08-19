class paredes{

    constructor(x, y){
        var options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x, y, 5, 400, options)
          this.width = 5;
          this.height = 400;
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,5,400);
    }
};