import React from 'react'
import NavBarItem from './NavBarItem'

const NavBar = () => {
	return (
		<div className='NavBar'>
			<NavBarItem linkTo="Projects" content="Page 1" />
			<NavBarItem linkTo="#" content="Page 2" />
			<NavBarItem linkTo="#" content="Page 3" />
			<NavBarItem linkTo="#" content="Page 4" />
			<NavBarItem linkTo="#" content="Page 5" />
		</div>
	)
}

export default NavBar
