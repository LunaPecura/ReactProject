import React from 'react';
import AntApp from '../components/AntApp';

const AntPage = () => {

	const n = 20;

	return (
		<div className='AntPage'>
			<h1>Langton's Ant</h1>
			<AntApp n={n} />
		</div>
	)
}

export default AntPage
