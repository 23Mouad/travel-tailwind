import React from "react";
import logo from "@assets/travelogo.png";
const Footer = () => {
   return (
      <footer className="bg-gray-800 text-gray-400">
         <div className="container mx-auto py-8 px-4">
            <div className="flex flex-wrap justify-between">
               <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  {/* First column for logo and addresses */}
                  <img src={logo} alt="Logo" className="h-8 mb-4" />
                  <p className="text-sm">
                     123 Main St. <br />
                     Anytown, USA 12345 <br />
                     Phone: (123) 456-7890 <br />
                     Email: info@example.com
                  </p>
               </div>
               <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  {/* Second column for links */}
                  <h3 className="text-lg font-bold mb-4">Links</h3>
                  <ul className="list-none">
                     <li className="mb-2">
                        <a href="#" className="hover:text-white">
                           Home
                        </a>
                     </li>
                     <li className="mb-2">
                        <a href="#" className="hover:text-white">
                           About Us
                        </a>
                     </li>
                     <li className="mb-2">
                        <a href="#" className="hover:text-white">
                           Contact Us
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  {/* Third column for links */}
                  <h3 className="text-lg font-bold mb-4">Links</h3>
                  <ul className="list-none">
                     <li className="mb-2">
                        <a href="#" className="hover:text-white">
                           Privacy Policy
                        </a>
                     </li>
                     <li className="mb-2">
                        <a href="#" className="hover:text-white">
                           Terms of Service
                        </a>
                     </li>
                     <li className="mb-2">
                        <a href="#" className="hover:text-white">
                           FAQ
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="w-full md:w-1/4">
                  {/* Fourth column for newsletter */}
                  <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                  <form>
                     <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-700 rounded py-2 px-3 mb-2 w-full text-gray-300"
                     />
                     <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 rounded py-2 px-3 w-full text-white"
                     >
                        Subscribe
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
