const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    //Level one
    block1 = new Box(330,235,30,40);
    block2 = new Box(360,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(420,235,30,40);
    block5 = new Box(450,235,30,40);
}

function draw(){
    Engine.update(engine);

    ground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
}

function mouseDragged(){
    //Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
