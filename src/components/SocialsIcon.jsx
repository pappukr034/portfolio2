import React from 'react'
import { NavLink } from 'react-router-dom'

function SocialsIcon() {
  return (
    <div>
        {/* <!-- Social Media Icons --> */}
        <div class="md:mt-0 flex justify-center items-center space-x-6 text-xl md:text-2xl">
            <NavLink to='https://github.com/' className="text-white mr-4  rounded-full p-1 duration-500 hover:bg-black"><i class="fa-brands fa-github"></i></NavLink>

            <NavLink to='https://www.instagram.com/_pappu_1108?igsh=MTJtMmpzdW51OTg5Ng==' className="text-white mr-4  rounded-full p-1 duration-500 hover:bg-pink-500"><i class="fab fa-instagram"></i></NavLink>

            <NavLink to='https://www.linkedin.com/in/pappu034/' className="text-white mr-4  rounded-full p-1 duration-500 hover:bg-blue-500"><i class="fab fa-linkedin"></i></NavLink>
            
            <NavLink to='https://www.youtube.com/' className="text-white mr-4 rounded-full p-1 duration-500 hover:bg-red-600"><i class="fa-brands fa-youtube"></i></NavLink>
        </div>
    </div>
  )
}

export default SocialsIcon
