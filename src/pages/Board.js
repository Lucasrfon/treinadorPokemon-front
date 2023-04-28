import styled from "styled-components";
import map from "../images/map.png";

export default function Board() {
  const cardSquares = Array.from({ length: 29 }, (index) => <div key={index} onClick={getEventCard}></div>);

  function getEventCard () {
    alert("Pegou carta")
  }

  return (
    <Container>
      <Capture>
      </Capture>
      <Card>
        {cardSquares}
      </Card>
      <City></City>
      <img src={map} alt="tabuleiro" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100%;
  background-color: black;

  img {
    height: 950px;
  }
`;

const City = styled.div`
  position: absolute;
  height: 55px;
  width: 90px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);

  :hover {
    cursor: pointer;
  }

  &:nth-child(4) {
    top: 460px;
    left: 446px;
  }

  &:nth-child(12) {
    top: 230px;
    left: 484px;
  }
`;

const Capture = styled.div`
  position: absolute;
  height: 58px;
  width: 58px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);

  :hover {
    cursor: pointer;
  }

  &:nth-child(1) {
    top: 574px;
    left: 406px;
  }

  &:nth-child(3) {
    top: 512px;
    left: 358px;
  }

  &:nth-child(6) {
    top: 386px;
    left: 376px;
  }

  &:nth-child(7) {
    top: 312px;
    left: 492px;
  }

  &:nth-child(9) {
    top: 312px;
    left: 340px;
  }

  &:nth-child(10) {
    top: 242px;
    left: 334px;
  }

  &:nth-child(11) {
    top: 192px;
    left: 414px;
  }

  &:nth-child(14) {
    top: 120px;
    left: 456px;
  }

  &:nth-child(16) {
    top: 112px;
    left: 582px;
  }

  &:nth-child(17) {
    top: 246px;
    left: 588px;
  }

  &:nth-child(18) {
    top: 246px;
    left: 684px;
  }

  &:nth-child(20) {
    top: 122px;
    left: 738px;
  }

  &:nth-child(21) {
    top: 128px;
    left: 808px;
  }
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 950px;
  width: 1688.88px;

  div {
    position: absolute;
    height: 38px;
    width: 38px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  div:hover {
    cursor: pointer;
  }

  div:nth-child(1) {
    top: 534px;
    left: 456px;
  }

  div:nth-child(2) {
    top: 418px;
    left: 464px;
  }

  div:nth-child(3) {
    top: 322px;
    left: 438px;
  }

  div:nth-child(4) {
    top: 186px;
    left: 488px;
  }

  div:nth-child(5) {
    top: 170px;
    left: 546px;
  }

  div:nth-child(6) {
    top: 166px;
    left: 698px;
  }

  div:nth-child(7) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(8) {
    top: 264px;
    left: 916px;
  }

  div:nth-child(9) {
    top: 188px;
    left: 1044px;
  }

  div:nth-child(10) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(11) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(12) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(13) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(14) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(15) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(16) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(17) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(18) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(19) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(20) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(21) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(22) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(23) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(24) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(25) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(26) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(27) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(28) {
    top: 214px;
    left: 824px;
  }

  div:nth-child(29) {
    top: 214px;
    left: 824px;
  }
`