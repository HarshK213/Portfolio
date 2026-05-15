function Footer() {
	return (
		<div className="border-t border-white/20 p-5 text-white/30 text-sm font-mono mt-10 sm:mt-20 md:mt-50">
			<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between mx-4 sm:mx-10 md:mx-20 lg:mx-50">
				<p className="text-center sm:text-left">2026 Harsh Kushwaha. All right reserved</p>
				<div className="flex gap-5">
					<button>Github</button>
					<button>Linkedin</button>
					<button>Twitter</button>
				</div>
			</div>
		</div>
	);
}
export default Footer;
