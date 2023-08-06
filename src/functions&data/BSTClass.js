class BST {
	// path;
	value; // integer value
	left; // reference to another BST whose value will be < this.value
	right; // reference to another BST whose value will be > this.value

	constructor() { this.value = null; }

	addValue(newValue) {
		if(this.value === null) { // initialize the new (potential) subtrees
			this.value = newValue;
			this.left = new BST();
			this.right = new BST(); }
		else if(newValue < this.value) { this.left.addValue(newValue); }
		else if(newValue > this.value) { this.right.addValue(newValue); }
		return this;
	}

	containsValue(value) {
		if(this.value === null) { return false; } 
		else if(this.value === value) { return true; }
		else { return this.left.containsValue(value) || 
						this.right.containsValue(value) }
	}

	addValues(valueArray) { valueArray.forEach(value => { this.addValue(value); }); }
}

export default BST;

// const tree = new BST();
// tree.addValues([5,7,3,9]);
// console.log(tree);


