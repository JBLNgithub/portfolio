import SkillTile from "./SkillTile"


export default function SkillList({title, skillsList, gridSize}) {
	const gridTemplates = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-2 md:grid-cols-3',
		4: 'grid-cols-2 md:grid-cols-4',
	}
	return(
		<>
			<h3>{title}</h3>
			<ul className={`grid ${gridTemplates[gridSize]} gap-3 list-none`}>
				{skillsList.map((skill, id) => <SkillTile key={id} name={skill} />)}
			</ul>
		</>
	)
}