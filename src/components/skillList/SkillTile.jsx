import {
	FaPython,
	FaJava,
	FaHtml5,
	FaReact,
	FaFigma,
	FaNodeJs,
	FaGitAlt,
	FaDocker,
	FaShoppingCart,
	FaCogs,
	FaMobile,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
	SiMermaid,
	SiExpress,
	SiSwagger,
	SiSqlite,
	SiApache,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import {TbWritingSign} from "react-icons/tb"


const SkillTile = ({ name }) => {
	const iconClass = "text-neutral-800 inline mb-1 mr-1";

	function icon(name) {
		switch (name) {
			case "Python":
				return <FaPython className={iconClass} />;
			case "Java":
				return <FaJava className={iconClass} />;
			case "Javascript":
				return <IoLogoJavascript className={iconClass} />;
			case "HTML":
				return <FaHtml5 className={iconClass} />;
			case "React":
				return <FaReact className={iconClass} />;
			case "Tailwind":
				return <RiTailwindCssFill className={iconClass} />;
			case "CSS":
				return <IoLogoCss3 className={iconClass} />;
			case "Figma":
				return <FaFigma className={iconClass} />;
			case "Mermaid":
				return <SiMermaid className={iconClass} />;
			case "Express":
				return <SiExpress className={iconClass} />;
			case "Postgresql":
				return <BiLogoPostgresql className={iconClass} />;
			case "Swagger":
				return <SiSwagger className={iconClass} />;
			case "SQLite3":
				return <SiSqlite className={iconClass} />;
			case "Node.js":
				return <FaNodeJs className={iconClass} />;
			case "Apache2":
				return <SiApache className={iconClass} />;
			case "Git":
				return <FaGitAlt className={iconClass} />;
			case "Docker":
				return <FaDocker className={iconClass} />;
			case "Website":
				return <CgWebsite className={iconClass} />
			case "Blog":
				return <TbWritingSign className={iconClass} />
			case "Online Shop":
				return <FaShoppingCart className={iconClass} />
			case "Web Application":
				return <FaCogs className={iconClass} />
			case "Mobile":
				return <FaMobile className={iconClass} />
			default:
				return "";
		}
	}

	return (
		<li className="bg-neutral-300 rounded-md text-center py-1">
			{icon(name)}
			{name}
		</li>
	);
};

export default SkillTile;
