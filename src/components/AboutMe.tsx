import React from "react";

function About() {
  return (
    <section className="relative h-screen w-screen bg-white overflow-hidden flex items-center">
      {/* Background container (this will be revealed later via mask) */}
      <div className="relative z-10 max-w-4xl px-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          I’m <span className="font-semibold">Harsh Kushwaha</span>, a
          passionate Web Developer who enjoys building clean, modern, and
          interactive web experiences. I focus on writing maintainable code and
          crafting user interfaces that feel smooth and intuitive.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Currently, I work primarily with technologies like
          <span className="font-medium"> React, Tailwind CSS, JavaScript</span>,
          and I’m actively exploring backend development and full-stack
          architectures.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          I love experimenting with UI animations, performance optimizations,
          and Apple-inspired motion design to make the web feel more alive.
        </p>
      </div>
    </section>
  );
}

export default About;
