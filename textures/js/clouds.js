var sketch= function( p ) {
  var w = 800;
  var h = 800;


  var clouds = [];

  p.setup = function() {
    p.colorMode(p.HSB, 1, 1, 1);
    p.angleMode(p.DEGREES)
    p.frameRate(40);
    p.createCanvas(w, h);
    bg = p.loadImage("img/bg.jpg");


  };

  p.draw = function() {
    p.background(0,0,1);
    p.tint([1,0,1,100]);
    p.image(bg,0,0,w,h);

    for(var i=0;i<clouds.length; i++){
      var b = clouds[i];
      b.update();
      b.render();
    }
  };

  p.mouseDragged = function(){
    var b = new Cloud(p.mouseX, p.mouseY);
      clouds.push(b);
  }

  //flies
  function Cloud(x,y){
    this.x = x;
    this.y = y;
    this.radius = 60;
    this.angle = p.random(0,360);
    this.orbit = 20;

    this.update = function(){
      this.angle += 1;
      this.angle %= 360;
    }

    this.render = function(){
      p.push();
      p.translate(this.x + this.orbit*p.cos(this.angle),this.y + this.orbit*p.sin(this.angle));


      for(var i = this.radius; i>0; i-=15){
      p.stroke(0.55,1,1);
      p.strokeWeight(5);
      p.fill(0.6,0.1,1);
      p.ellipse(0,0,i, i);
      }

      p.pop();
    }
  }

};


//connect
var myp5 = new p5(sketch, 'canvas');


