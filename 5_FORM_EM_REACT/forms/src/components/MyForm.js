import "./MyForm.css"
import {useState} from 'react';

const MyForm = ({ user }) => {
  // 6 - controlled inputs 
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
	setName(e.target.value);
  }

  console.log(name, email, bio, role);

  const handleSubmit =(event) => {
	event.preventDefault(); // preventDefault para não dar Page Reload
	console.log("Enviando formulário");
	console.log(name, email);

	// Validação
	// Envio

 	 // 7 - Limpar form
	setName(""); 
	setEmail("");
	setBio("");
	setRole("");
  }

  return (
	  <div>
		{/* 5 - Envio do Form */}
		{/* 1 - Criação de Form */}
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'>Nome:</label>
				<input 
					type='text' 
					name='name' 
					placeholder='Escreva seu nome' 
					onChange={handleName}
					value={name}
				/>
			</div>
			{/* 2 - Label envolvendo input */}
			<label>
				<span>E-mail</span>
				{/* 4 - Alteração de state inline */}
				<input 
					type='email' 
					name='email' 
					placeholder='Digite seu e-mail'
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					value={email}
				/>
			</label>
			<label>
				<span>Bio:</span>
				<textarea 
					name='bio' 
					placeholder='Descrição do usuário' 
					onChange={(e) => {setBio(e.target.value)}} 
					value={bio} 
				>

				</textarea>
			</label>
			{/* 9 - Select */}
			<label>
				<span>Função do Sistema</span>
				<select name='role' onChange={(e) => {setRole(e.target.value)}} value={role}>
					<option value='user'>Usuário</option>
					<option value='editor'>Editor</option>
					<option value='admin'>Administrador</option>
				</select>
			</label>
			<input type='submit' value='Enviar' />
		</form>
	</div>
  )
}

export default MyForm