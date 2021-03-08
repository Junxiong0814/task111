let x = 0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  if(mouseIsPressed){
 triangle(mouseX,mouseY, mouseX, 80, mouseX,mouseY);
}else{
 circle(mouseX, mouseY, 20);
}
  
}