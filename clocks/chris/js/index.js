var radius
var typeface
var months

function preload(){
    typeface = loadFont ("https://justchrizz.github.io/ticktack/assets/SF-Pro-Display-Ultralight.otf")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    //kompletter bildschirm
    colorMode(HSB)
    angleMode(DEGREES)
    //für rotation mit gradzahlen
    updateRadius()

    months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
}

function draw() {
    background(0)
    push()
    translate(width / 2, height / 2)
    rotate(-90)


    noFill()
    stroke(0, 0, 22)

    ellipse(0, 0, radius * 2, radius * 2)
    ellipse(0, 0, radius * 1.8, radius * 1.8)
    ellipse(0, 0, radius * 1.6, radius * 1.6)
    ellipse(0, 0, radius * 1.4, radius * 1.4)

   


    // sekundenzeiger
    stroke(202, 100, 85)
    strokeWeight(radius/100) // "radius/100" damit linien auch responive

    var date = new Date()
    var milliseconds = date.getMilliseconds()

    arc(0, 0, radius * 2, radius * 2, 0, map(second(), 0, 60, 0, 360) + map(milliseconds, 0, 1000, 0, 360 / 60))

    // minutenzeiger
    stroke(192, 100, 85)
    strokeWeight(radius/90)
    arc(0, 0, radius * 1.8, radius * 1.8, 0, map(minute(), 0, 60, 0, 360) + map(second(), 0, 60, 0, 360 / 60))

    // stundenzeiger
    stroke(182, 100, 85)
    strokeWeight(radius/80)
    arc(0, 0, radius * 1.6, radius * 1.6, 0, map(hour(), 0, 24, 0, 360 * 2) + map(minute(), 0, 60, 0, 360 / 12))

    // tagzeiger
    stroke(172, 100, 85)
    strokeWeight(radius/70)
    arc(0, 0, radius * 1.4, radius * 1.4, 0, map(day(), 0, 30, 0, 360))
    


    push()
    rotate(90)

    textSize(radius / 10)
    textAlign(CENTER, CENTER)
    textFont(typeface)

    fill(0, 0, 100)
    noStroke()

    text(appendZero(day()) + '. ' + months[month() - 1] + ' | ' + appendZero(hour()) + ':' + appendZero(minute()) + ':' + appendZero(second()), 0, 0)

    pop()

    pop()
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    //for responsive
    updateRadius()
}

function updateRadius() {
    if (width < height) {
        radius = width / 2 - width / 10
    } else {
        radius = height / 2 - height / 10
    }
}

function appendZero(number) {
    if (number < 10) {
        return '0' + number
    } else {
        return number
    }
}