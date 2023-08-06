import React from 'react'
import LibraryMenuBarItem from './LibraryMenuBarItem'

const LibraryMenuBar = () => {
	return (
		<div className='LibraryMenuBar'>
			<LibraryMenuBarItem header="Data Structures" />
			<LibraryMenuBarItem header="Algorithms" />
			<LibraryMenuBarItem header="Paradigms" />
		</div>
	)
}

export default LibraryMenuBar
