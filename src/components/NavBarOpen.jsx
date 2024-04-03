import React from 'react'
import { NavLink } from "react-router-dom";
function NavBarOpen() {
  return (
    <nav className=' hidden md:block'>
    <div className='flex justify-center items-center space-x-6 md:h-[60px] list-none'>
          <NavLink to='/' className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
                Home
          </NavLink>

          <NavLink to='aboute' className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
                Aboute
          </NavLink>

          <NavLink to='github' className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
                Github
          </NavLink>

          <NavLink to='skills'className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
                Skills
          </NavLink>
     </div>
    </nav>
  )
}

export default NavBarOpen
