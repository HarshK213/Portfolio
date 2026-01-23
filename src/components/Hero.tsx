import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

function Hero() {
  const socialLinks = [
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: <Instagram size={16} className="text-white " />,
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: <Linkedin size={16} className="text-white size-[20px]" />,
    },
    {
      href: "https://x.com",
      label: "X",
      icon: <Twitter size={16} className="text-white size-[20px]" />,
    },
  ];

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col">

        <p className="text-white/70 text-[40px] leading-tight mb-2">
          Hello, I'm
        </p>

        <h1 className="text-white text-[150px] font-bold leading-none mb-2">
          Harsh Kushwaha
        </h1>

        <p className="text-white/60 mb-4">
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
              className="size-[40px] bg-white/20 rounded-full 
                         hover:bg-black/40 transition-all 
                         flex items-center justify-center
                         hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Hero;
