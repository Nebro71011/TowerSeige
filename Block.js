class Block{
   constructor(x,y,width,height){
       var options={
            friction:0.1,
            density:0.4
       }
       this.body= Bodies.rectangle(x,y,width,height,options);
       this.x=x;
       this.y=y;
       World.add(world,this.body);
   }
   display(){
       var pos=this.body.position;
       rectMode(CENTER);
       fill("pink");
       rect(pos.x,pos.y,40,50);
   }
}