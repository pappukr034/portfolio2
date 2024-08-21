import React, { useState } from 'react'

import pappuNavLogo from '../assets/pappuNavLogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import NavBarOpen from './NavBarOpen';
import Button from '../components/Button'


function NavBar() {

  return (
    <header className=' w-full sticky top-0 bg-slate-900 p-2 md:justify-center md:flex-row md:items-center shadow-md  z-50'>
 
     {/* NavBar */}
      <div className=' w-full flex justify-center items-center py-2 text-[18px] px-3'
      >
        <NavLink to='/' className={' absolute top-5 left-1 '}>
        <img src={pappuNavLogo} alt="" width={40} className=' rounded-full' />
        </NavLink>
      <NavBarOpen />
      </div>

    </header>
  )
}

export default NavBar
