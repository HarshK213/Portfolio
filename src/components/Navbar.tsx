import { Home, Briefcase, Phone, BarChart } from "lucide-react";
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
				className="h-7 sm:h-8 md:h-10 px-1.5 sm:px-2 md:px-3 text-xs sm:text-sm md:text-base flex items-center justify-center text-black/70 dark:text-gray-300"
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
		<div className="w-full p-2 sm:p-3 md:p-4 flex justify-center items-center">
			<div className="h-9 sm:h-10 md:h-12 max-w-max sm:max-w-125 lg:max-w-200 mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full flex items-center justify-between px-1.5 sm:px-2 md:px-2.5 py-1 border border-white/30">
				<div className="flex items-center gap-1 sm:gap-2 md:gap-3">
					<div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0">
						<img
							src="favicon.svg"
							className="object-cover w-full h-full"
						/>
					</div>
					<p className="text-black dark:text-white text-sm sm:text-base md:text-xl font-[Doto] font-bold hidden sm:block">
						Harsh K
					</p>
				</div>

				<div className="flex items-center gap-0.5 sm:gap-1 md:gap-2.5">
					{navItems.map((item, idx) => (
						<NavButton key={idx} name={item.name} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
