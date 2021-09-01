var ship, ship_sailing, edges;
var seaImage;
var sea

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  

  // creating sea
  sea = createSprite(300,180,400,20)
  sea.addImage(seaImage)
  sea.velocityX =-3
  sea.scale=0.5

  ship =createSprite(50,160,20,50);
  ship.addAnimation("running", ship_sailing);
  edges = createEdgeSprites();

  // scale & position for ship
  ship.x = 100
  ship.y = 250
  ship.scale=0.3
}

function draw() {
  background("white");
  if(sea.x<0){
    sea.x=200
  }
  drawSprites()
}