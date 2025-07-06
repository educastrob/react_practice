import MyForm from './components/MyForm.js';
import './App.css';

function App() {
  return (
    <div className="App">
		<h2>Forms</h2>
		<MyForm name="Eduardo" email="eduardocastrobrit@gmail.com" bio='vai com deus' role='admin'/>
    </div>
  );
}

export default App;
