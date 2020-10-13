class dustbin{
    constructor(x,y){
       
    
    this.x=x;
    this.y=y;
    
    this.dustbinWidth=200;
    this.dustbinHeight=100;
    this.wallThickness=20;
    this.angle=0;
    this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinThickness,{isStatic:true});
    this.leftBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
    Matter.Body.setAngle(this.leftBody,this.angle);
    this.rightBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
    Matter.Body.setAngle(this.rightBody,-1*this.angle);
    World.add(world,this.bottomBody);
    World.add(world,this.rightBody);
    World.add(world,this.leftBody);
    }
    display(){
    var posB=this.bottomBody.position;
    var posR=this.rightBody.position;
    var posL=this.leftBody.position;
    push()
    translate(posL.x,posL.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill("red");
    stroke("white");
    rotate (this.angle);
    rect(0,0,this.wallThickness,this.dustbinHeight);
    pop()

    push()
    translate(posR.x,posR.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill("red");
    stroke("white");
    rotate (-1*this.angle);
    rect(0,0,this.wallThickness,this.dustbinHeight);
    pop()

    push()
    translate(posB.x,posB.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill("red");
    stroke("white");
    rect(0,0,this.dustbinWidth,this.wallThickness);
    pop()
    
    }
    
    
    }