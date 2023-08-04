import React from 'react';
import AntCellRow from './AntCellRow';

const AntBoard = (props) => {

	const rows = Array.from({ length: props.n }, (_, i) => {
		return <AntCellRow n={props.n} rowIndex={i} data={props.data} key={i} />
	});

	return (
		<div className='AntBoard'>
			{rows}
		</div>
	)
}

export default AntBoard
