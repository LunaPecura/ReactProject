class Ant {

	pos_x;
	pos_y;
	direction;

	constructor(x,y,d) {
		this.pos_x = x;
		this.pos_y = y;
		this.direction = d;
	}

	posAhead = () => {
		switch(this.direction) {
			case 'north': return [this.pos_x - 1, this.pos_y];
			case 'east':  return [this.pos_x, this.pos_y + 1];
			case 'south': return [this.pos_x + 1, this.pos_y];
			case 'west':  return [this.pos_x, this.pos_y - 1];
			default: return[this.pos_x, this.pos_y];
		}
	}

	symbol = () => {
		switch(this.direction) {
			case 'north': return 'A';
			case 'east':  return '>';
			case 'south': return 'V';
			case 'west':  return '<';
			default: return '';
		}
	}

	turnRight = () => {
		let newDirection;
		switch(this.direction) {
			case 'north':	{ newDirection = 'east'; break; }
			case 'east':	{ newDirection = 'south'; break; }
			case 'south':	{ newDirection = 'west'; break; }
			case 'west':	{ newDirection = 'north'; break; }
			default: 		{ newDirection = ''; break; }
		}
		this.direction = newDirection;
		return newDirection;
	}

	turnLeft = () => {
		let newDirection;
		switch(this.direction) {
			case 'north':	{ newDirection = 'west'; break; }
			case 'west':	{ newDirection = 'south'; break; }
			case 'south':	{ newDirection = 'east';break; }
			case 'east':	{ newDirection = 'north'; break; }
			default: 		{ newDirection = ''; break; }
		}
		this.direction = newDirection;
		return newDirection;
	}
}

export default Ant;
