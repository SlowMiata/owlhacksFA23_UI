import React from 'react'
import '../../App.css'
import '../../index.css'
import Profile from '../../assets/Profile.jpeg'
import Password from '../../assets/Password.png'
import Email from '../../assets/Email.png'


export const Login_SignUp = () => {
return (

    <div className='LoginHeader'>
        <div className='header'>
            <div className='text'>Sign Up  </div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={Profile} alt="" />
                <input type="text" /> 
            </div>
            <div className='input'>
                <img src={Password} alt="" />
                <input type="email" /> 
            </div>
            <div className='input'>
                <img src={Email} alt="" />
                <input type="password" /> 
            </div>
        </div>
        <div className="forgot-password">Forget Password <span>Reset!</span></div>
        <div className='submit-container'>
            <div className='Submit'>Sign Up</div>
            <div className='Submit'>Login</div>
        </div>
    </div>


)
}

export default Login_SignUp
