var Ferrari
var score=0
var speedx=-1,speedy=0
var lives=3
let carCooldown = 0;
function preload(){
  cop=loadImage("./Images/Cop.png")
  heart=loadImage("./Images/Heart.png")
  gas=loadImage("./Images/Gas.png")
  ferrari=loadImage("./Images/Ferrari.png")

  point=loadSound("./Sounds/Points.wav");
  Dead=loadSound("./Sounds/Heart.wav");
  police=loadSound("./Sounds/Police.mp3")
  car=loadSound("./Sounds/Car.wav")
}
function setup() {
  createCanvas(560, 680);
  back=createSprite(250,250,500,500)
  back.shapeColor="black"

heart1 = createSprite(400, 30, 20, 20);
heart1.addImage(heart);
heart1.scale = 0.1;

heart2 = createSprite(450, 30, 20, 20);
heart2.addImage(heart);
heart2.scale = 0.1;

heart3 = createSprite(500, 30, 20, 20);
heart3.addImage(heart);
heart3.scale = 0.1;

myButton = createButton("RESTART");
myButton.position(-220, 350);
myButton.mousePressed(reset);

  walls=new Group();

  //outer walls
  walls.add(createSprite(280,70,550,10));
  walls.add(createSprite(10,160,10,190));
  walls.add(createSprite(550,160,10,190));
  walls.add(createSprite(60,250,110,10));
  walls.add(createSprite(500,250,110,10));
  walls.add(createSprite(60,330,110,10));
  walls.add(createSprite(500,330,110,10));
  walls.add(createSprite(60,370,110,10));
  walls.add(createSprite(500,370,110,10));
  walls.add(createSprite(60,450,110,10));
  walls.add(createSprite(500,450,110,10));
  walls.add(createSprite(110,290,10,90));
  walls.add(createSprite(450,290,10,90));
  walls.add(createSprite(110,410,10,90));
  walls.add(createSprite(450,410,10,90));
  walls.add(createSprite(10,560,10,230));
  walls.add(createSprite(550,560,10,230));
  walls.add(createSprite(280,670,550,10));
  
  //inner walls
  walls.add(createSprite(280,110,30,90));
  walls.add(createSprite(80,130,70,50));
  walls.add(createSprite(480,130,70,50));
  walls.add(createSprite(80,200,70,30));
  walls.add(createSprite(480,200,70,30));
  walls.add(createSprite(190,130,90,50));
  walls.add(createSprite(370,130,90,50));
  walls.add(createSprite(280,200,150,30));
  walls.add(createSprite(160,260,30,150));
  walls.add(createSprite(400,260,30,150));
  walls.add(createSprite(160,410,30,90));
  walls.add(createSprite(400,410,30,90));
  walls.add(createSprite(190,260,90,30));
  walls.add(createSprite(370,260,90,30));
  walls.add(createSprite(280,230,30,90));
  walls.add(createSprite(280,440,150,30));
  walls.add(createSprite(190,500,90,30));
  walls.add(createSprite(370,500,90,30));
  walls.add(createSprite(280,470,30,90));
  walls.add(createSprite(80,500,70,30));
  walls.add(createSprite(480,500,70,30));
  walls.add(createSprite(280,560,150,30));
  walls.add(createSprite(280,590,30,90));
  walls.add(createSprite(140,620,190,30));
  walls.add(createSprite(420,620,190,30));
  walls.add(createSprite(100,530,30,90));
  walls.add(createSprite(460,530,30,90));
  walls.add(createSprite(160,590,30,90));
  walls.add(createSprite(400,590,30,90));
  walls.add(createSprite(30,560,50,30));
  walls.add(createSprite(530,560,50,30));

  //ghost home
  walls.add(createSprite(210,350,10,90));
  walls.add(createSprite(350,350,10,90));
  walls.add(createSprite(280,390,150,10));
  walls.add(createSprite(230,310,50,10));
  walls.add(createSprite(330,310,50,10));

  door=createSprite(280,310,50,10);
  door.shapeColor="red"

  for (let i = 0; i < walls.length; i++) {
    walls[i].shapeColor = "blue";
  }

   //intersections
  zones= new Group();
  
  zones.add(createSprite(240,280,2,2))
  zones.add(createSprite(320,280,2,2))
  zones.add(createSprite(180,420,2,2))
  zones.add(createSprite(380,420,2,2))
  zones.add(createSprite(180,360,2,2))
  zones.add(createSprite(380,360,2,2))
  zones.add(createSprite(140,360,2,2))
  zones.add(createSprite(420,360,2,2))
  zones.add(createSprite(260,660,2,2))
  zones.add(createSprite(300,660,2,2))
  zones.add(createSprite(60,600,2,2))
  zones.add(createSprite(500,600,2,2))
  zones.add(createSprite(120,540,2,2))
  zones.add(createSprite(440,540,2,2))
  zones.add(createSprite(180,540,2,2))
  zones.add(createSprite(380,540,2,2))
  zones.add(createSprite(200,480,2,2))
  zones.add(createSprite(360,480,2,2))
  zones.add(createSprite(260,540,2,2))
  zones.add(createSprite(300,540,2,2))
  zones.add(createSprite(120,480,2,2))
  zones.add(createSprite(440,480,2,2))
  zones.add(createSprite(120,160,2,2))
  zones.add(createSprite(440,160,2,2))
  zones.add(createSprite(140,220,2,2))
  zones.add(createSprite(420,220,2,2))
  zones.add(createSprite(20,160,2,2))
  zones.add(createSprite(540,160,2,2))
  zones.add(createSprite(140,80,2,2))
  zones.add(createSprite(420,80,2,2))
  zones.add(createSprite(260,180,2,2))
  zones.add(createSprite(300,180,2,2))
  zones.add(createSprite(200,160,2,2))
  zones.add(createSprite(360,160,2,2))

   for (let i = 0; i < zones.length; i++) {
    zones[i].visible = false;
  }

  food=new Group();

for (let x = 10; x < width; x += 20) {
  for (let y = 90; y < height; y += 20) {
    let dot = createSprite(x, y, 5, 5);
    dot.shapeColor = "yellow";
    dot.addImage(gas)
    dot.scale=0.08
    food.add(dot);
  }
}

// Remove food that overlaps with any wall or the red door
for (let i = food.length - 1; i >= 0; i--) {
  let x = food[i].position.x;
  let y = food[i].position.y;

  // Remove if overlapping wall or door
  if (food[i].overlap(walls) || food[i].overlap(door)) {
    food[i].remove();
  }

  // ✅ Also remove if inside ghost zone (e.g., x: 200–360, y: 300–400)
  else if (x > 140 && x < 420 && y > 240 && y < 460) {
    food[i].remove();
  }
  else if (x>0&&x<120&&y>250&&y<350){
    food[i].remove();
  }
  else if (x>0&&x<120&&y>375&&y<450){
    food[i].remove();
  }
    else if (x>440&&x<560&&y>250&&y<350){
    food[i].remove();
  }
  else if (x>440&&x<560&&y>375&&y<450){
    food[i].remove();
  }
}
  Ferrari=createSprite(280,530, 10,10)
  Ferrari.addImage(ferrari);
  Ferrari.scale=0.08;

  cop1=createSprite(340,290,20,20)
  cop1.addImage(cop);
  cop1.scale=0.1
  cop1.speedx = 2;
  cop1.speedy = 2;

  cop2=createSprite(220,290,20,20)
  cop2.addImage(cop);
  cop2.scale=0.1
  cop2.speedx = 2;
  cop2.speedy = 2;

  cop3=createSprite(310,290,20,20)
  cop3.addImage(cop);
  cop3.scale=0.1
  cop3.speedx = 2;
  cop3.speedy = 2;

  cop4=createSprite(250,290,20,20)
  cop4.addImage(cop);
  cop4.scale=0.1
  cop4.speedx = 2;
  cop4.speedy = 2;

  cop5=createSprite(310,410,20,20)
  cop5.addImage(cop);
  cop5.scale=0.1
  cop5.speedx = 2;
  cop5.speedy = 2;

  cop6=createSprite(250,410,20,20)
  cop6.addImage(cop);
  cop6.scale=0.1
  cop6.speedx = 2;
  cop6.speedy = 2;

  cop7=createSprite(340,410,20,20)
  cop7.addImage(cop);
  cop7.scale=0.1
  cop7.speedx = 2;
  cop7.speedy = 2;

  cop8=createSprite(220,410,20,20)
  cop8.addImage(cop);
  cop8.scale=0.11
  cop8.speedx = 2;
  cop8.speedy = 2;

cop1.timer = 0;
cop2.timer = 0;
cop3.timer = 0;
cop4.timer = 0;
cop5.timer = 0;
cop6.timer = 0;
cop7.timer = 0;
cop8.timer = 0;

 
}

