function About() {
    return (
        <div className="relative h-screen bg-primary z-10 px-[250px] py-[100px] flex flex-col gap-24 mx-5 rounded-[20px] backdrop-blur-2xl">
            <div className="w-3xs relative inline-block px-10 py-6">
                <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></span>
                <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></span>
                <h2 className="text-4xl font-bold text-white font-[Doto]">
                    About Me
                </h2>
            </div>

            <div className="flex">
                <div className="rounded-full">
                    <img src="zoro.jpg" className="rounded-full" />
                </div>

                <div className="relative z-10 max-w-4xl px-16">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
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

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        What drives me is the intersection of form and function:
                        creating interfaces that feel as smooth as they are
                        functional. I experiment with UI animations and
                        performance optimizations, inspired by Apple's motion
                        philosophy to deliver engaging, intuitive experiences.
                        From API integration and state management to
                        authentication and database design, I thrive on
                        connecting beautiful frontends with powerful backends.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed">
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
