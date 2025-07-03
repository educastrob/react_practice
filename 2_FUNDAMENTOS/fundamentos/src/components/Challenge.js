const Challenge = () => {

	const number1 = 31;
	const number2 = 11;

	const handleClickSum = () => {
		console.log("Soma dos números: " + (number1 + number2));
	};

	return (
		<div>
			<p>Números: {number1} e {number2}</p>
			<button onClick={handleClickSum}>Clique para somar os números.</button>
		</div>
	);
};

export default Challenge;