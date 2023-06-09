import styled from "styled-components";
import Player from "../Players.jsx";

export default function TakeSquares({ position, players }) {
  return (
    <Squares>
      {players[0].position === position ? (
        <Player player={players[0].player}></Player>
      ) : null}
      {players[1].position === position ? (
        <Player player={players[1].player}></Player>
      ) : null}
      {players[2].position === position ? (
        <Player player={players[2].player}></Player>
      ) : null}
      {players[3].position === position ? (
        <Player player={players[3].player}></Player>
      ) : null}
      {players[4].position === position ? (
        <Player player={players[4].player}></Player>
      ) : null}
      {players[5].position === position ? (
        <Player player={players[5].player}></Player>
      ) : null}
    </Squares>
  );
}

const Squares = styled.div`
	position: absolute;
	height: 38px;
	width: 38px;
	border-radius: 50%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
`;
