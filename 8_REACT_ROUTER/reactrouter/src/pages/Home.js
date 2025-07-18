import {Link} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';

import "./Home.css";

const Home = () => {
	// 3 - carregamento de dados
	const url = "http://localhost:3002/products";

	const {data: items, loading, error} = useFetch(url);

  return (
	<div>
		<h1>Produtos</h1>
		{error && <p>{error}</p>}
		<ul className="products">
			{items && items.map((item) => (
				<li key={item.id}>
					<h2>{item.name}</h2>
					<p>{item.price}</p>
				</li>
			))}
		</ul>
	</div>
  );
};

export default Home