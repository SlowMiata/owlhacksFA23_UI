import { useState } from 'react'
import './App.css'
import AccountHeader from './components/AccountHeader'
import AccountUsername from './components/Username'
import AccountPicture from './components/AccountPicture'
import AccountStats from './components/AccountStats'
import AccountEmail from './components/AccountEmail'
import PostCard from './components/PostCard'
import AddPostButton from './components/AddPostButton'
import './index.css'
import CreatePostModal from './components/CreatePostModal'
import AppHeader from './components/AppHeader'

function App() {
  const [modal, setmodal] = useState(false)


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
