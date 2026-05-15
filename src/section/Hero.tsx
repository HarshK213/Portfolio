import {
	ArrowLeft,
	ArrowRight,
	Check,
	Copy,
	Github,
	Instagram,
	Linkedin,
	Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
	const { scrollY } = useScroll();
	const [viewportHeight, setViewportHeight] = useState(1000);

	useEffect(() => {
		const handleResize = () => setViewportHeight(window.innerHeight);
		handleResize(); // Set initial
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const y = useTransform(
		scrollY,
		[0, viewportHeight],
		[0, viewportHeight * 0.75],
	);

	const opacity = useTransform(
		scrollY,
		[viewportHeight * 0.5, viewportHeight * 0.8],
		[1, 0],
	);
	const scale = useTransform(
		scrollY,
		[viewportHeight * 0.5, viewportHeight * 1.5],
		[1, 0.5],
	);

	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		await navigator.clipboard.writeText("hkushwaha21305@gmail.com");
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};
	// const socialLinks = [
	// 	{
	// 		href: "https://github.com/HarshK213/",
	// 		label: "Instagram",
	// 		icon: <Github size={16} className="" />,
	// 	},
	// 	{
	// 		href: "https://www.linkedin.com/in/harsh-kushwaha-697ba3289/",
	// 		label: "LinkedIn",
	// 		icon: <Linkedin size={16} className="size-5" />,
	// 	},
	// 	{
	// 		href: "https://x.com/Akio21305",
	// 		label: "X",
	// 		icon: <Twitter size={16} className="size-5" />,
	// 	},
	// ];

	return (
		<>
			{/* Main Content Container */}
			<div className="relative h-screen w-screen flex justify-center items-center overflow-hidden">
				<motion.div
					className="flex flex-col items-center gap-y-4"
					style={{ y, opacity, scale }}
				>
					<p className="text-white text-xl sm:text-2xl md:text-[30px] leading-tight mb-2 font-mono">
						Hello, I'm
					</p>

					<h1 className="text-white font-[Doto] text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold leading-none mb-2 text-center px-4">
						HARSH KUSHWAHA
					</h1>

					<div className="bg-red-500 font-mono py-1 px-2 rounded-xl">
						Full Stack Developer
					</div>

					<p className="text-white/70 mb-4 text-center text-sm sm:text-base md:text-lg px-4 font-mono">
						I craft responsive interfaces and robust <br />
						backends for{" "}
						<span className="text-white underline underline-offset-4">
							real-world products
						</span>
						.
					</p>

					<div className="flex items-center">
						<button className="bg-red-500 py-3 px-4 font-semibold rounded-xl flex gap-2">
							Let's Connect <ArrowRight />
						</button>
						<button
							className="bg-transparent px-5 flex gap-2 items-center text-white/50 hover:text-white/80 font-mono"
							onClick={handleCopy}
						>
							hkushwaha21305@gmail.com
							{copied ? <Check size={16} /> : <Copy size={16} />}
						</button>
					</div>

					{/* Social Buttons
					<div className="flex gap-4 mt-2">
						{socialLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={link.label}
								className="size-10 bg-black/30 dark:bg-white/20 rounded-full flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/30 transition-colors duration-300"
							>
								<div className="text-white">{link.icon}</div>
							</a>
						))}
					</div> */}
				</motion.div>
			</div>
		</>
	);
}

export default Hero;
