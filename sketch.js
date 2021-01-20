var car, wall, speed, weight


function setup() {
  createCanvas(1500,400);
  speed= random(55, 90);
  weight= random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, 60, height/2);
}

function draw() {
  background(0);  
  drawSprites();

  car.velocityX = speed;
  if(istouching(car, wall)){
    deformation = (0.5*weight*speed*speed)/22500
    if(deformation<100){
      car.shapeColor= "green"
    }
    else if(deformation>100 && deformation<180){
     car.shapeColor = "yellow"
    }
    else if(deformation>180){
      car.shapeColor = "red"
    }
  }
}

