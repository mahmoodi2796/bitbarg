import "./App.css";
import Home from "./components/Home/Home.js";
import Login from "./components/Login/Login.js";
import Authentication from "./components/Authentication/Authentication.js";
import support from "./components/statics/png/support.png";
import Wage from "./components/Wage/Wage.js";
import Information from "./components/Information/Information.js";
import Question from "./components/Question/Question.js";
import Bag from "./components/Bag/Bag.js";

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
      </Routes>
      <div className="container-support-fix">
        <img className="image-support-fix" src={support} />
      </div>
    </div>
  );
}
export default App;
