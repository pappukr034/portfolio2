import React, { useState } from 'react'

import pappuNavLogo from '../assets/pappuNavLogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import NavBarOpen from './NavBarOpen';
import Button from '../components/Button'

function NavBar() {
   
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=' sticky top-0 bg-slate-900 p-2 md:flex md:justify-between md:items-center shadow-md  z-50'>
      <nav className=' flex justify-between items-center my-2'>
        <div>
        <NavLink to='/'>
        <img src={pappuNavLogo} alt="" width={40} className=' rounded-full' />
        </NavLink>
        </div>   

         {/* open nav bar */}
         <nav className={`${isOpen?'block duration-500':'hidden'} md:hidden w-1/2 flex justify-end gap-3`}>
         <div className=' flex justify-center items-center list-none flex-col'>
          <NavLink to='/' className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
                Home
          </NavLink>

          <NavLink to='aboute' className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
                Aboute
          </NavLink>

          <NavLink to='github' className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
                Github
          </NavLink>

          <NavLink to='skills' className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
                Skills
          </NavLink>

          <NavLink to='contactUs' className={({isActive})=>`${isActive?' text-blue-500':' text-white'} text-red-500 hover:text-blue-500`}>
            Contact Us
            </NavLink>
         </div>

         <div className='text-4xl px-3 text-white cursor-pointer'>
         <FontAwesomeIcon onClick={()=>{
           if(isOpen) setIsOpen(!isOpen);
         }} icon={faXmark} />
         </div>

         </nav>

        <div className={`${isOpen?'hidden':'block'} cursor-pointer px-3`}>
        <FontAwesomeIcon onClick={toggleNavbar} icon={faBars} className=' text-white text-4xl md:hidden' />
        </div>
      </nav>

     <div className=' text-2xl'>
     <NavBarOpen />
     </div>

      <div className=' hidden md:block'>
       <NavLink to='contactUs'>
       <Button text="ContactUs" />
       </NavLink>
      </div>

    </header>
  )
}

export default NavBar
