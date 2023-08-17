import React from 'react'
import BST from '../js-classes/BSTClass'
import TreeLevel from './TreeLevel'
import { sequence } from '../js-classes/HelperFunctions'


const Tree = (props) => {
	
	const nodes = [...props.nodes];
	const myTree = new BST().addValues(nodes);
	const treeHeight = myTree.height();


	return (
		<div className='Tree'>
			{ 
				sequence(treeHeight).map( i => {
					return <TreeLevel nodes={nodes} mode={props.mode} colors={props.colors} fn={props.fn} i={i} key={i} />
				})
			}
		</div>
	)
}

export default Tree
