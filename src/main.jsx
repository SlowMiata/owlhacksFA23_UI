import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Feed from './Feed.jsx'
import Login from './Login.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([{
  path: "/App",
  element: <App />
},
{
  path: "/",
  element: <Login/>
},
{
  path: "/Feed",
  element: <Feed />
}
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
