var wall,thickness, damage;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50, 200, 50, 30);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  bullet.collide(wall);

  console.log(damage);

  if(bullet.x > 1450){
    bullet.velocityX = 0;
    damage = (0.5 * weight *speed * speed)/thickness;

    if(damage <= 10 ){
      bullet.shapeColor = color("green");
    }

    if(damage >10){
      bullet.shapeColor = color("red");
    }
  }

  drawSprites();
}