class Bird extends BaseClass {
  constructor(xp,yp){
    super(xp,yp,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.mouseposition = {x:xp, y:yp}
  }

  display() {
if (gameState!=="launched") {Matter.Body.setPosition(bird.body, this.mouseposition);}
    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200 && this.body.position.x<700&&gameState!=="onSling"){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
