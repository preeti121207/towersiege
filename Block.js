class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      
      World.add(world, this.body);
    }
    display(){
     
       
        if(this.body.speed < 6){
          var pos =this.body.position;
          rectMode(CENTER);
         fill("aqua");
          rect(pos.x, pos.y, this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          
          pop();
        }
        
      }
    }

  