let numDots = 200; 
let numLines = numDots / 2;
let dot = {}; // store a random point position
let dots = []; // store all the dot positions

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  randomSeed(90);
  strokeWeight(1);

  // Randomly generate dot positions
  for (let i=0; i<numDots; i++){
    dot = {
      x: random(windowWidth),
      y: random(windowHeight)
      // connected: false
    }
    dots.push(dot);
  }

  // Connect dots by pairs
  for (let j=0; j<numLines; j++){
    line(dots[j].x, dots[j].y, dots[j+numLines].x, dots[j+numLines].y);
  }
  
}
