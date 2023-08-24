import { useState } from 'react'
import './RegisterLogin.css'
import { useNavigate } from 'react-router-dom';

function RegisterLogin() {
    //Initialize state for my form field
    const [form, setForm] = useState ('');
    const navigate = useNavigate();

    function handleChange (event) {
        let { name, value } = event.target;
    setForm(form => ({ ...form, [name]: value }));
        setForm(event.target.value);
      }
    
      function handleSubmit (event) {
        event.preventDefault();
        //props.addUserCb(form); I am unsure of this
        setForm('');
      }

    return (
        
        <div className='RegisterLogin'>
          
              <h2>Register your account</h2>

                
                 
            <form onSubmit = {handleSubmit}>
                <label>
                    Please enter your first and lastname:
                    <input
                       type='text'
                       value={form}
                       onChange={handleChange}
                       />
                </label>
                <label>
                    Please upload your Image URL:
                  <input
                      type='text'
                      name="imageUrl"
                       value={form.imageUrl}
                    onChange={(e) => handleChange(e)}
                   />
                </label>

                <div className="span-2-cols" style={{ textAlign: 'center'}}>
                {/* When this button is clicked I want to navigate to the profiles */}
                <button onClick={()=> navigate('Profiles')} type='submit'>Enter</button>
                </div>

            </form>
            
            <h2>Please Login</h2>
            <form onSubmit = {handleSubmit}>
            <div className="span-2-cols">
                <label>
                    Please enter your first and lastname:
                    <input
                       type='text'
                       value={form}
                       onChange={handleChange}
                       />
                </label>
                </div>
                <div className="span-2-cols" style={{ textAlign: 'center'}}>
                {/* When this button is clicked I want to navigate to the profiles */}
                <button onClick={()=> navigate('profiles')} type='submit'>Go to Profile</button>
                </div>
                </form>
                
        </div>
    );

}




export default RegisterLogin