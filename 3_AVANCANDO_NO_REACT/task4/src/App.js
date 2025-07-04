import UserDetails from './components/UserDetails';
import './App.css';

function App() {

	const pessoas = [
		{id: 1, name: "Eduardo", age: 21, job: "Programmer"},
		{id: 2, name: "Amanda", age: 30, job: "Engenheira Civil"},
		{id: 3, name: "Roberto", age: 42, job: "Motorista de onibus"},
		{id: 4, name: "Matheus", age: 16, job: "Estudante"},
		{id: 5, name: "Giovana", age: 18, job: "Corretor"},
	]

  return (
    <div className="App">
		<h1>Challenge 4</h1>
		{pessoas.map((pessoa) => (
			<UserDetails
				key={pessoa.id}
				name={pessoa.name}
				age={pessoa.age}
				job={pessoa.job}
			/>
		))}
    </div>
  );
}

export default App;
