import React from 'react'
import BST from '../functions&data/BSTClass'

const BSTApp = () => {

	let myTree;

	const startTree = () => {
		document.querySelector(".BST-startButton").classList.add("hidden");
		myTree = new BST();
		console.log(myTree);
		document.querySelector("#myTree").innerHTML =
			"MY TREE<br>(still empty, but prepared)"
	}

	const addNode = n => () => {
		if(myTree.containsValue(n)) { return; }
		myTree.addValue(n);
		const path = myTree.getPath(n);
		console.log(path);
		document.querySelector("#myTree").innerHTML += `<p>Added ${n} at ${path}</p>`
		// document.querySelector("#myTree").innerHTML += `${path}`
	}
	
	return (
		<div className='BSTApp'>
			<h3>BSTApp</h3>

			<button className='BST-startButton' onClick={startTree}>
				Make A Binary Search Tree
			</button>


			<div className='ballpit'>
				<div style={{display: 'flex'}}>
				<div className='nodeDiv' id='nodeDiv0' onClick={addNode(0)}>0</div>
				<div className='nodeDiv' id='nodeDiv1'>1</div>
				<div className='nodeDiv' id='nodeDiv2'>2</div>
				<div className='nodeDiv' id='nodeDiv3'>3</div>
				<div className='nodeDiv' id='nodeDiv4'>4</div>
				<div className='nodeDiv' id='nodeDiv5'>5</div>
				<div className='nodeDiv' id='nodeDiv6'>6</div>
				<div className='nodeDiv' id='nodeDiv7'>7</div>
				<div className='nodeDiv' id='nodeDiv8'>8</div>
				<div className='nodeDiv' id='nodeDiv9'>9</div>
				</div>
			</div>

			<div className='tree' id='myTree'>EMPTY TREE</div>
		</div>
	)
}

export default BSTApp
