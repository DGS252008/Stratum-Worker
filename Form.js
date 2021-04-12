class Form {

  constructor() {
    this.title = createElement('h1');
    this.input = createInput("Name");
    this.button = createButton('Next');
    this.intro = createElement('h2');
    this.start = createButton('Start Game');
  }
  hide(){
    this.intro.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Stratum Worker");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      this.intro.html("Hello " + player.name + ". " + "In this game you will use your arrow keys to move your character. You must complete tasks given by the few NPCs willing to help an outcast like yourself. Your choices will be hard but rewarding. Your goal is to rise up to the highest class possible.");
      this.intro.position(displayWidth/2-400, displayHeight/3);

      this.start.position(displayWidth-100,20);
    });

    this.start.mousePressed(()=>{
      gameState = 1;
      this.start.hide();
    })

  }
}
