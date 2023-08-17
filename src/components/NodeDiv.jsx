import React from 'react'


const NodeDiv = (props) => {

	const id = `nodeDiv${props.i}-${props.j}`;

	return ( 
		<div className='NodeDiv' id={id} onClick={props.fn(props.v)} 
				style={{backgroundColor: `${props.c}`, opacity: `${props.opacity}%`,
						width: `${props.w}px`, height: `${props.h}px`, margin: `${props.m_v}px ${props.m_h}px`}}>
			{ props.v }
		</div> 
	)
}

export default NodeDiv
