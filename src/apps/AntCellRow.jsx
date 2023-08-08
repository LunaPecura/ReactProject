import React from 'react';
import AntCell from './AntCell';



const AntCellRow = (props) => {

	const cells = Array.from({ length: props.n }, (_, j) => {
		return <AntCell data={props.data} rowIndex={props.rowIndex} colIndex={j} key={j} />
	});


	return (
		<div className='AntCellRow'>
			{cells}
		</div>
	)
}

export default AntCellRow
