import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import PlayersContext from "./Contexts/PlayersContext.jsx";
import "./Css/reset.css";
import Board from "./Pages/Board.jsx";

function App() {
	const [players, setPlayers] = useState([
		{ player: 1, position: 0 },
		{ player: 2, position: 0 },
		{ player: 3, position: 0 },
		{ player: 4, position: 0 },
		{ player: 5, position: 0 },
		{ player: 6, position: 0 },
	]);
	console.log(players[0])

	return (
		<BrowserRouter>
			<PlayersContext.Provider value={{ players, setPlayers }}>
				<Routes>
					<Route
						path="/"
						element={<Board />}
					/>
				</Routes>
			</PlayersContext.Provider>
		</BrowserRouter>
	);
}

export default App;
