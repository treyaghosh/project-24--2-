const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var PlayerArcher,PlayerArrow;
var ComputerArcher;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
 PlayerArcher = new playerArcher(
  width - 1010,
    playerBase.body.position.y - 180,
    120,
    120
  );
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 150,
    50,
    180
  );
  ComputerArcher = new computerArcher(
    width - 350,
    computerBase.body.position.y - 170,
    120,
    120
  );
  
  //Create an arrow Object
  PlayerArrow = new playerArrow(
    PlayerArcher.body.position.x,PlayerArcher.body.position.y,100,10
  )
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  PlayerArcher.display();
  ComputerArcher.display()


  //Display arrow();
  PlayerArrow.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    PlayerArrow.shoot(PlayerArcher.body.angle);

  }
}



