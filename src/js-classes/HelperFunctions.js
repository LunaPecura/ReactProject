// HELPER FUNCTIONS

const deepCopyData = (matrix) => { 
	return Array.from({length: matrix.length}, (_, i) => [...matrix[i]]);
}

const updatedData = (matrix, i, j, newValue) => { 
	const newMatrix = deepCopyData(matrix);
	newMatrix[i][j] = newValue;
	return newMatrix;
}

export default updatedData