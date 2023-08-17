
import React, { useState, useRef } from 'react'
import Tree from '../components/Tree'
import NodeButton from '../components/NodeButton'

import { hideElement, showElement, disableButton, enableButton, 
			sequence, shuffle, deepCopyData } from '../js-classes/HelperFunctions'



const BSTApp = () => {

	const [nodeList, setNodeList] = useState([]);
	const [timeoutID, setTimeoutID] = useState(-1);
	const [mode, setMode] = useState('');
	const memory = useRef([]);
	const posInMemory = useRef(-1);
	/* ---------------------------------------------------------------------------------------- */
	const n = 10;
	const colors = ["firebrick", "orangered", "darkorange", "gold", "limegreen", 
					"seagreen", "darkcyan", "cornflowerblue", "mediumpurple", "darkorchid"];
	/* ---------------------------------------------------------------------------------------- */
	const appHeader = () => document.querySelector(".appHeader");
	const pathDiv = () => document.querySelector("#BSTApp-path");
	const msgDiv = () => document.querySelector(".inProgressMsg");
	const treeDiv = () => document.querySelector('#treeWrapper');
	const buttonPanel = () => document.querySelector(".BSTApp-buttonPanel");
	const startButton = () => document.querySelector("#BSTApp-startButton");
	const streamButton = () => document.querySelector("#BSTApp-streamButton");
	const pauseButton = () => document.querySelector("#BSTApp-pauseButton");
	const backButton = () => document.querySelector("#BSTApp-backButton");
	const forwardButton = () => document.querySelector("#BSTApp-forwardButton");
	const nodeButton = k => document.querySelector(`#nodeButton${k}`);
	// const zoomInButton = () => document.querySelector("#BSTApp-zoomInButton"); // future use
	// const zoomOutButton = () => document.querySelector("#BSTApp-zoomOutButton"); // future use
	

	const start = () => {
		hideElement(startButton());
		hideElement(appHeader());
		hideElement(msgDiv());
		showElement(pathDiv());
		showElement(buttonPanel());
		showElement(treeDiv());
	}

	const reset = () => {
		nodeList.forEach(k => {
			enableButton(nodeButton(k))
		});
		setNodeList([]);
	}

	const random = () => {
		const newList = shuffle(sequence(n));
		sequence(n).forEach(index => {
			disableButton(nodeButton(index));
		});
		setMode('tree-by-tree');
		setNodeList(newList); 
		return newList; // for chaining purposes
	}

	const addNode = k => () => {
		disableButton(nodeButton(k));
		setMode('node-by-node');
		setNodeList([...nodeList, k]);
	}

	const removeNode = k => () => {
		enableButton(nodeButton(k));
		nodeList.splice(nodeList.indexOf(k), 1);
		setMode('node-by-node');
		setNodeList([...nodeList]);
	}
	
	const stream = () => {
		hideElement(streamButton());
		showElement(pauseButton());
		showElement(backButton());
		showElement(forwardButton());

		const id = setInterval(() => { 
			const newList = random(); 
			memory.current = [...memory.current, newList];
		}, 5000);

		setTimeoutID(id);
	}

	const pause = () => {
		// enableButton(backButton());
		clearInterval(timeoutID);
		showElement(streamButton());
		hideElement(pauseButton());
		posInMemory.current = memory.current.length - 1;
	}

	const back = () => {
		if(posInMemory.current === 1) { disableButton(backButton()); } 
		else if(posInMemory.current === memory.current.length - 1) { enableButton(forwardButton()); } 
		setNodeList(memory.current[posInMemory.current-1]);
		posInMemory.current = posInMemory.current - 1;
	}

	const forward = () => {
		if(posInMemory.current === 0) { enableButton(backButton()); } 
		else if(posInMemory.current === memory.current.length - 2) { disableButton(forwardButton()); } 
		setNodeList(memory.current[posInMemory.current+1]);
		posInMemory.current = posInMemory.current + 1;
	}

	const zoomIn = () => {}
	const zoomOut = () => {}


	return (
		<div className='BSTApp'>

			<div className='pathDiv hidden' id='BSTApp-path'><code>/Binary Search Trees</code></div>
			<div className='inProgressMsg'>...in progress...</div>
			<h2 className='appHeader'>Binary Search Trees</h2>
			
			<div className='appContent'>

			{/* TREE: FILLED IN PROGRAMMATICALLY */}
				<span className='wrapper hidden' id='treeWrapper'>
					<Tree nodes={nodeList} mode={mode} colors={colors} fn={removeNode} />
				</span>
				
			{/* START BUTTON */}
				<button className='BSTApp-button' id='BSTApp-startButton' onClick={start}>
					Plant A Tree
				</button>

			{/* BUTTON PANEL: node buttons, action buttons */}
				<div className='BSTApp-buttonPanel hidden'>

					{/* ROW OF BUTTONS: for adding nodes 0 - 9 */}
					<div className='bundle' style={{display: 'flex'}}>
						{ sequence(n).map( i => <NodeButton id={i} fn={addNode} color={colors[i]} key={i} /> ) }
					</div>

					{/* ROW OF BUTTONS: reset (clears the screen); random (draws a random BST) */}
					<div className='bundle' style={{display: 'flex', width: '100%'}}>
						<button className='BSTApp-button' id='BSTApp-resetButton' onClick={reset}>Reset</button>
						<button className='BSTApp-button' id='BSTApp-randomButton' onClick={random}>Random</button>
					</div>

					{/* ROW OF BUTTONS: stream/pause (draws an unbounded sequence of random BSTs); */}
					{/*                 back/forward (skip around "in memory") */}
					{/*					zoom in/out (future use)  */}
					<div className='bundle' style={{display: 'flex', width: '100%'}}>
						<button className='BSTApp-button' id='BSTApp-zoomInButton' onClick={zoomIn} disabled>Zoom In</button>
						<button className='BSTApp-button hidden' id='BSTApp-backButton' onClick={back}>&lt;</button>
						<button className='BSTApp-button' id='BSTApp-streamButton' onClick={stream}>Stream</button>
						<button className='BSTApp-button hidden' id='BSTApp-pauseButton' onClick={pause}>Pause</button>
						<button className='BSTApp-button hidden' id='BSTApp-forwardButton' onClick={forward}>&gt;</button>
						<button className='BSTApp-button' id='BSTApp-zoomOutButton' onClick={zoomOut} disabled>Zoom Out </button>
					</div>
				</div>

			</div>	
		</div>
)}

export default BSTApp
