import {
  Github,
  Sun,
  Moon,
  Home,
  Briefcase,
  Phone,
  BarChart,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { name: "home", icon: <Home size={20} /> },
    { name: "project", icon: <Briefcase size={20} /> },
    { name: "contact", icon: <Phone size={20} /> },
    { name: "stats", icon: <BarChart size={20} /> },
  ];

  return (
    <div className="w-screen p-4 flex justify-between items-center">
      {/* Middle Section */}
      <div className="h-[50px] w-[1000px] mx-auto bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full flex items-center justify-between p-[5px] border border-white/10">
        {/* Profile and Name */}
        <div className="flex items-center gap-3">
          <div className="size-[40px] rounded-full overflow-hidden">
            <img
              src="passport photo.jpg"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-black dark:text-white text-xl font-[Doto] font-bold">
              Harsh K
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-[10px]">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="h-[40px] w-[80px] rounded-full bg-black/10 dark:bg-black/60 flex items-center justify-center text-black/70 dark:text-gray-300 hover:scale-105 transition-all duration-200 hover:text-[16px] hover:bg-black/20 dark:hover:bg-black group capitalize font-bold text-sm hidden md:flex"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Corner Section */}
      <div className="h-14 w-auto p-2 flex items-center gap-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full border border-white/10">
        <button
          onClick={toggleTheme}
          className="h-10 w-10 bg-white/70 dark:bg-black/70 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-black hover:scale-105 transition-all duration-200 shadow-sm"
        >
          {theme === "light" ? (
            <Moon size={20} className="text-slate-700" />
          ) : (
            <Sun size={20} className="text-yellow-300" />
          )}
        </button>
        <a
          href="https://github.com/HarshK213"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 w-10 bg-white/70 dark:bg-black/70 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-black hover:scale-105 transition-all duration-200 shadow-sm"
        >
          <Github size={20} className="text-black dark:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
