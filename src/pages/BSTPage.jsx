import React from 'react';
import BSTApp from '../components/BSTApp'
import BSTSchema from '../components/BSTSchema';



const BSTPage = () => {

	return (
		<div className='BSTPage'>
			<h1>BSTPage</h1>
			<div className='BSTContent'>
				<BSTApp />
				<BSTSchema />
			</div>
		</div>
	)
}

export default BSTPage
