import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import Produtos from "@/components/Produtos";
import Sobre from "@/components/Sobre";
import Diferenciais from "@/components/Diferenciais";
import Galeria from "@/components/Galeria";
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
        <Galeria />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
