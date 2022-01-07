

class Cannon{
    constructor(x,y,w,h,a){
        
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
        this.cannonimage = loadImage("Images/canon.png")
        this.cannonbase = loadImage("Images/cannonBase.png")
    }
    
    display(){
        push()
        imageMode(CENTER)
        image(this.cannonimage,this.x,this.y,this.w,this.h)
        pop()

        image(this.cannonbase,70,28,200,200)
    }
}


























