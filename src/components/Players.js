import styled from "styled-components";

export default function Player({ player }) {

    <Character layer={player} ></Character>

}

const Character = styled.div`
	height: 34px;
	width: 34px;
	border-radius: 50%;
	background-color: ${props => props.player === 1 ? 'blue' : props.player === 2 ? 'gray' : 'green'};
`;
