import About from "./section/About";
import Hero from "./section/Hero";
import Navbar from "./components/Navbar";
import Particles from "./components/ui/particles.background";
import { useEffect } from "react";
import Lenis from "lenis";
import Skill from "./section/Skill";
import Project from "./section/Project";
import ContactMe from "./section/ContactMe";
import Experience from "./section/Experience";

function App() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			touchMultiplier: 2,
			wheelMultiplier: 0.8,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return (
		<div className="relative overflow-x-hidden">
			{/* <Particles
				className="fixed inset-0 -z-10 h-screen w-screen pointer-events-none"
				particleCount={200}
				particleSpread={10}
				speed={0.1}
				particleColors={["#ffffff"]}
				alphaParticles={false}
				particleBaseSize={100}
				sizeRandomness={1}
				cameraDistance={20}
				pixelRatio={1}
			/> */}
			<div className="fixed top-0 left-0 w-full z-50">
				<Navbar />
			</div>
			<Hero />
			<About />
			<Skill />
			<Project />
			<Experience />
			<ContactMe />
		</div>
	);
}

export default App;
