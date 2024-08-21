import { Outlet } from "react-router-dom";

import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AdvancedHamburgerMenu from "../components/AdvancedHamburgerMenu";


function RootLayout() {
  return (
    <div className=" bg-slate-900 ">
         {/* <NavBar /> */}
         <AdvancedHamburgerMenu />
         <div className=" bg-slate-900">
         <Outlet />
         <Footer />
         </div>
    </div>
  )
}

export default RootLayout
