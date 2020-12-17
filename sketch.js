
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1 ,bob2 , bob3 , bob4 , bob5 ;
var rope1 , rope2 , rope3 , rope4 , rope5 ;
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(100,120,40);
	bob2 = new Bob(150,120,40);
	bob3 = new Bob(200,120,40);
	bob4 = new Bob(250,120,40);
	bob5 = new Bob(300,120,40);

	rope1 = new Rope(rope1.body,bob1.body);
	rope2 = new Rope(rope2.body,bob2.body);
	rope3 = new Rope(rope3.body,bob3.body);
	rope4 = new Rope(rope4.body,bob4.body);
	rope5 = new Rope(rope5.body,bob5.body);

	roof1 = new Roof(400,600,550,20);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof1.display();
  
  drawSprites();
 
}



