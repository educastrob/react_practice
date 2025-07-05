import styles from './CarDetails.module.css';

const CarDetails = ({ car }) => {
	return (
	<div className={styles.car_card}>
		<h3>Carro:</h3>
		<p>ID: {car.id}</p>
		<p>Marca: {car.marca}</p>
		<p>Km rodados: {car.km}</p>
		<p>Cor: {car.cor}</p>
	</div>
	)
}

export default CarDetails