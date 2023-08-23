import React from 'react'
import BST from '../BSTClass'
import TreeLevel from './TreeLevel'
import TreeLabel from './TreeLabel'
import { sequence } from '../../../utilities/HelperFunctions'



const Tree = (props) => {
	
	const nodes = [...props.nodes];
	const myTree = new BST().addValues(nodes);

	const levels = sequence(myTree.height()).map( i => {
		return <TreeLevel nodes={props.nodes} mode={props.mode} colors={props.colors} 
						fn={props.fn} i={i} key={i} />
	})


	return (
		<div className='Tree'>
			<TreeLabel nodes={props.nodes} />
			{ levels }
		</div>
	)
}

export default Tree
