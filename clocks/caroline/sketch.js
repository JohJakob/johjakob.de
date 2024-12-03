function setup() {
  createCanvas(600,600)
}

function draw() {
  background(255)
  stroke(0)
  
  push()
  translate(width/2,height/2)
  rotate(radians(-90))
  
  
  
  ///Stundenzeiger
  push()
  var Stundendrehung = map(hour(),0,24,0,360*2)+map(minute(),0,60,0,360/12)
  rotate(radians(Stundendrehung))
  stroke(0,0,255)  
  strokeWeight(8)
  fill(0,0,255)
  rect(100,0,150,150)
  pop()
  
  /// Minutenzeiger
  push()
  rotate(radians(minute()*6))
  stroke(0,255,0)
  strokeWeight(4)
  fill(0,255,0)
  ellipse(90,0,120,120)
  pop()
  
  ///Sekundenzeiger
  push()
  rotate(radians(second()*6))
  stroke(255,0,0)
  strokeWeight(2)
  fill(255,0,0)
  ellipse(50,0,80,50)
  pop()
  
  ///Mittelpunkt
  fill(0,0,0,255)
  ellipse(0,0,15,15)
  
  ///Skala
  push()
  for (var i = 0;i<12;i++){
  stroke(0,0,0)
  strokeWeight(1)
  //line(0,0,300,0)
  rotate(radians(90))
  }
  pop()
  
  pop()
}