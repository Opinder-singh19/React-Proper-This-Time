import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route 
} from 'react-router-dom'

import HomePage from './Components/Home.jsx'
import Login from './Components/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)