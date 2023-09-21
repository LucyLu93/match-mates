import React, { useState, useEffect } from 'react';
import './RegisterLogin.css';
import { useNavigate } from 'react-router-dom';

const EMPTY_FORM = {
  firstname: '',
  lastname: '',
  age: '',
  location: '',
  wins: '',
  losses: '',
  draws: '',
  imageUrl: '',
};

function RegisterLogin() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(form);
    
    setShowModal(true); // Show modal after form submission
    
  };

  const addUser = async function (userInfo) {
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


  useEffect(() => {
    // Use a setTimeout to close the modal after 3 seconds
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
        navigate('/profiles');
      }, 3000);

      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }
  }, [showModal, navigate]);


  return (
    <div className="RegisterLogin">
      <h1>Match Mates</h1>
      <div className="row">
        <div className="grid text-center">
          <form onSubmit={handleSubmit}>
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
                       onChange={handleChange}
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
                       onChange={handleChange}
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
                       onChange={handleChange}
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
                       onChange={handleChange}
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
                       onChange={handleChange}
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
                       onChange={handleChange}
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
                       onChange={handleChange}
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
                    onChange={handleChange}
                   />
                </div>
            <div className="span-2-cols" style={{ textAlign: 'center' }}>
              {/* Show the modal when the button is clicked */}
              <button
                type="submit"
                className="btn btn-danger"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>

    
      {/* Bootstrap Modal */}
      <div
        className={`modal ${showModal ? 'show' : ''}`}
        style={{ display: showModal ? 'block' : 'none' }}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {`Thank You for your registration ${form.firstname}!`}
              </h5>
            </div>
            <div className="modal-body">
              Now, choose your mate.
              <h1>🎉</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLogin;
