import React from 'react'

const MainPage = (props) => {

	const imgSrc = props.apodData === null ? "" : props.apodData.url;

	return (
		<div className='MainPage'>
			<h1>Main</h1>
			<div className='mainPageContentDiv' 
					style={{ backgroundImage: `url(${imgSrc})` }}>
				<div className='mainPageAnimationDiv'>Animation 1</div>
				<div className='mainPageAnimationDiv'>Animation 2</div>
				<div className='mainPageAnimationDiv'>Animation 3</div>
				<div className='mainPageAnimationDiv'>Animation 4</div>
				<div className='mainPageAnimationDiv'>Animation 5</div>
				<div className='mainPageAnimationDiv'>Animation 6</div>
			</div>
			{/* <div className='apodImg'><img src={imgSrc} /></div> */}
		</div>
		
	)
}

export default MainPage
