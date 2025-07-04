import { useState } from "react";


const ListRender = () => {
	const [list] = useState(["Eduardo", "Pedro", "Josias", "Maria"]);

	const [users, setUsers] = useState([
		{id: 1, name: "Eduardo", age: 21},
		{id: 2, name: "Matheus", age: 53},
		{id: 3, name: "Giovana", age: 20},
	]);

	const deleteRandom = () => {
		const randomNumber = Math.floor(Math.random() * 4);

		setUsers((prevUsers) => {
			console.log(prevUsers);
			return prevUsers.filter((user) => randomNumber !== user.id);
		});
	};

	return (
		<div>
			<ul>
				{list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name} - {user.age}</li>
				))}
			</ul>
			<button onClick={deleteRandom}>Delete random user</button>
		</div>
	);
};

export default ListRender;