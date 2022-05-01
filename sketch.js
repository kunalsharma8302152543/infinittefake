var obstacle,character,character_running,character_collided,backgroundo,backgroundimage,obstacleImg,ground,groundImg,invisibleGround,invisibleGround2;
var PLAY=1;
var END=0;
var gameState=PLAY;
var score;
function preload(){
    character_running = loadAnimation("man1.png","man2.png","man3.png","man4.png","man5.png","man6.png");
    backgroundimage = loadImage("jungle.jpg");
    obstacleImg = loadImage("obstacle.png");
    groundImg = loadImage("ground.jpg");
}

function setup() {
    createCanvas(800,400);
    backgroundo = createSprite(800,400);
    backgroundo.addImage("backgroundo",backgroundimage);
    backgroundo.scale = 1.5
    character = createSprite(80,250,10,10);
    character.scale = 0.9;
    character.addAnimation("character",character_running);
    obstacle = createSprite(450,285,20,20);
    obstacle.addImage("obstacle",obstacleImg)
    obstacle.scale = 2.5;
    score = 0;
    ground = createSprite(400,430,1000,50)
    ground.addImage("ground",groundImg)
    ground.scale = 2
    
    invisibleGround = createSprite(400,330,800,10);
    invisibleGround.visible = false;
    invisibleGround2 = createSprite(400,20,800,10);
    invisibleGround2.visible  = true;
    

}

function draw() {
 background(267);
 fill("green");
 textSize(25);
 text("Score: "+ score, 500,50);


 
 if(gameState === PLAY){
    if(frameCount % 110 === 0){
    obstacle.x = Math.round(random(300,650));
}

score = score + Math.round(getFrameRate()/60);
obstacle.lifetime = 200;
    ground.velocityX = -5;



    if (ground.x < 0){
        ground.x = ground.width/2;
      }
if(keyDown("space")&& character.y >= 100) {
    character.velocityY = -12;
}
character.velocityY = character.velocityY + 0.8


if(obstacle.isTouching(character)){
    gameState = END;
}

drawSprites();
}
else if(gameState === END){
    ground.velocityX = 0;
    obstacle.velocityX = 0;
}

character.collide(invisibleGround);
character.collide(invisibleGround2);
character.depth = ground.depth+1;
obstacle.velocityX = -5;
}