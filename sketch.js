const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,
block15,block16,block17,block18,block18,block19,block20,block21,block22,block23,block24,block25;
var ground1,ground2,ground3,polygon,shot,polyImg;


function preload(){

    polyImg=loadImage("polygon.png");

}

function setup(){
    canvas=createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(550,400,350,10);

    block1=new Block(430,380,40,50);
    block2=new Block(470,380,40,50);
    block3=new Block(510,380,40,50);
    block4=new Block(550,380,40,50);
    block5=new Block(590,380,40,50);
    block6=new Block(630,380,40,50);
    block7=new Block(670,380,40,50);

    block8=new Block(470,330,40,50);
    block9=new Block(510,330,40,50);
    block10=new Block(550,330,40,50);
    block11=new Block(590,330,40,50);
    block12=new Block(630,330,40,50);

    block13=new Block(510,280,40,50);
    block14=new Block(550,280,40,50);
    block15=new Block(590,280,40,50);

    block16=new Block(550,230,40,50);

    ground2=new Ground(1000,350,250,10);

    block17=new Block(920,330,40,50);
    block18=new Block(960,330,40,50);
    block19=new Block(1000,330,40,50);
    block20=new Block(1040,330,40,50);
    block21=new Block(1080,330,40,50);

    block22=new Block(960,280,40,50);
    block23=new Block(1000,280,40,50);
    block24=new Block(1040,280,40,50);

    block25=new Block(1000,230,40,50);

    ground3=new Ground(650,590,1300,20);

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    shot=new Slingshot(this.polygon,{x:130,y:200});
    
}

function draw(){
    background(rgb(60,46,46));
    Engine.update(engine);

    textSize(20);
    fill(rgb(233,229,198));
    text("Drag the Hexagonal stone and Release it,to launch it towards the blocks.",200,30);

    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    ground3.display(); 

    imageMode(CENTER);
    image(polyImg,polygon.position.x,polygon.position.y,40,40);

    shot.display();
    
}
 
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    shot.fly();
  }