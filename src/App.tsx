import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Lenis from "lenis";

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
    </div>
  );
}

export default App;
