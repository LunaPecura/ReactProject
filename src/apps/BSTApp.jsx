
import React, { useState } from 'react'
import Tree from '../components/Tree'
import NodeButton from '../components/NodeButton'

import { hideElement, showElement, disableButton, enableButton, sequence, shuffle } from '../js-classes/HelperFunctions'



const BSTApp = () => {

	const n = 10;
	const colors = ["red", "darkorange", "gold", "limegreen", "seagreen", "darkcyan", "cornflowerblue", "mediumslateblue", "darkorchid", "palevioletred"];
	const [nodeList, setNodeList] = useState([]);
	/* ------------------------------------------------------------------------- */
	const appHeader = () => document.querySelector(".appHeader");
	const pathDiv = () => document.querySelector("#BSTApp-path");
	const msgDiv = () => document.querySelector(".inProgressMsg");
	const buttonPanel = () => document.querySelector(".BSTApp-buttonPanel");
	const startButton = () => document.querySelector("#BSTApp-startButton");
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
	}

	const reset = () => {
		nodeList.forEach(k => enableButton(nodeButton(k)));
		setNodeList([]);
	}

	const random = () => {
		sequence(n).forEach(index => disableButton(nodeButton(index)))
		setNodeList(shuffle(sequence(n)));
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
	


	return (
		<div className='BSTApp'>

			<div className='pathDiv hidden' id='BSTApp-path'><code>/Binary Search Trees</code></div>
			<div className='inProgressMsg'>...in progress...</div>
			<h2 className='appHeader'>Binary Search Trees</h2>
			
			<div className='appContent'>

				<Tree nodes={nodeList} colors={colors} fn={removeNode}/>
				
				<button className='BSTApp-button' id='BSTApp-startButton' onClick={start} /* onMouseOver={} */>
					Plant A Tree
				</button>

				<div className='BSTApp-buttonPanel hidden'>
					<div className='bundle' style={{display: 'flex'}}>{ makeNodeButtons(n) }</div>
					<button className='BSTApp-button' id='BSTApp-resetButton' onClick={reset} /* onMouseOver={} */>
						Reset Tree
					</button>
					<button className='BSTApp-button' id='BSTApp-randomButton' onClick={random} /* onMouseOver={} */>
						Random Tree
					</button>
				</div>

			</div>	
		</div>
)}

export default BSTApp
