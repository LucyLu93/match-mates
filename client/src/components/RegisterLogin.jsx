import { useState } from 'react'
import './RegisterLogin.css'
import { useNavigate } from 'react-router-dom';


const EMPTY_FORM = {
    firstname: "",
    lastname: "",
    age: "",
    location: "",
    wins: "",
    losses: "",
    draws: "",
    imageUrl: "",
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
        navigate('/findmatch')
         addUser(form);
        setForm(EMPTY_FORM);
     }

      const addUser = async function (userInfo) {
        // Defining fetch options
       
        let options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userInfo)
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
      
          //Hello

    return (
        
        <div className='RegisterLogin'>
              <h1>Match Mates</h1> 
              <div className="row">
          <div className="grid text-center">
            <form onSubmit = {handleSubmit}>
            <div className="g-col-6">
                <label htmlFor="forename" className="form-label">
                    Please enter your firstname:
                    </label>
                    <input
                       type='text'
                       className='form-control'
                       id='forename'
                       name = 'firstname'
                       value={form.firstname}
                       onChange={handlechange}
                       />
                </div>
                <div className="g-col-6">
                <label htmlFor="surname" className="form-label" >
                    Please enter your lastname:
                    </label>
                    <input
                       type='text'
                       className='form-control'
                       id='surname'
                       name= 'lastname'
                       value={form.lastname}
                       onChange={handlechange}
                       />
                </div>
                <div className="g-col-6" >
                <label htmlFor="years" className="form-label" >
                   Your age:
                   </label>
                    <input
                       type= 'number'
                       className='form-control'
                       id='years'
                       name='age'
                       value={form.age}
                       onChange={handlechange}
                       />
                     </div>  
                     <div className="g-col-6" >
                <label htmlFor="area" className="form-label">
                    Please enter your location:
                    </label>
                    <input
                       type='text'
                       className='form-control'
                       id='area'
                       name='location'
                       value={form.location}
                       onChange={handlechange}
                       />
              </div>
              <div className="g-col-6">
                <label htmlFor="winning" className="form-label" >
                    Please enter your wins:
                    </label>
                    <input
                       type='number'
                       className='form-control'
                       id='winning'
                       name='wins'
                       value={form.wins}
                       onChange={handlechange}
                       />
                </div>
                <div className="g-col-6" >
                <label htmlFor="losing" className="form-label">
                    Please enter your losses:
                    </label>
                    <input
                       type='number'
                       className='form-control'
                       id='losing'
                       name='losses'
                       value={form.losses}
                       onChange={handlechange}
                       />
               </div>
               <div className="g-col-6">
                <label htmlFor="drawing" className="form-label">
                    Please enter your draws:
                    </label>
                    <input
                       type='number'
                       className='form-control'
                       id='drawing'
                       name='draws'
                       value={form.draws}
                       onChange={handlechange}
                       />
                </div>
                <div className="g-col-6">
                <label htmlFor="image" className="form-label">
                    Please upload your Image URL:
                    </label>
                  <input
                      type='text'
                      name="imageUrl"
                      className='form-control'
                      id='image'
                       value={form.imageUrl}
                    onChange={handlechange}
                   />
                </div>

                <div className="span-2-cols" style={{ textAlign: 'center'}}>
                {/* When this button is clicked I want to navigate to the profiles */}
                <button
                                type="submit"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                  >
                  Enter
                  </button>
                </div>

            </form>
            </div>
            </div>
        </div>
    );

}




export default RegisterLogin