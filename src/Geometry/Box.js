
import Position from './Position'
import Size from './Size'

class Box {
	constructor(x,y,width,height) {
		this.position = new Position(x,y);
		this.size = new Size(width, height)
	}
}

export default Box