function draw() {
 background('black');
if (carCooldown > 0) carCooldown--;

if(keyDown("Right")||keyDown("d")){
  Ferrari.x += 3;
  Ferrari.rotation = 180;
  if (carCooldown === 0) {
    car.play();
    carCooldown = 40; // wait 20 frames
  }
}
else if(keyDown("Left")||keyDown("a")){
  Ferrari.x -= 3;
  Ferrari.rotation = 0;
  if (carCooldown === 0) {
    car.play();
    carCooldown = 40;
  }
}
else if(keyDown("Up")||keyDown("w")){
  Ferrari.y -= 3;
  Ferrari.rotation = 90;
  if (carCooldown === 0) {
    car.play();
    carCooldown = 40;
  }
}
else if(keyDown("Down")||keyDown("s")){
  Ferrari.y += 3;
  Ferrari.rotation = -90;
  if (carCooldown === 0) {
    car.play();
    carCooldown = 40;
  }
}
else{
  car.stop()
}

 if (Ferrari.x>560){
  Ferrari.x=10
 }
 if (Ferrari.x<0){
  Ferrari.x=550
 }

   Ferrari.overlap(food, function (collector, collected) {
    collected.remove(); // Dot disappears
    point.play()
    score+=10;
  });

heart1.visible = lives >= 1;
heart2.visible = lives >= 2;
heart3.visible = lives >= 3;

  aiGhost(cop1, speedx,speedy)
  aiGhost(cop2, speedx,speedy)
  aiGhost(cop3, speedx,speedy)
  aiGhost(cop4, speedx,speedy)
  aiGhost(cop5, speedx,speedy)
  aiGhost(cop6, speedx,speedy)
  aiGhost(cop7, speedx,speedy)
  aiGhost(cop8, speedx,speedy)

  Ferrari.bounceOff(walls)
  Ferrari.bounceOff(door)
  drawSprites();
  fill("red")
  textSize(20)
  text(score, 20, 50)
  if (score===2580){
    heart1.visible=false
    fill("red")
    textSize(20)
    text("WINNER",220,350);
    myButton.position(240, 350);
    noLoop()
    //reset fnction
  }
  if (lives===0){
    heart1.visible=false
    fill("red")
    textSize(20)
    text("GAME OVER",220,350);
    myButton.position(240, 350);
    police.play()
    noLoop()
    //reset function
  }

}

