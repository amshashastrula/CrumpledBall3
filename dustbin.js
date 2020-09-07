class Dustbin{
    constructor(x, y ,width, height){
        var options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.image = loadImage("dustbin.png");
    }
        display(){
            image(this.image,600,380);
            rectMode(CENTER)
            fill("red");
            rect(this.body.position.x, this.body.position.y,this.width, this.height);
            imageMode(CENTER)
            image(this.image, 730, 530, this.width, this.height);
        }
}
