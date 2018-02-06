class CanvasManager {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);

		this.context = this.canvas.getContext("2d");

		this.canvas.width = this.context.width;
		this.canvas.height = this.context.height;

		this.resizeCanvasToDisplaySize(this.canvas);
	}

	resizeCanvasToDisplaySize(canvas) {
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;

		canvas.width = width;
		canvas.height = height;
	}
}

window.onload = function() {
	startGame();
};

function startGame() {
	let canvasManager = new CanvasManager("GameEngineCanvas");

	canvasManager.context.lineWidth = "10";
	canvasManager.context.strokeStyle = "purple";
	canvasManager.context.rect(20, 20, 150, 100);
	canvasManager.context.stroke();
}
