import React from 'react';
import CellRow from './CellRow';

const Board = (props) => {

	const rows = Array.from({ length: props.n }, (_, i) => {
		return <CellRow n={props.n} rowIndex={i} data={props.data} key={i} />
	});

	return (
		<div className='Board'>
			{rows}
		</div>
	)
}

export default Board
