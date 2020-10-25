
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var food;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");

   obstacleImage=loadImage("obstacle.png");
 
}
function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.velocity=ground.width/2
  console.log(ground.x);
  
  bananaGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
 background(255);
  food();
  obstacles();
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY= -10;
  }
  if(monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach();
  }
  if(monkey.isTouching(obstacleGroup)){
      monkey.velocityY=0;
  ground.velocityX=0;
  monkey.visible = false;
  obstacleGroup.setVelocityXEach(0);
  bananaGroup.setVelocityXEach(0);
  obstacleGroup.lifetime=-1;
    bananaGroup.lifetime=-1;
  }
    
var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100, 50);
  
  monkey.velocityY=monkey.velocityY+0.8;
  ground=createSprite(400,350,900,10);
  monkey.collide(ground);

  drawSprites();
}
function food(){
  if (frameCount% 80 ===0){
    var banana =createSprite(400,120,30,30);
    banana.y=Math.round(random(120,200));
   
    banana.addImage(bananaImage);
    banana.scale=0.1
     banana.velocityX =-5;
    banana.lifetime=300;
   
  
    bananaGroup.add(banana);
  
  }
}

function obstacles(){
 if (frameCount % 200 === 0){
  var obstacle = createSprite(400,325,10,10);
   obstacle.velocityX = -5;
   obstacle.lifetime=300;
   obstacle.addImage(obstacleImage);
   
   obstacleGroup.add(obstacle);
   obstacle.scale=0.15;
 }
}


