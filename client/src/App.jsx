import React, { useEffect, useState } from "react";
import './App.css'
import Profile from './components/Profile';
import RegisterLogin from './components/RegisterLogin';
import FindMatch from './components/FindMatch';
import Matches from './components/Matches';
import Error404 from "./components/Error404";
import { Routes, Route,  NavLink, useNavigate } from "react-router-dom";


function App() {

  // const navigate = useNavigate();

  // function RegisterLogin(){
  //Once they have registered
  //I want to redirect them to a page to upload their details //Need a new component
  //If they are already a user, I want to redirect them to their profile
  //navigate("/profile");
  // }
  



 return (
    <div className="App">
      <nav>
        <button>
          <NavLink to="/">Register/Login</NavLink>
          </button>

          <button>
          <NavLink to="/profile">Profile</NavLink>
          </button>

          <button>
          <NavLink to="/findmatch">FindMatch</NavLink>
          </button>

          <button>
          <NavLink to="/matches">Matches</NavLink>
          </button>
      </nav>


    

      <Routes>
        <Route path="/" element={<RegisterLogin /> } />
        <Route path="/profile" element={<Profile /> } />
        <Route path="/findmatch" element={<FindMatch /> } />
        <Route path="/matches" element={<Matches /> } />
        <Route path="/*" element={<Error404 /> } />
      </Routes>

    </div>
 );

}


export default App
