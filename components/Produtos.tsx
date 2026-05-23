import {
  CircleDot,
  HardHat,
  Flame,
  Droplets,
  Battery,
  Link,
  Disc,
  ArrowUpDown,
  Zap,
  Gauge,
  Settings,
  Shirt,
  ShieldCheck,
} from "lucide-react";

const categorias = [
  { icon: CircleDot, nome: "Pneus" },
  { icon: HardHat, nome: "Capacetes" },
  { icon: Flame, nome: "Escapamentos" },
  { icon: Droplets, nome: "Lubrificantes" },
  { icon: Battery, nome: "Baterias" },
  { icon: Link, nome: "Relação" },
  { icon: Disc, nome: "Freios" },
  { icon: ArrowUpDown, nome: "Suspensão" },
  { icon: Zap, nome: "Elétrica" },
  { icon: Gauge, nome: "Performance" },
  { icon: Settings, nome: "Acessórios" },
  { icon: Shirt, nome: "Vestuário" },
  { icon: ShieldCheck, nome: "Proteção" },
];

const marcas = [
  "Yamaha",
  "Honda",
  "Kawasaki",
  "Suzuki",
  "BMW",
  "Triumph",
  "NGK",
  "DID",
  "Yuasa",
  "Repsol",
  "Philips",
  "Rieffel",
];

export default function Produtos() {
  return (
    <section id="pecas" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#cc1c1c] text-sm font-semibold uppercase tracking-widest mb-3">
            Loja completa
          </p>
          <h2 className="font-display font-black italic uppercase text-[clamp(36px,6vw,72px)] text-white leading-none">
            Peças & <span className="text-[#cc1c1c]">Produtos</span>
          </h2>
          <p className="text-[#888] text-base mt-4 max-w-lg">
            Estoque completo das melhores marcas do mercado. Peças originais e
            de qualidade para todas as marcas e modelos.
          </p>
        </div>

        {/* Grid de categorias */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
          {categorias.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.nome}
                className="group flex flex-col items-center gap-3 bg-[#141414] border border-[#2a2a2a] hover:border-[#cc1c1c]/50 rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:bg-[#cc1c1c]/5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2a2a2a] group-hover:bg-[#cc1c1c] flex items-center justify-center transition-colors duration-200">
                  <Icon size={20} className="text-[#aaa] group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-sm font-medium text-[#ccc] group-hover:text-white text-center transition-colors duration-200">
                  {cat.nome}
                </span>
              </div>
            );
          })}
        </div>

        {/* Marcas */}
        <div className="border-t border-[#2a2a2a] pt-12">
          <p className="text-[#555] text-xs uppercase tracking-widest text-center mb-8">
            Trabalhamos com as melhores marcas
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {marcas.map((marca) => (
              <span
                key={marca}
                className="border border-[#2a2a2a] text-[#666] text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-full hover:border-[#cc1c1c]/40 hover:text-[#aaa] transition-all duration-200 cursor-default"
              >
                {marca}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/message/EKEEES5WV253M1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#cc1c1c] hover:bg-[#e52222] text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#cc1c1c]/20"
          >
            Consultar Disponibilidade de Peças
          </a>
        </div>
      </div>
    </section>
  );
}
