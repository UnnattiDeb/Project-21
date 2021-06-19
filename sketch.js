var border1,border2;
var Bullet, Wall;
var Speed,Weight,Thickness;

function setup(){
    createCanvas(1600,400);
    Bullet = createSprite(200,200,50,50);
    Bullet.velocityX=20;
    Bullet.shapeColor="white";

    Wall= createSprite(1200,200,Thickness,height/2);
    Wall.shapeColor = color("80,80,80");
    
    Speed = random(223,321);
    Weight= random(30,52);
    Thickness=random(22,83);
    Bullet.velocityX=Speed;
}    

function draw(){
    background(0);

    if (Wall.x - Bullet.x < (Bullet.width+Wall.width)/2){
        Bullet.velocityX=0;
        var Damage= 0.5*Speed*Speed*Weight/(Thickness*Thickness*Thickness);   
        if (Damage>10){
           Wall.shapeColor= "red";            
        } 
         if (Damage<10){
             Wall.shapeColor="green";
        }    
    }
      drawSprites();
}