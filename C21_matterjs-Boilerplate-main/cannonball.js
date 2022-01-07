//Design for the ground - blueprint

class Cannonball {
    //PROPERTIES
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.radius = 30
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
        this.image = loadImage("Images/cannonball.png")
    }

    //FUNCTIONS
    display(){
        push(); //adds new properties
        imageMode(CENTER); //Instructs the computer to take the x & y as the centre of rectangle
        image(this.image,  this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();  //removes last added properties
    }
}

/*
trex.visible

this - keyword that refers to the object to be created later

trex = createSprite(50, 60, 50, 50)
*/