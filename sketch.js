const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var speed, weight;

function setup()
{
    var canvas = createCanvas(400,1600);
    engine = Engine.create();
    world = engine.world;

    car = createSprite(50,300,50,50);
    wall = createSprite(1500,200,60,height/2)   

    speed = random (55,90)
    weight = random (400,1500)
    car.velocityX = speed;
    deformation = 0.5*weight*speed*speed/2250

    if(wall.x-car.x < (car.width+wall.width)/2)
    {
        car.velocityX0;
        var deformation=0.5 * weighyt * speed * speed/22509;
        if (deformation>180)
        {
            car.shapeColor = color(255,230,0);
        }
    if (deformation<180 && deformation>100)
        {
            car.shapeColor = color(230,230,0);
        }
    if (deformation<100)    
        {
            car.shapeColor = color (0,250,0);
        }
    }
}

function draw()
{
    background(0);
    drawsprites();
    Engine.update(engine);
    speed = random (55,90)
    weight = random (400,1500)
    car.velocityX = speed;
    deformation = 0.5*weight*speed*speed/2250

    if(wall.x-car.x < (car.width+wall.width)/2)
    {
        car.velocityX0;
        var deformation=0.5 * weighyt * speed * speed/22509;
        if (deformation>180)
        {
            car.shapeColor = color(255,230,0);
        }
    if (deformation<180 && deformation>100)
        {
            car.shapeColor = color(230,230,0);
        }
    if (deformation<100)    
        {
            car.shapeColor = color (0,250,0);
        }
    }
    car.display(); 
    wall.display();   
} 
