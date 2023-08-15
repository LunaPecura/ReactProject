
import React, { useState, useRef } from 'react'
import Tree from '../components/Tree'
import NodeButton from '../components/NodeButton'

import { hideElement, showElement, disableButton, enableButton, sequence, shuffle, deepCopyData } from '../js-classes/HelperFunctions'



const BSTApp = () => {

	const n = 10;
	const colors = ["firebrick", "orangered", "darkorange", "gold", "limegreen", "seagreen", "darkcyan", "cornflowerblue", "mediumpurple", "darkorchid"];
	const [nodeList, setNodeList] = useState([]);
	const [timeoutID, setTimeoutID] = useState(-1);
	const memory = useRef([]);
	const posInMemory = useRef(-1);
	/* ------------------------------------------------------------------------- */
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
	const zoomInButton = () => document.querySelector("#BSTApp-zoomInButton");
	const zoomOutButton = () => document.querySelector("#BSTApp-zoomOutButton");
	const nodeButton = k => document.querySelector(`#nodeButton${k}`);
	
	
	const makeNodeButtons = n => sequence(n).map( i => {
		return <NodeButton id={i} fn={addNode} color={colors[i]} key={i} />
	})

	const start = () => {
		hideElement(startButton());
		hideElement(appHeader());
		hideElement(msgDiv());
		showElement(pathDiv());
		showElement(buttonPanel());
		showElement(treeDiv());
	}

	const reset = () => {
		nodeList.forEach(k => enableButton(nodeButton(k)));
		setNodeList([]);
	}

	const random = () => {
		const newList = shuffle(sequence(n));
		sequence(n).forEach(index => disableButton(nodeButton(index)));
		setNodeList(newList);
		return newList;
	}

	const addNode = k => () => {
		disableButton(nodeButton(k));
		setNodeList([...nodeList, k]);
	}

	const removeNode = k => () => {
		enableButton(nodeButton(k));
		nodeList.splice(nodeList.indexOf(k), 1);
		setNodeList([...nodeList]);
	}
	
	const stream = () => {
		// enableButton(backButton())
		const id = setInterval(() => { 
			const newList = random(); 
			memory.current = [...memory.current, newList];
			// console.log(...memory.current)
			console.log(newList);
		}, 500);
		setTimeoutID(id);
		hideElement(streamButton());
		showElement(pauseButton());
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

	const zoomIn = () => {

	}

	const zoomOut = () => {

	}


	return (
		<div className='BSTApp'>

			<div className='pathDiv hidden' id='BSTApp-path'><code>/Binary Search Trees</code></div>
			<div className='inProgressMsg'>...in progress...</div>
			<h2 className='appHeader'>Binary Search Trees</h2>
			
			<div className='appContent'>

				<span className='wrapper hidden' id='treeWrapper'>
					<Tree nodes={nodeList} colors={colors} fn={removeNode}/>
				</span>
				
				<button className='BSTApp-button' id='BSTApp-startButton' onClick={start}>
					Plant A Tree
				</button>

				<div className='BSTApp-buttonPanel hidden'>
					<div className='bundle' style={{display: 'flex'}}>{ makeNodeButtons(n) }</div>
					<div className='bundle' style={{display: 'flex', width: '100%'}}>
						<button className='BSTApp-button' id='BSTApp-resetButton' onClick={reset}>
							Reset
						</button>
						<button className='BSTApp-button' id='BSTApp-randomButton' onClick={random}>
							Random Tree
						</button>
					</div>
					<div className='bundle' style={{display: 'flex', width: '100%'}}>
						<button className='BSTApp-button' id='BSTApp-zoomInButton' onClick={zoomIn} disabled>
								Zoom In
						</button>
						<button className='BSTApp-button' id='BSTApp-backButton' onClick={back} >
								&lt;
						</button>
						<button className='BSTApp-button' id='BSTApp-streamButton' onClick={stream}>
								Stream
						</button>
						<button className='BSTApp-button hidden' id='BSTApp-pauseButton' onClick={pause}>
								Pause
						</button>
						<button className='BSTApp-button' id='BSTApp-forwardButton' onClick={forward} >
								&gt;
						</button>
						<button className='BSTApp-button' id='BSTApp-zoomOutButton' onClick={zoomOut} disabled>
								Zoom Out
						</button>
					</div>
				</div>

			</div>	
		</div>
)}

export default BSTApp
