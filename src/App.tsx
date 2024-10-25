import PageNavigation from "./components/PageNavigation";
import "./styles/App.css"
import Typewriter from 'typewriter-effect';

function App() {
	const greetings = ["Hello!", "Hola!", "Bonjour!", "Ciao!", "Olá!", "Hei!", "Hallo!", "Salut!", "Szia!", "Salve!", "Ahoj!", "Konnichiwa!", "Saluton!", "Salaam!"];

	return (
    <>
      <article className="relative flex flex-col text-center justify-center items-center construction-wrapper">	
				<div className="absolute top-3 w-full flex justify-center">
					<PageNavigation />
				</div>
				
				<div className="type-wrapper text-5xl font-bold">
					<Typewriter options={{
						strings: greetings,
						autoStart: true,
						loop: true
					}}/>
				</div>

        <p className="text-lg">I'm <span className="font-bold construction-span">Evelyn</span>! I'm 18 years old and I'm proficient in C#</p>
				<p className="text-lg">I'm a <span className="construction-span">2D Game Developer</span> that specialises in <s>tooling</s> and engine code!</p>
			
				<button className="my-10 text-white btn">
					<span className="pl-2">Enter the void</span>
					<img src="img/down.svg" className="float-right"/>
				</button>
			</article>
    </>
  )
}

export default App
