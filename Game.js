class Game {
  constructor(){

  }

  async start(){
    if(gameState === 0){
      player = new Player();

      form = new Form();
      form.display();
    }
  }

  play(){
    form.hide();
   
    drawSprites();
  }

 /* end(){
    console.log("Game Ended");
    console.log(player.rank);
  }*/
}
