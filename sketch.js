var dustbinImg,dustS;
var d1,d2,d3;
var g;
var b;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body  = Matter.Body;
const render = Matter.Render;

function preload()
{
  dustbinImg=loadImage("dustbingreen.png");
}
function setup()
 {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
   g = new ground(500,490,1000,20);
  
   d1 = new dustbin(630,470,90,6);
   d2 = new dustbin(580,460,5,120);
   d3 = new dustbin(680,460,5,120);
   
   dustS=createSprite(630,420,120,120);
   dustS.addImage(dustbinImg);
   dustS.scale=0.4;
    
    b= new pap(100,400,50);

	Engine.run(engine);
  console.log(b);
}

function draw() 
{
  background("lightblue");

  d1.display();
  d2.display();
  d3.display();

  b.display();

  g.display();

  
  Engine.update(engine);

       keyPressed();
  
  drawSprites();
}

function keyPressed()
{
  if(keyDown(UP_ARROW))
  {
   Matter.Body.applyForce(b.body,b.body.position,{x:115,y:-120});
  }
}