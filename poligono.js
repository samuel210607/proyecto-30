class poligono
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.1,
			friction:1,
			density:10
			}
	//	this.x=x;
	//	this.y=y;
		this.image=loadImage("poligono.png");
        this.width = 40;
        this.height = 40;
		this.body=Bodies.rectangle(x, y, 40, 40, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos =this.body.position;		
			push();
			translate(pos.x, pos.y);
			imageMode(CENTER);
			image(this.image, 0,0, 50, 50)
			pop();
			
	}

};