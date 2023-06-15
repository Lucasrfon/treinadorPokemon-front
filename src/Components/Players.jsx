import styled from "styled-components";

export default function Player({ player }) {
	return <Character player={player}></Character>;
}

const Character = styled.div`
	height: 24px;
	width: 24px;
	border-radius: 50%;
	background-color: ${(props) =>
		props.player === 1
			? "blue"
			: props.player === 2
				? "red"
				: props.player === 3
					? "purple"
					: props.player === 4
						? "black"
						: props.player === 5
							? "darkgreen"
							: "brown"};
`;
