class Hero{
    constructor(x,y,r)
    {
        var options ={
            'frictionAir':0.005,
            'density':1,
        }
        this.x=x;
      this.y=y;
      this.r=r
      this.image=loadImage("S1.png");
      this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      World.add(world, this.body);
    }
    display(){
        var heropos=this.body.position;		
              push()
              translate(heropos.x, heropos.y);
              // rectMode(CENTER)
              // rotate(this.body.angle)
              fill(255,0,255)
              imageMode(CENTER);
              ellipseMode(RADIUS)
              image(this.image, 0,0,this.r*2, this.r*2)
              pop()
             
}
}