import React from 'react'


const NodeDiv = (props) => {


	return ( 
		<div className='NodeDiv' id={ `nodeDiv${props.i}-${props.j}` } 
				onClick={ props.fn(props.v) } 
				style={{backgroundColor: `${props.c}`, opacity: `${props.o}%`,
						width: `${props.w}px`, height: `${props.h}px`, 
						margin: `${props.m_v}px ${props.m_h}px`}}>
			{ props.v }
		</div> 
	)
}

export default NodeDiv
