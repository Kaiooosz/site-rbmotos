import Image from "next/image";

const fotos = [
  { src: "/foto53.jpg", alt: "Oficina mecânica", label: "Oficina", large: true },
  { src: "/foto54.jpg", alt: "Loja de capacetes", label: "Loja" },
  { src: "/foto55.jpg", alt: "Marcas parceiras", label: "Marcas" },
  { src: "/foto52.jpg", alt: "Produtos estética", label: "Produtos" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <p className="text-[#cc1c1c] text-xs font-bold uppercase tracking-widest mb-2">
            Conheça a loja
          </p>
          <h2 className="font-display font-black italic uppercase leading-none text-white"
            style={{ fontSize: "clamp(36px,9vw,72px)" }}>
            Nossa <span className="text-[#cc1c1c]">Estrutura</span>
          </h2>
        </div>

        {/* Mobile: coluna simples 2x2 | Desktop: grid assimétrico */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {fotos.map((f) => (
            <div key={f.src} className="relative rounded-xl overflow-hidden aspect-square">
              <Image src={f.src} alt={f.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
              <span className="absolute bottom-2 left-2 bg-[#cc1c1c] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                {f.label}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop: grid assimétrico */}
        <div className="hidden sm:grid grid-cols-3 gap-4">
          {/* Foto principal */}
          <div className="relative rounded-2xl overflow-hidden col-span-2 aspect-video">
            <Image src="/foto53.jpg" alt="Oficina RB Moto Parts" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
            <span className="absolute bottom-4 left-4 bg-[#cc1c1c] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Oficina
            </span>
          </div>

          {/* Coluna direita */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden flex-1">
              <Image src="/foto54.jpg" alt="Loja" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
              <span className="absolute bottom-3 left-3 bg-[#141414]/80 text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                Loja
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 h-32">
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/foto55.jpg" alt="Marcas" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/foto52.jpg" alt="Produtos" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
