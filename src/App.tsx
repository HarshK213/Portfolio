import About from "./section/About";
import Hero from "./section/Hero";
import Navbar from "./components/Navbar";

import Skill from "./section/Skill";
import Project from "./section/Project";
import ContactMe from "./section/ContactMe";
import Resume from "./section/Resume";
import Footer from "./components/Footer";
import Particles from "./components/ui/particles.background";

function App() {
	return (
		<div className="relative overflow-x-hidden">
			<div className="fixed inset-0 -z-10">
				<Particles
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
				/>
				<div className="absolute inset-0 bg-black/50" />
			</div>
			<div className="relative z-10">
				<Navbar />
				<Hero />
				<About />
				<Skill />
				<Project />
				<Resume />
				<ContactMe />
				<Footer />
			</div>
		</div>
	);
}

export default App;
