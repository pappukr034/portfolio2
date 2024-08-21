import React from 'react'
import { NavLink } from "react-router-dom";
import Button from './Button';
function NavBarOpen() {
  return (
    <nav className=' w-full'>
    <div className='flex flex-col md:flex-row justify-center items-center gap-2 list-none md:space-x-5'>
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
          <NavLink to='codingProfile'className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
               Coding Profile
          </NavLink>
          <NavLink to='contactUs' className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500 md:absolute md:top-0 md:right-2 `}>
             <Button text="Contact" />
          </NavLink>
     </div>
    </nav>
  )
}

export default NavBarOpen