function aiGhost(sprite,speedx,speedy){
  if (sprite.x>560){
  sprite.x=10
 }
 if (sprite.x<0){
  sprite.x=550
 }
 sprite.collide(walls)
 sprite.collide(door)
  sprite.x += sprite.speedx;
  sprite.y += sprite.speedy;
  // If hit wall, pick new direction
  if (sprite.collide(walls)) {
    changeDirection(sprite);
  }

  // Only change direction when touching a zone and timer is 0
  if (sprite.overlap(zones) && sprite.timer <= 0) {
    changeDirection(sprite);
    sprite.timer = 30; // wait 30 frames before allowing another change
  }

  // Countdown timer
  if (sprite.timer > 0) {
    sprite.timer--;
  }


if (sprite.collide(Ferrari)){
  sprite.speedx=1
  sprite.speedy=1
  police.play()
  lives-=1
  sprite.x=260;
  sprite.y=300;
  Ferrari.x=280;
  Ferrari.y=530;
}

}

function changeDirection(sprite){
  let dir = random(['up', 'down', 'left', 'right']);
  if (dir === 'up') {
    sprite.speedx = 0;
    sprite.speedy = -2;
    sprite.rotation=180
  } else if (dir === 'down') {
    sprite.speedx = 0;
    sprite.speedy = 2;
    sprite.rotation=0
  } else if (dir === 'left') {
    sprite.speedx = -2;
    sprite.speedy = 0;
    sprite.rotation=90
  } else if (dir === 'right') {
    sprite.speedx = 2;
    sprite.speedy = 0;
    sprite.rotation=270
  }
}



function reset(){
  myButton.position(-200,200)
  score=0
  lives=3
  heart1.visible=true
  heart2.visible=true
  heart3.visible=true

  cop1.x = 340;
  cop1.y = 290;
  cop2.x = 220;
  cop2.y = 290;
  cop3.x = 310;
  cop3.y = 290;
  cop4.x = 250;
  cop4.y = 290;
  cop5.x = 310;
  cop5.y = 410;
  cop6.x = 250;
  cop6.y = 410;
  cop7.x = 340;
  cop7.y = 410;
  cop8.x = 220;
  cop8.y = 410;
  aiGhost(cop1, speedx,speedy)
  aiGhost(cop2, speedx,speedy)
  aiGhost(cop3, speedx,speedy)
  aiGhost(cop4, speedx,speedy)
  aiGhost(cop5, speedx,speedy)
  aiGhost(cop6, speedx,speedy)
  aiGhost(cop7, speedx,speedy)
  aiGhost(cop8, speedx,speedy)
   for (let i = food.length - 1; i >= 0; i--) {
    food[i].remove();
  }
    for (let x = 10; x < width; x += 20) {
    for (let y = 90; y < height; y += 20) {
      let dot = createSprite(x, y, 5, 5);
      dot.shapeColor = "yellow";
      dot.addImage(gas)
      dot.scale=0.08
      if (!dot.overlap(walls) && !dot.overlap(door) &&
          !(x > 140 && x < 420 && y > 240 && y < 460) &&
          !(x > 0 && x < 120 && y > 250 && y < 450) &&
          !(x > 440 && x < 560 && y > 250 && y < 450)) {
        food.add(dot);
      } else {
        dot.remove(); // don't add if invalid
      }
    }
  }
 loop();
}
