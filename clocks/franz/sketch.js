function setup() {
 createCanvas(800, 800)
}
 
function draw() {
 
 var sekundenfarbe = color(222, 246, 110)
 var minutenfarbe = color(75, 191, 191)
 var stundenfarbe = color(254, 104, 71)
 
 background(40, 44, 52)

 translate(width / 2, height / 2)

///SEKUNDEN

 push()
 
//smooth rotation

 var date = new Date()
 var currentMillisecond = date.getMilliseconds();
 var sekundendrehung = map(second(), 0, 60, 0, 360) + map(currentMillisecond, 0, 1000, 0, 360 / 60)

 stroke(sekundenfarbe)
 strokeWeight(2)
 noFill()
 rect(-170 + width/3,-180,70,360) 
 fill(sekundenfarbe)
 
 var sekunden = second() + currentMillisecond / 1000 
 var sekundenstand = (sekunden) / 60 * 360
 
 rect(-170 + width/3,180,70,-sekundenstand)  
 pop()

/// MINUTEN

 push()
 
 //again smooth rotation with milliseconds
 stroke(minutenfarbe)
 strokeWeight(2)
 noFill()
 rect(-40,-180,70,360) 
 fill(minutenfarbe)
 
 var minuten = minute() + sekunden / 60
 var minutenstand = (minuten) / 60 * 360
 
 rect(-40,180,70,-minutenstand)  
 pop()

// STUNDEN
 
 push()
 
//smooth rotation
 
 stroke(stundenfarbe)
 strokeWeight(2)
 noFill()
 rect(90 - width/3,-180,70,360) 
 fill(stundenfarbe)
 
 var stunden = hour() + minuten / 60
 var stundenstand = (stunden) / 24 * 360
 
 rect(90 - width/3,180,70,-stundenstand)  
 pop()
 
}