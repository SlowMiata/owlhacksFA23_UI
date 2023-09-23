import React from 'react'
import ReactDOM from 'react-dom/client'
import '../App.css'
import userimg from '../assets/user.png'

function AppHeader() {
    return(
      <>
        <div className='navbar'>
          <h1 className='line-up'>PotHole Findr</h1>
            <button type='submit' className='nav-button'>
            <img src={userimg} className='pfp-icon' border="0"/>
          </button> 
          
        </div>
      </>
    )
  }

export default AppHeader;