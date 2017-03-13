var popul;
var lifespan = 300;
var length = 0;
var force = 0.2;
var lengthP;
var target;
var objectX = 100;
var objectY = 200;
objectWidth = 200;
objectHeight = 10;

function setup() {
  createCanvas(400, 400);

  popul = new Population();
  target = createVector(width/2, 50);
  lengthP = createP();
}

function draw() {
  background(0);
  popul.run();
  lengthP.html(length);
  length++;

  rect(objectX, objectY, objectWidth, objectHeight);

  if(length == lifespan) {
    popul.evaluate();
    popul.selection();
    var meanFitnessP = createP();
    meanFitnessP.html("Fitness: " + popul.meanFitness);
    length = 0;
  }

  ellipse(target.x, target.y, 25, 25);
}
