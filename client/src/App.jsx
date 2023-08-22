import React, { useEffect, useState } from "react";
import './App.css'
import Profile from './components/Profile';
import RegisterLogin from './components/RegisterLogin';
import FindMatch from './components/FindMatch';
import Matches from './components/Matches';
import Error404 from "./components/Error404";
import { Routes, Route,  NavLink, useNavigate } from "react-router-dom";


function App() {
  let [users, setUser] = useState([]); //users for when I add a put and delete method.
  // const navigate = useNavigate();

  // function RegisterLogin(){
  //Once they have registered
  //I want to redirect them to a page to upload their details //Need a new component
  //If they are already a user, I want to redirect them to their profile
  //navigate("/profile");
  // }
  useEffect(() => {
    fetch("/api/profile")
      .then(res => res.json())
      .then(json => {
        setUser(json);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const addUser = async text => {
    // Create user obj
    let userObj = { firstname: text, lastname: text, age: text, location: text,
    wins: text, losses: text, draws: text, };

    // Defining fetch options
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    };
        // Do the fetch()
        try {
          let response = await fetch("/api/profile", options);
          if (response.ok) {
            // Good response; wait for data
            let data = await response.json();
            // Save in state
            setUser(data);
          } else {
            // Server reached but can't fulfil request
            console.log(`Server error: ${response.status} ${response.statusText}`);
          }
        } catch (err) {
          // Server not reached
          console.log(`Network error: ${err.message}`);
        }
      };
  

  
  



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
        <Route path="/" element={<RegisterLogin getFormCb={text => addUser(text)}  /> } />
        <Route path="/profile" element={<Profile /> } />
        <Route path="/findmatch" element={<FindMatch /> } />
        <Route path="/matches" element={<Matches /> } />
        <Route path="/*" element={<Error404 /> } />
      </Routes>

     


    </div>
 );

}



export default App
