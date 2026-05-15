import { ArrowRight, Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
	const { scrollY } = useScroll();
	const [viewportHeight, setViewportHeight] = useState(1000);

	useEffect(() => {
		const handleResize = () => setViewportHeight(window.innerHeight);
		handleResize();
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

					<div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
						<button
							className="bg-red-500 py-3 px-4 font-semibold rounded-xl flex gap-2 whitespace-nowrap"
							onClick={() =>
								document
									.getElementById("contact")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							Let's Connect <ArrowRight />
						</button>
						<button
							className="bg-transparent px-3 sm:px-5 py-2 sm:py-0 flex gap-2 items-center text-white/50 hover:text-white/80 font-mono text-xs sm:text-sm md:text-base truncate max-w-[200px] sm:max-w-none"
							onClick={handleCopy}
						>
							<span className="truncate">hkushwaha21305@gmail.com</span>
							{copied ? <Check size={16} /> : <Copy size={16} />}
						</button>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default Hero;
