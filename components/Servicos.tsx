import { Wrench, CircleDot, Sparkles, Star } from "lucide-react";

const mecanica = [
  "Revisão completa", "Troca de óleo", "Motor", "Injeção eletrônica",
  "Freios", "Suspensão", "Embreagem", "Diagnóstico",
  "Elétrica", "Performance", "Preparação", "Remapeamento", "Escapamento",
];
const borracharia = [
  "Troca de pneus", "Balanceamento", "Alinhamento", "Reparo", "Vulcanização",
];
const especiais = [
  "Guincho", "Revisão pré-viagem", "Atendimento delivery",
  "Lavagem técnica", "Polimento", "Estética automotiva",
];

const categorias = [
  {
    icon: Wrench,
    titulo: "Mecânica",
    desc: "Do diagnóstico à alta performance, resolvemos qualquer problema.",
    itens: mecanica,
    destaque: true,
  },
  {
    icon: CircleDot,
    titulo: "Borracharia",
    desc: "Pneus, balanceamento e alinhamento com equipamentos modernos.",
    itens: borracharia,
    destaque: false,
  },
  {
    icon: Sparkles,
    titulo: "Serviços Especiais",
    desc: "Estética, guincho e delivery para a sua comodidade.",
    itens: especiais,
    destaque: false,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <p className="text-[#cc1c1c] text-xs font-bold uppercase tracking-widest mb-2">
            O que fazemos
          </p>
          <h2 className="font-display font-black italic uppercase leading-none text-white"
            style={{ fontSize: "clamp(36px,9vw,72px)" }}>
            Nossos <span className="text-[#cc1c1c]">Serviços</span>
          </h2>
          <p className="text-[#888] text-sm sm:text-base mt-3 max-w-sm">
            Solução completa em um só lugar — rápido e sem enrolação.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-5">
          {categorias.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.titulo}
                className={`relative rounded-2xl p-6 border ${
                  cat.destaque
                    ? "bg-[#cc1c1c]/8 border-[#cc1c1c]/30"
                    : "bg-[#141414] border-[#2a2a2a]"
                }`}
              >
                {cat.destaque && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#cc1c1c] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                    <Star size={9} />Principal
                  </div>
                )}

                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${cat.destaque ? "bg-[#cc1c1c]" : "bg-[#252525]"}`}>
                  <Icon size={20} className="text-white" />
                </div>

                <h3 className="font-display font-black italic uppercase text-xl sm:text-2xl text-white mb-1">
                  {cat.titulo}
                </h3>
                <p className="text-[#777] text-sm mb-5 leading-relaxed">{cat.desc}</p>

                {/* Lista compacta */}
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
                  {cat.itens.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-xs text-[#bbb]">
                      <span className="w-1 h-1 rounded-full bg-[#cc1c1c] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/message/EKEEES5WV253M1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-full py-3.5 rounded-full text-sm font-bold transition-colors ${
                    cat.destaque
                      ? "bg-[#cc1c1c] hover:bg-[#e52222] active:bg-[#a01515] text-white"
                      : "border border-[#2a2a2a] hover:border-[#cc1c1c] active:bg-[#1a1a1a] text-[#aaa] hover:text-white"
                  }`}
                >
                  Orçar no WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
