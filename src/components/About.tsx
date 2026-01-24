function About() {
  return (
    <div className="relative h-screen bg-white/90 dark:bg-black/80 mx-4 rounded-[20px] z-10 flex items-center justify-center border border-black/5 dark:border-white/5 shadow-xl">
      <div className="relative z-10 max-w-4xl px-16">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
          About Me
        </h2>

        <p className="text-black/80 dark:text-gray-300 text-lg leading-relaxed mb-6">
          I'm{" "}
          <span className="font-semibold text-black dark:text-white">
            Harsh Kushwaha
          </span>
          , a Full-Stack Developer who turns complex problems into elegant web
          solutions. With expertise spanning{" "}
          <span className="font-medium text-black dark:text-white">
            React, Tailwind CSS, Node.js, and MongoDB
          </span>
          , I build responsive, scalable applications that balance clean design
          with robust engineering. My foundation in data structures and
          algorithms (250+ DSA problems solved) ensures efficient,
          well-architected code.
        </p>

        <p className="text-black/80 dark:text-gray-300 text-lg leading-relaxed mb-6">
          What drives me is the intersection of form and function: creating
          interfaces that feel as smooth as they are functional. I experiment
          with UI animations and performance optimizations, inspired by Apple's
          motion philosophy to deliver engaging, intuitive experiences. From API
          integration and state management to authentication and database
          design, I thrive on connecting beautiful frontends with powerful
          backends.
        </p>

        <p className="text-black/80 dark:text-gray-300 text-lg leading-relaxed">
          Currently seeking opportunities as a{" "}
          <span className="font-medium text-black dark:text-white">
            Frontend/Full-Stack Developer or Software Engineer Intern
          </span>{" "}
          to contribute meaningful work, write maintainable code, and push the
          boundaries of what's possible on the web.
        </p>
      </div>
    </div>
  );
}

export default About;
