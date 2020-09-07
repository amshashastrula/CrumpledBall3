
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670, width, 20)
	paper = new Paper(100, 200, 30,30);
	d1 = new Dustbin(600, 1000, 300,320)
	//r1 = new Dustbin(600, 650, 80, 280);
	//r2 = new Dustbin(650, 620, 280, 80);
	//r3 = new Dustbin(550, 620, 280, 80);
	launcher = new Launcher(paper.body, {x:200,y:260});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display(); 
  d1.display();
 // r2.display();
  //r1.display();
  //r3.display();
  launcher.display();
  ground.display();
  
 
}
function mouseDragged(){
      Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY})
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 1400, y: 3000});
	}
}

