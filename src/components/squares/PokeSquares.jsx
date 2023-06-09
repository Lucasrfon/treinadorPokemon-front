import styled from "styled-components";

export default function PokeSquares() {
	const pokemons = Array.from({ length: 41 }, (element, index) => (
		<Squares id={index} key={index}></Squares>
	));
	return pokemons;
}

const Squares = styled.div`
	position: absolute;
	height: 58px;
	width: 58px;
	border-radius: 50%;
`;
