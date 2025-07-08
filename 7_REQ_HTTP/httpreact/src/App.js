import './App.css';
import { useEffect, useState } from 'react';

// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3002/products";

function App() {
	const [products, setProducts] = useState([]);

	// 4 - custom
	const { data: items } = useFetch(url);

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	// 1 - resgatando dados
	// useEffect(() => {
	// 	async function fetchData() {
	// 		const response = await fetch(url);
	// 		const data = await response.json();
	// 		setProducts(data);
	// 	}

	// 	fetchData();
	// }, []);

	// console.log(products)


	// 2 - adicionando dados
	const handleSubmit = async (e) => {
		e.preventDefault();

		const product = {
			name,
			price
		};

		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(product),
		});

		// 3 - carregamento dinâmico
		const addedProduct = await res.json();
		setProducts((prevProducts) => [...prevProducts, addedProduct]);

		setName("");
		setPrice("");
	}

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
	  <ul>
		{items && items.map((item) => (
			<li key={item.id}>
				{item.name} - R$ {item.price}
			</li>
		))}
	  </ul>
	  <div className="add-product">
		<form onSubmit={handleSubmit}>
			<label>
				Nome:
				<input 
					type="text" 
					value={name} 
					onChange={(e) => setName(e.target.value)}
				/>
			</label>
			<label>
				Price:
				<input 
					type="text" 
					value={price} 
					onChange={(e) => setPrice(e.target.value)}
				/>
			</label>
			<input type="submit" value="Criar" />
		</form>
	  </div>
    </div>
  );
}

export default App;
