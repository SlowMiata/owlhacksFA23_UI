import React from 'react'
import ReactDOM from 'react-dom/client'
import '../App.css'
import '../index.css'
import userimg from '../assets/user.png'


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function AppHeader() {
    return(
      <nav>
        <div className='navbar'>
          <h1 className='line-up'>PotHole Findr</h1>
            <button type='submit' className='nav-button'>
            <img src={userimg} className='pfp-icon' border="0"/>
          </button> 
          <div className="dropdown">
            <button onClick={myFunction} className="dropbtn">Dropdown</button>
            <div id="myDropdown" name="myDropdown" className="dropdown-content">
              <a href="/Feed">Feed</a>
              <a href="/">Login</a>
              <a href="/App">Account</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }

export default AppHeader;