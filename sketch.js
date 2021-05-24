const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg,ground,gimg;
var ski,skiImg;
var ice=[];
var maxSnow=100;

function preload(){
  bg=loadImage("snow1.jpg");
  gimg=loadImage("ground.PNG");
 skiImg = loadImage("ski.png")
}

function setup() {
  createCanvas(1300,600);
  
  engine=Engine.create();
  world= engine.world;
  


ground=createSprite(650,670);
ground.addImage(gimg);
ground.scale=3.2;
ground.velocityX=-10;

ski=createSprite(950,480);
ski.addImage(skiImg)
ski.scale=0.2;
ski.velocityX=-5;
ski.setCollider("rectangle",15, -20,100,180) 

if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,1000)));
  }
  }


}

function draw() {
  background(bg);  
  Engine.update(engine);

  ski.collide(ground);

  if(ground.x < 530){
    ground.x=600;
  }

  if(ski.x < 0){
    ski.x=950;
  }

  if(keyWentDown("space")&& ski.y >= 100) {
    ski.velocityY = -0.005;
}

//add gravity
ski.velocityY = ski.velocityY + 0.8

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
    


ground.display();

  
  drawSprites();

}