import React from 'react';
import {Link} from 'react-router-dom';

const NavBarItem = (props) => {
	return (
		<div className='NavBarItem'>
			<Link to={`/${props.linkTo}`}>
				{props.content}
			</Link>
		</div>
	)
}

export default NavBarItem
