const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world 
var ground,ball
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  var options = {
  isStatic: true
  }
  ground=Bodies.rectangle(200,390,200,20, options)
  World.add(world,ground)
  var balloptions = {
    restitution: 1.2
  }
  ball=Bodies.circle(250, 100, 20, balloptions)
  World.add(world, ball)
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  rect(ground.position.x, ground.position.y,200,20)
  ellipse(ball.position.x, ball.position.y, 20, 20)
}