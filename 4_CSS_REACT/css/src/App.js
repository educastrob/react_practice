import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import { useState } from "react";

function App() {
	const n = 0;
	const [name] = useState("Eduardo");

	const redTitle = true;

  return (
    <div className="App">
		{/* CSS Global */}
		<h1>React com CSS</h1>
		{/* Component com CSS */}
		<MyComponent />
		<p>Este parágrafo é do App.js</p>
		{/* Inline CSS */}
		<p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
			Este componente foi estilizado inline.
		</p>
		<p style={{
			color: "magenta", 
			padding: "25px", 
			borderTop: "2px solid red"
			}}>
			Este componente foi estilizado inline.
		</p>
		{/* CSS Inline Dinâmico */}
		<h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
			CSS Dinâmico
		</h2>
		<h2 style={name === "Eduardo" 
			? ({color: "green", background: "#000"}) 
			: null}
		>
			Eduardo
		</h2>
		{/* Classe Dinâmica */}
		<h2 className={redTitle ? "red-title" : "title"}>
			Este título vai ter classe dinâmica
		</h2>
		{/* CSS Modules */}
		<Title />
		<h2>Testando</h2>
    </div>
  );
}

export default App;
