
var t=0.0 ;

//var ic = windowWidth/30 ;
//var oc = windowWidth/15 ;

var wd = 240, hg = 720 ;
var ic = wd/30 , oc = wd/15 ;

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(wd , hg) ;
}

function draw() {
    background(255);

    t += 0.01 ;
    var x = t ;

    noStroke();
    fill(0, 100);

    for(var i=0; i<=wd; i+=ic) {
        var y = noise(x)*hg ;
        ellipse(i, y, oc, oc);
        x += 0.05 ;
    }
    
}
