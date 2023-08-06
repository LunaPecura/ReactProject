import React from 'react'
import NavBarItem from './NavBarItem'

const NavBar = () => {
	return (
		<div className='NavBar'>
			<NavBarItem linkTo="" header="Main" />
			<NavBarItem linkTo="projects" header="Projects" />
			<NavBarItem linkTo="ant" header="Ants" />
			<NavBarItem linkTo="library" header="Library" />

		</div>
	)
}

export default NavBar
