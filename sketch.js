const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var polygon;
var slingShot;
var p1, p2;
var te;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  block1 = new Block(300,275);
  console.log(block1);
  block2 = new Block(330,275);
  block3 = new Block(360,275);
  block4 = new Block(390,275);
  block5 = new Block(420,275);
  block6 = new Block(450,275);
  block7 = new Block(480,275);
  //nivel dos
  block8 = new Block(330,235);
  block9 = new Block(360,235);
  block10 = new Block(390,235);
  block11 = new Block(420,235);
  block12 = new Block(450,235);
  //nivel tres
  block13 = new Block(360,195);
  block14 = new Block(390,195);
  block15 = new Block(420,195);
  //parte superior
  block16 = new Block(390,155);

  stand2 = new Stand(700,200,200,10);

blockA= new Block (640, 180);
blockB= new Block (670, 180);
blockC= new Block (700, 180);
blockD= new Block (730, 180);
blockE= new Block (760, 180);

blockF= new Block (670, 140);
blockG= new Block (700, 140);
blockH= new Block (730, 140);

blockI= new Block (700, 100);

  //soporte poligonal con la resortera

  polygon = new poligono (110, 140);

  slingShot = new Slingshot(polygon.body, {x:110,y:140});

  p1 = new paredes (0, 200)
  p2 = new paredes (900, 200)

  te = new techo ();
}
function draw() {
  background(56,44,44); 
 
 
  textSize(14);
  text("Arrastra el polígono para destruir los bloques y presiona espacio para volver a tirar",220,30);


  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 
  blockA.display();
  blockB.display();
  blockC.display();
  blockD.display();
  blockE.display();
  blockF.display();
  blockG.display();
  blockH.display();
  blockI.display();

  polygon.display();
 
  slingShot.display();
  
  p1.display();
  p2.display();
  te.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition (polygon.body, {x:110, y:140});

      slingShot.attach(polygon.body);
  }
}
