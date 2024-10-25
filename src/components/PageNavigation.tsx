import "../styles/PageNavigation.css"

const PageNavigation = () => {
	return (
		<nav className="flex flex-row text-center justify-center items-center">
			<ul className="nav rounded-xl p-2 flex float-left">
				<li>
					<a className="nav-btn mr-1 cursor-pointer" href="https://github.com/its-Lyn" target="_blank">
						GitHub
					</a>
				</li>
				<li>
					<a className="nav-btn mr-1 cursor-pointer" href="https://github.com/its-Lyn/MonoGayme" target="_blank">
						MonoGayme
					</a>
				</li>
				<li>
					<a className="nav-btn cursor-pointer" href="https://github.com/its-Lyn/CatGirlDownloader" target="_blank">
						CatGirl Downloader
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default PageNavigation;