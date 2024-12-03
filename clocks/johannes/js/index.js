//
// index.js
// abstract-clock-p5js
//
// Created by Johannes Jakob
// © 2018 Johannes Jakob
//
// Find the project repository on github.com/JohJakob/abstract-clock-p5js
//

// Declare global variables

var zoomFactor = 10;

function setup() {
	// Create canvas and set modes

	createCanvas(windowWidth, windowHeight, WEBGL);
	colorMode(HSB);
	angleMode(DEGREES);
}

function draw() {
	background(0, 0, 100);

	setupLightAndCamera();
	drawGroundPlane();
	drawCoordinateSystem();
	drawBox();
	drawLabels();
}

function setupLightAndCamera() {
	// Set up ambient light and camera

	// ambientLight(240, 70, 90);

	directionalLight(color(240, 70, 90), -10, -10, 0);

	camera(60 * zoomFactor, 60 * zoomFactor, 60 * zoomFactor, 0, 0, 0, 0, 0, -1);

	// Set camera to orthographic and apply frustum planes

	ortho(-width / 2, width / 2, -height / 2, height / 2, 0, 10000);
}

function drawGroundPlane() {
	// Draw ground plane

	noStroke();
	fill(50, 50, 90);

	push();

	translate(0, 0, -100);

	plane(1000000, 1000000);

	pop();
}


function drawCoordinateSystem() {
	// Draw axes

	stroke(0, 0, 50);

	line(0, 0, 0, (60 + 10) * zoomFactor, 0, 0);
	line(0, 0, 0, 0, (60 + 10) * zoomFactor, 0);
	line(0, 0, 0, 0, 0, (24 + 10) * zoomFactor);

	// Draw arrowheads

	fill(0, 0, 50);
	noStroke();

	// Draw arrowhead for X axis

	push();

	translate((60 + 10) * zoomFactor, 0, 0);
	rotateZ(-90);

	cone(10, 20);

	pop();

	// Draw arrowhead for Y axis

	push();

	translate(0, (60 + 10) * zoomFactor, 0);

	cone(10, 20);

	pop();

	// Draw arrowhead for Z axis

	push();

	translate(0, 0, (24 + 10) * zoomFactor);
	rotateX(90);

	cone(10, 20);

	pop();
}

function drawBox() {
	// Draw a box with dimensions (current seconds, current minutes, current hours)

	push();

	translate((second() / 2) * zoomFactor, (minute() / 2) * zoomFactor, (hour() / 2) * zoomFactor);

	stroke(240, 70, 100);

	specularMaterial(0, 0, 100, .5);
	box(second() * zoomFactor, minute() * zoomFactor, hour() * zoomFactor);

	pop();
}

function drawLabels() {
	// Draw second marker

	push();

	stroke(0, 0, 50);

	for (var i = 0; i < 61; i++) {
		push();

		translate(i * zoomFactor, 0, 0);

		if (i % 10) {
			line(0, 0, 0, 0, -15, 0);
		} else {
			line(0, 0, 0, 0, -30, 0);
		}

		pop();
	}

	// Draw minute marker

	for (var i = 0; i < 61; i++) {
		push();

		translate(0, i * zoomFactor, 0);

		if (i % 10) {
			line(0, 0, 0, -15, 0, 0);
		} else {
			line(0, 0, 0, -30, 0, 0);
		}

		pop();
	}

	// Draw hour marker

	for (var i = 0; i < 25; i++) {
		push();

		translate(0, 0, i * zoomFactor);

		if (i % 3) {
			line(0, 0, 0, 0, -15, 0);
		} else {
			line(0, 0, 0, 0, -30, 0);
		}

		pop();
	}
}

function appendZero(number) {
	if (number < 10) {
		return '0' + number
	} else {
		return number.toString()
	}
}
