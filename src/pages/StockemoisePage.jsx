import ProjectHeader from "../components/ProjectHeader"
import Comparator from "../components/comparator/Comparator"
import Mermaid from "../components/Mermaid"
import { stockemoiseDatabase, stockemoiseUseCase } from "../data/stockemoise/diagsMermaid"
import SkillList from "../components/skillList/SkillList"
import { stockemoiseConfig } from "../config/projectConfigs"
const PROJECT = 'stockemoise'


const StockemoisePage = () => {
	return (
		<>
			<section>
				<ProjectHeader
					title="La Stockemoise"
					isInDev="true"
					refs={stockemoiseConfig.refs}
				>
					<p>
						La Stockemoise is a Belgian amateur wind orchestra that
						I've played in for several years. The original Wordpress
						website seemed a bit old, so completely Reimagining and
						rebuilding it as a modern wep app revealed to be a
						meaningfull challenge.
					</p>
					<h3>Goals</h3>
					<p className="mt-4">
						The original website struggled to clearly communicate
						the orchestra's activites & upcoming concerts. The main
						goals for the application are so : clarify activities,
						enhance concerts tracking, maintain a news feed.
					</p>
					<h3>Solutions</h3>
					<p className="mt-4">
						To achieve these goals, I've defined two main
						architecture : activity-based tabs and persistant
						sidebar.
						<br /> Each single one of the activity-based tabs
						clearly define a activity carry on by the orchestra,
						removing confusion.
						<br />
						Also, the persistant sidebar ensure that critical
						information (AKA upcoming concerts) will always be just
						a glance away.
					</p>
					<br />
					<p>Now there is no excuses to not come listen to us !</p>
					<SkillList title='Stack' skillsList={stockemoiseConfig.stack} gridSize={3} />
				</ProjectHeader>
			</section>

			<section>
				<Comparator
					label2="Old site"
					label1="New site"
					img2="homeOffStockem.png"
					img1="homeAppStockem.png"
					project={PROJECT}
				/>

				<Comparator
					label2="Old site"
					label1="New site"
					img2="actuOffStockem.png"
					img1="actuAppStockem.png"
					project={PROJECT}
				/>

				<Comparator
					label2="Model"
					label1="New site"
					img2="homeModelStockem.png"
					img1="homeAppStockem.png"
					project={PROJECT}
				/>

				<Comparator
					label2="Model"
					label1="New"
					img2="actuModelStockem.png"
					img1="actuAppStockem.png"
					project={PROJECT}
				/>

				<Comparator
					label1="EA Diag"
					label2="Translation"
					img1="EADiagStockemoise.png"
					img2="ERDiagStockemoise.png"
					project={PROJECT}
				/>
			</section>

			<section>
				<Mermaid title="Use Case" code={stockemoiseUseCase} />
				<Mermaid title="EA Diag" code={stockemoiseDatabase} />
			</section>
		</>
	)
}

export default StockemoisePage
