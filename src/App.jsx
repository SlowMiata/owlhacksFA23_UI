import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import PostCard from './components/PostCard'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <AppHeader /> 
      <PostCard />      
      <PostCard />
    </>
  )
}

export default App
