import { useState } from 'react'
import './RegisterLogin.css'
import { useNavigate } from 'react-router-dom';


const EMPTY_FORM = {
    firstname: "",
    lastname: "",
    age: null,
    location: "",
    wins: null,
    losses: null,
    draws: null,
}

function RegisterLogin() {
    //Initialize state for my form field
    const [form, setForm] = useState (EMPTY_FORM);
    const [users, setUsers] = useState ([]);
    
    const navigate = useNavigate();

    const handlechange = event => {
        let { name, value } = event.target;
    setForm(form => ({ ...form, [name]: value }));
      }
    
      const handleSubmit =  event => {
        event.preventDefault();
        navigate('/profiles')
         addUser(form);
        setForm(EMPTY_FORM);
     }

      const addUser = async function (text, number) {
        // Defining fetch options
        let newUser = { firstname:text, lastname:text, age:number,
            location:text, wins:number, losses:number, draws:number }
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        };
            // Do the fetch()
            try {
              let response = await fetch("/api/profile", options);
              if (response.ok) {
                // Good response; wait for data
                let data = await response.json();
                // Save in state
                setUsers(data);
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
        
        <div className='RegisterLogin'>
              <h2>Register your account</h2>  
            <form onSubmit = {handleSubmit}>
                <label>
                    Please enter your firstname:
                    <input
                       type='text'
                       name = 'firstname'
                       value={form.firstname}
                       onChange={handlechange}
                       />
                </label>
                <label>
                    Please enter your lastname:
                    <input
                       type='text'
                       name= 'lastname'
                       value={form.lastname}
                       onChange={handlechange}
                       />
                </label>
                <label>
                   Your age:
                    <input
                       type= 'number'
                       name='age'
                       value={form.age}
                       onChange={handlechange}
                       />
                </label>
                <label>
                    Please enter your location:
                    <input
                       type='text'
                       name='location'
                       value={form.location}
                       onChange={handlechange}
                       />
                </label>
                <label>
                    Please enter your wins:
                    <input
                       type='number'
                       name='wins'
                       value={form.wins}
                       onChange={handlechange}
                       />
                </label>
                <label>
                    Please enter your losses:
                    <input
                       type='number'
                       name='losses'
                       value={form.losses}
                       onChange={handlechange}
                       />
                </label>
                <label>
                    Please enter your draws:
                    <input
                       type='number'
                       name='draws'
                       value={form.draws}
                       onChange={handlechange}
                       />
                </label>
                <label>
                    Please upload your Image URL:
                  <input
                      type='text'
                      name="imageUrl"
                       value={form.imageUrl}
                    onChange={handlechange}
                   />
                </label>

                <div className="span-2-cols" style={{ textAlign: 'center'}}>
                {/* When this button is clicked I want to navigate to the profiles */}
                <button type='submit'>Enter</button>
                </div>

            </form>
        </div>
    );

}




export default RegisterLogin