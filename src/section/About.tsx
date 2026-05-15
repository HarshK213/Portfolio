function About() {
    return (
        <div className="relative min-h-screen z-10 px-4 sm:px-8 md:px-16 lg:px-[250px] py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col gap-12 md:gap-16 lg:gap-24 mx-5 rounded-t-[20px]">
            <div className="w-3xs relative inline-block px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6">
              <span className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-white"></span>
              <span className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-white"></span>
            
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Doto]">
                About Me
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                    <img src="zoro.jpg" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover" />
                </div>

                <div className="relative z-10 max-w-4xl px-0 lg:px-8">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                        I'm{" "}
                        <span className="font-semibold text-white">
                            Harsh Kushwaha
                        </span>
                        , a Full-Stack Developer who turns complex problems into
                        elegant web solutions. With expertise spanning{" "}
                        <span className="font-medium text-white">
                            React, Tailwind CSS, Node.js, and MongoDB
                        </span>
                        , I build responsive, scalable applications that balance
                        clean design with robust engineering. My foundation in
                        data structures and algorithms (250+ DSA problems
                        solved) ensures efficient, well-architected code.
                    </p>

                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                        What drives me is the intersection of form and function:
                        creating interfaces that feel as smooth as they are
                        functional. I experiment with UI animations and
                        performance optimizations, inspired by Apple's motion
                        philosophy to deliver engaging, intuitive experiences.
                        From API integration and state management to
                        authentication and database design, I thrive on
                        connecting beautiful frontends with powerful backends.
                    </p>

                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        Currently seeking opportunities as a{" "}
                        <span className="font-medium text-white">
                            Frontend/Full-Stack Developer or Software Engineer
                            Intern
                        </span>{" "}
                        to contribute meaningful work, write maintainable code,
                        and push the boundaries of what's possible on the web.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
