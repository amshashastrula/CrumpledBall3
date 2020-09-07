
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,20,800,20);
}

function draw() {
  background(255,255,255);
  ground.display();  
  console.log("AMSHA");
  drawSprites();
}