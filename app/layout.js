import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Booking",
   description: "Travel booking website build by Mouad kahla ",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>{children}</body>
      </html>
   );
}
