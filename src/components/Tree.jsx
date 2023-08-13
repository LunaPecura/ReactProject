import React from 'react'
import TreeLevel from './TreeLevel'
import { sequence } from '../js-classes/HelperFunctions'
import BST from '../js-classes/BSTClass'

const Tree = (props) => {
	
	const tree = new BST();
	tree.addValues(props.nodes);

	const treeLevels = sequence(tree.height()).map( i => {
		return <TreeLevel nodes={props.nodes} colors={props.colors} i={i} key={i} />
	})


	return (
		<div className='Tree' nodes={props.nodes} colors={props.colors}>
			{ treeLevels }
		</div>
	)
}

export default Tree
