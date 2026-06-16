import { FiMenu } from "react-icons/fi"
import { NavLink } from "react-router-dom"
import topThePage from "../utils/TopThePage"
import {homeConfig} from "../config/projectConfigs"
import Logo from '../components/Logo'



export default function Navbar() {
	const isCurrentTab = ({ isActive }) => {
		return isActive ? "bg-blue-700" : "";
	}

	return (
		<nav>
			{/* MOBILE NAVBAR */}
			<ul className="mobile-nav flex fixed size-full bg-neutral-800 flex-col justify-center hidden">
				<li><NavLink className={isCurrentTab} to='/' onClick={mobileNavClick}>About Me</NavLink></li>
				{homeConfig.projects.map((p, id) =>
					<li key={id}>
						<NavLink to={p.link} className={isCurrentTab} onClick={mobileNavClick}>{p.label}</NavLink>
					</li>)}
			</ul>
			{/* --- LOGO NAV TOGGLER ---*/}
			<button onClick={toggleMenu} className="md:hidden fixed right-5 top-5">
				<Logo size={'100'} className="bg-neutral-800 hover:bg-sky-500 hover:text-neutral-800 text-3xl rounded-md p-2" />
			</button>
			{/* --- BASIC ICON IF I REMOVE LOGO CLICK ---*/}
			{/* <FiMenu onClick={toggleMenu} className="md:hidden fixed bg-neutral-800 hover:bg-sky-500 hover:text-neutral-800 text-3xl right-5 top-5 rounded-md" />*/}

			{/*--- TABLETTE & DESKTOP NAVBAR ---*/}
			<ul className="hidden md:flex sticky top-0 h-screen flex-col justify-center">
				<li><NavLink className={isCurrentTab} to='/'>About Me</NavLink></li>
				{homeConfig.projects.map((p, id) =>
					<li key={id}>
						<NavLink to={p.link} className={isCurrentTab} onClick={topThePage}>{p.label}</NavLink>
					</li>)}
			</ul>
		</nav>
	)
}

function mobileNavClick() {
	toggleMenu()
	topThePage()
}

function toggleMenu() {
    document.querySelector('.mobile-nav').classList.toggle("hidden")
}