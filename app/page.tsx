import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import Produtos from "@/components/Produtos";
import Sobre from "@/components/Sobre";
import Diferenciais from "@/components/Diferenciais";
import InstagramGaleria from "@/components/InstagramGaleria";
import Depoimentos from "@/components/Depoimentos";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Produtos />
        <Sobre />
        <Diferenciais />
        <Depoimentos />
        <InstagramGaleria />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
