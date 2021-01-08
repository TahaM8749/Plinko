const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, body;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,800,480,20);
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight));
  for (var j = 15; j < 550; j=j+50) { 
    plinkos.push(new Plinko(j,100)); 
  }
  for (var j = 15; j < 575; j=j+50) { 
    plinkos.push(new Plinko(j,200)); 
  }
  for (var j = 15; j < 550; j=j+50) { 
    plinkos.push(new Plinko(j,300)); 
  }
  for (var j = 15; j < 575; j=j+50) { 
    plinkos.push(new Plinko(j,400)); 
  }

  }
  
  Engine.run(engine);
}

function draw() {
  background("lightGray");  
  Engine.update(engine);
  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var j = 0; j < plinkos.length; j++) { 
    plinkos[j].display(); 
  }
  

  if(frameCount%60===0) {
    particles.push(new Particle(random(0,480),10,10));
  }
  for(var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  
  ground.display();


  drawSprites();

}