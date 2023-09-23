import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import PostCard from './components/PostCard'
import AddPostButton from './components/AddPostButton'
import './index.css'
import CreatePostModal from './components/CreatePostModal'

function App() {
  const [modal, setmodal] = useState(false)


  return (
    <>     
      <AppHeader /> 
      <PostCard />      
      <PostCard />  
      {modal && <CreatePostModal/>}
      <AddPostButton modalset={setmodal} modal={modal}/>
    </>
  )
}

export default App
