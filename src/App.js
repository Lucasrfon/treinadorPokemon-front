import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/reset.css";
import Board from "./pages/Board";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
