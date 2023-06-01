import styled from "styled-components"
import { turnPoke } from "../../logic/fuctions"
import Player from "../Players"

export default function CitySquares({ id, position, players }) {
   if (id === "pallet") {
      return (
         <Squares id={id}>
            <Player player={players[0].player} position={players[0].position} ></Player>
            <Player player={players[1].player} position={players[1].position} ></Player>
            <Player player={players[2].player} position={players[2].position} ></Player>
            <Player player={players[3].player} position={players[3].position} ></Player>
            <Player player={players[4].player} position={players[4].position} ></Player>
            <Player player={players[5].player} position={players[5].position} ></Player>
         </Squares>)
   } else {
      return <Squares id={id} onClick={(event) => turnPoke(position)}></Squares>
   }

}

const Squares = styled.div`
   position: absolute;
   height: 55px;
   width: 90px;
   border-radius: 8px;
   background-color: green;
`