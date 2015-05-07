var sketch= function( p ) {
  var w = 800;
  var h = 800;


  var flies = [];
  var num_flies = 30;

  p.setup = function() {
    p.colorMode(p.HSB, 1, 1, 1);
    p.angleMode(p.DEGREES)
    p.frameRate(40);
    p.createCanvas(w, h);
    bg = p.loadImage("img/bg.jpg");

    for(var i=0;i<num_flies; i++){
      var b = new Fly();
      flies.push(b);
    }
  };

  p.draw = function() {
    p.background(0,0,1);
    p.tint([1,0,1,100]);
    p.image(bg,0,0,w,h);

    for(var i=0;i<num_flies; i++){
      var b = flies[i];
      b.update();
      b.render();
    }
  };


  //flies
  function Fly(){
    this.x = w/2;
    this.y = h/2;
    this.color = p.random();
    this.img = p.loadImage("img/bug_"+ Math.ceil(p.random(0.1,3))+ ".png");
    this.speed = 10;
    this.speed_rotate= 70;
    this.angle = p.random(0,360);

    this.update = function(){
      this.angle += p.random(-this.speed_rotate, this.speed_rotate);
      this.x += this.speed*p.cos(this.angle);
      this.y += this.speed*p.sin(this.angle);

      if(this.x>w || this.x <0 || this.y>h || this.y<0){
        this.x = w/2;
        this.y = h/2;
      }
    }

    this.render = function(){
      p.push();
      p.translate(this.x,this.y);
      p.rotate(this.angle+270);
      p.tint([this.color,1,1]);
      p.image(this.img,0,0,50,50);
      p.pop();
    }
  }

};


//connect
var myp5 = new p5(sketch, 'canvas');


