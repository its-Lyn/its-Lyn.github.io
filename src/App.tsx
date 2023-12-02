import "./styles/App.css"

function App() {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center text-3xl construction-wrapper">
        <p>
          Under <span className="font-bold construction-span">Construction</span>!
        </p>
        <div className="construction-palette">
          <div className="c-primary c-size"></div>
          <div className="c-text c-size"></div>
          <div className="c-secondary c-size"></div>
          <div className="c-accent c-size"></div>
        </div>
        <footer className="absolute text-sm opacity-20 c-goodbye">
          <p>See you soon~<br/>-Lyn</p>
        </footer>
      </div>
    </>
  )
}

export default App
