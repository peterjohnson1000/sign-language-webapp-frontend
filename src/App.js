import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hand from "./components/Hand";
import Hero from "./components/Hero";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-backgroundC overflow-hidden">
        <div className="">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Hand" element={<Hand />} />
            <Route path="/Main" element={<Main />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
