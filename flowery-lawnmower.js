function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (h >= 70) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  
  //making flowers
  //copied from p5 reference
  fill(1, 50, 255);
  if (h >= 60) {
    translate(240, 150);
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 8, 5, 10);
      rotate(PI/5);
    }
  }
  
  fill(1, 50, 255);
  if (h >= 50) {
    translate(80, 160);
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 8, 5, 10);
      rotate(PI/5);
    }
  }
  
  fill(1, 50, 255);
  if (h >= 40) {
    translate(190, 170);
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 8, 5, 10);
      rotate(PI/5);
    }
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
