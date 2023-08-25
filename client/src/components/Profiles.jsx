import React, { useEffect, useState } from "react";
import './Profiles.css'



function Profiles() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers()
      }, []);

    const getUsers = async () => {
    try {
        let response = await fetch('/api/profile');
        if (response.ok) {
            let data = await response.json();
            console.log(data);
           
           
        } else {
            console.log(`Server Error: ${response.status} ${response.statusText}`);
        }

    } catch (err) {
        console.log(`Network error: ${err.message}`);
    }
};
    

     
    
      

    return (
        <div className='Profiles'>
            <div className='Container'>
                <div>
              <div style={{display: "inline-block;" }}>    
       <img src='https://i.imgur.com/bURG75Y.jpg'></img>
       <img src='https://i.imgur.com/AwPJZvT.jpg'></img>
       <img src='https://i.imgur.com/lYt4YKc.jpg'></img>
       </div>
       </div>

<div>
    <div className="list">
    <div style={{display: "inline-block;" }}> 
      <ul>
    
       {users.map ((user, index) => (
        <div key={index}>
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

       ))}
       </ul>
       </div>
       </div>
</div>
            </div>
            </div>
            
       
        
    
    );

    }

    export default Profiles



