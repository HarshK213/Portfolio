import { Github, Home, Briefcase, Phone, BarChart } from "lucide-react";
import { useState } from "react";
import RollingText from "./ui/RollingText";

const NavButton = ({ name }: { name: string }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<button
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="hover:bg-white/20 rounded-full"
		>
			<RollingText
				text={name}
				active={isHovered}
				inViewMargin="0px"
				className="h-8 sm:h-10 px-2 sm:px-3 flex items-center justify-center text-black/70 dark:text-gray-300"
			/>
		</button>
	);
};

const Navbar = () => {
	const navItems = [
		{ name: "Home", icon: <Home size={20} /> },
		{ name: "Project", icon: <Briefcase size={20} /> },
		{ name: "Contact", icon: <Phone size={20} /> },
		{ name: "Stats", icon: <BarChart size={20} /> },
	];

	return (
		<div className="w-full p-3 sm:p-4 flex justify-center items-center">
			<div className="h-10 sm:h-12 max-w-max sm:max-w-[500px] lg:max-w-[800px] mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full flex items-center justify-between px-2 sm:px-2.5 py-1 border border-white/30">
				<div className="flex items-center gap-2 sm:gap-3">
					<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
						<img
							src="zoro.jpg"
							className="object-cover w-full h-full"
						/>
					</div>
					<p className="text-black dark:text-white text-base sm:text-lg md:text-xl font-[Doto] font-bold hidden sm:block">
						Harsh K
					</p>
				</div>

				<div className="flex items-center gap-1 sm:gap-2.5">
					{navItems.map((item) => (
						<NavButton name={item.name} />
					))}
				</div>
			</div>
			{/* 
            <div className="h-10 sm:h-12 w-auto p-1 sm:p-1.5 flex items-center gap-1 sm:gap-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/30 ml-2 sm:ml-3">
                <a
                    href="https://github.com/HarshK213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 sm:h-10 sm:w-10 bg-white/30 dark:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm"
                >
                    <Github size={16} className="sm:w-[20px] sm:h-[20px] text-black dark:text-white" />
                </a>
            </div> */}
		</div>
	);
};

export default Navbar;
