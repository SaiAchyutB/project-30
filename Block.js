class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png")
          this.Visibility = 255

    }
    display(){
     
     // imageMode(CENTER);
      //rect(pos.x,pos.y,this.width, this.height);
//image(this.image,pos.x,pos.y,this.width, this.height)



    console.log(this.body.speed);
    var pos= this.body.position;
    if(this.body.speed< 5){

      imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.width, this.height);

    }
    else{
World.remove(world,this.body)
push()
this.Visibility = this.Visibility-5
tint(255,this.Visibility);
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop()


    }

    }
}