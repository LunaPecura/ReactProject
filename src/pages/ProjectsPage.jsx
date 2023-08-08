import React from 'react'
import AntApp from '../apps/AntApp'

const ProjectsPage = () => {

	const n = 15

	return (
		<div className='Page Projects'>
			<h1>Projects</h1>
			<div className='projectsPage content'>
				<AntApp n={n} />

				<div className='todo'>
					<div>TO DO</div>
					<div>Video Poker</div> 
				</div>

			</div>
		</div>
	)
}

export default ProjectsPage

