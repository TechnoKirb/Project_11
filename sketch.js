var sky,robot, path, roboto, left_wall, right_wall
function preload(){
  //pre-load images
  path=loadImage('path.png')
  robot=loadAnimation('Runner_1.png','Runner_2.png')
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  sky=createSprite(200,200,200,200)
  sky.addImage(path)
  sky.velocityY=-0.5
  sky.scale=0.7
  roboto=createSprite(200,300,50,30)
  roboto.addAnimation('robotoA',robot)
  roboto.scale=0.085
  left_wall=createSprite(400,200,10,800)
  left_wall.visible=false
  right_wall=createSprite(0,200,10,800)
  right_wall.visible=false
}

function draw() {
  background(0);
  drawSprites()
  if (sky.y<50){
    sky.y=200
  }
  roboto.x=mouseX
  roboto.collide(left_wall)
  roboto.collide(right_wall)

}
