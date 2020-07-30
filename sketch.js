
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bin1,bin2,bin3,papper,ground;

function setup() {
	createCanvas(1200, 700);

//x, y, width, height
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20)
	bin1 = new Bin(1030,455,200,20);
	bin2 = new Bin(930,415,20,100);   
	bin3 = new Bin(1130,415,20,100);
	papper = new Papper(200,400);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  papper.display();
  drawSprites();
 
}

function KeyPressed(){

if (keyCode === UP_ARROW){
	Matter.Body.applyForce(papper.body,papper.body.position,{x:85,y:-85})
}
}

