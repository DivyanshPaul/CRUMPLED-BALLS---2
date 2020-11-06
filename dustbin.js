class dustbin
{
    constructor(x,y,width,h)
{
  
  this.obj=Bodies.rectangle(x,y,width,h,{isStatic:true});

  this.width=width;
  this.height=h;
  this.x=x;
  this.y=y;
  World.add(world,this.obj);
}   
 display()
 {
     
     rectMode(CENTER);
     fill("green");
     rect(this.x,this.y,this.width,this.height);
     
 }

}

/*class dustbin
{
    constructor(x,y,width,h)
{
  this.obj=Bodies.rectangle(x,y,width,h,{isStatic:true});
  this.width=width;
  this.height=h;
  this.x=x;
  this.y=y;
  World.add(world,this.obj);
}   
 display()
 {
     rectMode(CENTER);
     fill("grey");
     stroke("white");
     strokeWeight(5);
     rect(this.x,this.y,this.width,this.height);
 }

}*/