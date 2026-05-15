import ProjectCard from "@/components/ui/ProjectCard";
import type { ProjectProps } from "@/components/ui/ProjectCard";
import { Shield, Bot, Search, Cloud, Calendar, BarChart3 } from "lucide-react";

function Project() {
	const Projects: ProjectProps[] = [
		{
			name: "Mystery Message",
			about: "",
			features: [
				{
					name: "Authentication",
					about: "Secure login and signup system.",
					icon: Shield,
				},
				{
					name: "Responsive UI",
					about: "Optimized experience across devices.",
					icon: Cloud,
				},
			],
			tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
			code: "https://github.com/HarshK213/",
			live_demo: "https://animephix.vercel.app",
		},

		{
			name: "Price Comparing Chatbot",
			about: "AI-powered chatbot that compares product prices across multiple e-commerce platforms in real time.",
			features: [
				{
					name: "AI Product Classification",
					about: "Classifies products using intelligent prompts.",
					icon: Bot,
				},
				{
					name: "Price Aggregation",
					about: "Fetches and compares prices from stores.",
					icon: Search,
				},
			],
			tags: ["React", "Python", "FastAPI", "Gemini API"],
			code: "https://github.com/yourusername/price-chatbot",
			live_demo: "https://pricebot.vercel.app",
		},

		{
			name: "CollabSphere",
			about: "A collaboration platform for developers to discover teammates, share ideas, and build projects together.",
			features: [
				{
					name: "Project Matching",
					about: "Find teammates based on interests and skills.",
					icon: Search,
				},
				{
					name: "Real-time Collaboration",
					about: "Smooth communication and project updates.",
					icon: Cloud,
				},
			],
			tags: ["Next.js", "MongoDB", "Tailwind CSS", "Socket.io"],
			code: "https://github.com/yourusername/collabsphere",
		},

		{
			name: "College Event Management System",
			about: "A complete event management portal for handling registrations, announcements, and event tracking.",
			features: [
				{
					name: "Event Scheduling",
					about: "Organize and manage events efficiently.",
					icon: Calendar,
				},
				{
					name: "Analytics Dashboard",
					about: "Track registrations and participation data.",
					icon: BarChart3,
				},
			],
			tags: ["React", "Node.js", "Express", "MongoDB"],
			code: "https://github.com/yourusername/event-management",
			live_demo: "https://collegeevents.vercel.app",
		},

		{
			name: "Portfolio Website",
			about: "A modern interactive portfolio showcasing projects, skills, animations, and developer experience.",
			features: [
				{
					name: "Animated UI",
					about: "Smooth transitions and scroll interactions.",
					icon: Cloud,
				},
				{
					name: "Project Showcase",
					about: "Dynamic project cards with details and links.",
					icon: Search,
				},
			],
			tags: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
			code: "https://github.com/yourusername/portfolio",
			live_demo: "https://portfolio.vercel.app",
		},
	];

	return (
		<section id="projects" className="relative min-h-full my-37.5 z-10 px-4 sm:px-8 md:px-16 lg:px-62.5 py-12 sm:py-16 md:py-20 lg:py-25 flex flex-col gap-12 md:gap-16 lg:gap-24 mx-5 rounded-t-4xl">
			{/* Heading */}
			<div className="w-3xs relative inline-block px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6">
				<span className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-white"></span>
				<span className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-white"></span>

				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Doto]">
					Projects
				</h2>
			</div>

			{/* Projects */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{Projects.map((i) => (
					<ProjectCard project={i} />
				))}
			</div>
		</section>
	);
}
export default Project;
