
import React, { useState } from 'react'
import BST from '../js-classes/BSTClass'
import NodeButton from '../components/NodeButton'
import { hideElement, showElement, disableButton, enableButton, sequence } from '../js-classes/HelperFunctions'
import Tree from '../components/Tree'



const BSTApp = () => {

	const n = 10;
	const colors = ["red", "darkorange", "gold", "limegreen", "seagreen", "darkcyan", "cornflowerblue", "mediumslateblue", "darkorchid", "palevioletred"];
	const myTree = new BST();
	const [nodeList, setNodeList] = useState([]);
	const [nodeSupply, setNodeSupply] = useState(sequence(n));
	/* ------------------------------------------------------------------------- */
	const appHeader = () => document.querySelector(".appHeader")
	const pathDiv = () => document.querySelector(".pathDiv")
	const msgDiv = () => document.querySelector(".inProgressMsg")
	const buttonPanel = () => document.querySelector(".BSTApp-buttonPanel");
	const startButton = () => document.querySelector(".BSTApp-startButton");
	const resetButton = () => document.querySelector(".BSTApp-resetButton");
	const randomButton = () => document.querySelector(".BSTApp-randomButton")
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
		showElement(randomButton());
	}

	const reset = () => {
		nodeList.forEach(k => enableButton(nodeButton(k)));
		setNodeList([]);
		setNodeSupply(sequence(n))
	}

	const random = () => {
		const shuffledNodes = [];

		const randomize = (array) => {
			if(array.length === 0) { return; }
			const randomIndex = Math.floor(Math.random() * array.length);
			shuffledNodes.push(array.splice(randomIndex, 1));
			randomize(array); // attn: recursion
		}

		randomize(nodeSupply);
		setNodeList(shuffledNodes);
	}

	const addNode = k => () => {
		disableButton(nodeButton(k));
		myTree.addValue(k);
		nodeSupply.splice(nodeSupply.indexOf(k), 1);
		setNodeList([...nodeList, k]);
	}

	const removeNode = k => () => {
		enableButton(nodeButton(k));
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

				<Tree nodes={nodeList} colors={colors} fn={removeNode}/>
				
				<button className='BSTApp-startButton' onClick={start} /* onMouseOver={} */>
					Plant A Tree
				</button>

				<div className='BSTApp-buttonPanel hidden'>
					{ makeButtonPanel(n) }
				</div>

				<button className='BSTApp-resetButton hidden' onClick={reset} /* onMouseOver={} */>
					Reset Tree
				</button>

				<button className='BSTApp-randomButton hidden' onClick={random} /* onMouseOver={} */>
					Random Tree
				</button>

			</div>	
		</div>
)}

export default BSTApp
