import React from 'react'
import AntApp from '../components/AntApp'

const ProjectsPage = () => {

	const n = 20
	return (
		<div className='ProjectsPage'>
			<h1>Projects</h1>
			<AntApp n={n} />
		</div>
	)
}

export default ProjectsPage

