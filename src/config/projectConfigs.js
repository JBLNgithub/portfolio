export const homeConfig = {
	capabilities: [
		"Website",
		"Blog",
		"Online Shop",
		"Web Application",
		"Mobile",
	],
	progLanguages: ["Javascript", "Python", "Java", "C", "C#"],
	frontEnd: ["React", "Tailwind", "HTML", "CSS"],
	backEnd: ["Node.js", "Postgresql", "SQLite3"],
	utils: ["Git", "Docker", "Apache2"],
	projects: [
		{
			label: "Stockemoise",
			link: "/stockemoise",
			image: null
		},
		{
			label: "Portfolio",
			link: "/port-folio",
			image: null
		}
	]
}

export const portfolioConfig = {
	stack: ["React", "Tailwind", "Apache2"],
	refs: [
		{
			label: "App",
			ref: "https://portfolio.jbln.be",
			isGithub: "false",
		},
		{
			label: "github",
			ref: "https://github.com/JBLNgithub/portfolio",
			isGithub: "true",
		},
	],
}

export const stockemoiseConfig = {
	refs: [
		{
			label: "Webapp",
			ref: "http://stockemoise.jbln.be",
			isGithub: "false",
		},
		{
			label: "Current website",
			ref: "https://stockemoise.be/",
			isGithub: "false",
		},
		{
			label: "Frontend",
			ref: "https://github.com/JBLNgithub/stockemoise",
			isGithub: "true",
		},
		{
			label: "Backend",
			ref: "https://github.com/JBLNgithub/stockemoise-backend",
			isGithub: "true",
		},
	],
	stack: ["Tailwind", "Node.js", "Express", "Postgresql", "Figma", "Mermaid"],
}
