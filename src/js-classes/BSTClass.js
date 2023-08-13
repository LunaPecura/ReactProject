
class BST {

	value; // integer value
	left; // reference to another BST whose value will be < this.value
	right; // reference to another BST whose value will be > this.value

	path; // string of 'L's and 'R's indicating the path from the root node / BST
	rowIndex; // row position i in the BST matrix
	colIndex;  // column position j in the BST matrix
	values; // integer list of all child values contains in this.BST

	constructor(path="", i=0, j=0) { 
		this.value = null; 
		this.values = [];
		this.path = path; 
		this.rowIndex = i;
		this.colIndex = j;
		return this;
	}


/* CLASS METHODS ***********************************************************************************/

	addValue(newValue) {
		// console.log(newValue)
		if(this.value === null) { // instantiate the new (potential) subtrees
			this.value = newValue;
			this.left = new BST(this.path+'L', this.rowIndex+1, 2*this.colIndex);
			this.right = new BST(this.path+'R', this.rowIndex+1, 2*this.colIndex+1); }
		else if(newValue < this.value) { this.left.addValue(newValue); }
		else if(newValue > this.value) { this.right.addValue(newValue); }
		this.values.push(newValue);
		return this;
	}

	removeValue(value) {
		this.values.splice(this.values.indexOf(value), 1);
		let newTree = new BST();
		newTree.addValues(this.values);
		return newTree;
	}

	deepCopy() {
		const copy = new BST();
		return copy.addValues(this.values)
	}

	containsValue(value) {
		if(this.value === null) { return false; } 
		else if(this.value === value) { return true; }
		else { return this.left.containsValue(value) || this.right.containsValue(value) }
	}

	getIndex(value) { // only call with values that are actually present
		if(this.value === value) { return [this.rowIndex, this.colIndex]; }
		else if(value < this.value) {  return this.left.getIndex(value) }
		else if(value > this.value) { return this.right.getIndex(value) }
	}

	getIndexString(value) { // returns the index as string of the form 'i-j'
		return this.getIndex(value).reduce((i, j) => `${i}-${j}`)
	}

	valueAtIndex(i, j) {
		if(i < this.rowIndex) {
			if(j < 2*(this.colIndex+1)) { console.log("left)"); return this.left.valueAtIndex(i, j) }
			else { console.log("right"); return this.right.valueAtIndex(i, j) }
		} else { return this.value }
	}
	
	height() {
		if(this.value === null) { return 0 }
		else { return Math.max(this.left.height(), this.right.height()) + 1 }
		// return this.values.length;
	}

	toMatrix() {
		return Array(this.height()).fill(null).map( (_,i) => Array(2**i).fill(null) )
	}

	addValues(valueArray) { valueArray.forEach(value => { this.addValue(value); }); }
}

export default BST;



