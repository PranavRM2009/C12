var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud






function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png")
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background(255);

  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 160) {
    trex.velocityY = -12;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  spawnClouds()
  //console.log(frameCount)
  drawSprites();
  
}

function spawnClouds(){
  //create clouds after every 80th frame
  // frameCount should be divisble be 80
  // 80%80 =0
  //81%80 = 1
  //88%80=8
  //150%80=70
  //160%80 = 0
  if(frameCount%60===0){
    cloud = createSprite(600,100,40,10)
    cloud.velocityX = -3
    cloud.addImage("flying", cloudImage);
    cloud.scale=0.5

    // console.log("trex depth"+trex.depth)
    // console.log("cloud depth"+cloud.depth)
    
    cloud.depth=trex.depth
    trex.depth++
    
    cloud.y=Math.round(random(10,60))
  }
}

