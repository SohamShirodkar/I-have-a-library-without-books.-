var fixedRect,movingRect;
var obj1,obj2;
function setup() {
    createCanvas(1200,800);
  fixedRect=createSprite(500, 400, 50, 80);
  fixedRect.shapeColor='green';
  //fixedRect.velocityY=-5
  movingRect=createSprite(500, 200, 80, 30);
  movingRect.shapeColor='green';
  //movingRect.velocityY=5;
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor='green';
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor='green';
  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor='green';
  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor='green'; 
  
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);

 if(isTouching(movingRect,gameObject1)){
        movingRect.shapeColor='red';
        gameObject1.shapeColor='red';
   }
 else{
      movingRect.shapeColor='green';
      gameObject1.shapeColor='green';
 }
 if(isTouching(movingRect,gameObject2)){
  movingRect.shapeColor='blue';
  gameObject2.shapeColor='blue';
}
else{
 movingRect.shapeColor='green';
 gameObject2.shapeColor='green';
}
BounceOff(movingRect, fixedRect);
  drawSprites();
}

