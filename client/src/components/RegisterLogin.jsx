import { useState } from 'react'
import './RegisterLogin.css'

function RegisterLogin(props) {
    //Initialize state for my form field
    const [form, setForm] = useState ('');

    const handleChange = (e) => {
        // handle key presses
        //Update state of form field
        setForm(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        //Pass the Form ('a string') up to parent
        //Parent will pass down a prop with a cb function
        props.getFormCb(form);

        //Reset Form field
        setForm('');
      };

    return (
        
        <div className='RegisterLoginForm'>

              <h1>Please Register/Login</h1>
                 <h2>Enter your details below</h2>

            <form onSubmit = {handleSubmit}>
                <label>
                    Please enter your first and lastname:
                    <input
                       type='text'
                       value={form}
                       onChange={handleChange}
                       />
                </label>
                <button type='submit'>Enter</button>
            </form>

        </div>
    );

}




export default RegisterLogin;