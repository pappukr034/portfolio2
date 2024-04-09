import React from 'react'
import pappuNavLogo from '../assets/pappuNavLogo.jpg'
import { NavLink } from 'react-router-dom'
import SocialsIcon from './SocialsIcon'
function Footer2() {
  return (
    <footer class="bg-gray-800 text-white py-8 md:px-5">
    <div class="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        {/* <!-- Company Logo --> */}
        <div class="mb-4 md:mb-0">
            <NavLink to='/' >
            <img src={pappuNavLogo} alt="Company Logo" className='w-20 rounded-full' />
            </NavLink>
        </div>
        
        {/* <!-- Email Field --> */}
        <div class="md:flex rounded-md ">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none focus:bg-gray-900" />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md">send</button>
        </div>
        
       <div className=' mt-4'>
       <SocialsIcon />
       </div>
    </div>
</footer>
  )
}

export default Footer2
