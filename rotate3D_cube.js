
var wd=400, hg=500 ;

function setup() {
  createCanvas(wd, hg, WEBGL);
  noFill();
}

function draw() {

  background(255);

  rotateY( map(mouseX, 0,wd, 0,PI*2) ) ;

  stroke(100)
  box(100);

  rotateX( map(mouseY, 0,hg, 0,PI*2) ) ;

  stroke(150);
  box(200);
    
}
