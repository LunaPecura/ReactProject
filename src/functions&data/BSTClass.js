class BST {
	path; // might be useful
	indexRow; indexCol; // needed for display purposes
	value; // integer value
	left; // reference to another BST whose value will be < this.value
	right; // reference to another BST whose value will be > this.value

	constructor(path, i, j) { 
		this.value = null; 
		this.path = path; 
		this.indexRow = i;
		this.indexCol = j;
	}

	addValue(newValue) {
		if(this.value === null) { // initialize the new (potential) subtrees
			this.value = newValue;
			this.left = new BST(this.path+'L', this.indexRow+1, 2*this.indexCol );
			this.right = new BST(this.path+'R', this.indexRow+1, 2*this.indexCol+1); }
		else if(newValue < this.value) { this.left.addValue(newValue); }
		else if(newValue > this.value) { this.right.addValue(newValue); }
		return this;
	}

	containsValue(value) {
		if(this.value === null) { return false; } 
		else if(this.value === value) { return true; }
		else { return this.left.containsValue(value) || this.right.containsValue(value) }
	}

	getIndex(value) { // only call with values that are actually present
		if(this.value === value) { return [this.indexRow, this.indexCol]; }
		else if(value < this.value) {  return this.left.getIndex(value) }
		else if(value > this.value) { return this.right.getIndex(value) }
	}

	getPath(value) { // might be useful
		const step = (value, acc) => {
			if(value === this.value) { return acc; }
			else if(value < this.value) { return acc+'L' + this.left.getPath(value); }
			else if(value > this.value) { return acc+'R' + this.right.getPath(value); }}
		return step(value, "")
	}

	addValues(valueArray) { valueArray.forEach(value => { this.addValue(value); }); }
}

export default BST;



