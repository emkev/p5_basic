
var movers = [] ;

var liquid ;


function setup() {
    createCanvas(480 , 360) ;
    reset();
    liquid = new Liquid(0 , height/2 , width, height/2, 0.1) ;
}


function draw() {

    background(127);
    liquid.display();
    
    for(var i=0 ; i<movers.length ; i++) {

        if(liquid.isContain(movers[i])) {
            var dF = liquid.calculateDrag(movers[i]) ;
            movers[i].applyForce(dF) ;
        }
        
        var gravity = createVector(0 , 0.1*movers[i].mass) ;

        movers[i].applyForce(gravity) ;

        movers[i].update() ;
        movers[i].display() ;
        movers[i].checkEdge() ;
    }
  
}


function mousePressed() {
    reset();
}


function reset() {
    for(var i=0 ; i<9 ; i++) {
        movers.push(new Mover(random(0.5,2) , 40+i*40, 0)) ;
    }

}



function Liquid(x , y , w , h , c) {
    this.x = x ;
    this.y = y ;
    this.wg = w ;
    this.hg = h ;
    this.c = c ;

    this.isContain = function(m) {
        var l = m.position ;
        return (l.x>this.x) && (l.x<(this.x+this.wg)) 
            && (l.y>this.y) && (l.y<(this.y+this.hg)) ;
    }


    this.calculateDrag = function(m) {
        var speed = m.velocity.mag() ;
        var dragMagnitude = this.c * speed * speed ;

        var dragForce = m.velocity.copy() ;
        dragForce.mult(-1);

        dragForce.normalize();
        dragForce.mult(dragMagnitude);

        return dragForce ;
    }


    this.display = function() {
        noStroke();
        fill(50);
        rect(this.x , this.y , this.wg , this.hg);
    }
}



function Mover(m,x,y) {
    this.mass = m ;
    this.position = createVector(x,y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);


    this.applyForce = function(force) {
        var f = force.copy() ;
        f.div(this.mass);
        //var f = p5.Vector.div(force , this.mass) ;
        this.acceleration.add(f) ;
    }

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.display = function() {
        stroke(0);
        strokeWeight(2);
        fill(255,127);
        ellipse(this.position.x , this.position.y , this.mass*16 , this.mass*16 );
    }

    this.checkEdge = function() {
        if(this.position.y > (height-this.mass*8) ) {
            this.velocity.y *= -0.9 ;
            this.position.y = ( height-this.mass*8) ;
        }
    }

}
