class Player {
  constructor(){
    this.pc = createSprite(300, 300, 40, 40);
    this.name = null;
  }
  movement(){
    if(keyDown("UP_ARROW")){
      this.pc.y -= 5;
    }

    if(keyDown("DOWN_ARROW")){
      this.pc.y += 5;
    }

    if(keyDown("RIGHT_ARROW")){
      this.pc.x += 5;
    }

    if(keyDown("LEFT_ARROW")){
      this.pc.x -= 5;
    }
  }
}
