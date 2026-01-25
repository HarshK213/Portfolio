function Education() {
  const educationData = [
    {
      title: "Vellore Institute of Technology (VIT)",
      subtitle: "B.Tech in Computer Science",
      year: "2022 – 2026",
    },
    {
        title: "Kendriya Vidyalaya No.1, Bhopal",
      subtitle: "Class 12th – CBSE",
      year: "2021 – 2022",
    },
    {
      title: "Kendriya Vidyalaya No.1, Bhopal",
      subtitle: "Class 10th – CBSE",
      year: "2019 – 2020",
    },
  ];

  return (
    <section className="relative bg-white/10 dark:bg-black/80 z-10 px-[250px] py-[100px] flex flex-col gap-24 mx-5 backdrop-blur-2xl">
      {/* Heading stays as-is */}
      <div className="w-3xs relative inline-block px-10 py-6">
        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></span>
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></span>

        <h2 className="text-4xl font-bold text-white font-[Doto]">Education</h2>
      </div>

      {/* CENTERED CONTENT */}
      <div className="flex justify-center">
        <div className="relative max-w-4xl w-full">
          {/* Vertical Line */}
          <div className="absolute left-[7.5px] top-0 bottom-0 w-[1px] bg-gray-300 dark:bg-white/20" />

          {/* Cards */}
          <div className="flex flex-col gap-12 w-full">
            {educationData.map((item, index) => (
              <div key={index} className="flex gap-12 items-start">
                {/* Ball */}
                <div className="relative z-20 w-4 h-4 rounded-full bg-gray-400 dark:bg-white mt-14 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                {/* Card */}
                <div className="bg-gray-200 dark:bg-white/10 rounded-xl px-8 py-6 shadow-md border border-black/5 dark:border-white/10 flex-1 hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {item.subtitle}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
