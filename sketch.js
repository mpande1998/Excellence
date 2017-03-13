var popul;
var lifespan = 400;
var length = 0;
var force = 0.2;
var fitnessP;
var target;
var objectX = 100;
var objectY = 200;
objectWidth = 200;
objectHeight = 10;

function setup() {
  createCanvas(400, 400);

  popul = new Population();
  target = createVector(width/2, 50);
  fitnessP = createP();
}

function draw() {
  background(0);
  popul.run();
  fitnessP.html(length);
  length++;

  rect(objectX, objectY, objectWidth, objectHeight);

  if(length == lifespan) {
    popul.evaluate();
    popul.selection();
    length = 0;
  }

  ellipse(target.x, target.y, 25, 25);
}
