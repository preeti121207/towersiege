const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

}
function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  platform = new Ground(480,230,200,20);
  block1 = new Block(480,200,30,30);
  
  block2 = new Block(450,200,30,30);
  block3 = new Block(420,200,30,30);
  block4 = new Block(510,200,30,30);
  block5 = new Block(540,200,30,30);  
  block6 = new Block(480,170,30,30);
  block7 = new Block(450,170,30,30);
  block8 = new Block(510,170,30,30);
  block9 = new Block(480,140,30,30);
  polygon = new Polygon(170,200,20,20);
  SlingShot = new Sling(polygon.body,{x:170,y:200});
  ground = new Ground(400,380,800,40);
 
 
  Engine.run(engine);
}

function draw() {
  background(150);  
  platform.display();
  
  block1.display()
 
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon.display();
  ground.display();

  SlingShot.display();

  drawSprites();

}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
	SlingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body, {x:170, y:200});
    SlingShot.attach(polygon.body);
  }
}
