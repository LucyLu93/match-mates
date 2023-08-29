import React, { useEffect, useState } from "react";
import "./Profiles.css";

function Profiles() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

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
        <img className="card-img-top" src="https://i.imgur.com/AwPJZvT.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{user.firstname} {user.lastname}</h5>
            <div>
            <ul className="card-text">
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

/*    <div className="list">
        <div className="card">
        <div className="row">
  <div className="col-md-3 col-lg-4">     
  <div className="card-body">
  <div className="cardcontainer">
  <ul>
   
    {users.map ((user, index) => (
     <div key={index}>
        <div className="card-text">
         <li>
             Firstname: {user.firstname}
         </li>
          <li>
             Lastname: {user.lastname}
             </li> 
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
             </div> 
            <li>
            
            <div className="card-img-top">
              Profile picture: <img src={user.imageUrl} />
              </div>
             </li> 
             
     </div>

    ))}
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    */
