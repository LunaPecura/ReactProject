import React from 'react'
import NavBarItem from './NavBarItem'

const NavBar = () => {
	return (
		<div className='NavBar'>
			<NavBarItem linkTo="" content="Main" />
			<NavBarItem linkTo="projects" content="Projects" />
			{/* <NavBarItem linkTo="board" content="Board" /> */}
			{/* <NavBarItem linkTo="fidgets" content="Fidgets" /> */}
			<NavBarItem linkTo="ant" content="Ants" />
			<NavBarItem linkTo="bst" content="BST" />
			<NavBarItem linkTo="theory" content="Theory" />
		</div>
	)
}

export default NavBar
