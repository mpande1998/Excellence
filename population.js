function Population() {
  this.rockets = [];
  this.popSize = 20;
  this.matingPool = [];

  for (var i = 0; i < this.popSize; i++) {
    this.rockets.push(new Rocket());
  }

  this.evaluate = function() {
    var maxFitness = 0;

    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i].calcFitness();
    }

    for (var i = 0; i < this.popSize; i++) {
      if (this.rockets[i].fitness > maxFitness) {
        maxFitness = this.rockets[i].fitness;
      }
    }

    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i].fitness /= maxFitness;
    }

    var normalizedFitnessArray = [];
    for (var i = 0; i < this.popSize; i++) {
      normalizedFitnessArray.push(this.rockets[i].fitness);
    }

    this.matingPool = [];
    for (var i = 0; i < this.popSize; i++) {
      var fit = this.rockets[i].fitness * 100;
      for (var j = 0; j < fit; j++) {
        this.matingPool.push(this.rockets[i]);
      }
    }
  }

  this.selection = function() {
    var newRockets = [];
    for (var i = 0; i < this.rockets.length; i++) {
      var firstParent = random(this.matingPool).dna;
      var secondParent = random(this.matingPool).dna;
      var child = firstParent.crossover(secondParent);
      child.mutation();
      newRockets.push(new Rocket(child));
    }
    this.rockets = newRockets;
  }

  this.run = function() {
    for (var i = 0; i < this.popSize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}
