import {
  CircleDot, HardHat, Flame, Droplets, Battery,
  Link, Disc, ArrowUpDown, Zap, Gauge, Settings, Shirt, ShieldCheck,
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
  "Yamaha", "Honda", "Kawasaki", "Suzuki", "BMW", "Triumph",
  "NGK", "DID", "Yuasa", "Repsol", "Philips", "Rieffel",
];

export default function Produtos() {
  return (
    <section id="pecas" className="py-16 sm:py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-14">
          <p className="text-[#cc1c1c] text-xs font-bold uppercase tracking-widest mb-2">
            Loja completa
          </p>
          <h2 className="font-display font-black italic uppercase leading-none text-white"
            style={{ fontSize: "clamp(36px,9vw,72px)" }}>
            Peças & <span className="text-[#cc1c1c]">Produtos</span>
          </h2>
          <p className="text-[#888] text-sm sm:text-base mt-3 max-w-sm">
            Estoque das melhores marcas — peças para todas as marcas e modelos.
          </p>
        </div>

        {/* Grid: 2 cols mobile → 4 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10 sm:mb-14">
          {categorias.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.nome}
                className="group flex flex-col items-center gap-2.5 bg-[#141414] border border-[#2a2a2a] hover:border-[#cc1c1c]/50 active:border-[#cc1c1c] rounded-2xl p-4 sm:p-5 cursor-pointer transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#252525] group-hover:bg-[#cc1c1c] flex items-center justify-center transition-colors">
                  <Icon size={18} className="text-[#aaa] group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#ccc] group-hover:text-white text-center transition-colors leading-tight">
                  {cat.nome}
                </span>
              </div>
            );
          })}
        </div>

        {/* Marcas */}
        <div className="border-t border-[#1f1f1f] pt-8 mb-8">
          <p className="text-[#444] text-[10px] uppercase tracking-widest text-center mb-5">
            Trabalhamos com as melhores marcas
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {marcas.map((m) => (
              <span key={m} className="border border-[#2a2a2a] text-[#666] text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full">
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/message/EKEEES5WV253M1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#cc1c1c] hover:bg-[#e52222] active:bg-[#a01515] text-white font-black text-sm px-8 py-4 rounded-full transition-colors w-full sm:w-auto max-w-xs"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
