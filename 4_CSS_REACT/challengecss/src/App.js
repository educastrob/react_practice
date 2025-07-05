import "./App.css";
import CarDetails from "./components/CarDetails.js";

function App() {
  const cars = [
    { id: 1, marca: "Volkswagen", km: 1000, cor: "Azul" },
    { id: 2, marca: "Toyota", km: 18247, cor: "Vermelho" },
    { id: 3, marca: "Astra", km: 54, cor: "Amarelo" },
  ];

  return (
    <div className="App">
      <div className="car-container">
        <h1>DETALHES DOS CARROS</h1>
        {cars.map((car) => (
          <CarDetails car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
