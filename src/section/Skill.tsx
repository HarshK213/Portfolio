import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiZedindustries,
  SiShadcnui,
  SiVite,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

function Skill() {
  const categories = [
    {
      category: "Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "bg-blue-600" },
        { name: "Python", icon: SiPython, color: "bg-yellow-500" },
        { name: "JavaScript", icon: SiJavascript, color: "bg-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "bg-blue-600" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "bg-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "bg-blue-500" },
        { name: "React.js", icon: SiReact, color: "bg-cyan-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "bg-cyan-500" },
        { name: "Shadcn UI", icon: SiShadcnui, color: "bg-black" },
        { name: "Vite", icon: SiVite, color: "bg-purple-500" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "bg-green-600" },
        { name: "Express.js", icon: SiExpress, color: "bg-gray-600" },
        { name: "Next.js", icon: SiNextdotjs, color: "bg-gray-800" },
        { name: "REST APIs", icon: SiPostman, color: "bg-orange-600" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "bg-green-500" },
        { name: "MySQL", icon: SiMysql, color: "bg-blue-700" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: SiGit, color: "bg-red-600" },
        { name: "GitHub", icon: SiGithub, color: "bg-gray-800" },
        { name: "VS Code", icon: VscCode, color: "bg-blue-500" },
        { name: "Linux", icon: SiLinux, color: "bg-orange-600" },
        { name: "Zed", icon: SiZedindustries, color: "bg-teal-600" },
      ],
    },
  ];

  return (
    <section className="relative bg-secondary dark:bg-offset rounded-[20px] px-6 md:px-12 lg:px-20 py-16 md:py-24 mx-5 backdrop-blur-2xl flex flex-col gap-12 md:gap-16 border-4 border-offset dark:border-secondary mt-4">
      {/* Heading */}
      <div className="flex flex-col gap-3">
          <div className="w-3xs relative inline-block px-10 py-6">
            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-offset dark:border-secondary"></span>
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-offset dark:border-secondary"></span>
    
            <h2 className="text-4xl font-bold text-primary font-[Doto]">Skills & Tools</h2>
          </div>
      </div>

      {/* Category Cards */}
      <div className="flex flex-col gap-8 ">
        {categories.map((categoryData, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
              <h3 className="text-xl font-bold text-primary uppercase tracking-wide">
                {categoryData.category}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-3">
              {categoryData.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col items-center justify-center gap-2 p-3 md:p-4 rounded-lg  bg-offset/20 dark:bg-secondary/20 hover:bg-offset/40 dark:hover:bg-secondary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div
                      className={`p-2 rounded-lg ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <p className="text-gray-800 dark:text-white text-xs font-semibold text-center transition-colors">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
