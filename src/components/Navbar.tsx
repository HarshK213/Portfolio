import { useState, useEffect } from "react";
import RollingText from "./ui/RollingText";

const SECTION_IDS: Record<string, string> = {
	Home: "hero",
	About: "about",
	Skills: "skills",
	Projects: "projects",
	Contact: "contact",
};

const NavButton = ({
	name,
	active = false,
	onClick,
}: {
	name: string;
	active?: boolean;
	onClick: () => void;
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<button
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onClick}
			className={`
				px-4 py-2
				rounded-2xl
				text-sm md:text-base
				font-medium
				transition-all duration-300
				border
				${
					active
						? "bg-red-500/10 border-red-500/40 text-white"
						: "border-transparent text-white/60 hover:text-white hover:bg-white/[0.03]"
				}
			`}
		>
			<RollingText
				text={name}
				active={isHovered}
				inViewMargin="0px"
				className="h-6 flex items-center justify-center"
			/>
		</button>
	);
};

const Navbar = () => {
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const sectionIds = Object.values(SECTION_IDS);
		const observers: IntersectionObserver[] = [];

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setActiveSection(id);
						}
					});
				},
				{ rootMargin: "-40% 0px -55% 0px" },
			);
			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, []);

	const handleNavClick = (sectionId: string) => {
		const el = document.getElementById(sectionId);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	const navItems = Object.keys(SECTION_IDS);

	return (
		<div className="fixed top-0 left-0 w-full z-50 px-4 py-4 flex justify-center">
			<div
				className="
					w-full max-w-7xl
					rounded-3xl
					border border-white/10
					bg-black/40
					backdrop-blur-xl
					px-6 py-4
					flex items-center justify-between
					shadow-[0_0_40px_rgba(0,0,0,0.4)]
				"
			>
				{/* Left */}
				<div className="flex items-center gap-4">
					<div className="w-10 h-10 rounded-full overflow-hidden">
						<img
							src="favicon.svg"
							className="w-full h-full object-cover"
						/>
					</div>

					<h1 className="text-2xl font-bold text-white">
						Harsh<span className="text-white/70">.</span>
					</h1>
				</div>

				{/* Center */}
				<div className="hidden lg:flex items-center gap-2">
					{navItems.map((name, idx) => (
						<NavButton
							key={idx}
							name={name}
							active={SECTION_IDS[name] === activeSection}
							onClick={() => handleNavClick(SECTION_IDS[name])}
						/>
					))}
				</div>

				{/* Right */}
				<button
					className="
						text-red-400
						font-medium
						text-base
						hover:text-red-300
						transition-colors duration-300
					"
					onClick={() =>
						window.open(
							"https://github.com/HarshK213/Resume/blob/main/Harsh_Kushwaha_Resume.pdf",
							"_blank",
						)
					}
				>
					Resume
				</button>
			</div>
		</div>
	);
};

export default Navbar;
