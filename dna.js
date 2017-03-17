function DNA(genes) {
  if (genes) {
    this.genes = genes;
  } else {
    this.genes = [];
    for (var i = 0; i < lifespan; i++) {
      this.genes.push(p5.Vector.random2D());
      this.genes[i].setMag(force);
    }
  }

  this.crossover = function(partner) {
    var newgenes = [];
    var mid = floor(random(this.genes.length));
    for (var i = 0; i < this.genes.length; i++) {
      if (i > mid) {
        newgenes.push(this.genes[i]);
      } else {
        newgenes.push(partner.genes[i]);
      }
    }
    return new DNA(newgenes);
  }

  this.mutation = function() {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < 0.03) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(force);
      }
    }
  }
}
