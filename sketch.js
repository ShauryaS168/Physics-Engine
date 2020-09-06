const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var options={
        restitution:1.2
    }
    ball = Bodies.circle(200,100,10,options);
    World.add(world,ball);
    var ball2_options={
        restitution:1.2
    }
    ball2 = Bodies.circle(100,100,10,ball2_options);
    World.add(world,ball2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    fill ("yellow");
    ellipse(ball.position.x,ball.position.y,10,10);
    ellipseMode(RADIUS);
    fill ("blue");
    ellipse(ball2.position.x,ball2.position.y,10,10);
}