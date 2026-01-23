import { Github, Sun, Home, Briefcase, Phone, BarChart } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "home", icon: <Home size={20} /> },
    { name: "project", icon: <Briefcase size={20} /> },
    { name: "contact", icon: <Phone size={20} /> },
    { name: "stats", icon: <BarChart size={20} /> },
  ];

  return (
    <div className="w-screen p-4 flex justify-between items-center">
      {/* Middle Section */}
      <div className="h-[50px] w-[1000px] mx-auto bg-white/20 backdrop-blur-2xl  backdrop-blur-sm rounded-full flex items-center justify-between p-[5px]">
        {/* Profile and Name */}
        <div className="flex items-center gap-3">
          <div className="size-[40px] rounded-full overflow-hidden">
            <img src="passport photo.jpg" className=""/>
          </div>
          <div>
            <p className="text-white font-semibold font-doto">Harsh K</p>
            {/* <p className="text-xs text-gray-300">Frontend Developer</p> */}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-[10px]">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="h-[40px] w-[80px] rounded-full bg-black/60 flex items-center text-gray-300 hover:scale-105 transition-all duration-200 hover:text-[16px] hover:bg-black group capitalize font-bold text-sm hidden md:inline"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Corner Section */}
      <div className="h-14 w-auto p-2 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full">
        <button className="h-10 w-10 bg-black/70 rounded-full flex items-center justify-center hover:bg-black hover:scale-105 transition-all duration-200">
          <Sun size={20} className="text-yellow-300" />
        </button>
        <button className="h-10 w-10 bg-black/70 rounded-full flex items-center justify-center hover:bg-black hover:scale-105 transition-all duration-200">
          <Github size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
