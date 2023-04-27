import styled from "styled-components";
import map from "../images/map.png";

export default function Board() {
  return (
    <Container>
      <Capture></Capture>
      <Card></Card>
      <Capture></Capture>
      <City></City>
      <Card></Card>
      <Capture></Capture>
      <Capture></Capture>
      <Card></Card>
      <Capture></Capture>
      <Capture></Capture>
      <Capture></Capture>
      <City></City>
      <Card></Card>
      <Capture></Capture>
      <Card></Card>
      <Capture></Capture>
      <Capture></Capture>
      <Capture></Capture>
      <Card></Card>
      <Capture></Capture>
      <Capture></Capture>
      <Card></Card>
      <City></City>
      <City></City>
      <City></City>
      <City></City>
      <City></City>
      <City></City>
      <City></City>
      <Capture></Capture>
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
`;

const Card = styled.div`
  position: absolute;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);

  &:nth-child(2) {
    top: 534px;
    left: 456px;
  }

  &:nth-child(5) {
    top: 418px;
    left: 464px;
  }

  &:nth-child(8) {
    top: 322px;
    left: 438px;
  }

  &:nth-child(13) {
    top: 186px;
    left: 488px;
  }

  &:nth-child(15) {
    top: 170px;
    left: 546px;
  }
`