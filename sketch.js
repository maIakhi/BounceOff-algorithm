function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(600, 200, 50, 50);
  rect1.shapeColor = "red";
  rect2.shapeColor = "blue";
  rect1.velocityX = 5
  rect2.velocityX = -5
}

function draw() {
  background(255,255,255);  
  drawSprites();
  BounceOff(rect2,rect1)
}

