var sketch= function( p ) {
  var w = 800;
  var h = 800;

  var soil = [];

  p.setup = function() {
    p.colorMode(p.HSB, 1, 1, 1);
    p.angleMode(p.DEGREES)
    p.rectMode(p.CENTER)
    p.frameRate(40);
    p.createCanvas(w, h);
    bg = p.loadImage("img/bg.jpg");


  };

  p.draw = function() {
    p.background(0,0,1);
    p.tint([1,0,1,100]);
    p.image(bg,0,0,w,h);

    for(var i=0;i<soil.length; i++){
      var b = soil[i];
      b.update();
      b.render();
    }
  };

  p.mouseDragged = function(){

    var build = 1;
    for(var i=0;i<soil.length; i++){
      var b = soil[i];
      if(Math.sqrt(Math.pow(p.mouseX-b.x,2)+Math.pow(p.mouseY-b.y,2))<20){
        build = 0;
      }

    }

      if(build==1){
          var b = new Soil(p.mouseX, p.mouseY);
          soil.push(b);
      }


  }

  //flies
  function Soil(x,y){
    this.x = x;
    this.y = y;
    this.radius = p.random(10,60);
    this.angle = p.random(0,360);
    this.orbit = 20;
    this.breath_length = this.radius/4;
    this.breath=p.random(360);

    this.update = function(){
      this.angle += 2;
      this.angle %= 360;
      this.breath +=5;
      this.breath %= 360;
    }

    this.render = function(){
      p.push();
      //p.translate(this.x + this.orbit*p.cos(this.angle),this.y + this.orbit*p.sin(this.angle));
      p.translate(this.x, this.y);
      p.rotate(this.angle);


      for(var i = this.radius; i>0; i-=10){

      p.stroke(0.05,1,0.5);
      p.strokeWeight(2);
      p.fill(0.9,0.6,1);
      var a = this.breath_length*(1+p.cos(this.breath));
      p.rect(0,0,a+i,a+i);
      }

      p.pop();
    }
  }

};


//connect
var myp5 = new p5(sketch, 'canvas');


