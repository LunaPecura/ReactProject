
import React, { useState } from 'react'
import BST from '../js-classes/BSTClass'
import NodeButton from '../components/NodeButton'
import { hideElement, showElement, disableButton, enableButton, sequence } from '../js-classes/HelperFunctions'
import Tree from '../components/Tree'



const BSTApp = () => {

	const colors = ["red", "darkorange", "gold", "limegreen", "seagreen", "darkcyan", "cornflowerblue", "mediumslateblue", "darkorchid", "palevioletred"];
	const myTree = new BST();
	const [nodeList, setNodeList] = useState([]);
	/* ------------------------------------------------------------------------- */
	const appHeader = () => document.querySelector(".appHeader")
	const pathDiv = () => document.querySelector(".pathDiv")
	const msgDiv = () => document.querySelector(".inProgressMsg")
	const buttonPanel = () => document.querySelector(".BSTApp-buttonPanel");
	const startButton = () => document.querySelector(".BSTApp-startButton");
	const resetButton = () => document.querySelector(".BSTApp-resetButton");
	const nodeButton = k => document.querySelector(`#nodeButton${k}`);
	
	

	const makeButtonPanel = n => sequence(n).map( i => {
		return <NodeButton id={i} fn={addNode} color={colors[i]} key={i} />
	})

	const start = () => {
		hideElement(startButton());
		hideElement(appHeader());
		hideElement(msgDiv());
		showElement(pathDiv());
		showElement(buttonPanel());
		showElement(resetButton());

	}

	const reset = () => {
		nodeList.forEach(k => enableButton(nodeButton(k)));
		setNodeList([]);
	}

	const addNode = k => () => {
		disableButton(nodeButton(k));
		myTree.addValue(k);
		setNodeList([...nodeList, k]);
	}

	const removeNode = k => () => {
		console.log("remove node");
		myTree.removeValue(k);
		nodeList.splice(nodeList.indexOf(k), 1);
		setNodeList([...nodeList]);
	}
	


	return (
		<div className='BSTApp'>

			<div className='inProgressMsg'>...in progress...</div>
			<h2 className='appHeader'>Binary Search Trees</h2>
			<div className='pathDiv hidden'><code>/Binary Search Trees</code></div>
			<div className='appContent'>

				<Tree nodes={nodeList} colors={colors}/>
				
				<button className='BSTApp-startButton' onClick={start} /* onMouseOver={} */>
					Plant A Tree
				</button>

				<div className='BSTApp-buttonPanel hidden'>
					{ makeButtonPanel(10) }
				</div>

				<button className='BSTApp-resetButton hidden' onClick={reset} /* onMouseOver={} */>
					Reset Tree
				</button>

			</div>	
		</div>
)}

export default BSTApp
