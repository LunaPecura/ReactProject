
import React, { useState } from 'react'
import NodeDiv from './NodeDiv';



const TreeCell = (props) => {

	const [opacity, setOpacity] = useState(0);

	const nodes = props.nodes;
	const value = props.v;
	const i = props.i;
	const j = props.j;

	const isEmpty = (value === -1);
	const isNew = (props.mode === 'tree-by-tree') ? true : (value === nodes[nodes.length-1]);
	

	const emptyCell = () => {
		const op = 0;
		return ( 
			<div className='TreeCell' id={`treeCell${props.i}-${props.j}`} style={{padding: '1px'}}>
				<NodeDiv i={props.i} j={props.j} c={props.c} v={""} w={0} h={0} m_h={1} m_v={0} opacity={op} fn={()=>{}} />
			</div> 
		);
	}

	const occupiedCell = () => {
		const op = 75;
		return (
			<div className='TreeCell' id={`treeCell${props.i}-${props.j}`}>
				<NodeDiv i={props.i} j={props.j} c={props.c} v={props.v} w={25} h={25} m_h={10} m_v={3} opacity={op} fn={props.fn} />
			</div>
		)
	}

	const newlyOccupiedCell = () => {
		const opFrom = opacity;
		const opTo = 75;
		setTimeout(() => { setOpacity(opTo) }, 10); // is 10 ms okay?
		return (
			<div className='TreeCell' id={`treeCell${i}-${j}`}>
				<NodeDiv i={i} j={j} c={props.c} v={props.v} w={25} h={25} m_h={10} m_v={3} opacity={opFrom} fn={props.fn} />
			</div>
		)
	}



	return ( isEmpty ? emptyCell() : ( isNew ? newlyOccupiedCell() : occupiedCell() ) );
}

export default TreeCell


