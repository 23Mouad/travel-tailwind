import Landing from "@components/landing";
import Categorie from "@components/categorie";
import Promotions from "@components/promotions";
import Trendy from "@components/trendy";
import Opinion from "@components/opinions";
import Footer from "@components/footer";

export default function Home() {
   return (
      <main>
         <Landing />
         <Categorie />
         <Promotions />
         <Trendy />
         <Opinion />
         <Footer />
      </main>
   );
}
