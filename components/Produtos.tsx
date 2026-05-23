import {
  CircleDot, HardHat, Flame, Droplets, Battery,
  Link, Disc, ArrowUpDown, Zap, Gauge, Settings, Shirt, ShieldCheck,
} from "lucide-react";
import { modelosPorCategoria } from "@/data/modelos";

const categorias = [
  {
    icon: CircleDot, nome: "Pneus",
    marcas: ["Pirelli", "Michelin", "Bridgestone", "Metzeler", "Dunlop", "Maxxis", "Rinaldi", "Continental"],
  },
  {
    icon: HardHat, nome: "Capacetes",
    marcas: ["LS2", "Astone", "HJC", "Shark", "Shoei", "Pro Tork", "Bieffe", "Norisk", "Texx", "Bell"],
  },
  {
    icon: Flame, nome: "Escapamentos",
    marcas: ["Akrapovic", "Yoshimura", "Arrow", "Leo Vince", "Scorpion", "Two Brothers", "Full Power", "Freio Inox"],
  },
  {
    icon: Droplets, nome: "Lubrificantes",
    marcas: ["Motul", "Castrol", "Shell Advance", "Repsol", "Liqui-Moly", "Mobil", "Valvoline", "Ipiranga", "ELF", "Total"],
  },
  {
    icon: Battery, nome: "Baterias",
    marcas: ["Yuasa", "Moura", "Heliar", "Bosch", "Panasonic", "Hankook", "Varta"],
  },
  {
    icon: Link, nome: "Relação",
    marcas: ["DID", "RK", "Tsubaki", "Regina", "AFAM", "Rieffel", "HAMP", "Honda Original"],
  },
  {
    icon: Disc, nome: "Freios",
    marcas: ["Brembo", "EBC", "Ferodo", "TRW", "Galfer", "Cofap", "Nakata", "HAMP"],
  },
  {
    icon: ArrowUpDown, nome: "Suspensão",
    marcas: ["Öhlins", "WP", "KYB", "YSS", "Bitubo", "Magneti Marelli", "Cofap"],
  },
  {
    icon: Zap, nome: "Elétrica",
    marcas: ["NGK", "Denso", "Bosch", "Champion", "Iridium Power", "Philips", "Osram", "HAMP"],
  },
  {
    icon: Gauge, nome: "Performance",
    marcas: ["Akrapovic", "K&N", "Yoshimura", "Power Commander", "Dynojet", "Hiflofiltro", "Two Brothers"],
  },
  {
    icon: Settings, nome: "Acessórios",
    marcas: ["Givi", "SW-Motech", "Oxford", "Kriega", "Touratech", "Bagster", "Hepco & Becker"],
  },
  {
    icon: Shirt, nome: "Vestuário",
    marcas: ["Alpinestars", "Dainese", "Pro Tork", "IMS", "Texx", "Bering", "Rev'it", "Fox"],
  },
  {
    icon: ShieldCheck, nome: "Proteção",
    marcas: ["Alpinestars", "Dainese", "Knox", "Fox", "Rev'it", "Pro Tork", "Texx"],
  },
];

