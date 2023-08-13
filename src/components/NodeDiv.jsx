import React from 'react'


const NodeDiv = (props) => {

	const divId = `nodeDiv${props.i}-${props.j}`;

	return ( 
		<div className='NodeDiv' id={divId} onClick={props.f} style={{backgroundColor: `${props.c}`, width: `${props.w}px`, height: `${props.h}px`, margin: `5px ${props.m}px`}}>
			{ props.v }
		</div> 
	)
}

export default NodeDiv
