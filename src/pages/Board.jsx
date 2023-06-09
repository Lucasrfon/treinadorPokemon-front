import styled from "styled-components";
import map from "../images/map.png";
import CardSquares from "../components/squares/CardSquares.jsx";
import TakeSquares from "../components/squares/TakeSquares.jsx";
import CitySquares from "../components/squares/CitySquares.jsx";
import PokeSquares from "../components/squares/PokeSquares.jsx";
import { useState } from "react";

export default function Board() {
	const players = [
		{ player: 1, position: 0 },
		{ player: 2, position: 0 },
		{ player: 3, position: 0 },
		{ player: 4, position: 0 },
		{ player: 5, position: 0 },
		{ player: 6, position: 0 },
	];
	const [dado1, setDado1] = useState(null);
	const [dado2, setDado2] = useState(null);

	function rollDie () {
		const min = 1;
		const max = 6;
		setDado1(Math.floor(Math.random() * (max - min + 1)) + min);
		setDado2(Math.floor(Math.random() * (max - min + 1)) + min);
	}

	return (
		<Container>
			<Position>
				<CitySquares
					position={0}
					players={players}
					id={"pallet"}
				/>
				<TakeSquares
					position={1}
					players={players}
				/>
				<CardSquares
					position={2}
					players={players}
				/>
				<TakeSquares
					position={3}
					players={players}
				/>
				<CitySquares
					position={4}
					players={players}
					id={"viridian"}
				/>
				<CardSquares
					position={5}
					players={players}
				/>
				<TakeSquares
					position={6}
					players={players}
				/>
				<TakeSquares
					position={7}
					players={players}
				/>
				<CardSquares
					position={8}
					players={players}
				/>
				<TakeSquares
					position={9}
					players={players}
				/>
				<TakeSquares
					position={10}
					players={players}
				/>
				<TakeSquares
					position={11}
					players={players}
				/>
				<CitySquares
					position={12}
					players={players}
					id={"pewter"}
				/>
				<CardSquares
					position={13}
					players={players}
				/>
				<TakeSquares
					position={14}
					players={players}
				/>
				<CardSquares
					position={15}
					players={players}
				/>
				<TakeSquares
					position={16}
					players={players}
				/>
				<TakeSquares
					position={17}
					players={players}
				/>
				<TakeSquares
					position={18}
					players={players}
				/>
				<CardSquares
					position={19}
					players={players}
				/>
				<TakeSquares
					position={20}
					players={players}
				/>
				<TakeSquares
					position={21}
					players={players}
				/>
				<CardSquares
					position={22}
					players={players}
				/>
				<CitySquares
					position={23}
					players={players}
					id={"cerulean"}
				/>
				<TakeSquares
					position={24}
					players={players}
				/>
				<CardSquares
					position={25}
					players={players}
				/>
				<TakeSquares
					position={26}
					players={players}
				/>
				<TakeSquares
					position={27}
					players={players}
				/>
				<CardSquares
					position={28}
					players={players}
				/>
				<TakeSquares
					position={29}
					players={players}
				/>
				<CardSquares
					position={30}
					players={players}
				/>
				<CitySquares
					position={31}
					players={players}
					id={"lavender"}
				/>
				<CardSquares
					position={32}
					players={players}
				/>
				<TakeSquares
					position={33}
					players={players}
				/>
				<CardSquares
					position={34}
					players={players}
				/>
				<CitySquares
					position={35}
					players={players}
					id={"saffron"}
				/>
				<TakeSquares
					position={36}
					players={players}
				/>
				<CardSquares
					position={37}
					players={players}
				/>
				<TakeSquares
					position={38}
					players={players}
				/>
				<CardSquares
					position={39}
					players={players}
				/>
				<CardSquares
					position={40}
					players={players}
				/>
				<TakeSquares
					position={41}
					players={players}
				/>
				<CitySquares
					position={42}
					players={players}
					id={"vermilion"}
				/>
				<CardSquares
					position={43}
					players={players}
				/>
				<CardSquares
					position={44}
					players={players}
				/>
				<TakeSquares
					position={45}
					players={players}
				/>
				<CardSquares
					position={46}
					players={players}
				/>
				<CardSquares
					position={47}
					players={players}
				/>
				<TakeSquares
					position={48}
					players={players}
				/>
				<TakeSquares
					position={49}
					players={players}
				/>
				<CardSquares
					position={50}
					players={players}
				/>
				<TakeSquares
					position={51}
					players={players}
				/>
				<TakeSquares
					position={52}
					players={players}
				/>
				<CardSquares
					position={53}
					players={players}
				/>
				<TakeSquares
					position={54}
					players={players}
				/>
				<TakeSquares
					position={55}
					players={players}
				/>
				<CardSquares
					position={56}
					players={players}
				/>
				<TakeSquares
					position={57}
					players={players}
				/>
				<TakeSquares
					position={58}
					players={players}
				/>
				<CardSquares
					position={59}
					players={players}
				/>
				<CitySquares
					position={60}
					players={players}
					id={"fuchsia"}
				/>
				<CardSquares
					position={61}
					players={players}
				/>
				<TakeSquares
					position={62}
					players={players}
				/>
				<CardSquares
					position={63}
					players={players}
				/>
				<TakeSquares
					position={64}
					players={players}
				/>
				<CardSquares
					position={65}
					players={players}
				/>
				<TakeSquares
					position={66}
					players={players}
				/>
				<TakeSquares
					position={67}
					players={players}
				/>
				<TakeSquares
					position={68}
					players={players}
				/>
				<CitySquares
					position={69}
					players={players}
					id={"celadon"}
				/>
				<TakeSquares
					position={70}
					players={players}
				/>
				<TakeSquares
					position={71}
					players={players}
				/>
				<CardSquares
					position={72}
					players={players}
				/>
				<CardSquares
					position={73}
					players={players}
				/>
				<CardSquares
					position={74}
					players={players}
				/>
				<CitySquares
					position={75}
					players={players}
					id={"cinnabar"}
				/>
				<PokeSquares />
			</Position>
			<img
				src={map}
				alt="tabuleiro"
			/>
			<Die>
				<Dice>{dado1}</Dice>
				<Dice>{dado2}</Dice>
				<button onClick={rollDie}>PLAY</button>
			</Die>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	min-height: 100vh;
	min-width: 100%;
	background-color: #7894bc;

	img {
		height: 950px;
	}

	button {
		background-color: black;
		border-radius: 10px;
		color: white;
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
		top: 584px;
		left: 462px;
	}

	> div:nth-child(3) {
		top: 534px;
		left: 456px;
	}

	> div:nth-child(4) {
		top: 512px;
		left: 412px;
	}

	> div:nth-child(5) {
		top: 460px;
		left: 446px;
	}

	> div:nth-child(6) {
		top: 418px;
		left: 464px;
	}

	> div:nth-child(7) {
		top: 380px;
		left: 428px;
	}

	> div:nth-child(8) {
		top: 356px;
		left: 472px;
	}

	> div:nth-child(9) {
		top: 322px;
		left: 438px;
	}

	> div:nth-child(10) {
		top: 310px;
		left: 394px;
	}

	> div:nth-child(11) {
		top: 262px;
		left: 386px;
	}

	> div:nth-child(12) {
		top: 246px;
		left: 436px;
	}

	> div:nth-child(13) {
		top: 226px;
		left: 484px;
	}

	> div:nth-child(14) {
		top: 186px;
		left: 488px;
	}

	> div:nth-child(15) {
		top: 142px;
		left: 508px;
	}

	> div:nth-child(16) {
		top: 170px;
		left: 546px;
	}

	> div:nth-child(17) {
		top: 168px;
		left: 592px;
	}

	> div:nth-child(18) {
		top: 212px;
		left: 612px;
	}

	> div:nth-child(19) {
		top: 210px;
		left: 680px;
	}

	> div:nth-child(20) {
		top: 166px;
		left: 698px;
	}

	> div:nth-child(21) {
		top: 176px;
		left: 744px;
	}

	> div:nth-child(22) {
		top: 176px;
		left: 794px;
	}

	> div:nth-child(23) {
		top: 214px;
		left: 824px;
	}

	> div:nth-child(24) {
		top: 194px;
		left: 868px;
	}

	> div:nth-child(25) {
		top: 174px;
		left: 976px;
	}

	> div:nth-child(26) {
		top: 188px;
		left: 1044px;
	}

	> div:nth-child(27) {
		top: 188px;
		left: 1092px;
	}

	> div:nth-child(28) {
		top: 208px;
		left: 1136px;
	}

	> div:nth-child(29) {
		top: 222px;
		left: 1184px;
	}

	> div:nth-child(30) {
		top: 234px;
		left: 1230px;
	}

	> div:nth-child(31) {
		top: 284px;
		left: 1238px;
	}

	> div:nth-child(32) {
		top: 310px;
		left: 1136px;
	}

	> div:nth-child(33) {
		top: 332px;
		left: 1094px;
	}

	> div:nth-child(34) {
		top: 330px;
		left: 1046px;
	}

	> div:nth-child(35) {
		top: 332px;
		left: 974px;
	}

	> div:nth-child(36) {
		top: 328px;
		left: 872px;
	}

	> div:nth-child(37) {
		top: 266px;
		left: 868px;
	}

	div:nth-child(38) {
		top: 264px;
		left: 916px;
	}

	> div:nth-child(39) {
		top: 332px;
		left: 830px;
	}

	> div:nth-child(40) {
		top: 320px;
		left: 780px;
	}

	> div:nth-child(41) {
		top: 394px;
		left: 876px;
	}

	> div:nth-child(42) {
		top: 416px;
		left: 918px;
	}

	> div:nth-child(43) {
		top: 462px;
		left: 874px;
	}

	> div:nth-child(44) {
		top: 468px;
		left: 976px;
	}

	> div:nth-child(45) {
		top: 430px;
		left: 1046px;
	}

	> div:nth-child(46) {
		top: 432px;
		left: 1096px;
	}

	> div:nth-child(47) {
		top: 470px;
		left: 1142px;
	}

	> div:nth-child(48) {
		top: 506px;
		left: 1096px;
	}

	> div:nth-child(49) {
		top: 506px;
		left: 1048px;
	}

	> div:nth-child(50) {
		top: 392px;
		left: 1192px;
	}

	> div:nth-child(51) {
		top: 440px;
		left: 1198px;
	}

	> div:nth-child(52) {
		top: 488px;
		left: 1204px;
	}

	> div:nth-child(53) {
		top: 540px;
		left: 1188px;
	}

	> div:nth-child(54) {
		top: 552px;
		left: 1138px;
	}

	> div:nth-child(55) {
		top: 596px;
		left: 1102px;
	}

	> div:nth-child(56) {
		top: 644px;
		left: 1090px;
	}

	> div:nth-child(57) {
		top: 670px;
		left: 1048px;
	}

	> div:nth-child(58) {
		top: 670px;
		left: 978px;
	}

	> div:nth-child(59) {
		top: 694px;
		left: 936px;
	}

	> div:nth-child(60) {
		top: 682px;
		left: 888px;
	}

	> div:nth-child(61) {
		top: 670px;
		left: 790px;
	}

	> div:nth-child(62) {
		top: 674px;
		left: 750px;
	}

	> div:nth-child(63) {
		top: 654px;
		left: 686px;
	}

	> div:nth-child(64) {
		top: 610px;
		left: 612px;
	}

	> div:nth-child(65) {
		top: 558px;
		left: 614px;
	}

	> div:nth-child(66) {
		top: 508px;
		left: 614px;
	}

	> div:nth-child(67) {
		top: 458px;
		left: 614px;
	}

	> div:nth-child(68) {
		top: 408px;
		left: 614px;
	}

	> div:nth-child(69) {
		top: 358px;
		left: 614px;
	}

	> div:nth-child(70) {
		top: 322px;
		left: 678px;
	}

	> div:nth-child(71) {
		top: 752px;
		left: 836px;
	}

	> div:nth-child(72) {
		top: 776px;
		left: 788px;
	}

	> div:nth-child(73) {
		top: 780px;
		left: 684px;
	}

	> div:nth-child(74) {
		top: 780px;
		left: 610px;
	}

	div:nth-child(75) {
		top: 770px;
		left: 562px;
	}

	div:nth-child(76) {
		top: 694px;
		left: 568px;
	}

	div:nth-child(77) {
		top: 574px;
		left: 406px;
	}
	div:nth-child(78) {
		top: 512px;
		left: 358px;
	}
	div:nth-child(79) {
		top: 386px;
		left: 376px;
	}
	div:nth-child(80) {
		top: 312px;
		left: 492px;
	}
	div:nth-child(81) {
		top: 312px;
		left: 340px;
	}
	div:nth-child(82) {
		top: 242px;
		left: 334px;
	}
	div:nth-child(83) {
		top: 192px;
		left: 414px;
	}
	div:nth-child(84) {
		top: 120px;
		left: 456px;
	}
	div:nth-child(85) {
		top: 112px;
		left: 582px;
	}
	div:nth-child(86) {
		top: 246px;
		left: 588px;
	}
	div:nth-child(87) {
		top: 246px;
		left: 684px;
	}
	div:nth-child(88) {
		top: 122px;
		left: 738px;
	}
	div:nth-child(89) {
		top: 128px;
		left: 808px;
	}
	div:nth-child(90) {
		top: 262px;
		left: 814px;
	}
	div:nth-child(91) {
		top: 122px;
		left: 952px;
	}
	div:nth-child(92) {
		top: 134px;
		left: 1074px;
	}
	div:nth-child(93) {
		top: 244px;
		left: 1124px;
	}
	div:nth-child(94) {
		top: 212px;
		left: 1266px;
	}
	div:nth-child(95) {
		top: 276px;
		left: 1044px;
	}
	div:nth-child(96) {
		top: 366px;
		left: 808px;
	}
	div:nth-child(97) {
		top: 400px;
		left: 954px;
	}
	div:nth-child(98) {
		top: 382px;
		left: 1100px;
	}
	div:nth-child(99) {
		top: 540px;
		left: 1050px;
	}
	div:nth-child(100) {
		top: 378px;
		left: 1228px;
	}
	div:nth-child(101) {
		top: 482px;
		left: 1240px;
	}
	div:nth-child(102) {
		top: 560px;
		left: 1214px;
	}
	div:nth-child(103) {
		top: 602px;
		left: 1136px;
	}
	div:nth-child(104) {
		top: 676px;
		left: 1100px;
	}
	div:nth-child(105) {
		top: 614px;
		left: 958px;
	}
	div:nth-child(106) {
		top: 722px;
		left: 952px;
	}
	div:nth-child(107) {
		top: 766px;
		left: 866px;
	}
	div:nth-child(108) {
		top: 730px;
		left: 748px;
	}
	div:nth-child(109) {
		top: 688px;
		left: 686px;
	}
	div:nth-child(110) {
		top: 556px;
		left: 558px;
	}
	div:nth-child(111) {
		top: 458px;
		left: 558px;
	}
	div:nth-child(112) {
		top: 388px;
		left: 560px;
	}
	div:nth-child(113) {
		top: 314px;
		left: 570px;
	}
	div:nth-child(114) {
		top: 660px;
		left: 1186px;
	}
	div:nth-child(115) {
		top: 660px;
		left: 1292px;
	}
	div:nth-child(116) {
		top: 740px;
		left: 1186px;
	}
	div:nth-child(117) {
		top: 740px;
		left: 1292px;
	}
`;

const Die = styled.div`
	position: absolute;
	top: 200px;
	left: 50px;
	background-color: #ddd39e;
	height: 250px;
	width: 200px;
	border-radius: 10px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	button {
		height: 50px;
		width:100px;
		margin: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const Dice = styled.div`
	margin: 10px;
	height: 70px;
	width: 70px;
	background-color: white;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 3px 3px black;
	font-weight: bold;
	font-size: 20px
`
