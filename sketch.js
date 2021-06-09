var boy;
var boyImg;
var bgImg
var Crocodile 
var cloud
var gameover
var car  
var policeCar
var river
var road
var gameState = 0;

function preload(){
bgImg = loadImage("images/boy.png");
car1Img = loadImage("images/car1.png");
car2Img = loadImage("images/car2.png");
car3Img = loadImage("images/car3.png");
PcImg = loadImage("images/police car.png");
GoImg = loadImage("images/Game over.png");
riverImg = loadImage("images/river.png");
roadImg = loadImage("images/road.png");
treesImg = loadImage("images/trees.png");
CrocodileImg = loadImage("images/cobra.png");
}
function setup(){
createCanvas(1200,1200);


trees = createSprite(165,699,50,50);
trees.addImage(treesImg);
trees.scale=0.5;

boy=createSprite(45,900,50,50)
boy.addImage(bgImg);
boy.scale=0.3


gameover=createSprite(250,100,50,50)
gameover.addImage(GoImg)
gameover.scale=0.2


roadsGroup =createGroup();
riverGroup =createGroup();
}

function draw(){
background(63, 219, 28);
text(mouseX + ","+ mouseY,mouseX,mouseY);
spawnRoads();
spawnriver();
drawSprites();
spawnCrocdile()
//console.log(car.x)

}

function spawnRoads() {
       if (frameCount % 60 === 0) {
      road = createSprite(1147,1031,50,50);
      road.addImage(roadImg);
      road.scale = 0.5;
      road.velocityX = -3;

      car = createSprite(45,1120,50,50);
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: car.addImage(car1Img);
                break;
        case 2: car.addImage(car2Img);
                break;
        case 3: car.addImage(car3Img);
                break;
        case 4: car.addImage(PcImg);
                break;
        default: break;
      }
        car.scale =0.1;
        car.y = Math.round(random(949,1132));
        car.velocityX = Math.round(random(3,6));

        car.depth = road.depth;
        car.depth +=1;
      
       //assign lifetime to the variable
       //road.lifetime = 500;

       roadsGroup.add(road);
      //reset road 
       if (road.x < 0){
        road.x = road.width/4;
      }
    }
  }


  function spawnriver() {
    if (frameCount % 60 === 0) {
        river=createSprite(1149,150,50,50)
        river.addImage(riverImg);
        
        river.scale = 2;
        river.velocityX = -3;

      
   
    //assign lifetime to the variable
         river.lifetime = 500;

         riverGroup.add(river);
    
    if (river.x < 0){
        river.x = river.width/4;
   }
  
   
 }
  }

  function spawnCrocdile(){
    if (frameCount % 100 === 0) {
    Crocodile=createSprite(16,439,50,50)
    Crocodile.addImage(CrocodileImg);
    Crocodile.scale=0.3
    Crocodile.velocityX=3
    }
    
  }

  function spawnTrees(){
    if (frameCount % 60 === 0) {
      trees = createSprite(165,699,50,50);
      trees.x=Math.round(random(0,1163))
      trees.y=Math.round(random(870,750))
      trees.addImage(treesImg);
      trees.scale=0.5;
      trees.lifetime = 500;
    }
  }