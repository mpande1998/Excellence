function Population() {
  this.rockets = [];
  this.popsize = 25;
  this.matingpool = [];

  for (var i = 0; i < this.popsize; i++) {
    this.rockets.push(new Rocket());
  }

  this.evaluate = function() {
    var maxfitness = 0;

    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();
    }

    for (var i = 0; i < this.popsize; i++) {
      if (this.rockets[i].fitness > maxfitness) {
        maxfitness = this.rockets[i].fitness;
      }
    }

    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].fitness /= maxfitness;
    }

    this.matingpool = [];
    for (var i = 0; i < this.popsize; i++) {
      var fit = this.rockets[i].fitness * 100;
      for (var j = 0; j < fit; j++) {
        this.matingpool.push(this.rockets[i]);
      }
    }
  }

  this.selection = function() {
    var newRockets = [];
    for (var i = 0; i < this.rockets.length; i++) {
      var firstparent = random(this.matingpool).dna;
      var secondparent = random(this.matingpool).dna;
      var child = firstparent.crossover(secondparent);
      child.mutation();
      newRockets.push(new Rocket(child));
    }
    this.rockets = newRockets;
  }

  this.run = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}
