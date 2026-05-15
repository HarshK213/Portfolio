import { Github, ExternalLink, type LucideIcon } from "lucide-react";

export interface Feature {
	name: string;
	about: string;
	icon: LucideIcon;
}

export interface ProjectProps {
	name: string;
	about: string;
	features: Feature[];
	tags: string[];
	code: string;
	live_demo?: string;
}

interface ProjectCardProps {
	project: ProjectProps;
}

function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div
			className="
				w-full
				rounded-2xl
				border border-white/20
				bg-white/10
				backdrop-blur-md
				p-6
				flex flex-col gap-6
			"
		>
			{/* Project Name */}
			<div className="flex flex-col gap-3">
				<h1 className="text-3xl font-bold text-white">
					{project.name}
				</h1>

				<p className="text-white/60 text-base leading-relaxed">
					{project.about}
				</p>
			</div>

			{/* Features */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{project.features.map((feature, index) => {
					const Icon = feature.icon;

					return (
						<div
							key={index}
							className="
								border border-white/30
								rounded-xl
								p-4
								bg-white/5
								flex flex-col gap-2
							"
						>
							<div className="flex items-center gap-2">
								{Icon && (
									<Icon className="text-white w-5 h-5" />
								)}

								<h3 className="text-white text-lg font-semibold">
									{feature.name}
								</h3>
							</div>

							<p className="text-white/50 text-sm leading-relaxed">
								{feature.about}
							</p>
						</div>
					);
				})}
			</div>

			{/* Tags */}
			<div className="flex flex-wrap gap-3">
				{project.tags.map((tag, index) => (
					<div
						key={index}
						className="
							px-4 py-1.5
							rounded-full
							border border-white/30
							bg-white/10
							text-white/80
							text-sm
						"
					>
						{tag}
					</div>
				))}
			</div>

			{/* Buttons */}
			<div className="flex flex-wrap gap-4 pt-2">
				<a
					href={project.code}
					target="_blank"
					rel="noreferrer"
					className="
						px-5 py-2.5
						rounded-xl
						border border-white/50
						bg-white/10
						text-white
						flex items-center gap-2
						hover:bg-white/20
						transition-all duration-300
					"
				>
					<Github size={18} />
					Code
				</a>

				{project.live_demo && (
					<a
						href={project.live_demo}
						target="_blank"
						rel="noreferrer"
						className="
							px-5 py-2.5
							rounded-xl
							border border-white/50
							bg-white
							text-black
							font-medium
							flex items-center gap-2
							hover:bg-white/80
							transition-all duration-300
						"
					>
						<ExternalLink size={18} />
						Live Demo
					</a>
				)}
			</div>
		</div>
	);
}

export default ProjectCard;
