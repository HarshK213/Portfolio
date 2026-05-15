interface EducationCardProps {
	standard: string;
	institute: string;
	result: string;
	from: string;
	to: string;
}

function EducationCard({
	standard,
	institute,
	result,
	from,
	to,
}: EducationCardProps) {
	return (
		<div
			className="
				w-full
				rounded-2xl
				border border-white/20
				bg-white/3
				backdrop-blur-md
				p-6
				flex flex-col gap-4
				hover:bg-white/5
				transition-all duration-300
			"
		>
			{/* Top */}
			<div className="flex items-start justify-between gap-4 flex-wrap">
				<div>
					<h2 className="text-2xl font-bold text-white">
						{standard}
					</h2>

					<p className="text-white/60 mt-1 text-sm sm:text-base">
						{institute}
					</p>
				</div>

				<div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/4">
					<p className="text-white text-sm font-medium">{result}</p>
				</div>
			</div>

			{/* Date */}
			<div className="pt-2 border-t border-white/10">
				<p className="text-white/40 text-sm">
					{from} — {to}
				</p>
			</div>
		</div>
	);
}

export default EducationCard;
