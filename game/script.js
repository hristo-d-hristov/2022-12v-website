let canvas = document.getElementById("gameCanvas");
let canvasWidth = document.getElementById("canvasWidth").valueAsNumber;
let canvasHeight = document.getElementById("canvasHeight").valueAsNumber;
let sqsize = 50;
canvas.width = canvasWidth * sqsize;
canvas.height = canvasHeight * sqsize;

let context = canvas.getContext("2d");
let numx = 100;
let numy = 500;

for (let i = 0; i < numx; i++) {
	for (let j = 0; j < numy; j++) {
		context.strokeRect(i * sqsize, j * sqsize, sqsize, sqsize);
	}
}

// Радо
//context.strokeRect(0, 0, 50, 50);
//context.strokeRect(50, 0, 50, 50);
//context.strokeRect(100, 0, 50, 50);
//context.strokeRect(150, 0, 50, 50);
//context.strokeRect(200, 0, 50, 50);
//context.strokeRect(250, 0, 50, 50);
//context.strokeRect(0, 50, 50, 50);
//context.strokeRect(50, 50, 50, 50);
//context.strokeRect(100, 50, 50, 50);
//context.strokeRect(150, 50, 50, 50);
//context.strokeRect(200, 50, 50, 50);
//context.strokeRect(250, 50, 50, 50);
//context.strokeRect(0, 100, 50, 50);
//context.strokeRect(50, 100, 50, 50);
//context.strokeRect(100, 100, 50, 50);
//context.strokeRect(150, 100, 50, 50);
//context.strokeRect(200, 100, 50, 50);
//context.strokeRect(250, 100, 50, 50);
//context.fillRect(20, 40, 50, 10);

// Вальо
//context.strokeRect(0, 0, 150, 150);
//context.strokeRect(150, 0, 150, 150);
//context.strokeRect(0, 0, 50, 150);
//context.strokeRect(50, 0, 50, 150);
//context.strokeRect(150, 0, 50, 150);
//context.strokeRect(200, 0, 50, 150);
//context.strokeRect(0, 0, 300, 50);
//context.strokeRect(0, 0, 300, 100);