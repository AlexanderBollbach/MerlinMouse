import Position from "./Geometry/Position";
import Size from "./Geometry/Size";
import Box from "./Geometry/Box";

export default class CanvasManager {
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

		this.widthMultiplier = canvas.clientWidth / 100;
		this.heightMultiplier = canvas.clientHeight / 100;

		canvas.width = width;
		canvas.height = height;
	}

	setColor(color) {
		this.context.fillStyle = color;
	}

	draw(box) {
		let newBox = this.normalizedBoxFromBox(box);

		this.context.rect(
			newBox.position.x,
			newBox.position.y,
			newBox.size.width,
			newBox.size.height
		);

		this.context.fill();
	}

	normalizedBoxFromBox(box) {
		let newPosition = new Position(
			box.position.x * this.widthMultiplier,
			box.position.y * this.heightMultiplier
		);
		let newSize = new Size(
			box.size.width * this.widthMultiplier,
			box.size.height * this.heightMultiplier
		);
		let newBox = new Box(newPosition.x, newPosition.y, newSize.width, newSize.height);

		return newBox;
	}
}
