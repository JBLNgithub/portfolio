import profilePic from "../assets/images/profilePic.jpg"
import SkillList from "../components/skillList/SkillList"
import ProjectList from '../components/ProjectList'
import {homeConfig} from "../config/projectConfigs";


const HomePage = () => {
	return (
		<>
			<section>
				<h1>Full-Stack Dev</h1>

				<div className="grid grid-cols-3">
					<div className="col-span-3 md:col-span-1 text-center mt-16">
						<div>
							<img
								src={profilePic}
								alt="profile pic"
								className="size-50 object-cover rounded-full border-neutral-800 border-2 inline-block"
							/>
							<h3 className="font-bold">José Balon</h3>
						</div>
					</div>

					<div className="col-span-3 md:col-span-2">
						<h2>
							About me
						</h2>
						<p>
							Hi, I'm José!
							<br />
							I'm developer who loves building IT projects. Thanks to my methodical approach to thinking, I naturally thrive on problem-solving and continuous learning. I enjoy breaking down technical concepts, aligning development goals with the bigger picture, and ensuring that solutions do acheive what they are built for.<br />
							Outside of tech, my hobbies mostly revolves around music. I
							play the saxophone and the organ. I also play in an orchestra
							where I get to do a bit of teaching!
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2>Overview</h2>
				<SkillList title="Capabilities" skillsList={homeConfig.capabilities} gridSize={2} />
			</section>

			<section>
				<h2>Tool set</h2>
				<SkillList title="Languages" skillsList={homeConfig.progLanguages} gridSize={4} />
				<SkillList title="Front-End" skillsList={homeConfig.frontEnd} gridSize={4} />
				<SkillList title="Back-End" skillsList={homeConfig.backEnd} gridSize={4} />
				<SkillList title="Utils" skillsList={homeConfig.utils} gridSize={4} />
			</section>

			<section>
				<ProjectList title="Projects" projects={homeConfig.projects} />
			</section>
		</>
	);
};

export default HomePage;