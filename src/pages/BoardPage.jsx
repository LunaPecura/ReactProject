import React from 'react';
import Board from '../components/Board';

const BoardPage = (props) => {
	return (
		<div className='BoardPage'>
			<h1>Board</h1>
			<Board n={props.n} />
		</div>
	)
}

export default BoardPage
