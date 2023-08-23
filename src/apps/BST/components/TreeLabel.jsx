import React from 'react'
import BST from '../BSTClass';

const TreeLabel = (props) => {

	const nodes = [...props.nodes];
	const myTree = new BST().addValues(nodes);

	const nodeDiv = (i,j) => document.querySelector(`#nodeDiv${i}-${j}`);


	const animate = () => {
		nodes.forEach( (value, nodeCount) => {
			const [i,j] = myTree.getIndex(value);
			const opacity1 = 10; // in percent
			const opacity2 = 75;
			const transTime1 = 0; // in seconds
			const transTime2 = 1;

			nodeDiv(i,j).style.transition = `opacity ${transTime1}s`;
			nodeDiv(i,j).style.opacity = `${opacity1}%`;

			setTimeout(() => {
				nodeDiv(i,j).style.transition = `opacity ${transTime2}s`;
				nodeDiv(i,j).style.opacity = `${opacity2}%`;
			}, (nodeCount)*500)
		})
	}

	return (
		<div className='TreeLabel' onClick={animate}>
			{[...nodes]}
		</div>
	)
}

export default TreeLabel
