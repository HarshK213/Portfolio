import About from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GradientBlinds from "./components/ui/GradientBlinds.background";
import GridDistortion from "./components/ui/GridDistortion.background";

function App() {
  return (
    // <div className="bg-gradient-to-br from-black to-blue-700 w-full h-screen">
    //   {/*<div className="w-screen h-screen z-0">
    //             <GridDistortion
    //                 imageSrc="https://media.idownloadblog.com/wp-content/uploads/2021/06/macOS-Monterey-wallpaper-Dark.jpg"
    //                 grid={10}
    //                 mouse={0.2}
    //                 strength={0.15}
    //                 relaxation={0.9}
    //             />
    //         </div>*/}
    //   <div className="z-10">
    //     <Navbar />
    //   </div>
    //     <Hero/>
    // </div>

    <div className="relative bg-gradient-to-br from-black to-blue-700 w-full h-screen">

      {/* Navbar – always on top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Background effects */}
      
      <div className="absolute inset-0 z-0">
        <GridDistortion
          imageSrc="https://media.idownloadblog.com/wp-content/uploads/2021/06/macOS-Monterey-wallpaper-Dark.jpg"
          grid={10}
          mouse={0}
          strength={0}
          relaxation={0}
        />
      </div>
     

      {/* Main content */}
      <div className="relative z-10 pt-20">
        <Hero />
        <About/>
      </div>

    </div>
  );
}

export default App;
