var popul;
var lifespan = 200;
var length = 0;
var force = 0.15;
var fitnessP;
var target;

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

  if(length == lifespan) {
    popul.evaluate();
    popul.selection();
    length = 0;
  }

  ellipse(target.x, target.y, 25, 25);
}
