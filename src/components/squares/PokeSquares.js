import styled from "styled-components"
import { turnPoke } from "../../logic/fuctions"

export default function PokeSquares() {
  return <Squares onClick={(event) => turnPoke(event.target.id)}></Squares>
}

const Squares = styled.div`
    position: absolute;
    height: 58px;
    width: 58px;
    border-radius: 50%;

    &:hover {
    cursor: pointer;
  }
`