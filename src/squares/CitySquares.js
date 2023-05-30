import styled from "styled-components"
import { getEventCard } from "../logic/fuctions"

export default function CitySquares({ id }) {
    if (id === "pallet") {
       return <Squares id={id}></Squares>
    } else {
       return <Squares id={id} onClick={(event) => getEventCard(event.target.id)}></Squares>
    }

}

const Squares = styled.div`
    position: absolute;
    height: 55px;
    width: 90px;
    border-radius: 8px;
    background-color: green;

    &hover {
    cursor: pointer;
  }
`