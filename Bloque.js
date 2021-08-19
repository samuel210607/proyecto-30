class Block{
    constructor(x, y) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
       // this.visiblity = 225;
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        this.image= loadImage("Bloque.png")
        World.add(world, this.body);
        
      }
     
      display(){
        var pos= this.body.position;
        if(this.body.speed < 6){
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
      else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 0, 0);
        pop();
      }
    }
}