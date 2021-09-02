class computerArcher{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
          };
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/computerArcher.png");

    World.add(world, this.body);
     }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        Matter.Body.setAngle(this.body,PI/2);
        if(keyIsDown==="UP" && computerArcher.body.angle < 1.77){
            angle = 0.1;
        }else{
            angle=-0.1;
        }
        if(keyIsDown==="DOWN" && computerArcher.body.angle > 1.47){
            angle = -0.1;
        }else{
            angle =0.1;
        }
        pop();    
    }
}