

function setup() {
  createCanvas(1000,1000)
  
  angleMode(DEGREES)
  

}

function draw() {
  var kreisgr = width*0.8
  
  var date = new Date()
	var currentMillisecond = date.getMilliseconds()
	
	background(0)
	
	translate(width/2,height/2)
	
rotate(-90)
	
	noStroke()
	fill(255)
	
	ellipse(0,0,kreisgr)
	

	var rotationstd = map(hour(), 0, 24, 0, 360 * 2) + map(minute(), 0, 60, 0, 360 / 12);
	rotate(rotationstd)
	fill(0)
	ellipse(kreisgr/4,0,kreisgr/2)
	
	var rotationmin = map(minute(), 0, 60, 0, 360) + map(second(), 0, 60, 0, 360 / 60);
	translate(kreisgr/4,0);
	rotate(rotationmin)
	fill(255)
	ellipse(kreisgr/8,0,kreisgr/4)
	
	var rotationsek = map(second(), 0, 60, 0, 360) + map(currentMillisecond, 0, 1000, 0, 360 / 60);
	translate(kreisgr/8,0)
	rotate(rotationsek)
	fill(0)
	ellipse(kreisgr/16,0,kreisgr/8)
	
	var rotationmilli = map(currentMillisecond, 0, 1000, 0, 360)
	translate(kreisgr/16,0)
	rotate(rotationmilli)
	fill(255)
	ellipse(kreisgr/32,0,kreisgr/16)
	
	
  
}