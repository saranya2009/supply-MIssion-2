var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options={
	isStatic:true
}
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow";

	line1Sprite=createSprite(300,height-75,15,70);
	line1Sprite.shapeColor="red";

	line2Sprite=createSprite(370,height-48,150,15);
	line2Sprite.shapeColor="red";

	line3Sprite=createSprite(450,height-75,15,70);
	line3Sprite.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 line1  = Bodies.rectangle(300,height-75,15,70);
 
	 line2  = Bodies.rectangle(370,height-48,150,15,{isStatic:true});
	  
	 line3  = Bodies.rectangle(450,height-75,15,70);
	

		Engine.run(engine);
  
}


function draw() {
	 rectMode(CENTER);
  background("orange");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  line2.x=line2Sprite.x;
  line2.y=line2Sprite.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic( packageBody,false);
    
  }
}



