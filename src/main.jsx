import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Feed from './Feed.jsx'
import Login from './Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
    <Feed/>
    <App/>
  </React.StrictMode>,
)
