const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var ground, tower, towerIm, bgIm;
var cannon, angle;


function preload() {
 towerIm = loadImage("assets/tower.png");
 bgIm = loadImage("assets/background.gif");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

 ground = Bodies.rectangle(0,height-1,width*2, 1, options);
 World.add(world, ground);
 //console.log(ground);

tower = Bodies.rectangle(160,350,160,310,options);
World.add(world, tower);

angle = 20
cannon = new Cannon(180,110,130,100,angle)

}

function draw() {
  background(189);
 
  image(bgIm,0,0,1200,600);

  Engine.update(engine);
  var pos = ground.position;
  rect(pos.x, pos.y, width*2,1);
  
  push();
  imageMode(CENTER);
  image(towerIm, tower.position.x, tower.position.y, 160,310);
  pop();
  cannon.show()
}
