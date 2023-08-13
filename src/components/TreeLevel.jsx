import React from 'react'

import { sequence } from '../js-classes/HelperFunctions'
import BST from '../js-classes/BSTClass'
import NodeDiv from './NodeDiv';


const TreeLevel = (props) => {

	const tree = new BST();
	tree.addValues(props.nodes)

	
	const nodeDivs = sequence(2**props.i).map( j => {

		const divIsEmpty = 0 === props.nodes.filter( k => tree.getIndexString(k) === `${props.i}-${j}` ).length;
		const value = divIsEmpty ? "" : props.nodes.filter( k => tree.getIndexString(k) === `${props.i}-${j}` )[0];
		const color = divIsEmpty ? 'inherit' : props.colors[value];
		const width = divIsEmpty ? 0 : 25;
		const height = divIsEmpty ? 1 : 25;

		return <NodeDiv v={value} c={color} i={props.i} j={j} key={2**props.i + j} 
						w={width} h={height} />;
		
	});


	return (
		<div className='TreeLevel treeDivRow' id={`treeDivRow${props.i}`}>
			{nodeDivs}
		</div>
	)
}

export default TreeLevel
