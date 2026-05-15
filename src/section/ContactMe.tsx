import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

function ContactMe() {
	return (
		<section
			id="contact"
			className="relative min-h-full w-full flex items-center justify-center px-6 m-5"
		>
			<div className="flex flex-col items-center text-center font-mono">
				{/* Heading */}
				<h2 className="text-xl md:text-6xl font-bold text-white">
					Get in Touch
					<span className="text-red-500">.</span>
				</h2>

				{/* Subtitle */}
				<p className="mt-6 text-white/50 md:text-xl max-w-2xl">
					Have a project in mind or just want to say hello?
				</p>

				{/* Contact Info */}
				<div className="mt-16 flex flex-col gap-5 text-white/70">
					<div className="flex items-center justify-center gap-3">
						<Mail className="w-5 h-5 text-red-500" />

						<a
							href="mailto:hkushwaha21305@gmail.com"
							className="hover:text-white transition-colors duration-300"
						>
							hkushwaha21305@gmail.com
						</a>
					</div>

					<div className="flex items-center justify-center gap-3">
						<MapPin className="w-5 h-5 text-red-500" />
						<span>India</span>
					</div>
				</div>

				{/* Social Links */}
				<div className="mt-12 flex flex-wrap justify-center gap-4">
					<a
						href="https://github.com/HarshK213"
						target="_blank"
						rel="noopener noreferrer"
						className="
							px-6 py-3
							rounded-xl
							border border-white/10
							bg-white/3
							text-white/70
							backdrop-blur-md
							hover:bg-white/6
							hover:text-white
							transition-all duration-300
							flex items-center gap-2
						"
					>
						<Github size={18} />
						GitHub
					</a>

					<a
						href="https://www.linkedin.com/in/harsh-kushwaha-697ba3289/"
						target="_blank"
						rel="noopener noreferrer"
						className="
							px-6 py-3
							rounded-xl
							border border-white/10
							bg-white/3
							text-white/70
							backdrop-blur-md
							hover:bg-white/6
							hover:text-white
							transition-all duration-300
							flex items-center gap-2
						"
					>
						<Linkedin size={18} />
						LinkedIn
					</a>

					<a
						href="https://x.com/Akio21305"
						target="_blank"
						rel="noopener noreferrer"
						className="
							px-6 py-3
							rounded-xl
							border border-white/10
							bg-white/3
							text-white/70
							backdrop-blur-md
							hover:bg-white/6
							hover:text-white
							transition-all duration-300
							flex items-center gap-2
						"
					>
						<Twitter size={18} />
						Twitter
					</a>
				</div>

				{/* CTA Button */}
				<a
					href="mailto:hkushwaha21305@gmail.com"
					className="
						mt-14
						px-8 py-4
						rounded-2xl
						bg-red-500
						text-white
						font-medium
						flex items-center gap-3
						shadow-[0_0_30px_rgba(239,68,68,0.5)]
						hover:bg-red-400
						hover:scale-[1.02]
						transition-all duration-300
					"
				>
					<Mail size={20} />
					Send me an email
				</a>
			</div>
		</section>
	);
}

export default ContactMe;
