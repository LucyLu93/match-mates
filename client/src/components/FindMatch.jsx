import  { useState } from 'react'
import './FindMatch.css'
import { useNavigate } from 'react-router-dom';

function FindMatch() {
    const [findMatches, setFindMatches] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFindMatches(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // passing the location (called findMatches) to the Matches component.
        //done through the navigate using a state object (new concept)
        navigate('/matches', {state: {location: findMatches}});
        setFindMatches("");

        

      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Please enter your location to find matches in your area:

                    <input
                       type='text'
                       value={findMatches}
                       onChange={handleChange}
                       />
                </label>
            {/* When this button is clicked I want to navigate to Matches */}
            <button type='submit' className="btn btn-danger">Enter</button>
            </form>
        </div>
    
    );

    }

    export default FindMatch