import React from 'react'
import { NavLink } from "react-router-dom";
function NavBarOpen() {
  return (
    <nav className=' md:text-xl'>
    <div className='flex justify-center items-center space-x-2 md:space-x-6 md:h-[60px] list-none'>
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
          <NavLink to='projects'className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
                Projects
          </NavLink>
     </div>
    </nav>
  )
}

export default NavBarOpen
