import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from './Layout/RootLayout.jsx';
import Home from './components/Home.jsx'
import Aboute from './components/Aboute.jsx'
import Contact from './components/Contact.jsx';
import GitHub, { githubInfoLoader } from './components/GitHub.jsx';
import Skills from './components/Skills.jsx';



const router=createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='' element={<Home />} />
      <Route path='aboute' element={<Aboute />} />
      <Route 
      path='github'
      loader={githubInfoLoader}
      element={<GitHub />} />
      <Route path='skills' element={<Skills />} />
      <Route path='contactUs' element={<Contact />} />
    </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
         <App />
    </RouterProvider>
  </React.StrictMode>,
)
