import About from "./section/About";
import Hero from "./section/Hero";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Lenis from "lenis";
import Skill from "./section/Skill";
import Project from "./section/Project";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      wheelMultiplier: 0.8, // Slower scroll as requested
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
      {/* Navbar – always on top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Hero />
      <About />
      {/*<Education/>*/}
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
