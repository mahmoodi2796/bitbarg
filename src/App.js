import "./App.css";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import Authentication from "./components/Authentication/Authentication.js";
import support from "./components/statics/png/support.png";
import Wage from "./components/Wage/Wage.js";
import Information from "./components/Information/Information.js";
import Question from "./components/Question/Question.js";
import Bag from "./components/Bag/Bag.js";
import Direction from "./components/Direction/Direction.js";
import Wallet from "./components/Wallet/Wallet.js";
import About from "./components/About/About.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/wage" element={<Wage />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/Bag" element={<Bag />} />
        <Route path="/Direction" element={<Direction />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <div className="parent">
        <div className="circle"></div>
        <img class="mehdi" src={support} />
      </div>
    </div>
  );
}
export default App;
