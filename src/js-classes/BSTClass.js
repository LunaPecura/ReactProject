
class BST {

	value; // integer value
	left; // reference to another BST whose value will be < this.value
	right; // reference to another BST whose value will be > this.value

	path; // string of 'L's and 'R's indicating the path from the root node / BST
	rowIndex; // row position i in the BST matrix
	colIndex;  // column position j in the BST matrix
	allValues; // integer list of all child values contains in this.BST

	constructor(path="", i=0, j=0) { 
		this.value = null; 
		this.allValues = [];
		this.path = path; 
		this.rowIndex = i;
		this.colIndex = j;
	}


/* CLASS METHODS ***********************************************************************************/

	addValue(v) {

		// found insertion point -- instantiate the new (potential) subtrees
		if(this.value === null) { 
			this.value = v;
			this.left = new BST(this.path+'L', this.rowIndex+1, 2*this.colIndex);
			this.right = new BST(this.path+'R', this.rowIndex+1, 2*this.colIndex+1); }

		// recursive calls to child trees
		else if(v < this.value) { this.left.addValue(v); }
		else if(v > this.value) { this.right.addValue(v); }

		this.allValues.push(v);
		return this;
	}


	removeValue(v) {
		this.allValues.splice(this.allValues.indexOf(v), 1);
		return (new BST()).addValues([...this.allValues]);
	}

	containsValue(v) {
		if(this.value === null) { return false; } 
		else if(v === this.value) { return true; }
		else { return this.left.containsValue(v) || this.right.containsValue(v) }
	}

	getIndex(v) { // only call with values that are actually present
		if(v === this.value) { return [this.rowIndex, this.colIndex]; }
		else if(v < this.value) {  return this.left.getIndex(v) }
		else if(v > this.value) { return this.right.getIndex(v) }
	}

	pathToValue(v) {
		if(v === this.value) { return this.path; }
		else if(v < this.value) { return this.left.pathToValue(v); }
		else if(v > this.value) { return this.right.pathToValue(v); }
	}

	getIndexString(value) { // returns the index as string of the form 'i-j'
		return this.getIndex(value).reduce((i, j) => `${i}-${j}`)
	}

	valueAtIndex(i, j) { // not tested yet
		if(i < this.rowIndex) {
			if(j < 2*(this.colIndex+1)) { return this.left.valueAtIndex(i, j) }
			else { return this.right.valueAtIndex(i, j) }
		} else { return this.value }
	}
	
	height() {
		if(this.value === null) { return 0 }
		else { return Math.max(this.left.height(), this.right.height()) + 1 }
	}

	// toMatrix() { return Array(this.height()).fill(null).map( (_,i) => Array(2**i).fill(null) ) }
	deepCopy() { return (new BST()).addValues([...this.allValues]) }
	addValues(valueArray) { valueArray.forEach(value => { this.addValue(value); }); return this; }
}

export default BST;