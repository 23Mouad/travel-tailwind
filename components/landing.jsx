import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import people from "@assets/landingpeople.png";
import partners from "@assets/partners.png";
const Landing = () => {
   return (
      <>
         <div className="Landingpage">
            <Navbar />
            <div className=" text-white mt-16 w-1/2">
               <span className=" w-4 underline decoration-wavy maincolor">
                  {" "}
               </span>
               <h1 className=" sm:text-6xl text-4xl font-bold  ">
                  No matter where you’re going to, we’ll take you there
               </h1>
            </div>
            <div className="flex  items-center mt-4 py-4 px-4 sm:px-8 rounded backdrop-blur-sm bg-white/30 w-fit">
               <span className="text-white font-thin mr-4">Where to?</span>
               <div className="border-r border-white h-6"></div>
               <span className="text-white font-thin mx-4">Travel Type</span>
               <div className="border-r border-white h-6"></div>
               <span className="text-white font-thin mx-4">Where to?</span>
               <div className="border-r border-white h-6"></div>
               <button className="bg-white text-black px-4 py-2 rounded-md ml-4">
                  Submit
               </button>
            </div>
            <div className="flex items-center  mt-4">
               <Image src={people} alt="people" className=" me-4 " />
               <p className=" text-[11px] sm:text-base">
                  2,500 people booked Tommorowland Event in last 24 hours
               </p>
            </div>
         </div>
         <Image src={partners} alt="partners" className="w-full" />
      </>
   );
};

export default Landing;
