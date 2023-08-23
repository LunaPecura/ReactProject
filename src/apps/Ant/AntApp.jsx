
import './AntStyle.css'; 
import React, { useState } from 'react'
import AntBoard from './components/AntBoard';
import Ant from './AntClass'
import { updatedData } from '../../utilities/HelperFunctions' // TODO



const AntApp = (props) => {

	const n = props.n;
	const [colorMatrix, setColorMatrix] = useState(Array(n).fill(Array(n).fill('black')));
	const [contentMatrix, setContentMatrix] = useState(Array(n).fill(Array(n).fill('')));

	const [x, setX] = useState(-1);
	const [y, setY] = useState(-1);
	const [direction, setDirection] = useState('');
	const [counter, setCounter] = useState(1);

	const start = () => {
		document.querySelector(".start").classList.add("hidden");
		document.querySelector(".turn").classList.remove("hidden");
		// document.querySelector(".start").setAttribute('disabled', true);
		const [x, y] = [Math.floor(n/2), Math.floor(n/2)];
		const newContentMatrix = updatedData(contentMatrix, x, y, 'A');
		setContentMatrix(newContentMatrix);
		setX(x);
		setY(y);
		setDirection('north');
	}

	const turn = () => {
		document.querySelector(".turn").classList.add("hidden");
		document.querySelector(".step").classList.remove("hidden");
		const ant = new Ant(x, y, direction);
		if(colorMatrix[x][y] === 'black') {
			ant.turnLeft(); 
		} else { ant.turnRight(); }
		const newContentMatrix = updatedData(contentMatrix, x, y, ant.symbol());
		setContentMatrix(newContentMatrix);
		setDirection(ant.direction);
	}

	const step = () => {
		console.log(counter);
		document.querySelector(".step").classList.add("hidden");
		document.querySelector(".turn").classList.remove("hidden");
		const ant = new Ant(x, y, direction);
		const switchColor = ( colorMatrix[x][y] === 'black' ) ? 'teal' : 'black';
		const [x_new, y_new] = ant.posAhead();

		const newColorMatrix = updatedData(colorMatrix, x, y, switchColor)
		setColorMatrix(newColorMatrix);
		const newContentMatrix = updatedData(contentMatrix, x, y, '');
		newContentMatrix[x_new][y_new] = ant.symbol();
		setContentMatrix(newContentMatrix);
		setCounter(counter+1);
		if(x_new !== x) { setX(x_new); }
		if(y_new !== y) { setY(y_new); }
	}

	const round = () => {
		
		setTimeout(() => { turn(); }, 0);
		setTimeout(() => { step(); }, 1000);
		
		console.log(`Round ${counter}: (${x}, ${y}) ${direction}`);
	}

	const data = {
		colorMatrix: colorMatrix,
		contentMatrix: contentMatrix
	}


	return (
		<div className='AntApp'>
			<div>...in progress...</div>
			<h2>Langton's Ant</h2>
			<AntBoard n={n} data={data} />
			<div>
				<div><button className="antButton start" onClick={start}>Start</button></div>
				<div><button className="antButto turn hidden" onClick={turn}>Turn</button></div>
				<div><button className="antButton step hidden" onClick={step}>Step</button></div>
			</div>
		</div>
	)
}

export default AntApp
