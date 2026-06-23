import {Link} from 'react-router-dom'
import topThePage from '../utils/TopThePage'


export default function ProjectList({title, projects}) {
	return(
		<>
			<h3>{title}</h3>
			<ul className={`grid grid-cols-3 gap-3 list-none`}>
				{projects.map((project, id) => <ProjectTile key={id} project={project} />)}
			</ul>
		</>
	)
}


function ProjectTile({project}) {
	return(
		<Link to={project.link} onClick={topThePage}>
			<li className="text-neutral-200 bg-neutral-800 hover:text-neutral-800 hover:bg-sky-500 rounded-md text-center py-6">
				{project.label}
			</li>
		</Link>
	)
}