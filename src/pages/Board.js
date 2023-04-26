import styled from "styled-components";
import map from "../images/map.png";

export default function Board() {
  return (
    <Container>
      <img src={map} alt="tabuleiro" />
    </Container>
  );
}

const Container = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: black;

    img {
        height: 950px;
    }
`