import React, { useState } from 'react'

import pappuNavLogo from '../assets/pappuNavLogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import NavBarOpen from './NavBarOpen';
import Button from '../components/Button'

function NavBar() {

  return (
    <header className=' sticky top-0 bg-slate-900 p-2 md:justify-center md:items-center shadow-md  z-50'>

     {/* logo */}
     <div className=''>
        <NavLink to='/'>
        <img src={pappuNavLogo} alt="" width={40} className=' rounded-full' />
        </NavLink>
      </div>
 
    {/* NavBar */}
      <div className='relative left-9 bottom-8'>
      <NavBarOpen />
      </div>

      <div className=' absolute right-4 bottom-12 hidden md:block'>
       <NavLink to='contactUs'>
       <Button text="Contact" />
       </NavLink>
      </div>

    </header>
  )
}

export default NavBar
