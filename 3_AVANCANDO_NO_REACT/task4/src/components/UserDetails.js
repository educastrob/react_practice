const UserDetails = ({ name, age, job }) => {
	return (
		<div>
			<h4>Detalhes da Pessoa:</h4>
			<p>Nome: {name}</p>
			<p>Idade: {age}</p>
			<p>Profissão: {job}</p>
			{age >= 18 ? (
				<p>Apto para tirar a CNH !</p>
			) : (
				<p>Não está apto para tirar a CNH !</p>
			)}
		</div>
	)
};

export default UserDetails;