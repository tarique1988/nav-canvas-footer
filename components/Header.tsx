function Header() {
	return (
		<header className="flex flex-row justify-between items-center bg-gray-700 h-12">
			<div className="flex flex-row justify-center items-center h-full mx-4 my-0">
				<img src="logo.png" className="h-full" />
			</div>
			<nav className="flex flex-row justify-between items-center text-white h-full gap-2 mx-4">
				<a href="#" className="h-full">
					<div className="flex flex-row justify-center items-center h-full px-4 hover:bg-blue-400 hover:text-gray-900">
						Home
					</div>
				</a>
				<a href="#" className="h-full">
					<div className="flex flex-row justify-center items-center h-full px-4 hover:bg-blue-400 hover:text-gray-900">
						About
					</div>
				</a>
				<a href="#" className="h-full">
					<div className="flex flex-row justify-center items-center h-full px-4 hover:bg-blue-400 hover:text-gray-900">
						Contact
					</div>
				</a>
				<a href="#" className="h-full">
					<div className="flex flex-row justify-center items-center h-full px-4 hover:bg-blue-400 hover:text-gray-900">
						Projects
					</div>
				</a>
			</nav>
		</header>
	);
}

export default Header;
