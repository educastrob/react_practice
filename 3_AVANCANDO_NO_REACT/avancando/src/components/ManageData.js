import { useState } from 'react';

const ManageData = () => {
	let someData = 10;
	console.log(someData);

	const [number, setNumber] = useState(15);

	return (
		<div>
			<div>
				<p>Valor: {someData}</p>
				<button onClick={() => {
					(someData = 42);
					}}>Mudar variável
				</button>
			</div>
			<div>
				<p>Valor: {number}</p>
				<button onClick={() => {
					setNumber(42);
					}}>Mudar variável
				</button>
			</div>
		</div>
	);
};

export default ManageData;