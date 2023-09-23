import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import PostCard from './components/PostCard'
import './index.css'
import CreatePostModal from './components/CreatePostModal'
import AppHeader from './components/AppHeader'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className = "accountContainer">
      <AppHeader/>
        <AccountHeader/>

      <div className='account-info'>
          <div className = "username">
            <AccountUsername user = {"Name"}/>
          </div>
          <div className='email'>
            <AccountEmail email = {"Ladiesman217@prime.coom"}/>
          </div>
          <div className = "img">
            <AccountPicture src ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
          </div>
          
          <div className='counter'>
            <AccountStats count = {23} />
          </div>


          
        </div>

    </div>


  );
}

export default App
