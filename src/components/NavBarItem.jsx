import React from 'react';
import {Link} from 'react-router-dom';

const NavBarItem = (props) => {
	return (
		<Link to={`/${props.linkTo}`}>
			<div className='NavBarItem'>{props.header}</div>
		</Link>
	)
}

export default NavBarItem
