var fixedRect;
var movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(450, 200, 50, 50);
}

function draw() {
  background("orange"); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 


  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2&&
    
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2&&
    
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
      
      movingRect.shapeColor = "pink";
      fixedRect.shapeColor = "red";

  }
  else{
      movingRect.shapeColor = "white";
      fixedRect.shapeColor = "white";
  }

  
  drawSprites();
}