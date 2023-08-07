import React from 'react'
import NavBarItem from './NavBarItem'

const NavBar = () => {
	return (
		<div className='NavBar'>
			<NavBarItem linkTo="" header="Main" />
			<NavBarItem linkTo="projects" header="Projects" />
			<NavBarItem linkTo="library" header="Library" />
			<NavBarItem linkTo="contact" header="Contact" />
		</div>
	)
}

export default NavBar
