import  { useState } from 'react'
import './FindMatch.css'

function FindMatch() {
    const [findMatches, setFindMatches] = useState ('');

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
            </form>
            <button>Enter</button>
        </div>
    
    );

    }

    export default FindMatch