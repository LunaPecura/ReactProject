
import React from 'react'
import BSTApp from '../apps/BST/BSTApp'


const LibraryPage = () => {

	return (
		<div className='Page Library'>
			<div className='pathDiv'><code>/Library</code></div>
			<div className='libraryPage content'>

				<div className='appPreview'> 
					<BSTApp />
				</div>
			</div>

		</div>
	)
}

export default LibraryPage
