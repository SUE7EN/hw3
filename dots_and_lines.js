function setup() {
  createCanvas(400, 400);
  frameRate(30);
  colorMode(HSB, 100);
}

function draw() {
  if (mouseIsPressed) {
    background(20, 30);
  } else {
    background(98, 30);
  }
  var x1 = random(width);
  var y1 = random(height);
  var x2 = random(width);
  var y2 = random(height);
  var size = random(5, 80);

  if (mouseIsPressed) {
    var a = 0;
    var b = 15;
  } else {
    var a = 40;
    var b = 55
  }

  var color1 = random(a, b);
  var color2 = random(75, 100);
  var color3 = random(95, 100);
  var length1 = random(20, 150);


  noStroke();
  fill(color1, color2, color3);
  ellipse(x1, y1, size)

  strokeWeight(random(1, 20));
  stroke(color1, color2, color3);
  line(x2, y2 + length1, x2 + length1, y2);
}
