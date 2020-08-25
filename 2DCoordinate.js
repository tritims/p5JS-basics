var lineX=50;
var speed=10;
function setup() { 
  createCanvas(400, 400);
  background(0);
  var speed=10;
} 

function draw() { 
  // background();
		
    
   
    strokeCap(SQUARE);
    strokeWeight(1);
    stroke(255);
    line(lineX, height*0.8, lineX + 10, height*0.8);
    line(width*0.2,lineX, width*0.2, lineX+10);
    lineX = lineX + speed;
    if (lineX > width*0.8) {
      speed = 0;
    } 

}


