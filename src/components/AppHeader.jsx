import React from 'react'
import ReactDOM from 'react-dom/client'
import '../App.css'
import userimg from '../assets/user.png'

function AppHeader() {
    return(
      <>
        <div className='navbar'>
          <h1 className='line-up'>PotHole Findr</h1>
          <button type='button' className='nav-button' onClick={() => {
            document.getElementById("myDropdown").classList.toggle("show");
          }}>
            <img src={userimg} className='like-button'></img>
          </button>
        </div>
      </>
    )
  }

export default AppHeader;