import React from "react";
import Image from "next/image";
import Link from "next/link";
import logonav from "@assets/travelogo.png";

const Navbar = () => {
   return (
      <div className="navi flex justify-between items-center" id="nav-me">
         <div className="navi-logo flex items-center">
            <Link className="navbar-brand flex items-center" href="/">
               <Image
                  className="w-32 h-32 object-contain"
                  src={logonav}
                  alt="Logo"
               ></Image>
            </Link>
         </div>
         <div className="navi-links flex items-center ">
            <ul className="nav-btns flex">
               <li>
                  <Link
                     href="/"
                     className="text-white hover:text-gray-700 sm:px-3 sm:py-2 p-0 rounded-md text-sm sm:text-lg font-semibold"
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     href="about"
                     className="text-white hover:text-gray-700 sm:px-3 sm:py-2 p-0 rounded-md text-sm sm:text-lg font-semibold "
                  >
                     About
                  </Link>
               </li>
               <li>
                  <Link
                     href="menu"
                     className="text-white hover:text-gray-700 sm:px-3 sm:py-2 p-0 rounded-md text-sm sm:text-lg font-semibold"
                  >
                     Menu
                  </Link>
               </li>
               <li>
                  <Link
                     href="Contact"
                     className="text-white hover:text-gray-700 sm:px-3 sm:py-2 p-0 rounded-md text-sm sm:text-lg font-semibold"
                  >
                     Contact
                  </Link>
               </li>
            </ul>
         </div>
         <div className="items-center">
            <button className="btn-main text-white text-sm sm:text-base ">
               Get in Touch
            </button>
         </div>
      </div>
   );
};

export default Navbar;
