import axios from "axios";
import Header from "../components/Header";

function HomePage({ pokemon }) {
	const pokeCardsMapped =
		pokemon &&
		pokemon.map((card) => {
			return <div key={card.id}>{card.name}</div>;
		});
	return (
		<div>
			<Header />
			<div>{pokeCardsMapped}</div>
		</div>
	);
}

HomePage.getInitialProps = async ({ req }) => {
	const res = await axios.get("https://api.magicthegathering.io/v1/cards");
	return { pokemon: res.data.cards };
};

export default HomePage;
