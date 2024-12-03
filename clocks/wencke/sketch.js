function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(0)
  stroke(255)
  push()
  translate(width / 2, height / 2)
  rotate(radians(-90))
    ///sekunden
    /*
  push()
  rotate(radians(second() * 6))
  stroke(255, 0, 0)
  strokeWeight(3)
  noFill()
  ellipse(300, 0, 30, 30)
  pop()*/
 push()
  
  
  for (var i = 0; i < second(); i++) {
  
    rotate(radians (6))
    strokeWeight(3)
    var trans= map(i,0,second(),0,255)
    stroke(255, 0, 0,trans )
    noFill()
    ellipse(300, 0, 30, 30)

  }
 pop()

  /// minuten
  push()
  for (var i=0; i< minute(); i++ ){
  rotate(radians(6))
  
  var trans= map(i, 0, minute(), 0, 255)
  strokeWeight(3)
  stroke(0,0,255, trans)
  noFill()
  ellipse(200,0,30,30)}
  
  pop()
    /// stunde
  push()
  //
  //var stundendrehung = map(hour(), 0, 24, 0, 360 * 2) + map(minute(), 0, 60, 0, 360 / 12)
  //rotate(radians(stundendrehung))
  
  for (var i=0; i< hour(); i++){
    rotate(radians(12))
    
  var trans= map(i, 0, hour(), 0, 255)
  strokeWeight(3)
  stroke(0,255,0, trans)
  noFill()
  ellipse(100,0,30,30)
  }
 
  pop()
    //skala
  /*push()
  for (var i = 0; i < 60; i++) {
    ellipse(300, 0, 10, 10)
    rotate(radians(6))
  }
  pop()*/
    //skala
    /*
  push()
  for (var i = 0; i < 12; i++) {
    //ellipse(300, 0, 20, 20)
    strokeWeight(i + 1)
    line(300, 0, 350, 0)
    rotate(radians(30))
    noStroke()
    fill(255)
    push()
    translate(320, 0)
    rotate(-radians(30) * (i + 1) + radians(90))
    text(i + 1, 0, 0)
    pop()
  }
  pop()*/

  pop()
}