const WA_SVG = (
  <svg className="w-3.5 h-3.5 fill-current flex-shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.617a.5.5 0 00.609.61l5.886-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.654-.493-5.188-1.357l-.37-.213-3.835 1.005 1.022-3.73-.232-.384A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

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
          <p className="text-[#888] text-sm sm:text-base mt-3 max-w-md">
            Clique na categoria e consulte disponibilidade no WhatsApp — direto com quem atende.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {categorias.map((cat) => {
            const Icon = cat.icon;
            const modelos = modelosPorCategoria[cat.nome] ?? [];
            const msg = encodeURIComponent(
              `Olá! Gostaria de consultar disponibilidade de *${cat.nome}*. Pode me ajudar?`
            );
            return (
              <a
                key={cat.nome}
                href={`https://wa.me/5511934521534?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-[#141414] border border-[#2a2a2a] hover:border-[#cc1c1c]/50 active:bg-[#1a1a1a] rounded-2xl p-5 transition-all duration-200"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#252525] group-hover:bg-[#cc1c1c] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <Icon size={18} className="text-[#aaa] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 className="font-display font-black italic uppercase text-lg text-white group-hover:text-[#cc1c1c] transition-colors leading-none">
                    {cat.nome}
                  </h3>
                </div>

                {/* Top marcas */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cat.marcas.map((marca) => (
                    <span key={marca} className="text-[10px] font-semibold text-[#555] group-hover:text-[#888] border border-[#252525] group-hover:border-[#cc1c1c]/20 px-2 py-0.5 rounded-full transition-all">
                      {marca}
                    </span>
                  ))}
                </div>

                {/* Modelos compatíveis */}
                {modelos.length > 0 && (
                  <div className="mb-4">
                    <p className="text-[9px] text-[#444] uppercase tracking-widest mb-1.5">
                      Modelos mais atendidos
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {modelos.slice(0, 8).map((m) => (
                        <span key={m} className="text-[10px] text-[#666] group-hover:text-[#999] bg-[#1a1a1a] px-2 py-0.5 rounded-full transition-colors">
                          {m}
                        </span>
                      ))}
                      {modelos.length > 8 && (
                        <span className="text-[10px] text-[#444] px-2 py-0.5">
                          +{modelos.length - 8} mais
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-auto flex items-center gap-1.5 text-[#444] group-hover:text-[#25D366] text-xs font-semibold transition-colors">
                  {WA_SVG}
                  Consultar no WhatsApp →
                </div>
              </a>
            );
          })}
        </div>

        {/* Marcas parceiras — todas */}
        <div className="border-t border-[#1a1a1a] pt-10 mb-10">
          <p className="text-[#444] text-[10px] uppercase tracking-widest text-center mb-5">
            Marcas parceiras que trabalhamos
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              // Motos
              "Honda","Yamaha","Kawasaki","Suzuki","BMW","Triumph","KTM","Royal Enfield",
              // OEM / peças originais
              "HAMP","Honda Original","Yamaha Original","Magnetron","TDC","Nakata","Cofap",
              // Pneus
              "Pirelli","Michelin","Bridgestone","Metzeler","Dunlop","Maxxis","Rinaldi","Continental",
              // Óleos e lubrificantes
              "Motul","Castrol","Shell Advance","Repsol","Liqui-Moly","Mobil","Valvoline","Ipiranga","ELF","Total",
              // Capacetes
              "LS2","Astone","HJC","Shoei","Shark","Pro Tork","Bieffe","Norisk","Texx",
              // Elétrica / velas
              "NGK","Denso","Bosch","Champion","Iridium Power","Philips","Osram",
              // Relação / transmissão
              "DID","RK","Tsubaki","Regina","AFAM","Rieffel",
              // Baterias
              "Yuasa","Moura","Heliar","Varta",
              // Freios
              "Brembo","EBC","Ferodo","TRW","Galfer",
              // Suspensão
              "Öhlins","WP","KYB","YSS","Bitubo",
              // Performance / filtros
              "K&N","Hiflofiltro","Akrapovic","Yoshimura","Arrow",
              // Acessórios
              "Givi","Oxford","SW-Motech","Kriega",
            ].map((m) => (
              <span key={m} className="border border-[#222] text-[#555] text-[10px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-full hover:border-[#cc1c1c]/30 hover:text-[#888] transition-all cursor-default">
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#modelos"
            className="inline-flex items-center justify-center gap-2 border border-[#2a2a2a] hover:border-[#cc1c1c]/40 text-[#aaa] hover:text-white font-semibold text-sm px-8 py-4 rounded-full transition-all w-full sm:w-auto max-w-sm mr-0 sm:mr-3 mb-3 sm:mb-0"
          >
            Ver modelos atendidos ↓
          </a>
          <a
            href="https://wa.me/message/EKEEES5WV253M1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#cc1c1c] hover:bg-[#e52222] active:bg-[#a01515] text-white font-black text-sm px-8 py-4 rounded-full transition-colors w-full sm:w-auto max-w-sm"
          >
            Ver todas as peças disponíveis
          </a>
        </div>
      </div>
    </section>
  );
}
