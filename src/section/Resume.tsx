import { FileText } from "lucide-react";

function Resume() {
	return (
		<section id="resume" className="relative w-full min-h-full my-37.5 flex items-center justify-center px-6">
			<div
				className="
					w-full max-w-4xl
					rounded-3xl
					border border-white/10
					bg-white/3
					backdrop-blur-md
					px-8 md:px-16
					py-16
					flex flex-col items-center justify-center
					text-center
					shadow-2xl
				"
			>
				{/* Heading */}
				<h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
					Want to know more
					<span className="text-red-500">?</span>
				</h2>

				{/* Description */}
				<p
					className="
						mt-6
						max-w-2xl
						text-white/60
						text-lg md:text-xl
						leading-relaxed
					"
				>
					Download my resume for a detailed look at my experience,
					skills, projects, and education.
				</p>

				{/* Button */}
				<a
					href="https://github.com/HarshK213/Resume/blob/main/Harsh_Kushwaha_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="
						mt-10
						inline-flex items-center gap-3
						px-8 py-4
						rounded-2xl
						border border-red-500/40
						bg-red-500/5
						text-red-400
						font-medium
						hover:bg-red-500/10
						hover:border-red-500/60
						transition-all duration-300
					"
				>
					<FileText size={20} />
					View Resume
				</a>
			</div>
		</section>
	);
}

export default Resume;
