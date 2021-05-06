var plane, planeIMG, planeIMG2;
var bgIMG;
var windIMG;

function preload() {
 
  planeIMG = loadImage("Airplane.png");
  planeIMG2 = loadImage("Airplane2.png");
  bgIMG = loadImage("Background3.jpg");
  windIMG = loadImage("Wind.png");
  
}

function setup() {
  createCanvas(1000,500);  
  
  plane = createSprite(500, 10, 30, 30);
  plane.addImage(planeIMG);
  plane.scale = 0.36;
  plane.velocityY = 0.4;

}

function draw() {

  background(bgIMG);

  if(keyDown("right") || keyDown("d")){
    plane.x = plane.x + 5;
    plane.addImage(planeIMG2);
    plane.scale = 0.0115;
  }
  if(keyDown("left") || keyDown("a")){
    plane.x = plane.x - 5;
    plane.addImage(planeIMG);
    plane.scale = 0.36;
  }

  makeWind();

  drawSprites()

}

function makeWind(){

  if(frameCount%60 === 0){
    var wind = createSprite(10, -8, 15, 15);
    wind.addImage(windIMG);
    wind.velocityY = 0.7;
    wind.scale = 0.013;
    //wind.x = 
  }

}