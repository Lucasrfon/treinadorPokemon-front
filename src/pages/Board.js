import styled from "styled-components";
import map from "../images/map.png";

export default function Board() {

  const cardSquares = Array.from({ length: 29 }, (element, index) => (
    <div key={`event${index}`} onClick={(event) => getEventCard(event.target.id)}></div>
  ));

  const pokemons = Array.from({ length: 37 }, (element, index) => (
    <div
      id={`poke${index}`}
      key={`poke${index}`}
      onClick={(event) => turnPoke(event.target.id)}
    ></div>
  ));

  function getEventCard(id) {
    if(id === "cerulean" || id === "vermilion") {
      alert("Desafio?")
    }
    else if (id === "") {
      alert("Pegou carta")
    }
    else {
      alert("pegou duas cartas")
      if (id === "cinnabar") {
        alert("tem 20 pontos?")
      }
    }
  }

  function turnPoke(id) {
    alert(`Pegou${id}`);
  }

  return (
    <Container>
      <Position>
        {pokemons}
        <Card>{cardSquares}</Card>
        <City>
          <div id="pallet"></div>
          <div id="viridian" onClick={(event) => getEventCard(event.target.id)}></div>
          <div id="pewter" onClick={(event) => getEventCard(event.target.id)}></div>
          <div id="cerulean" onClick={(event) => getEventCard(event.target.id)}></div>
          <div id="lavender" onClick={(event) => getEventCard(event.target.id)}></div>
          <div id="saffron" onClick={(event) => getEventCard(event.target.id)}></div>
          <div id="celadon" onClick={(event) => getEventCard(event.target.id)}></div>
          <div id="vermilion" onClick={(event) => getEventCard(event.target.id)}></div>
          <div id="fuchsia" onClick={(event) => getEventCard(event.target.id)}></div>
          <div id="cinnabar" onClick={(event) => getEventCard(event.target.id)}></div>
        </City>
      </Position>
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
  top: 0;
  left: 0;
  height: 950px;
  width: 1688.88px;

  div {
    position: absolute;
    height: 55px;
    width: 90px;
    border-radius: 8px;
  }

  div:hover {
    cursor: pointer;
  }

  div:nth-child(1) {
    top: 620px;
    left: 484px;
  }

  div:nth-child(2) {
    top: 460px;
    left: 446px;
  }

  div:nth-child(3) {
    top: 230px;
    left: 484px;
  }

  div:nth-child(4) {
    top: 198px;
    left: 868px;
  }

  div:nth-child(5) {
    top: 310px;
    left: 1136px;
  }

  div:nth-child(6) {
    top: 328px;
    left: 872px;
  }

  div:nth-child(7) {
    top: 322px;
    left: 678px;
  }

  div:nth-child(8) {
    top: 466px;
    left: 874px;
  }

  div:nth-child(9) {
    top: 670px;
    left: 790px;
  }

  div:nth-child(10) {
    top: 694px;
    left: 568px;
  }
`;

const Position = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 950px;
  width: 1688.88px;

  >div {
    position: absolute;
    height: 58px;
    width: 58px;
    border-radius: 50%;
  }

  div:hover {
    cursor: pointer;
  }

  >div:nth-child(1) {
    top: 574px;
    left: 406px;
  }

  >div:nth-child(2) {
    top: 512px;
    left: 358px;
  }

  >div:nth-child(3) {
    top: 386px;
    left: 376px;
  }

  >div:nth-child(4) {
    top: 312px;
    left: 492px;
  }

  >div:nth-child(5) {
    top: 312px;
    left: 340px;
  }

  >div:nth-child(6) {
    top: 242px;
    left: 334px;
  }

  >div:nth-child(7) {
    top: 192px;
    left: 414px;
  }

  >div:nth-child(8) {
    top: 120px;
    left: 456px;
  }

  >div:nth-child(9) {
    top: 112px;
    left: 582px;
  }

  >div:nth-child(10) {
    top: 246px;
    left: 588px;
  }

  >div:nth-child(11) {
    top: 246px;
    left: 684px;
  }

  >div:nth-child(12) {
    top: 122px;
    left: 738px;
  }

  >div:nth-child(13) {
    top: 128px;
    left: 808px;
  }

  >div:nth-child(14) {
    top: 262px;
    left: 814px;
  }

  >div:nth-child(15) {
    top: 122px;
    left: 952px;
  }

  >div:nth-child(16) {
    top: 134px;
    left: 1074px;
  }

  >div:nth-child(17) {
    top: 244px;
    left: 1124px;
  }

  >div:nth-child(18) {
    top: 212px;
    left: 1266px;
  }

  >div:nth-child(19) {
    top: 276px;
    left: 1044px;
  }

  >div:nth-child(20) {
    top: 366px;
    left: 808px;
  }

  >div:nth-child(21) {
    top: 400px;
    left: 954px;
  }

  >div:nth-child(22) {
    top: 382px;
    left: 1100px;
  }

  >div:nth-child(23) {
    top: 540px;
    left: 1050px;
  }

  >div:nth-child(24) {
    top: 378px;
    left: 1228px;
  }

  >div:nth-child(25) {
    top: 482px;
    left: 1240px;
  }

  >div:nth-child(26) {
    top: 560px;
    left: 1214px;
  }

  >div:nth-child(27) {
    top: 602px;
    left: 1136px;
  }

  >div:nth-child(28) {
    top: 676px;
    left: 1100px;
  }

  >div:nth-child(29) {
    top: 614px;
    left: 958px;
  }

  >div:nth-child(30) {
    top: 722px;
    left: 952px;
  }

  >div:nth-child(31) {
    top: 766px;
    left: 866px;
  }

  >div:nth-child(32) {
    top: 730px;
    left: 748px;
  }

  >div:nth-child(33) {
    top: 688px;
    left: 686px;
  }

  >div:nth-child(34) {
    top: 556px;
    left: 558px;
  }

  >div:nth-child(35) {
    top: 458px;
    left: 558px;
  }

  >div:nth-child(36) {
    top: 388px;
    left: 560px;
  }

  >div:nth-child(37) {
    top: 314px;
    left: 570px;
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
    top: 222px;
    left: 1184px;
  }

  div:nth-child(11) {
    top: 284px;
    left: 1238px;
  }

  div:nth-child(12) {
    top: 332px;
    left: 1094px;
  }

  div:nth-child(13) {
    top: 332px;
    left: 974px;
  }

  div:nth-child(14) {
    top: 320px;
    left: 780px;
  }

  div:nth-child(15) {
    top: 394px;
    left: 876px;
  }

  div:nth-child(16) {
    top: 468px;
    left: 976px;
  }

  div:nth-child(17) {
    top: 430px;
    left: 1046px;
  }

  div:nth-child(18) {
    top: 506px;
    left: 1096px;
  }

  div:nth-child(19) {
    top: 468px;
    left: 1140px;
  }

  div:nth-child(20) {
    top: 438px;
    left: 1198px;
  }

  div:nth-child(21) {
    top: 552px;
    left: 1138px;
  }

  div:nth-child(22) {
    top: 670px;
    left: 1048px;
  }

  div:nth-child(23) {
    top: 682px;
    left: 888px;
  }

  div:nth-child(24) {
    top: 674px;
    left: 750px;
  }

  div:nth-child(25) {
    top: 610px;
    left: 612px;
  }

  div:nth-child(26) {
    top: 508px;
    left: 614px;
  }

  div:nth-child(27) {
    top: 780px;
    left: 684px;
  }

  div:nth-child(28) {
    top: 780px;
    left: 610px;
  }

  div:nth-child(29) {
    top: 770px;
    left: 562px;
  }
`;
