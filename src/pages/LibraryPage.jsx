import React from 'react'
import LibraryContent from '../components/LibraryContent'
import LibraryMenuBar from '../components/LibraryMenuBar'

const LibraryPage = () => {
	return (
		<div className='LibraryPage'>
			
			<LibraryMenuBar></LibraryMenuBar>
			<h1>Library</h1>
			<LibraryContent></LibraryContent>

		</div>
	)
}

export default LibraryPage
