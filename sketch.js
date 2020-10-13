
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dust,ball,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=new paper(200,450,20);
grround=new Ground(800,680,1600,40)
d=new Divisions(1250,610,100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
grround.display();
ball.display();
d.display();

}

function keyPressed(){

if (keyCode===UP_ARROW){

	Body.applyForce(ball.body,ball.body.position,{x:60,y:-85});
}

}


