import React from 'react'
import pappuNavLogo from '../assets/pappuNavLogo.jpg'
import { NavLink } from 'react-router-dom'
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
        
        {/* <!-- Social Media Icons --> */}
        <div class="mt-4 md:mt-0 flex justify-center items-center space-x-6 text-xl md:text-2xl">
            <NavLink to='https://github.com/' className="text-white mr-4  rounded-full p-1 duration-500 hover:bg-black"><i class="fa-brands fa-github"></i></NavLink>

            <NavLink to='https://www.instagram.com/_pappu_1108?igsh=MTJtMmpzdW51OTg5Ng==' className="text-white mr-4  rounded-full p-1 duration-500 hover:bg-pink-500"><i class="fab fa-instagram"></i></NavLink>

            <NavLink to='https://www.linkedin.com/in/pappu034/' className="text-white mr-4  rounded-full p-1 duration-500 hover:bg-blue-500"><i class="fab fa-linkedin"></i></NavLink>
            
            <NavLink to='https://www.youtube.com/' className="text-white mr-4 rounded-full p-1 duration-500 hover:bg-red-600"><i class="fa-brands fa-youtube"></i></NavLink>
        </div>
    </div>
</footer>
  )
}

export default Footer2
