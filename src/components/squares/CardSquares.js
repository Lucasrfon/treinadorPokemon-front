import styled from "styled-components"
import { turnPoke } from "../../logic/fuctions"

export default function CardSquares({ position, players }) {
  return (<Squares onClick={(event) => turnPoke(position)}></Squares>)
}

const Squares = styled.div`
  position: absolute;
  height: 38px;
  width: 38px;
  border-radius: 50%;
`