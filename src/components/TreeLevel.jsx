import React from 'react'

import { sequence } from '../js-classes/HelperFunctions'
import BST from '../js-classes/BSTClass'
import TreeCell from './TreeCell';


const TreeLevel = (props) => {

	const nodes = [...props.nodes];
	const myTree = new BST().addValues(nodes);
	const i = props.i;

	const relevantNodes = nodes.filter( value => myTree.subtree(value).rowIndex === i );
	const relevantCols = relevantNodes.map( value => myTree.subtree(value).colIndex );

	
	const cells = sequence(2**i).map( j => {

		const isEmpty = !relevantCols.includes(j);
		const v = isEmpty ? -1 : myTree.valueAtIndex(i,j);
		const c = isEmpty ? "inherit" : props.colors[v];
		const fn = isEmpty ? () => {} : props.fn;
		
		return <TreeCell mode={props.mode} i={i} j={j} v={v} key={j} c={c} fn={fn} nodes={props.nodes} />
	});


	return (
		<div className='TreeLevel' id={`treeLevel${i}`}>
			{cells}
		</div>
	)
}

export default TreeLevel
