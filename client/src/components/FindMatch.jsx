import  { useState } from 'react'
import './FindMatch.css'
import { useNavigate } from 'react-router-dom';

const EMPTY_FORM = {
 location: ""
}

function FindMatch() {
    const [findMatches, setFindMatches] = useState (EMPTY_FORM);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFindMatches(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/matches');
        setFindMatches(EMPTY_FORM);

        //Hello

      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Please enter your location to find matches in your area:

                    <input
                       type='text'
                       value={findMatches.location}
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