
import './BSTStyle.css'; 
import React, { useState, useRef } from 'react'
import Tree from './components/Tree'
import TreeLabel from './components/TreeLabel'
import NodeButton from './components/NodeButton'
import HList from '../../components/HList'
import { hideElement, showElement, disableButton, enableButton, 
			sequence, shuffle } from '../../utilities/HelperFunctions'



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
	const pathDiv = () => document.querySelector("#path");
	const msgDiv = () => document.querySelector(".inProgressMsg");
	const treeDiv = () => document.querySelector('#treeWrapper');
	const buttonPanel = () => document.querySelector(".buttonPanel");
	const startButton = () => document.querySelector(".startButton");
	const streamButton = () => document.querySelector(".streamButton");
	const pauseButton = () => document.querySelector(".pauseButton");
	const backButton = () => document.querySelector(".backButton");
	const forwardButton = () => document.querySelector(".forwardButton");
	const nodeButton = k => document.querySelector(`#nodeButton${k}`);
	const zoomInButton = () => document.querySelector(".zoomInButton"); // future use
	const zoomOutButton = () => document.querySelector(".zoomOutButton"); // future use
	

	// initial start up
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
		
		setMode('tree-by-tree');
		setNodeList([]);

		setTimeout(() => {
			setNodeList(newList);
		}, 100);
		
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
		}, 2000);

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

			<div className='pathDiv hidden' id='path'><code>/Binary Search Trees</code></div>
			<div className='inProgressMsg'>...in progress...</div>
			<h2 className='appHeader'>Binary Search Trees</h2>
			
			<div className='appContent'>

				{/* TREE */}
				<span className='wrapper hidden' id='treeWrapper'>
					<TreeLabel nodes={nodeList} />
					<Tree nodes={nodeList} mode={mode} colors={colors} 
							fn={removeNode} setNodeList={setNodeList} />
				</span>
				
				{/* START BUTTON */}
				<button className='startButton' onClick={start}>
					Plant A Tree
				</button>

				{/* BUTTON PANEL: node buttons, action buttons */}
				<div className='buttonPanel hidden'>

					{/* Node Buttons 0-9 */}
					<HList>
					{ 
						sequence(n).map( i => {
							return <NodeButton id={i} fn={addNode} color={colors[i]} key={i} /> 
						}) 
					}	
					</HList>

					{/* Action Buttons: reset, random */}
					<HList>
						<button className='resetButton' onClick={reset}>Reset</button>
						<button className='randomButton' onClick={random}>Random</button>
					</HList>

					{/* Action Buttons: stream/pause, back/forward, zoom in/out */}
					<HList>
						<button className='zoomInButton' onClick={zoomIn} disabled>Zoom In</button>
						<button className='backButton hidden' onClick={back}>&lt;</button>
						<button className='streamButton' onClick={stream}>Stream</button>
						<button className='pauseButton hidden' onClick={pause}>Pause</button>
						<button className='forwardButton hidden' onClick={forward}>&gt;</button>
						<button className='zoomOutButton' onClick={zoomOut} disabled>Zoom Out</button>
					</HList>

				</div>
			</div>	
		</div>
)}

export default BSTApp
