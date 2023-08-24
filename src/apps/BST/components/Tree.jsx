import React from 'react'
import BST from '../BSTClass'
import TreeLevel from './TreeLevel'
import { sequence } from '../../../utilities/HelperFunctions'



const Tree = (props) => {
	
	const nodes = [...props.nodes];
	const myTree = new BST().addValues(nodes);


	return (
		<div className='Tree'>
		{ 
			sequence(myTree.height()).map( i => {
				return <TreeLevel nodes={props.nodes} mode={props.mode} colors={props.colors} 
									fn={props.fn} i={i} key={i} />
			})
			
		}
		</div>
	)
}

export default Tree
