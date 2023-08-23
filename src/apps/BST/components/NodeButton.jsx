import React from 'react'


const NodeButton = (props) => {

	return (
		<button className='NodeButton' id={`nodeButton${props.id}`} onClick={props.fn(props.id)}
				style={{backgroundColor: `${props.color}`}}>
			{props.id}
		</button>
	)
}

export default NodeButton
