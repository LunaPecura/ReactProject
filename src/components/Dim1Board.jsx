import React from 'react';
import Cell from './Cell';

const Dim1Board = (props) => {

	const cellCount = props.n * props.n;
	const cells = Array.from({ length: cellCount }, (_, i) => {
		return <Cell key={i} />
	});
	

	return (
		<div className='Dim1Board'>
			{cells}
		</div>
	)
}

export default Dim1Board