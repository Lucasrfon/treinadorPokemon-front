import styled from "styled-components";
import map from "../images/map.png";
import CardSquares from "../squares/CardSquares.js";
import PokeSquares from "../squares/PokeSquares.js";
import CitySquares from "../squares/CitySquares.js";

export default function Board() {

  return (
    <Container>
      <Position>
        <CitySquares position={0} id={"pallet"}/>
        <PokeSquares position={1}/>
        <CardSquares position={2}/>
        <PokeSquares position={3}/>
        <CitySquares position={4} id={"viridian"}/>
        <CardSquares position={5}/>
        <PokeSquares position={6}/>
        <PokeSquares position={7}/>
        <CardSquares position={8}/>
        <PokeSquares position={9}/>
        <PokeSquares position={10}/>
        <PokeSquares position={11}/>
        <CitySquares position={12} id={"pewter"}/>
        <CardSquares position={13}/>
        <PokeSquares position={14}/>
        <CardSquares position={15}/>
        <PokeSquares position={16}/>
        <PokeSquares position={17}/>
        <PokeSquares position={18}/>
        <CardSquares position={19}/>
        <PokeSquares position={20}/>
        <PokeSquares position={21}/>
        <CardSquares position={22}/>
        <CitySquares position={23} id={"cerulean"}/>
        <PokeSquares position={24}/>
        <CardSquares position={25}/>
        <PokeSquares position={26}/>
        <PokeSquares position={27}/>
        <CardSquares position={28}/>
        <PokeSquares position={29}/>
        <CardSquares position={30}/>
        <CitySquares position={31} id={"lavender"}/>
        <CardSquares position={32}/>
        <PokeSquares position={33}/>
        <CardSquares position={34}/>
        <CitySquares position={35} id={"saffron"}/>
        <PokeSquares position={36}/>
        <CardSquares position={37}/>
        <PokeSquares position={38}/>
        <CardSquares position={39}/>
        <CardSquares position={40}/>
        <PokeSquares position={41}/>
        <CitySquares position={42} id={"vermilion"}/>
        <CardSquares position={43}/>
        <CardSquares position={44}/>
        <PokeSquares position={45}/>
        <CardSquares position={46}/>
        <CardSquares position={47}/>
        <PokeSquares position={48}/>
        <PokeSquares position={49}/>
        <CardSquares position={50}/>
        <PokeSquares position={51}/>
        <PokeSquares position={52}/>
        <CardSquares position={53}/>
        <PokeSquares position={54}/>
        <PokeSquares position={55}/>
        <CardSquares position={56}/>
        <PokeSquares position={57}/>
        <PokeSquares position={58}/>
        <CardSquares position={59}/>
        <CitySquares position={60} id={"fuchsia"}/>
        <CardSquares position={61}/>
        <PokeSquares position={62}/>
        <CardSquares position={63}/>
        <PokeSquares position={64}/>
        <CardSquares position={65}/>
        <PokeSquares position={66}/>
        <PokeSquares position={67}/>
        <PokeSquares position={68}/>
        <CitySquares position={69} id={"celadon"}/>
        <PokeSquares position={70}/>
        <PokeSquares position={71}/>
        <CardSquares position={72}/>
        <CardSquares position={73}/>
        <CardSquares position={74}/>
        <CitySquares position={75} id={"cinnabar"}/>
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

const Position = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 950px;
  width: 1688.88px;
  
  > div {
    background-color: green;
  }

  > div:nth-child(1) {
    top: 620px;
    left: 484px;
  }

  > div:nth-child(2) {
    top: 574px;
    left: 406px;
  }

  > div:nth-child(3) {
    top: 574px;
    left: 406px;
  }

  > div:nth-child(4) {
    top: 512px;
    left: 358px;
  }

  > div:nth-child(5) {
    top: 460px;
    left: 446px;
  }

  > div:nth-child(6) {
    top: 312px;
    left: 492px;
  }

  > div:nth-child(7) {
    top: 312px;
    left: 340px;
  }

  > div:nth-child(8) {
    top: 120px;
    left: 456px;
  }

  > div:nth-child(9) {
    top: 112px;
    left: 582px;
  }

  > div:nth-child(10) {
    top: 246px;
    left: 588px;
  }

  > div:nth-child(11) {
    top: 246px;
    left: 684px;
  }

  > div:nth-child(12) {
    top: 122px;
    left: 738px;
  }

  > div:nth-child(13) {
    top: 226px;
    left: 484px;
  }

  > div:nth-child(14) {
    top: 262px;
    left: 814px;
  }

  > div:nth-child(15) {
    top: 122px;
    left: 952px;
  }

  > div:nth-child(16) {
    top: 134px;
    left: 1074px;
  }

  > div:nth-child(17) {
    top: 244px;
    left: 1124px;
  }

  > div:nth-child(18) {
    top: 212px;
    left: 1266px;
  }

  > div:nth-child(19) {
    top: 276px;
    left: 1044px;
  }

  > div:nth-child(20) {
    top: 366px;
    left: 808px;
  }

  > div:nth-child(21) {
    top: 400px;
    left: 954px;
  }

  > div:nth-child(22) {
    top: 382px;
    left: 1100px;
  }

  > div:nth-child(23) {
    top: 540px;
    left: 1050px;
  }

  > div:nth-child(24) {
    top: 194px;
    left: 868px;
  }

  > div:nth-child(25) {
    top: 482px;
    left: 1240px;
  }

  > div:nth-child(26) {
    top: 560px;
    left: 1214px;
  }

  > div:nth-child(27) {
    top: 602px;
    left: 1136px;
  }

  > div:nth-child(28) {
    top: 676px;
    left: 1100px;
  }

  > div:nth-child(29) {
    top: 614px;
    left: 958px;
  }

  > div:nth-child(30) {
    top: 722px;
    left: 952px;
  }

  > div:nth-child(31) {
    top: 766px;
    left: 866px;
  }

  > div:nth-child(32) {
    top: 310px;
    left: 1136px;
  }

  > div:nth-child(33) {
    top: 688px;
    left: 686px;
  }

  > div:nth-child(34) {
    top: 556px;
    left: 558px;
  }

  > div:nth-child(35) {
    top: 458px;
    left: 558px;
  }

  > div:nth-child(36) {
    top: 328px;
    left: 872px;
  }

  > div:nth-child(37) {
    top: 314px;
    left: 570px;
  }

  div:nth-child(38) {
    top: 534px;
    left: 456px;
  }

  > div:nth-child(39) {
    top: 574px;
    left: 406px;
  }

  > div:nth-child(40) {
    top: 574px;
    left: 406px;
  }

  > div:nth-child(41) {
    top: 512px;
    left: 358px;
  }

  > div:nth-child(42) {
    top: 386px;
    left: 376px;
  }

  > div:nth-child(43) {
    top: 462px;
    left: 874px;
  }

  > div:nth-child(44) {
    top: 312px;
    left: 340px;
  }

  > div:nth-child(45) {
    top: 120px;
    left: 456px;
  }

  > div:nth-child(46) {
    top: 112px;
    left: 582px;
  }

  > div:nth-child(47) {
    top: 246px;
    left: 588px;
  }

  > div:nth-child(48) {
    top: 246px;
    left: 684px;
  }

  > div:nth-child(49) {
    top: 122px;
    left: 738px;
  }

  > div:nth-child(50) {
    top: 128px;
    left: 808px;
  }

  > div:nth-child(51) {
    top: 262px;
    left: 814px;
  }

  > div:nth-child(52) {
    top: 122px;
    left: 952px;
  }

  > div:nth-child(53) {
    top: 134px;
    left: 1074px;
  }

  > div:nth-child(54) {
    top: 244px;
    left: 1124px;
  }

  > div:nth-child(55) {
    top: 212px;
    left: 1266px;
  }

  > div:nth-child(56) {
    top: 276px;
    left: 1044px;
  }

  > div:nth-child(57) {
    top: 366px;
    left: 808px;
  }

  > div:nth-child(58) {
    top: 400px;
    left: 954px;
  }

  > div:nth-child(59) {
    top: 382px;
    left: 1100px;
  }

  > div:nth-child(60) {
    top: 540px;
    left: 1050px;
  }

  > div:nth-child(61) {
    top: 670px;
    left: 790px;
  }

  > div:nth-child(62) {
    top: 482px;
    left: 1240px;
  }

  > div:nth-child(63) {
    top: 560px;
    left: 1214px;
  }

  > div:nth-child(64) {
    top: 602px;
    left: 1136px;
  }

  > div:nth-child(65) {
    top: 676px;
    left: 1100px;
  }

  > div:nth-child(66) {
    top: 614px;
    left: 958px;
  }

  > div:nth-child(67) {
    top: 722px;
    left: 952px;
  }

  > div:nth-child(68) {
    top: 766px;
    left: 866px;
  }

  > div:nth-child(69) {
    top: 730px;
    left: 748px;
  }

  > div:nth-child(70) {
    top: 322px;
    left: 678px;
  }

  > div:nth-child(71) {
    top: 556px;
    left: 558px;
  }

  > div:nth-child(72) {
    top: 458px;
    left: 558px;
  }

  > div:nth-child(73) {
    top: 388px;
    left: 560px;
  }

  > div:nth-child(74) {
    top: 314px;
    left: 570px;
  }

  div:nth-child(75) {
    top: 694px;
    left: 568px;
  }

  div:nth-child(76) {
    top: 694px;
    left: 568px;
  }
`;
