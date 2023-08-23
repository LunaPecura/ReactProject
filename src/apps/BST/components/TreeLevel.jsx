import React from 'react'

import { sequence } from '../../../utilities/HelperFunctions'
import BST from '../BSTClass'
import TreeCell from './TreeCell';


/* CREATE CELLS (i,j) FOR ROW i (2^i TOTAL) */

const TreeLevel = (props) => {

	const nodes = [...props.nodes];
	const myTree = new BST().addValues(nodes);

	// all column indices in row i that have values associated with them
	const occCols = nodes.map(value => myTree.getIndex(value))
							.filter(index => index[0] === props.i)
							.map(index => index[1]);

	return (
		<div className='TreeLevel' id={`treeLevel${props.i}`}>
			<div className='wrapper flex'>	
			{
				sequence(2 ** props.i).map( j => {
					const isEmpty = !occCols.includes(j); 

					// set attributes of each cell (i,j) depending on whether cell is empty or occupied
					const v = !isEmpty ? myTree.valueAtIndex(props.i, j) : -1;
					const c = !isEmpty ? props.colors[v] : 'inherit';
					const fn = !isEmpty ? props.fn : () => {};

					return <TreeCell mode={props.mode} nodes={props.nodes} 
									i={props.i} j={j} v={v} key={j} c={c} fn={fn} />
				})
			}
			</div>

			{/* <div className='wrapper flex'>
				{nodes.filter(k => myTree.getRowIndex(k) === i)}
			</div> */}

		</div>
	)
}

export default TreeLevel
