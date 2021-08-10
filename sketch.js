var iss,issimg,spaceCraft,scimg1,scimg2,scimg3,scimg4,backimg;
var hasDocked=false;

function preload() {
backimg=loadImage("images/spacebg.jpg");
issimg=loadImage("images/iss.png");
scimg1=loadImage("images/spacecraft1.png");
scimg2=loadImage("images/spacecraft2.png");
scimg3=loadImage("images/spacecraft3.png");
scimg4=loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,800);
  block=createSprite(280,270,25,25);
  spaceCraft=createSprite(285,540);
  spaceCraft.addImage(scimg1);
  spaceCraft.scale=0.25;
  spaceCraft.setCollider("rectangle",0,-150,100,100);
  iss=createSprite(350,250);
  iss.addImage(issimg);
}

function draw() {
  background(backimg);  
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1);
    if(keyDown(UP_ARROW)){
    spaceCraft.y=spaceCraft.y-2;
    spaceCraft.addImage(scimg2);
    }else if(keyDown(DOWN_ARROW)){
    spaceCraft.y=spaceCraft.y+2;
    spaceCraft.addImage(scimg1);
    }else if(keyDown(LEFT_ARROW)){
    spaceCraft.x=spaceCraft.x-2;
    spaceCraft.addImage(scimg4);
    }else if(keyDown(RIGHT_ARROW)){
    spaceCraft.x=spaceCraft.x+2;
    spaceCraft.addImage(scimg3);
    }else{spaceCraft.addImage(scimg1);
    }
    if(spaceCraft.isTouching(block)){
      hasDocked=true;
    }
  }
  if(hasDocked===true){
    textSize(30);
    fill("green");
    text("Docking Successful",300,400);
    spaceCraft.addImage(scimg1);
  }
  drawSprites();
}