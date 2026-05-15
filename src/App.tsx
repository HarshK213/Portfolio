import About from "./section/About";
import Hero from "./section/Hero";
import Navbar from "./components/Navbar";

import Skill from "./section/Skill";
import Project from "./section/Project";
import ContactMe from "./section/ContactMe";
import Experience from "./section/Experience";
import Resume from "./section/Resume";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="relative overflow-x-hidden">
			<div className="fixed top-0 left-0 w-full z-50">
				<Navbar />
			</div>
			<Hero />
			<About />
			<Skill />
			<Project />
			<Experience />
			<Resume />
			<ContactMe />
			<Footer />
		</div>
	);
}

export default App;
