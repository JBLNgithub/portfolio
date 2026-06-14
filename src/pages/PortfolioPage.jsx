import ProjectHeader from "../components/ProjectHeader";
import SkillList from "../components/skillList/SkillList";
import { portfolioConfig } from "../config/projectConfigs";


const PortfolioPage = () => {
	return (
		<>
			<section>
				<ProjectHeader title="Portfolio" refs={portfolioConfig.refs}>
					<p>
						Portfolio is a lightweight webapp designed to showcase my past and upcoming projects.
					</p>

					<SkillList title='Stack' skillsList={portfolioConfig.stack} gridSize={3} />
				</ProjectHeader>
			</section>
		</>
	);
};

export default PortfolioPage