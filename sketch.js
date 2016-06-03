var canvas;
var ctx;
var startGrad1, endGrad1, startGrad2, endGrad2;
var slider1;
var slider2;
var sizeRect = 200;

function setup() {
	canvas = createCanvas(500, 500);
	ctx = canvas.drawingContext;
	var text1 = createP('Control Rotation 1 Color');
	slider1 = createSlider(0, 100, 0);
	var text2 = createP('Control Rotation 2 Color');
	slider2 = createSlider(0, 100, 0);
	var text3 = createP('Control Color Location');
	slider3 = createSlider(0, 100, 0);

}

function draw() {
	background(125);

	var xRect = 150;
	var yRect = 10;

	var rotation1 = map(slider1.value(), 0, 100, 0, sizeRect);
	var rotation2 = map(slider2.value(), 0, 100, 0, sizeRect);
	var location = map(slider3.value(), 0, 100, 0, sizeRect);

	startGrad1 = createVector(xRect + rotation1 + location, yRect + sizeRect - rotation2 - location);
	endGrad1 = createVector(xRect + sizeRect - rotation1 - location, yRect + rotation2 + location);

	//rectangle
	var gradient = ctx.createLinearGradient(startGrad1.x, startGrad1.y, endGrad1.x, endGrad1.y);
	gradient.addColorStop(0, "#0073CF");
	gradient.addColorStop(1, "#FFCC00");
	ctx.fillStyle = gradient;
	ctx.fillRect(xRect, yRect, sizeRect, sizeRect);

	var xEllipse = 250;
	var yEllipse = 350;
	var sizeEllipse = 100;

	startGrad2 = createVector(xEllipse - sizeEllipse / 2 + rotation1 + location, yEllipse + sizeEllipse / 2 - rotation2 - location);
	endGrad2 = createVector(xEllipse + sizeEllipse / 2 - rotation1 - location, yEllipse - sizeEllipse / 2 + rotation2 + location);

	//ellipse
	var gradient2 = ctx.createLinearGradient(startGrad2.x, startGrad2.y, endGrad2.x, endGrad2.y);
	gradient2.addColorStop(0, "#0073CF");
	gradient2.addColorStop(1, "#FFCC00");
	ctx.beginPath();
	ctx.ellipse(xEllipse, yEllipse, sizeEllipse, sizeEllipse, 45 * Math.PI / 180, 0, 2 * Math.PI);
	ctx.fillStyle = gradient2;
	ctx.fill();
}