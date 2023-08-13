import React from 'react'


const NodeDiv = (props) => {

	const divId = `nodeDiv${props.i}-${props.j}`;

	return ( 
		<div className='NodeDiv' id={divId} style={{backgroundColor: `${props.c}`, width: `${props.w}px`, height: `${props.h}px`}}>
			{ props.v }
		</div> 
	)
}

export default NodeDiv
