import React from 'react'


const NodeDiv = (props) => {

	return ( 
		<div className='NodeDiv' id={`nodeDiv${props.i}-${props.j}`} onClick={props.f} 
				style={{backgroundColor: `${props.c}`, 
						width: `${props.w}px`, 
						height: `${props.h}px`, 
						margin: `5px ${props.m}px`}}>
			{ props.v }
		</div> 
	)
}

export default NodeDiv
