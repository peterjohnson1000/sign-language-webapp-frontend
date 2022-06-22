import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hand from "./components/Hand";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Herotwo from "./components/Herotwo";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden bg-gray-50 dark:bg-dPrimary dark:text-primaryC">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Herotwo />} />
            {/* <Route path="/Hand" element={<Hand />} />
            <Route path="/Main" element={<Main />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
