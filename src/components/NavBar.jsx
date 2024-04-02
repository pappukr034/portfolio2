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
    //console.log('click')
    setIsOpen(!isOpen);
  };

  return (
    <header className=' sticky top-0 bg-slate-900 p-2 md:flex md:justify-between md:items-center shadow-md z-110'>
      <nav className=' flex justify-between items-center my-2'>
        <div>
        <NavLink to='/'>
        <img src={pappuNavLogo} alt="" width={40} className=' rounded-full' />
        </NavLink>
        </div>   

         {/* open nav bar */}
         <nav className={`${isOpen?'block duration-500':'hidden'} md:hidden w-1/2 flex justify-end gap-3`}>
         <div className=' flex justify-center items-center list-none flex-col'>
          <NavLink to='/' className={({isActive})=>`${isActive?'text-white':' text-yellow-300'} text-red-500`}>
                Home
          </NavLink>

          <NavLink to='aboute' className={({isActive})=>`${isActive?'text-white ':' text-yellow-300'} text-red-500 `}>
                Aboute
          </NavLink>

          <NavLink to='github' className={({isActive})=>`${isActive?'text-white':' text-yellow-300'} text-red-500`}>
                Github
          </NavLink>

          <NavLink to='skills' className={({isActive})=>`${isActive?'text-white':' text-yellow-300'} text-red-500`}>
                Skills
          </NavLink>

          <NavLink to='contactUs' className={({isActive})=>`${isActive?'text-white':' text-yellow-300'} text-red-500`}>
            Contact Us
            </NavLink>
         </div>

         <div className='text-3xl text-white cursor-pointer'>
         <FontAwesomeIcon onClick={()=>{
           if(isOpen) setIsOpen(!isOpen);
         }} icon={faXmark} />
         </div>

         </nav>

        <div className={`${isOpen?'hidden':'block'} cursor-pointer`}>
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
