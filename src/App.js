import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hand from "./components/Hand";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-backgroundC">
        <div className="container ">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Hand" element={<Hand />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
