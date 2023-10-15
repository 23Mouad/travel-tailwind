import React from "react";
import Image from "next/image";
import photopic from "@assets/photopic.jpg";

const Opinion = () => {
   return (
      <div className=" items-center  mb-16 mt-16 mainp flex flex-col">
         <h4 className="maincolor font-semibold text-center">OPINIONS</h4>
         <h1 className="font-bold text-4xl text-blue-950 mt-4 text-center">
            See What Our Clients Say About Us
         </h1>
         <div className=" flex-row items-start mt-32 relative w-8/12 sm:w-1/2 shadow-2xl p-8 rounded-xl">
            <Image
               className=" absolute -top-16 rounded-full cursor-pointer hover:scale-125 hover:rotate-12 transition-all duration-300 ease-in-out border-4 border-white shadow-xl object-cover h-[120px]  right-1/2 mb-16"
               src={photopic}
               width={120}
               height={120}
            ></Image>
            <h6 className=" text-blue-950/50 first-letter:text-lg mt-8 mb-4 ">
               Vel officiis dolor ea illo aut eligendi ullam non laudantium
               magnam et recusandae molestiae sit iure unde aut voluptate
               quaerat. Id sunt provident quo possimus impedit vel doloremque
               obcaecati qui ullam consectetur et ipsum omnis.
            </h6>
            <h4 className="font-semibold">
               Mouad Kahla -{" "}
               <span className=" text-black/50">
                  Designer and Front-end developer
               </span>
            </h4>
         </div>
      </div>
   );
};

export default Opinion;
