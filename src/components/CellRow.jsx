import React from 'react';
import Cell from './Cell';

const CellRow = (props) => {

	const cells = Array.from({ length: props.n }, (_, j) => {
		return <Cell data={props.data} rowIndex={props.rowIndex} colIndex={j} key={j} />
	});



	return (
		<div className='CellRow'>
			{cells}
		</div>
	)
}

export default CellRow
