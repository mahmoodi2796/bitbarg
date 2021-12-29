import './App.css';
import Home  from './components/Home/Home.js';
import Login  from './components/Login/Login.js';

import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="container">
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}
export default App;
