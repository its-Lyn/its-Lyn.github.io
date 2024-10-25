import PageNavigation from "./components/PageNavigation";
import "./styles/App.css"
import Typewriter from 'typewriter-effect';

function App() {
	const greetings = ["Hello!", "Hola!", "Bonjour!", "Ciao!", "Olá!", "Hei!", "Hallo!", "Salut!", "Szia!", "Salve!", "Ahoj!", "Konnichiwa!", "Saluton!", "Salaam!"];

	const scrollToAbout = () => {
		const aboutSection = document.getElementById('about');
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
    <>
      <article className="relative flex flex-col text-center justify-center items-center construction-wrapper">	
				<div className="absolute top-3 w-full flex justify-center">
					<PageNavigation />
				</div>

				<div className="type-wrapper text-5xl font-bold" id="title">
					<Typewriter options={{
						strings: greetings,
						autoStart: true,
						loop: true
					}}/>
				</div>

        <p className="text-lg px-2">I'm <span className="font-bold primary">Evelyn</span>! I'm 18 years old and I'm proficient in C#</p>
				<p className="text-lg px-4">I'm a <span className="primary">2D Game Developer</span> that specialises in <s>tooling</s> and engine code!</p>
			
				<button className="my-10 text-white btn" onClick={scrollToAbout}>
					<span className="pl-2">Enter the void</span>
					<img src="img/down.svg" className="float-right"/>
				</button>
			</article>

			<article className="relative flex flex-col text-center justify-center items-center construction-wrapper" id="about">
					<p className="font-bold text-5xl primary pb-10" id="title">About Me</p>

					<section className="text-lg px-4">
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
						<img alt="britain" src="img/great-britain.svg" className="hover-large" />
						<img alt="romania" src="img/romania.svg" className="hover-large" />
						<img alt="netherlands" src="img/the-netherlands.svg" className="hover-large" />
					</section>

					<a className="cursor-pointer" target="_blank" rel="noopener noreferrer" href="https://fedoraproject.org" >
						<img src="img/showcase.png" className="hover-large m-w-sm m-h-xs" />
					</a>
			</article>
    </>
  )
}

export default App
