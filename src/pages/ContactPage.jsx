import React from 'react'
import { useEffect, useState } from 'react';



const ContactPage = () => {

	const apiKey = 'LzgRZhjbLiFQT87zeQBoVpJOa3hl1Rk9U4mnRXza'
	const [apodData, setApodData] = useState(null)
	const imgSrc = apodData === null ? "" : apodData.url;
	const todaysDate = apodData === null ? "" : apodData.date;

	const getApodData = async () => {
		const res = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
		setApodData(await res.json());
	}
	
	useEffect(() => { getApodData(); }, [])


	return (
		<div className='ContactPage' style={{backgroundColor: 'black', color: 'white'}}>
			{/* <h1>Contact</h1> */}
			<h1 style={{color:'white', marginBottom:'50px'}} >
				NASA's aSTRONOMY pICTURE oF <small><small><small>THE</small></small></small> dAY (apod)</h1>
			<h2><code>[API_requirement === fullfilled;]</code></h2>
			<p style={{color: 'white'}}>{todaysDate}</p>
			<div className='apodImg'><img src={imgSrc} /></div>
		</div>
	)
}

export default ContactPage
