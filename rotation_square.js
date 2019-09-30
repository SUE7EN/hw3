  var x = 20;
  var r = 0;
  var change1 = 13;
  var change2 = 0.2;
  var color1 = 1;
  var color1change =2.2;


function setup() {
  createCanvas(600, 200);
  frameRate(24);
}

function draw() {
  colorMode(HSB, 100);
  background(30,50);

  rectMode(CENTER);
  translate(x, 100);
  rotate(r);
  noStroke();
  fill(color1,100,100, 80);
  color1 += color1change;
  
  if (mouseIsPressed) {
    ellipse(0, 0, 100, 120);
  } else {
    rect(0, 0, 100,100);
  }
  
  x += change1;
  r += change2;
  
  if (x >= width || x<= 0) {
    change1 *= -1;
    change2 *= -1;
    color1change *= -1;
  }
  
}
