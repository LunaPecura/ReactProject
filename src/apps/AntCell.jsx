import React from 'react'


const AntCell = (props) => {

	const cellColor = props.data.colorMatrix[props.rowIndex][props.colIndex];
	const content = props.data.contentMatrix[props.rowIndex][props.colIndex];


	return (
		<div className='AntCell' style={{backgroundColor: `${cellColor}`, color: 'white'}}>
			{content}
		</div>
	)
}

export default AntCell
