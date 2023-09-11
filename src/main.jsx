import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './Nav';
/* import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Admin from './Admin'; */

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <App />
    </>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
