import { Outlet } from "react-router-dom";

import React from 'react'
import NavBar from "../components/NavBar";


function RootLayout() {
  return (
    <div className=" bg-slate-900 ">
         <NavBar />
         <div className=" bg-slate-900">
         <Outlet />
         </div>
    </div>
  )
}

export default RootLayout
