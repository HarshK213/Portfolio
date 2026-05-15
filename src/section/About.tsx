import EducationCard from "@/components/ui/EducationCard";

function About() {
	return (
		<div className="relative min-h-full my-37.5 z-10 px-4 sm:px-8 md:px-16 lg:px-62.5 py-12 sm:py-16 md:py-20 lg:py-25 flex flex-col gap-12 md:gap-16 lg:gap-24 mx-5 rounded-t-4xl">
			{/* About Me Heading */}
			<div className="w-3xs relative inline-block px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6">
				<span className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-white"></span>
				<span className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-white"></span>

				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Doto]">
					About Me
				</h2>
			</div>

			<div className="flex flex-col md:flex-row gap-10 items-center">
				{/* Left Section - Para */}
				<div className="w-[50%] flex flex-col items-center lg:items-start gap-8 lg:gap-10">
					{/* Image */}
					{/* Image */}
					<div className="w-full flex justify-center">
						<img
							src="photo.png"
							className="
			w-48 sm:w-56 md:w-64
			rounded-full
			object-cover
			border border-white/10
		"
						/>
					</div>

					{/* About */}
					<div className="relative z-10 max-w-3xl">
						<p className="text-gray-300 text-base sm:text-lg leading-relaxed">
							I'm a passionate full-stack developer focused on
							building modern, scalable, and user-friendly web
							applications. I specialize in React, TypeScript,
							Node.js, and Tailwind CSS, creating seamless digital
							experiences with clean code, smooth interactions,
							and intuitive design.
						</p>
					</div>

					{/* Stats Grid */}
					<div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
						{/* Card 1 */}
						<div
							className="
								rounded-2xl
								border border-white/15
								bg-white/3
								backdrop-blur-md
								p-5
							"
						>
							<h3 className="text-3xl font-bold text-white">
								10+
							</h3>

							<p className="text-white/50 text-sm mt-2">
								Projects Built
							</p>
						</div>

						{/* Card 2 */}
						<div
							className="
				rounded-2xl
				border border-white/15
				bg-white/3
				backdrop-blur-md
				p-5
			"
						>
							<h3 className="text-3xl font-bold text-white">
								250+
							</h3>

							<p className="text-white/50 text-sm mt-2">
								DSA Problems
							</p>
						</div>

						{/* Card 3 */}
						<div
							className="
				rounded-2xl
				border border-white/15
				bg-white/3
				backdrop-blur-md
				p-5
			"
						>
							<h3 className="text-3xl font-bold text-white">
								2+
							</h3>

							<p className="text-white/50 text-sm mt-2">
								Years Learning
							</p>
						</div>

						{/* Card 4 */}
						<div
							className="
				rounded-2xl
				border border-white/15
				bg-white/3
				backdrop-blur-md
				p-5
			"
						>
							<h3 className="text-xl font-semibold text-white">
								Cloud & AI
							</h3>

							<p className="text-white/50 text-sm mt-2">
								Currently Learning
							</p>
						</div>
					</div>
				</div>

				{/* Right Section - Education */}
				<div className="relative">
					<div className="absolute left-4.25 top-2 bottom-2 w-0.5 bg-linear-to-b from-red-500 from-60% via-red-500 via-80% to-transparent shadow-[0_0_20px_rgba(239,68,68,0.9)]" />
					<div className="flex flex-col gap-10">
						<div className="flex gap-6">
							<div className="w-10 flex justify-center pt-2 z-10">
								<div className="w-5 h-5 rounded-full border-2 border-red-500 bg-black shadow-[0_0_15px_rgba(239,68,68,0.9)]" />
							</div>
							<div className="flex-1">
								<EducationCard
									standard="B.Tech - Computer Science"
									institute="VIT Bhopal University"
									result="8.5 CGPA"
									from="2023"
									to="2027"
								/>
							</div>
						</div>

						<div className="flex gap-6">
							<div className="w-10 flex justify-center pt-2 z-10">
								<div className="w-5 h-5 rounded-full border-2 border-red-500 bg-black shadow-[0_0_15px_rgba(239,68,68,0.9)]" />
							</div>
							<div className="flex-1">
								<EducationCard
									standard="12th"
									institute="Kendriya Vidyalaya No.1, Bhopal"
									result="84.6%"
									from="2022"
									to="2023"
								/>
							</div>
						</div>

						<div className="flex gap-6">
							<div className="w-10 flex justify-center pt-2 z-10">
								<div className="w-5 h-5 rounded-full border-2 border-red-500 bg-black shadow-[0_0_15px_rgba(239,68,68,0.9)]" />
							</div>
							<div className="flex-1">
								<EducationCard
									standard="10th"
									institute="Kendriya Vidyalaya No.1, Bhopal"
									result="94.6%"
									from="2019"
									to="2020"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
