import React from 'react'
import AntApp from '../apps/AntApp'

const ProjectsPage = () => {

	const n = 15

	return (
		<div className='Page Projects'>
			<div className='pathDiv'><code>/Projects</code></div>
			<div className='projectsPage content'>

				<div className='appPreview'>
					<AntApp n={n} />
				</div>

				<div className='todo'>
					<div>TO DO</div>
					<div>Video Poker</div> 
				</div>

			</div>
		</div>
	)
}

export default ProjectsPage

