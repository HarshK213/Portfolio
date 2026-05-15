import {
	SiCplusplus,
	SiPython,
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiCss,
	SiReact,
	SiTailwindcss,
	SiNodedotjs,
	SiExpress,
	SiNextdotjs,
	SiMongodb,
	SiMysql,
	SiGit,
	SiGithub,
	SiLinux,
	SiPostman,
	SiZedindustries,
	SiShadcnui,
	SiVite,
	SiDocker,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

function Skill() {
	const categories = [
		{
			category: "Languages",
			skills: [
				{ name: "C++", icon: SiCplusplus, iconColor: "text-blue-400" },
				{
					name: "Python",
					icon: SiPython,
					iconColor: "text-yellow-400",
				},
				{
					name: "JavaScript",
					icon: SiJavascript,
					iconColor: "text-yellow-300",
				},
				{
					name: "TypeScript",
					icon: SiTypescript,
					iconColor: "text-blue-500",
				},
			],
		},
		{
			category: "Frontend",
			skills: [
				{ name: "HTML5", icon: SiHtml5, iconColor: "text-orange-500" },
				{ name: "CSS3", icon: SiCss, iconColor: "text-blue-400" },
				{ name: "React.js", icon: SiReact, iconColor: "text-cyan-400" },
				{
					name: "Tailwind CSS",
					icon: SiTailwindcss,
					iconColor: "text-cyan-300",
				},
				{
					name: "Shadcn UI",
					icon: SiShadcnui,
					iconColor: "text-white",
				},
				{ name: "Vite", icon: SiVite, iconColor: "text-purple-400" },
			],
		},
		{
			category: "Backend",
			skills: [
				{
					name: "Node.js",
					icon: SiNodedotjs,
					iconColor: "text-green-500",
				},
				{
					name: "Express.js",
					icon: SiExpress,
					iconColor: "text-white",
				},
				{ name: "Next.js", icon: SiNextdotjs, iconColor: "text-white" },
				{
					name: "REST APIs",
					icon: SiPostman,
					iconColor: "text-orange-500",
				},
			],
		},
		{
			category: "Database",
			skills: [
				{
					name: "MongoDB",
					icon: SiMongodb,
					iconColor: "text-green-500",
				},
				{ name: "MySQL", icon: SiMysql, iconColor: "text-blue-500" },
			],
		},
		{
			category: "Tools",
			skills: [
				{ name: "Git", icon: SiGit, iconColor: "text-orange-500" },
				{ name: "GitHub", icon: SiGithub, iconColor: "text-white" },
				{ name: "VS Code", icon: VscCode, iconColor: "text-blue-400" },
				{ name: "Linux", icon: SiLinux, iconColor: "text-yellow-300" },
				{
					name: "Zed",
					icon: SiZedindustries,
					iconColor: "text-cyan-400",
				},
				{ name: "Docker", icon: SiDocker, iconColor: "text-blue-400" },
			],
		},
	];

	return (
		<section className="relative min-h-full my-37.5 z-10 px-4 sm:px-8 md:px-16 lg:px-62.5 py-12 sm:py-16 md:py-20 lg:py-25 flex flex-col gap-12 md:gap-16 lg:gap-24 mx-5 rounded-t-4xl">
			{/* Heading */}
			<div className="w-3xs relative inline-block px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6">
				<span className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-white"></span>
				<span className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-white"></span>

				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Doto]">
					Skills & Tools
				</h2>
			</div>

			{/* Categories */}
			<div className="flex flex-col gap-12 m-auto font-mono">
				{categories.map((categoryData, idx) => (
					<div key={idx}>
						{/* Category Title */}
						<h3 className="text-2xl font-semibold text-white mb-6">
							{categoryData.category}
						</h3>

						{/* Skills */}
						<div className="flex flex-wrap gap-4 ml-0 sm:ml-10">
							{categoryData.skills.map((skill, i) => {
								const Icon = skill.icon;

								return (
									<div
										key={i}
										className="
											group
											flex items-center gap-3
											px-5 py-3
											rounded-xl
											bg-white/3
											border border-white/10
											backdrop-blur-md
											hover:border-white/20
											hover:bg-white/5
											transition-all duration-300
											cursor-default
										"
									>
										<Icon
											className={`text-xl ${skill.iconColor} group-hover:scale-110 transition-transform duration-300`}
										/>

										<span className="text-white/90 text-sm md:text-base font-medium">
											{skill.name}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skill;
