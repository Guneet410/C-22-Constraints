const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  //ellipseMode(RADIUS);

  ball = new Ball(200,100,20);
  ball2 = new Ball(200,200,20);
  con = Matter.Constraint.create({
    pointA : {x:200,y:20},
    bodyB : ball.body,
    length :100,
    stiffness:0.1
  })
  World.add(world,con)

  con2 = Matter.Constraint.create({
    length : 100,
    stiffness : 0.1,
    bodyA :  ball.body,
    bodyB : ball2.body,
    
  })
   World.add(world,con2);



}

function draw() 
{
  background(51);
  Engine.update(engine);
  ball.show();
  ball2.show();

  stroke (255);
  strokeWeight(4);
  line(con.pointA.x,con.pointA.y,ball.body.position.x,ball.body.position.y);

  line(con2.bodyA.position.x,con2.bodyA.position.y,ball2.body.position.x,ball2.body.position.y);
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.05,y:0})
  }
}

