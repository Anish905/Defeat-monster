class Monster{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
        }
        this.x=x;
      this.y=y;
      this.r=r
      this.image=loadImage("M1.png");
      this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      World.add(world, this.body);
    }
    display(){
        var monsterpos=this.body.position;		
              push()
              translate(monsterpos.x, monsterpos.y);
              // rectMode(CENTER)
              // rotate(this.body.angle)
              fill(255,0,255)
              imageMode(CENTER);
              ellipseMode(RADIUS)
              image(this.image, 0,0,this.r*2, this.r*2)
              pop()
             
}
}