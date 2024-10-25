import React, { useEffect } from "react";
import PageNavigation from "./components/PageNavigation";
import "./styles/App.css"
import "./styles/Animations.css"
import Typewriter from 'typewriter-effect';
import ProjectCard, {Item} from "./components/ProjectCard";

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function App() {
	const greetings = ["Hello!", "Hola!", "Bonjour!", "Ciao!", "Olá!", "Hei!", "Hallo!", "Salut!", "Szia!", "Salve!", "Ahoj!", "Konnichiwa!", "Saluton!", "Salaam!"];
	
	const [avatarUrl, setAvatarUrl] = React.useState<string>("");
	const [login, setLogin] = React.useState<string>("");
	const [name, setName] = React.useState<string>("");
	const [url, setUrl] = React.useState<string>("");
	const [followers, setFollowers] = React.useState<number>(0);
	const [repos, setRepos] = React.useState<number>(0);
	useEffect(() => {
		fetch("https://api.github.com/users/its-Lyn")
			.then(res => res.json())
			.then(data => {
				setAvatarUrl(data.avatar_url);
				setLogin(data.login);
				setUrl(data.html_url);
				setName(data.name);
				setFollowers(data.followers);
				setRepos(data.public_repos);
			})
	}, []);

	const scrollToAbout = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	const projects: Item[] = [
		{
			name: "CatGirl Downloader",
			description: "Desktop application made in Avalonia.",
			delay: 0
		},
		{
			name: "MonoGayme",
			description: "MonoGame based engine for my games!",
			delay: 0
		},
		{
			name: "Flapper",
			description: "Faithful FlappyBird recreation in C# with Raylib!",
			delay: 0
		},
		{
			name: "WingedHazards",
			description: "Small GameBoy-like game made in MonoGayme!",
			delay: 0
		},
		{
			name: "lymap",
			description: "A NohBoard remake made in Rust, for Linux! Compatible with X11 and partially with WayLand.",
			delay: 0
		}
	];

	let base = 300;
	for (let i = 0; i < projects.length; i++) {
			projects[i].delay = base;
			base += 100;
	}
	
	// Now you can use the projects array with updated delay values
	console.log(projects);

	return (
    <>
      <article className="relative flex flex-col text-center justify-center items-center construction-wrapper">	
				<div className="animate delay-fast absolute top-3 w-full flex justify-center">
					<PageNavigation />
				</div>

				<div className="animate delay-medium type-wrapper text-5xl font-bold" id="title">
					<Typewriter options={{
						strings: greetings,
						autoStart: true,
						loop: true
					}}/>
				</div>

        <p className="animate delay-medium text-lg px-2">I'm <span className="font-bold primary">Evelyn</span>! I'm 18 years old and I'm proficient in C#</p>
				<p className="animate delay-medium text-lg px-4">I'm a <span className="primary">2D Game Developer</span> that specialises in <s>tooling</s> and engine code!</p>

				<button className="animate delay-slow my-10 text-white btn" onClick={() => {scrollToAbout("about")}}>
					<span className="pl-2">Enter the void</span>
					<img src="img/down.svg" className="float-right"/>
				</button>
			</article>

			<article className="relative flex flex-col text-center justify-center items-center construction-wrapper" id="about">
					<p className="font-bold text-5xl primary pb-10" id="title" data-aos="fade-up" data-aos-easing="ease-in-out">About Me</p>

					<section className="text-lg px-4" data-aos="fade-up" data-aos-delay="100">
						<p>I'm a very <span className="primary">opinionated</span> 18 year old when it comes to the software I use.</p>
						<p>I am also a <span className="primary">Trans</span>, so, that means, anti-LGBTQ people <span className="red">DNI</span>!</p>
						<p>
							I am mainly a <span className="primary">Linux</span> user, more specifically
							<span className="fedora inline-flex items-center">
								<span className="ml-1">Fedora Linux KDE</span>
								<img className="ml-2 mr-2" src="img/fedora.svg" alt="fedora" />
							</span>
						</p>
						<p>I am also a <span className="primary">Software Developer</span> with a passion for Game Development and other miscellaneous programs such as the site you're viewing.</p>
						<p>I speak Romanian and English (UK) fluently, whilst also learning Dutch.</p>
					</section>

					<section className="flex space-x-2">
						<img alt="britain" src="img/great-britain.svg" className="hover-large" data-aos="fade-right" data-aos-delay="100"/>
						<img alt="romania" src="img/romania.svg" className="hover-large" data-aos="fade-right" data-aos-delay="150"/>
						<img alt="netherlands" src="img/the-netherlands.svg" className="hover-large" data-aos="fade-right" data-aos-delay="200"/>
					</section>

					<div data-aos="fade-up" data-aos-delay="300">
						<a className="cursor-pointer" target="_blank" rel="noopener noreferrer" href="https://fedoraproject.org" >
							<img src="img/showcase.png" className="hover-large m-w-sm m-h-xs" />
						</a>
					</div>
			</article>

			<article className="relative flex flex-col text-center justify-center items-center min-h-screen" id="work">
					<p className="font-bold text-5xl primary pb-10" id="title" data-aos="fade-up">My Work</p>
					
					<div className="px-4" data-aos="fade-up" data-aos-delay="100">
						<p>My journey with programming is available on my <span className="primary">GitHub</span>. I only do FOSS Development.</p>
						<p>You can also find my published games on <a className="cursor-pointer primary" rel="noopener noreferrer" href="https://itsLyn.itch.io"><u>itch.io</u></a>!</p>
						<p>Every project of mine supports both <span className="primary">Linux</span> and <span className="primary">Windows</span>.</p>
						<p>I am proficient in the <span className="primary">C#</span> language but I'm very flexible, meaning I can also use <span className="primary">Rust</span>, <span className="primary">C/C++</span>, and <span className="primary">GoLang</span> to some extent.</p>					
					</div>

					<p className="primary font-bold text-xl mt-4" data-aos="fade-up" data-aos-delay="200">Important Projects</p>
					<div className="max-w-5xl mx-auto flex flex-wrap justify-center">
						{
							projects.map((project, index) => (
								<div className="w-full sm:w-1/2 p-2" key={index} data-aos="fade-right" data-aos-delay={project.delay}>
									<ProjectCard item={project} />
								</div>
							))
						}
					</div>
					<p className="my-2" data-aos="fade-up" data-aos-delay="500">Every project here can be found on my GitHub!</p>
					<div className="gh-card p-4 rounded-2xl flex flex-row mb-20" data-aos="fade-up" data-aos-delay="600">
						<img src={avatarUrl} className="h-20 rounded-3xl" />
						<div className="text-left">
							<a className="cursor-pointer font-bold primary ml-2" target="_blank" rel="noopener noreferrer" href={url}><u>{login}</u> <span className="faded font-normal">({name})</span></a>
							<p className="ml-2">{followers} Followers</p>
							<p className="ml-2">{repos} Repos</p>
						</div>
					</div>
			</article>
    </>
  )
}

export default App
