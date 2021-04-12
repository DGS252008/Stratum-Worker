var player;
var form;
var gameState = 0;
var game;                 
var npc;
var i = 1;
var xPos;
var yPos;
var npcGroup;


function setup(){
    createCanvas(1500, 1200);
    game = new Game();
    game.start();

    npcGroup = new Group();
}

function draw(){
    clear();

    if(gameState === 1){
        game.play();      
        while(i < 50){
             xPos = random(50, 1000);
             yPos = random(50, 800);
            console.log(i);
            npc = createSprite(xPos, yPos, 20, 20);
            i++

            npcGroup.add(npc);
        }
        player.movement();

        if(player.pc.isTouching(npcGroup)){
            textSize(30);
            text("Question", 1100, 600);
        }
    }
    
}