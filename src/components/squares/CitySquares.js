import styled from "styled-components";
import { turnPoke } from "../../logic/fuctions";
import Player from "../Players.js";

export default function CitySquares({ id, position, players }) {
   if (id === "pallet") {
      return (
         <Squares id={id}>
            {players[0].position === 0 ? (
               <Player player={players[0].player}></Player>
            ) : null}
            {players[1].position === 0 ? (
               <Player player={players[1].player}></Player>
            ) : null}
            {players[2].position === 0 ? (
               <Player player={players[2].player}></Player>
            ) : null}
            {players[3].position === 0 ? (
               <Player player={players[3].player}></Player>
            ) : null}
            {players[4].position === 0 ? (
               <Player player={players[4].player}></Player>
            ) : null}
            {players[5].position === 0 ? (
               <Player player={players[5].player}></Player>
            ) : null}
         </Squares>
      );
   } else {
      return (
         <Squares
            id={id}
            onClick={(event) => turnPoke(position)}
         ></Squares>
      );
   }
}

const Squares = styled.div`
	position: absolute;
	height: 55px;
	width: 90px;
	border-radius: 8px;
	background-color: green;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
`;
