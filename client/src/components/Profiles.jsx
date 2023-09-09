import React, { useEffect, useState } from "react";
import "./Profiles.css";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Profiles() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const navigate = useNavigate();

  const {state} = useLocation() || {};
  const {location} = state || {};
  const handleSubmit = (user) => { //add an argument of user and use inside matches page
    
    navigate('/matches', {state: {location, userId: user.id}} )

  };

  const getUsers = async () => {
    try {
      let response = await fetch("/api/profile");
      if (response.ok) {
        let data = await response.json();
        setUsers(data);
      } else {
        console.log(`Server Error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };

  return (
    <div className="cardcontainer">
        {users.map((user) => (
      <div className="card" key={user.id}>
        <img className="card-img-top" src={user.imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{user.firstname} {user.lastname}</h5>
            <div>
            <ul className="card-text"> 
            {/* arrow function and pass user name as an argument*/}
            <a onClick={() => handleSubmit(user)} href="#"className="btn btn-danger">Challenge {user.firstname}!</a> 
            <li>
                 Age: {user.age}
             </li>
             <li>
                 Location: {user.location}
             </li>
             <li>
                Match Wins: {user.wins}
             </li>
             <li>
                 Match Losses: {user.losses}
             </li>
             <li>
                 Match Draws: {user.draws}
             </li>
             </ul>
             </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Profiles;


        