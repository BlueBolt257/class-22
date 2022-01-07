//NAMESPACING - giving nicknames
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
let world;
var ground, tower, cannon, cannonball;
var backgroundIMG, towerIMG;

function preload(){
  backgroundIMG = loadImage("Images/Pirate-Backround.gif")
  towerIMG = loadImage("Images/tower.png")
}


function setup() {
  createCanvas(1200,600);
  engine = Engine.create(); //creating a copy of Matter.Engine that we can manipulate
  world = engine.world;
  
  ground = new Ground(600, height, 1200, 20);

  var tower_options = {
    isStatic: true
  }
  tower = Bodies.rectangle(160, 350, 160, 310, tower_options);
  World.add(world, tower);

  cannon = new Cannon(180,110,130,100)

  cannonball = new Cannonball(cannon.x, cannon.y)
}

function draw() 
{
  background(51);
  image(backgroundIMG, 0, 0, 1200, 600);
  Engine.update(engine);

  ground.display();
  cannon.display();
  cannonball.display();

  push();
  imageMode(CENTER);
  image(towerIMG, tower.position.x, tower.position.y, 160, 310);
  pop();
}

/*
PHYSICS ENGINE
library that follows real world physics - MATTER.js

1. Universe - ENGINE (Matter.Engine)
2. World - Matter.World
3. Bodies - Matter.Bodies





OBJECT ORIENTED PROGRAMMING
  Objects
    1. Properties
    2. Functions

  Steps to create an objects
    1. Design of the object - CLASS
    2. Creating the object - Properties are assigned 
    3. Using functions if & when required

*/
