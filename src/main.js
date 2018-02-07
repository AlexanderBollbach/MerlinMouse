import CanvasManager from './CanvasManager'

import Box from './Geometry/Box'

window.onload = function() {
	startGame();
};

function startGame() {
	let canvasManager = new CanvasManager("GameEngineCanvas");

	canvasManager.setColor("green")

	let box = new Box(0,0,90,90)

	canvasManager.draw(box)
	
}
