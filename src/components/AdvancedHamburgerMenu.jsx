import React, { useState } from "react";
import NavBar from "./NavBar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

const AdvancedHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" w-full bg-gray-900 p-5">
      <div className="">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white  text-xl focus:outline-none"
          >
          { !isOpen?< HiOutlineMenuAlt3 />:< ImCross />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
         <NavBar />
        </div>
      </div>
    </nav>
  );
};

export default AdvancedHamburgerMenu;
