import React from 'react'
import BST from '../functions&data/BSTClass'


const BSTApp = () => {

	let myTree;
	let currentTreeHeight;

	// add another level to the tree with appropriate number & attributes of node divs
	const addLevelToTree = (rowIndex) => {
		currentTreeHeight++;
		let acc = "";
		for(let j=0; j<2**rowIndex; j++) {
			acc += `<div class='nodeDiv' id='nodeDiv${rowIndex}${j}'></div>`; }
		const newDiv = `<div class='treeDivRow' id='treeDivRow${rowIndex}'>${acc}</div>`
		document.querySelector('#myTree').innerHTML += newDiv;
	}

	// initialize upon user button click
	const startTree = () => {
		document.querySelector(".BST-startButton").classList.add("hidden");
		myTree = new BST("", 0, 0);
		currentTreeHeight = 0;
	}

	// add node of value n to the BST
	const addNode = n => () => {
		if(myTree.containsValue(n)) { return; } // do nothing if node is already present
		myTree.addValue(n);
		const [rowIndex, colIndex] = myTree.getIndex(n);

		// adjust screen
		if(rowIndex === currentTreeHeight) { addLevelToTree(rowIndex); }
		document.querySelector(`#ballpitDiv${n}`).removeAttribute("onclick");
		document.querySelector(`#ballpitDiv${n}`).setAttribute("style", "color:white")
		document.querySelector(`#nodeDiv${rowIndex}${colIndex}`).innerHTML = n;
	}
	
	return (
		<div className='BSTApp'>
			<h3>BSTApp</h3>

			<button className='BST-startButton' onClick={startTree}>
				Make A Binary Search Tree
			</button>


			<div className='ballpit'>
				<div style={{display: 'flex'}}>
				<div className='nodeDiv' id='ballpitDiv0' onClick={addNode(0)}>0</div>
				<div className='nodeDiv' id='ballpitDiv1' onClick={addNode(1)}>1</div>
				<div className='nodeDiv' id='ballpitDiv2' onClick={addNode(2)}>2</div>
				<div className='nodeDiv' id='ballpitDiv3' onClick={addNode(3)}>3</div>
				<div className='nodeDiv' id='ballpitDiv4' onClick={addNode(4)}>4</div>
				<div className='nodeDiv' id='ballpitDiv5' onClick={addNode(5)}>5</div>
				<div className='nodeDiv' id='ballpitDiv6' onClick={addNode(6)}>6</div>
				<div className='nodeDiv' id='ballpitDiv7' onClick={addNode(7)}>7</div>
				<div className='nodeDiv' id='ballpitDiv8' onClick={addNode(8)}>8</div>
				<div className='nodeDiv' id='ballpitDiv9' onClick={addNode(9)}>9</div>
				</div>
			</div>

			<div className='treeDiv' id='myTree'>
				
			</div>
		</div>
	)
}

export default BSTApp
