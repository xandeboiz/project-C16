var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;
var PLAY = 1;
var END;
var gamestate = PLAY;
var reds = new Group();
var blues = new Group();
var pinks = new Group();
var greens = new Group();
var arrowg = new Group();

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
}


function setup() {
  createCanvas(400, 400);
  
  
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  if(arroug.isTouching(greens)){
    greens.destroyEach();
    arroug.destroyEach();
    score = score + 3;
  }
  if(arroug.isTouching(blues)){
    blues.destroyEach();
    arroug.destroyEach();
    score = score + 2;
  }
  if(arroug.isTouching(pinks)){
    pinks.destroyEach();
    arroug.destroyEach();
    score = score + 1;
  }
  
  
  
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
 
  if(gamestate === PLAY){
    if (keyDown("space")) {
      createArrow();
      }

      Text("score: " + score ,300,100);

      bow.y = World.mouseY

      scene.velocityX = -3

      if (scene.x < 0){
        scene.x = scene.width/2;
      }

  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    var bloon = createSprite(0,200)
   switch(select_balloon){
    case 1: redBalloon();
    break;
    case 2: blueBalloon()
    break;
    case 3: greenBalloon()
    break;
    case 4: pinkBalloon()
break;
}

  }else if(gamestate === END){
scene.velocityX = 0;
  }
  

  }
  
  drawSprites();
}



 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
}
