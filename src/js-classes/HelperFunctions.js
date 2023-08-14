// HELPER FUNCTIONS

const deepCopyData = (matrix) => { 
	return Array.from({length: matrix.length}, (_, i) => [...matrix[i]]);
}

const updatedData = (matrix, i, j, newValue) => { 
	const newMatrix = deepCopyData(matrix);
	newMatrix[i][j] = newValue;
	return newMatrix;
}

const hideElement = element => { element.classList.add("hidden"); }
const showElement = element => { element.classList.remove("hidden"); }
const disableButton = button => { button.setAttribute('disabled', true); }
const enableButton = button => { button.removeAttribute('disabled'); }

const sequence = n => { return Array(n).fill().map((_, i) => i) }

const shuffle = array => {
	const step = (array, acc) => {
		if(array.length === 0) { return acc; }
		const randomIndex = Math.floor(Math.random() * array.length)
		const randomValue = array.splice(randomIndex, 1)
		return step(array, [...acc, randomValue]) 
	}
	return step(array, []);
}

module.exports = {	updatedData, 
					hideElement, showElement, disableButton, enableButton, 
					sequence, shuffle }