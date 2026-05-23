import Image from "next/image";

const fotos = [
  { src: "/foto53.jpg", alt: "Oficina mecânica RB Moto Parts", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/foto54.jpg", alt: "Loja de peças e capacetes", span: "" },
  { src: "/foto55.jpg", alt: "Parede de marcas na loja", span: "" },
  { src: "/foto52.jpg", alt: "Produtos e estética", span: "" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-[#cc1c1c] text-sm font-semibold uppercase tracking-widest mb-3">
            Conheça a loja
          </p>
          <h2 className="font-display font-black italic uppercase text-[clamp(36px,6vw,72px)] text-white leading-none">
            Nossa <span className="text-[#cc1c1c]">Estrutura</span>
          </h2>
          <p className="text-[#888] text-base mt-4 max-w-lg">
            Ambiente organizado, moderno e preparado para atender com excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Foto principal maior */}
          <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-square lg:col-span-2 lg:aspect-video">
            <Image
              src="/foto53.jpg"
              alt="Oficina mecânica RB Moto Parts"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-[#cc1c1c] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Oficina
              </span>
            </div>
          </div>

          {/* Fotos menores */}
          <div className="grid grid-cols-1 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-square">
              <Image
                src="/foto54.jpg"
                alt="Loja de peças e capacetes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#141414]/80 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                  Loja
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/foto55.jpg"
                  alt="Marcas parceiras"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/foto52.jpg"
                  alt="Produtos e estética"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
