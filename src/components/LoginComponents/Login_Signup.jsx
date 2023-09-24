import React from 'react'
import { useState } from 'react'
import '../../App.css'
import '../../index.css'
import Profile from '../../assets/Profile.png'
import Password from '../../assets/Password.png'
import Email from '../../assets/Email.png'


export const Login_SignUp = () => {
    const [action,setAction] = useState("Sign Up");
    
return (

    <div className='LoginHeader'>
        <div className='header'>
            <div className='text'>{action} </div>
        </div>
        <div className='inputs'>
            {action ==="Login"? <div>  </div>:<div className='input'>
                <img src={Profile} alt="" />
                <input type="text" placeholder='Username' /> 
            </div> }
            <div className='input'>
                <img src={Email} alt="" />
                <input type="email" placeholder='Email' /> 
            </div>
            <div className='input'>
                <img src={Password} alt="" />
                <input type="password" placeholder='Password'/> 
            </div>
        </div>
        {action === "Sign Up"? <div></div> :<div className="forgot-password">Forget Password?</div>}
        
        <div className='submit-container'>
            <div className = {action ==="Login"? "submit gray": "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up"? "submit gray": "submit"}onClick={() => {setAction("Login")}} >Login</div>
        </div>
    </div>


)
}

export default Login_SignUp
