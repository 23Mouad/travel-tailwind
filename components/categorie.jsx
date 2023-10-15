import React from "react";
import Image from "next/image";
import cat1 from "@assets/cat1.png";
import cat2 from "@assets/cat2.png";
import cat3 from "@assets/cat3.png";
import cat4 from "@assets/cat4.png";
import { IconAddressBook } from "@tabler/icons-react";
import { IconCar } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import iluu from "@assets/Illustrationcat.png";
import sepratir from "@assets/Sepratir.png";

const Categorie = () => {
   const cards = [
      {
         title: "Guided Tours ",
         description:
            "Explore the world with our expert guides and discover hidden gems in every corner of the globe.",
         image: cat1,
      },
      {
         title: "Best Flights Options",
         description:
            "Find the best flight deals and travel to your dream destinations with ease and comfort.",
         image: cat2,
      },
      {
         title: "Religious Tours",
         description:
            "Experience the spiritual journey of a lifetime and connect with your faith in the most sacred places on earth.",
         image: cat3,
      },
      {
         title: "Medical insurance",
         description:
            "Stay protected and secure with our comprehensive medical insurance plans that cover all your healthcare needs.",
         image: cat4,
      },
   ];

   return (
      <>
         <div className="justify-center mt-8 mb-16 mainp">
            <h4 className="maincolor font-semibold text-center">CATEGORY</h4>
            <h1 className="font-bold text-4xl text-blue-950 mt-4 text-center">
               We Offer Best Services
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 justify-center">
               {cards.map((card) => (
                  <div
                     key={card.title}
                     className="border-none bg-transparent hover:shadow-md transition-colors duration-300 ease-in-out text-blue-950 p-4 rounded-xl flex flex-col items-center "
                  >
                     <Image
                        src={card.image}
                        alt={card.title}
                        width={90}
                        height={90}
                     />
                     <h2 className="text-lg font-bold mt-2">{card.title}</h2>
                     <p className="text-sm mt-2 text-center">
                        {card.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
         <div className=" grid gap-16 sm:grid-cols-2 grid-cols-1 mb-8 mainp ">
            <div className="">
               <h4 className="maincolor font-semibold ">Fast &amp; Easy</h4>
               <h1 className="font-bold text-4xl  mt-4 mb-4 text-blue-950  ">
                  Get Your Favourite Resort Bookings
               </h1>

               <div className="flex items-center ">
                  <div className=" bg-yellow-400  rounded-md me-4 flex items-center p-2 ">
                     <IconMapPinFilled height={30} width={30} />
                  </div>

                  <div>
                     <h3 className="font-semibold text-lg text-neutral-700">
                        Find a Resort
                     </h3>
                     <p className="text-sm mt-1 text-neutral-700">
                        Find the perfect resort for your next trip.
                     </p>
                  </div>
               </div>

               <div className="flex items-center mt-4">
                  <div className=" bgcolor  rounded-md me-4 flex items-center p-2 ">
                     <IconAddressBook height={30} width={30} color="#fff" />
                  </div>

                  <div>
                     <h3 className="font-semibold text-lg text-neutral-700">
                        Book a Room
                     </h3>
                     <p className="text-sm mt-1 text-neutral-700">
                        Book a room at your favourite resort.
                     </p>
                  </div>
               </div>

               <div className="flex items-center mt-4">
                  <div className=" bg-blue-700  rounded-md me-4 flex items-center p-2 ">
                     <IconCar height={30} width={30} color="#fff" />
                  </div>

                  <div>
                     <h3 className="font-semibold text-lg text-neutral-700">
                        Enjoy your Trip
                     </h3>
                     <p className="text-sm mt-1 text-neutral-700">
                        Enjoy your trip with your family.
                     </p>
                  </div>
               </div>
            </div>
            <div>
               <Image src={iluu} alt="iluu" />
            </div>
         </div>
         <Image src={sepratir} alt="sepratir" priority />
      </>
   );
};

export default Categorie;
