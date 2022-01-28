import React from 'react';
import { Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Gallery from "./components/Gallery";
import Students from "./components/Students";
import Navbar from "./components/Navbar.jsx";


const App = () => {
  return <div>
            <Navbar/>
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/logout" element={<Logout/>} />
            <Route exact path="/gallery" element={<Gallery/>} />
            <Route exact path="/student" element={<Students/>}/>
      </Routes>
  </div>;
};

export default App;
