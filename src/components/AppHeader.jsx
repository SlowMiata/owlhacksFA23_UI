import React from 'react'
import ReactDOM from 'react-dom/client'
import '../App.css'

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
      <>
        <div className='app-header'>
          <h1 className='line-up'>PotHole Findr</h1>
          <div className="dropdown">
            <button type='button' onClick={() => {
              document.getElementById("myDropdown").classList.toggle("show");
            }} className="dropbtn">Dropdown</button>
            <div id="myDropdown" className="dropdown dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </>
    )
  }

export default AppHeader;