import React, { useEffect, useState } from "react";
import './Matches.css'


function Matches() {
    let [matches, setMatches] = useState([]);

    useEffect(() => {
        getMatches()
      }, []);

    const getMatches = async () => {
    try {
        let response = await fetch('/api/matches');
        if (response.ok) {
            let data = await response.json();
            // console.log(data);
            setMatches(data);
        } else {
            console.log(`Server Error: ${response.status} ${response.statusText}`);
        }

    } catch (err) {
        console.log(`Network error: ${err.message}`);
    }
};
    

      const addMatch = async text => {
        // Create user obj
        let matchObj = { player1id: text, player2id: text, accept:Boolean, decline:Boolean };
    
        // Defining fetch options
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(matchObj)
        };
            // Do the fetch()
            try {
              let response = await fetch("/api/matches", options);
              if (response.ok) {
                // Good response; wait for data
                let data = await response.json();
                // Save in state
                setMatches(data);
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
        <div className="list">
            <div className="container">
              <h2>Here are the upcoming matches in your area</h2>
        <ul>
         {matches.map ((match, index) => (
          <div key={index}>
              <li>
                  Player id: {match.player1id}
               </li>
                  <li>
                  Player id: {match.player2id}
                  </li> 
                  <li>
                    Accept match: {match.accept}
                  </li>
                  <li>
                    Decline match: {match.decline}
                  </li>
          </div>
  
         ))}
         </ul>
         </div>
         </div>
    );

    }

    export default Matches