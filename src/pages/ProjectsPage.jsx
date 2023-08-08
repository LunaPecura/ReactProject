import React from 'react'
import AntApp from '../apps/AntApp'

const ProjectsPage = () => {

	const n = 20
	return (
		<div className='Page Projects'>
			<h1>Projects</h1>
			<div className='projectsPage content'>
				<AntApp n={n} />
			</div>
		</div>
	)
}

export default ProjectsPage

