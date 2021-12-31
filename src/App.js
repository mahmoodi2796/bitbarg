import './App.css';
import Home  from './components/Home/Home.js';
import Login  from './components/Login/Login.js';
import Authentication  from './components/Authentication/Authentication.js';

import Header from './components/Home/Header';
import support from './components/statics/png/support.png';


import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (

    <div className="container">


<Header/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Authentication" element={<Authentication />} />


      </Routes>
<div className="container-support-fix"><img className="image-support-fix" src={support}/>
</div>

    </div>
  );
}
export default App;
