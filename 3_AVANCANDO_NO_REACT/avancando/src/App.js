import { useState } from "react";
import './App.css';
import Sanji from "./assets/sanji.jpeg"
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import MessageState from "./components/MessageState";
import ChangeMessageState from './components/ChangeMessageState';


function App() {
  const name = "Giovana";

  const cars = [
	{id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
	{id: 2, brand: "KIA", color: "Branco", newCar: false, km: 2324},
	{id: 3, brand: "Renault", color: "Azul", newCar: false, km: 341},
  ]

  function showMessage() {
	console.log("Evento do componente pai!");
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
	setMessage(msg);
  };

  return (
    <div className="App">
		<h1>Avançando em React</h1>
		{/* Imagem em Public */}
		<div>
			<img src="zoro.jpeg" alt="Zoro em Wano" />
		</div>
		{/* Imagem em Assets */}
		<div>
			<img src={Sanji} alt="Sanji puto" />
		</div>
		<ManageData />
		<ListRender />
		<ConditionalRender />
		{/* Props */}
		<ShowUserName name={name} />
		{/* Destructuring */}
		<CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
		{/* Reaproveitando */}
		<CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
		<CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
		{/* Loop em array de objetos */}
		<h1>Loop em array de objetos</h1>
		{cars.map((car) => (
			<CarDetails 
				key={car.id} 
				brand={car.brand} 
				color={car.color} 
				km={car.km} 
				newCar={car.newCar} 
			/>
		))}
		{/* Fragment */}
		<Fragment propFragment="teste" />
		{/* Children */}
		<Container myValue="testing">
			<p>E este é o conteúdo</p>
		</Container>
		<Container myValue="testing2">
			<h5>Tetando o container</h5>
		</Container>
		{/* Executar função */}
		<ExecuteFunction myFunction={showMessage} />
		{/* State lift */}
		<MessageState msg={message} />
		<ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
