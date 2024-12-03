
function setup() {
 createCanvas(800, 800)

}
 
function draw() {
colorMode('HSB',360,100,100,100)
background(minute()*4,second()*4, hour()*20)
stroke(2,0,0)
push()
translate(width / 2, height / 2)
rotate(radians(-90))
 
  /// stunde
 push()
 var stundendrehung = map(hour(), 0, 24, 0, 360 * 2) + map(minute(), 0, 60, 0, 360 / 12)
 rotate(radians(stundendrehung))
 stroke(180)
 strokeWeight(31)
 noFill()
  //line(0, 0, 200, 0)
 ellipse(0, 0, 360, 360)
  rotate(29.85)
 triangle(0,200,-20,180,20,180)
 
 pop()
 
  /// minuten
 push()
 rotate(radians(minute() * 6))
 stroke(255)
 strokeWeight(30)
 noFill()
 //line(0, 0, 250, 0)
 ellipse(0, 0, 300, 300)
  rotate(29.85)
 triangle(0,175,-20,150,20,150)
 pop()
  ///sekunden

 push()
 rotate(radians(second() * 6))
 stroke(minute()*4, second()*4, hour()*20)
 strokeWeight(30)
 noFill()
// line(0, 0, 300, 0)
ellipse(0, 0, 250, 250)
 rotate(29.85)
 triangle(0,150,-20,125,20,125)
 pop()
 
 //skala
 
 push()
 for (var i = 0; i < 60; i++) {
  //ellipse(300, 0, 10, 10)
  rotate(radians(6))
 }
 pop()
  //skala
 push()
 for (var i = 0; i < 12; i++) {
  //ellipse(300, 0, 20, 20)
  strokeWeight(i + 1)
 // line(300, 0, 350, 0)
  rotate(radians(30))
  noStroke()
  fill(255)
  push()
  translate(240, 0)
  rotate(-radians(30) * (i+1)+radians(90))
  text(i + 1, 0, 0)
  pop()
  
  //day
  push()
  textSize(25)
    rotate(-radians(30) * (i+1)+radians(90))
var d = day();
text(' \n' + d, 1,-70 );
pop()

  //month
  push()
  textSize(25)
    rotate(-radians(30) * (i+1)+radians(90))
var m = month();
text( '\n' + m, 1, -20);
pop()

  //year
  push()
  textSize(25)
    rotate(-radians(30) * (i+1)+radians(90))
var y = year();
text(' \n' + y, 1, 30);
pop()

 }
  
 pop()
 
 pop()
}