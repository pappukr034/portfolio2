import React from 'react'
import { Link,NavLink,Navigate } from 'react-router-dom'
import Footer2 from './Footer2'

function Footer() {
  return (
   <>
       <Footer2 />
      <footer className="bg-gray-800 py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-white">© 2024 pappu kumar. All rights reserved.</p>
          </div>
          <div className="flex justify-center md:justify-end md:px-3">
            <NavLink to='/' className="text-gray-400 hover:text-white mx-2">Home</NavLink>
            <NavLink to='/aboute' className="text-gray-400 hover:text-white mx-2">Aboute</NavLink>
            <NavLink to='/skills' className="text-gray-400 hover:text-white mx-2">Skills</NavLink>
            <NavLink to='/contactUs' className="text-gray-400 hover:text-white mx-2">Contact us</NavLink>
          </div>
        </div>
      </div>
    </footer>
   </>
  )
}

export default Footer
