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
        const handleResize = () => setViewportHeight(window.innerHeight);
        handleResize(); // Set initial
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

    const socialLinks = [
        {
            href: "https://instagram.com/harsh.21k/",
            label: "Instagram",
            icon: <Instagram size={16} className="" />,
        },
        {
            href: "https://www.linkedin.com/in/harsh-kushwaha-697ba3289/",
            label: "LinkedIn",
            icon: <Linkedin size={16} className="size-5" />,
        },
        {
            href: "https://x.com/Akio21305",
            label: "X",
            icon: <Twitter size={16} className="size-5" />,
        },
    ];

    return (
        <>
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <img
                    src={
                        isDarkMode
                            ? "Gemini_Generated_Image_vade5mvade5mvade.png"
                            : "macOS-Monterey-wallpaper-Dark.jpg"
                    }
                    className="w-screen h-screen object-cover"
                    alt="Background"
                />
            </div>

            {/* Main Content Container */}
            <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden">
                <motion.div
                    className="flex flex-col items-center"
                    style={{ y, opacity, scale }}
                >
                    <p className="text-white text-[30px] leading-tight mb-2">
                        Hello, I'm
                    </p>

                    <h1 className="text-white font-[Doto] text-[70px] font-extrabold leading-none mb-2">
                        HARSH KUSHWAHA
                    </h1>

                    <p className="text-white/70 mb-4 text-center">
                        Full stack web developer crafting responsive interfaces{" "}
                        <br /> and robust backends for real-world products.
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
                                className="size-10 bg-black/30 dark:bg-white/20 rounded-full flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/30 transition-colors duration-300"
                            >
                                <div className="text-white">{link.icon}</div>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Hero;
