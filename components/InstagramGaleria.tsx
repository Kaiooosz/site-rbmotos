import Image from "next/image";

const fotos = [
  { src: "/foto54.jpg", alt: "Loja de capacetes e peças" },
  { src: "/foto55.jpg", alt: "Parede de marcas — Yamaha, Honda, Kawasaki" },
  { src: "/foto53.jpg", alt: "Oficina mecânica completa" },
  { src: "/foto52.jpg", alt: "Produtos de estética para motos" },
  { src: "/foto54.jpg", alt: "Capacetes disponíveis na loja" },
  { src: "/foto55.jpg", alt: "Marcas parceiras" },
];

const IG_URL = "https://www.instagram.com/rbmoto_parts";

export default function InstagramGaleria() {
  return (
    <section id="galeria" className="py-14 sm:py-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] font-semibold mb-1.5">
              / Siga no Instagram
            </p>
            <h2
              className="font-display font-black italic uppercase leading-none text-white"
              style={{ fontSize: "clamp(30px,7vw,58px)" }}
            >
              <span className="text-[#cc1c1c]">@rbmoto_</span>parts
            </h2>
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#2a2a2a] hover:border-[#e1306c]/50 active:bg-[#1a1a1a] text-[#aaa] hover:text-white text-sm font-semibold px-5 py-3 rounded-full transition-all self-start sm:self-auto whitespace-nowrap"
          >
            {/* Instagram icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Ver perfil
          </a>
        </div>

        {/* Grid: 2 colunas mobile → 3 colunas desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {fotos.map((foto, i) => (
            <a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square bg-[#141414] block"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/50 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Instagram */}
        <div className="mt-6 text-center">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-black text-sm px-8 py-4 rounded-full transition-opacity hover:opacity-90 active:opacity-80 w-full sm:w-auto justify-center max-w-xs"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Seguir @rbmoto_parts
          </a>
        </div>
      </div>
    </section>
  );
}
