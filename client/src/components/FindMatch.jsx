import  { useState } from 'react'
import './FindMatch.css'
import { useNavigate } from 'react-router-dom';

function FindMatch() {
    const [findMatches, setFindMatches] = useState ('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFindMatches(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFindMatches('');
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
            <button onClick={() => navigate('Matches')} type='submit'>Enter</button>
            </form>
        </div>
    
    );

    }

    export default FindMatch;