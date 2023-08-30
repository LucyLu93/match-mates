import React, { useEffect, useState } from "react";
import './Matches.css'
import { useLocation } from "react-router-dom"; 

//Weather API 
const WEATHER_URL = 
'https://api.openweathermap.org/data/2.5/weather?';

const API_KEY = 'd8543f0158144a732fbf2285cfa57e16';
const PARAMS = `appid=${API_KEY}&units=metric&q=`;


function Matches() {
    // let [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [userDetails, setUserDetails] = useState([]); // changed from null to []

    const {state} = useLocation();
    const {location, userId} = state;

    useEffect(() => {
        // getMatches();
        getWeather(location);
       fetchUserDetails(userId);
      }, []);

const fetchUserDetails = async (userId) => {
  try {
    setLoading(true);
    setError("");
    
    const response = await fetch(`/api/profile/${userId}`); // Replace with your API endpoint for fetching user details
    if (response.ok) {
      const data = await response.json();
       //console.log(data);
       //console.log(data[0].firstname)
      setUserDetails(data); // Save user details in state
    } else {
      setError(`Error fetching user details: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    setError(`Network error: ${err.message}`);
  }
}

     //Weather API

    function Weather() {
     let d = weather;
      return (
          <div className='Weather'>
              <h2>Current Weather in {d.name}, {d.sys.country}</h2>
  
              <p>
                  {d.weather[0].main},
                  {' '}
                  {d.main.temp} C
                  
                  </p>
  
          </div>
      );
  
  }   
       
  const getWeather = async (location) => {
    let url = `${WEATHER_URL}${PARAMS}${location}`;

    setLoading(true);

    setWeather();
    setError('');

    try {
      //Make request to weather site(always use async with await-in above function)
      let response = await fetch(url);
      if(response.ok){
      
      let data = await response.json(); 
      //Save weather data in state
      setWeather(data);
      } else {
      
      setError(`Server error: ${response.status}${response.statusText}`);
      }
    
      } catch(err) {
        setError(`Network error: ${err.message}`);
      }
      setLoading(false);
    };  
    
    


    return (
        <div className="list">
            <div className="container">
              <h2>Here are the upcoming matches and weather in your area!</h2>
                
 
                    {weather && <Weather/>}
 
           {/* Only show the error if there is one */}
          {error && <h2 style={{ color:'purple'}}>{error}</h2>}
 
                 {loading && <h2>Loading weather...</h2>}




                 {userDetails.map ((user, index) => (
                      <div key={index}>
      <p>{user.firstname} has been sent your challenge request, you will hear
          from them shortly!</p>
               </div>
 ))} 
   </div>
         </div>
    );

    }

    export default Matches



//  Below is the code for when I was displaying my usermatches table info in my matches component

// const getMatches = async () => {
//   try {
//       let response = await fetch('/api/matches');
//       if (response.ok) {
//           let data = await response.json();
//           // console.log(data);
//           setMatches(data);
//       } else {
//           console.log(`Server Error: ${response.status} ${response.statusText}`);
//       }

//   } catch (err) {
//       console.log(`Network error: ${err.message}`);
//   }
// };
  

//       const addMatch = async text => {
//         // Create user obj
//         let matchObj = { player1id: text, player2id: text, accept:Boolean, decline:Boolean };
    
//         // Defining fetch options
//         let options = {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(matchObj)
//         };
//             // Do the fetch()
//             try {
//               let response = await fetch("/api/matches", options);
//               if (response.ok) {
//                 // Good response; wait for data
//                 let data = await response.json();
//                 // Save in state
//                 setMatches(data);
//               } else {
//                 // Server reached but can't fulfil request
//                 console.log(`Server error: ${response.status} ${response.statusText}`);
//               }
//             } catch (err) {
//               // Server not reached
//               console.log(`Network error: ${err.message}`);
//             }
//           };





        {/* <ul>
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
          </div> */}
{/*   
         ))}
         </ul> */}
      
 