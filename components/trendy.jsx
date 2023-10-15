import React from "react";
import Image from "next/image";
import voy1 from "@assets/voy1.png";
import voy2 from "@assets/voy2.png";
import voy3 from "@assets/voy3.png";
import switzerlandFlag from "@assets/switz.png";
import brazilFlag from "@assets/brazil.png";
import egyptFlag from "@assets/egypt.png";

import { IconStarFilled } from "@tabler/icons-react";
import { IconStarFilledHalfFilled } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { IconCalendar } from "@tabler/icons-react";

const Trendy = () => {
   const cards = [
      {
         title: "Switzerland",
         description:
            "Discover the beauty of Switzerland with our guided tours. Explore the stunning landscapes and enjoy the local cuisine.",
         price: "$1500",
         rating: 4,
         image: voy1,
         continent: "Europe",
         flag: switzerlandFlag,
         days: 7,
      },
      {
         title: "Brazil",
         description:
            "Experience the vibrant culture of Brazil with our guided tours. Visit the famous landmarks and enjoy the local music and dance.",
         price: "$2000",
         rating: 5,
         image: voy2,
         continent: "South America",
         flag: brazilFlag,
         days: 10,
      },
      {
         title: "Egypt",
         description:
            "Explore the ancient wonders of Egypt with our guided tours. Visit the pyramids and temples and learn about the rich history of the pharaohs.",
         price: "$1800",
         rating: 4.5,
         image: voy3,
         continent: "Africa",
         flag: egyptFlag,
         days: 8,
      },
   ];

   return (
      <>
         <div className="justify-center mb-16 mt-16 mainp">
            <h4 className="maincolor font-semibold text-center">TRENDY</h4>
            <h1 className="font-bold text-4xl text-blue-950 mt-4 text-center">
               Our Trending Tour Packages
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 justify-center">
               {cards.map((card) => (
                  <div
                     key={card.title}
                     className="border-none bg-transparent hover:shadow-md transition-colors duration-300 ease-in-out text-blue-950 p-4 rounded-xl flex flex-col items-center "
                  >
                     <div className="relative flex flex-col items-center">
                        <Image
                           src={card.image}
                           alt={card.title}
                           width={200}
                           height={200}
                           className="cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out"
                        />
                        <Image
                           src={card.flag}
                           alt={`${card.title} flag`}
                           width={75}
                           height={75}
                           className="me-2 absolute -bottom-3 cursor-pointer hover:scale-125 hover:rotate-12 transition-all duration-300 ease-in-out"
                        />
                     </div>
                     <div className=" flex items-center justify-center">
                        <IconCalendar height={20} width={20} />
                        <span className="text-sm font-semibold">
                           {card.days}
                        </span>
                        <span className=" hidden sm:inline text-sm  font-semibold">
                           {" "}
                           days
                        </span>
                        <div className="flex items-center ml-2">
                           {[...Array(Math.floor(card.rating))].map((_, i) => (
                              <IconStarFilled
                                 key={i}
                                 height={20}
                                 width={20}
                                 color="#E4B20F"
                                 stroke={1.5}
                              />
                           ))}
                           {card.rating % 1 !== 0 && (
                              <IconStarFilled
                                 height={20}
                                 width={20}
                                 color="#E4B20F"
                                 stroke={1.5}
                                 className="mx-1"
                              />
                           )}
                        </div>
                     </div>
                     <h2 className="text-lg font-bold mt-2">{card.title}</h2>
                     <div className="flex items-center mt-2">
                        <IconMapPin height={20} width={20} />
                        <span className="text-sm  ml-1">{card.continent}</span>
                     </div>
                     <p className="text-sm mt-2 text-center">
                        {card.description}
                     </p>
                     <div className="flex items-center mt-2">
                        <span className="text-sm font-semibold">
                           {card.price}
                        </span>
                        <span className="text-sm ml-1 text-gray-500">
                           /person
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default Trendy;
