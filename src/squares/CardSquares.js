import styled from "styled-components"
import { getEventCard } from "../logic/fuctions"

export default function CardSquares() {
  return (<Squares onClick={(event) => getEventCard(event.target.id)}></Squares>)
}

const Squares = styled.div`
    position: absolute;
    height: 38px;
    width: 38px;
    border-radius: 50%;

    &hover {
    cursor: pointer;
  }
`