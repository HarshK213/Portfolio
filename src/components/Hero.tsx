import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Hero() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(1000);

  useEffect(() => {
    // Update height on mount and resize
    const handleResize = () => setViewportHeight(window.innerHeight);
    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Parallax effect: Text moves slower than scroll (50% speed)
  const y = useTransform(
    scrollY,
    [0, viewportHeight],
    [0, viewportHeight * 0.75],
  );

  // Fade out: Opacity goes from 1 to 0.
  // Ends when the next section (About) is halfway through.
  // About starts at viewportHeight. Halfway through is viewportHeight + (AboutHeight / 2).
  // Assuming About is also 100vh, target is 1.5 * viewportHeight.
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
  useEffect(() => {
    console.log(viewportHeight);
  }, [viewportHeight]);

  const socialLinks = [
    {
      href: "https://instagram.com/harsh.21k/",
      label: "Instagram",
      icon: <Instagram size={16} className="" />,
    },
    {
      href: "https://www.linkedin.com/in/harsh-kushwaha-697ba3289/",
      label: "LinkedIn",
      icon: <Linkedin size={16} className="size-[20px]" />,
    },
    {
      href: "https://x.com/Akio21305",
      label: "X",
      icon: <Twitter size={16} className="size-[20px]" />,
    },
  ];

  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        {/* <img
          src={`dark?Gemini_Generated_Image_vade5mvade5mvade.png : macOS-Monterey-wallpaper-Dark.jpg`}
          className="w-screen h-screen object-cover"
          alt="Background"
        /> */}
        <img
          src={
            isDarkMode
              ? "Gemini_Generated_Image_vade5mvade5mvade.png"
              : "macOS-Monterey-wallpaper-Dark.jpg"
          }
          className="w-screen h-screen object-cover"
          alt="Background"
        />
        {/* Light mode overlay */}
        <div className="absolute inset-0 bg-white/40 dark:bg-transparent backdrop-blur-[2px] dark:backdrop-blur-0 transition-all duration-500" />
      </div>

      {/* Main Content Container */}
      <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden">
        <motion.div className="flex flex-col" style={{ y, opacity, scale }}>
          <p className="text-black/60 dark:text-white/70 text-[40px] leading-tight mb-2">
            Hello, I'm
          </p>

          <h1 className="text-black dark:text-white text-[150px] font-bold leading-none mb-2">
            Harsh Kushwaha
          </h1>

          <p className="text-black/50 dark:text-white/60 mb-4">
            I'm a Web Developer, Something-Something
          </p>

          {/* Social Buttons */}
          <div className="flex gap-4 mt-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="size-[40px] bg-black/10 dark:bg-white/20 rounded-full flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/30 transition-colors duration-300"
              >
                {/* Clone icon to apply dynamic classes if needed, or just use current structure */}
                <div className="text-black dark:text-white">{link.icon}</div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
