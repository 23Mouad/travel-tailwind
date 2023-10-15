import React from "react";
import paris from "@assets/parisbig.png";
import london from "@assets/london.png";
import roma from "@assets/roma.png";
import berline from "@assets/berline.png";
import Image from "next/image";

const Promotions = () => {
   return (
      <>
         <div className=" grid gap-16 sm:grid-cols-2 grid-cols-1 mb-8 mainp mt-8 ">
            <div className="">
               <h4 className="maincolor font-semibold ">Promotion</h4>
               <h1 className="font-bold text-4xl  mt-4 mb-4 text-blue-950  ">
                  We Provide You Best Europe Sightseeing Tours
               </h1>
               <p>
                  Et labore harum non nobis ipsum eum molestias mollitia et
                  corporis praesentium a laudantium internos. Non quis eius quo
                  eligendi corrupti et fugiat nulla qui soluta recusandae in
                  maxime quasi aut ducimus illum aut optio quibusdam!
               </p>
               <div className=" mt-8 grid gap-8 grid-cols-2 md:grid-cols-3">
                  <div className="relative">
                     <Image
                        src={london}
                        alt="london"
                        className=" rounded-3xl transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-3"
                     />
                  </div>
                  <div className="relative">
                     <Image
                        src={roma}
                        alt="roma"
                        className="rounded-3xl transition duration-500 ease-in-out transform hover:scale-110 hover:-rotate-3"
                     />
                  </div>
                  <div className="relative">
                     <Image
                        src={berline}
                        alt="berline"
                        className="rounded-3xl transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-3"
                     />
                  </div>
               </div>
            </div>
            <div>
               <Image src={paris} alt="paris big" />
            </div>
         </div>
      </>
   );
};

export default Promotions;
