
import React, { useState } from 'react'
import NodeDiv from './NodeDiv';



const TreeCell = (props) => {

	const [varOpacity, setVarOpacity] = useState(0);

	const nodes = props.nodes;
	const mode = props.mode;
	const value = props.v;
	const color = props.c;
	const i = props.i;
	const j = props.j;
	const n = nodes.length;

	const isEmpty = (value === -1);
	const isNew = (mode === 'tree-by-tree') ? true : (value === nodes[n-1]);
	

	const emptyCell = () => {
		const opacity = 25;
		const cellSize = 5;
		const margin_h = 1;
		const margin_v = 1;

		return ( 
			<div className='TreeCell' id={`treeCell${i}-${j}`}>
				<NodeDiv i={i} j={j} mode={mode} c={color} v={""} o={opacity}
						w={cellSize} h={cellSize} m_h={margin_h} m_v={margin_v} fn={()=>{}} />
			</div> 
		);
	}

	const occupiedCell = () => {
		const opacity = 75;
		const cellSize = 25;
		const margin_h = 5;
		const margin_v = 5;

		return (
			<div className='TreeCell' id={`treeCell${i}-${j}`}>
				<NodeDiv i={i} j={j} c={color} v={props.v} b={props.b} o={opacity}
						w={cellSize} h={cellSize} m_h={margin_h} m_v={margin_v} fn={props.fn} />
			</div>
		)
	}

	const newlyOccupiedCell = () => {
		const opacity1 = varOpacity;
		const opacity2 = 75;
		const cellSize = 25;
		const margin_h = 5;
		const margin_v = 5;

		setTimeout(() => { 
			setVarOpacity(opacity2) 
		}, 25); // what's a good value?

		return (
			<div className='TreeCell' id={`treeCell${i}-${j}`}>
				<NodeDiv i={i} j={j} c={color} v={props.v} o={opacity1}
						w={cellSize} h={cellSize} m_h={margin_h} m_v={margin_v} fn={props.fn} />
			</div>
		)
	}



	return ( isEmpty ? emptyCell() : ( isNew ? newlyOccupiedCell() : occupiedCell() ) );
}

export default TreeCell


