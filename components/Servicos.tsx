import {
  Wrench,
  Zap,
  ShieldCheck,
  Settings,
  CircleDot,
  Truck,
  Sparkles,
  Star,
} from "lucide-react";

const mecanica = [
  "Revisão completa",
  "Troca de óleo",
  "Motor",
  "Injeção eletrônica",
  "Freios",
  "Suspensão",
  "Embreagem",
  "Diagnóstico",
  "Elétrica",
  "Performance",
  "Preparação",
  "Remapeamento",
  "Escapamento",
];

const borracharia = [
  "Troca de pneus",
  "Balanceamento",
  "Alinhamento",
  "Reparo",
  "Vulcanização",
];

const especiais = [
  "Guincho",
  "Revisão pré-viagem",
  "Atendimento delivery",
  "Lavagem técnica",
  "Polimento",
  "Estética automotiva",
];

const categorias = [
  {
    icon: Wrench,
    titulo: "Mecânica Completa",
    descricao:
      "Do diagnóstico à preparação de alta performance, nossa equipe resolve qualquer problema.",
    itens: mecanica,
    destaque: true,
  },
  {
    icon: CircleDot,
    titulo: "Borracharia",
    descricao:
      "Pneus, balanceamento e alinhamento com equipamentos modernos e precisos.",
    itens: borracharia,
    destaque: false,
  },
  {
    icon: Sparkles,
    titulo: "Serviços Especiais",
    descricao:
      "Estética, guincho, atendimento delivery e revisão pré-viagem para sua tranquilidade.",
    itens: especiais,
    destaque: false,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#cc1c1c] text-sm font-semibold uppercase tracking-widest mb-3">
            O que fazemos
          </p>
          <h2 className="font-display font-black italic uppercase text-[clamp(36px,6vw,72px)] text-white leading-none">
            Nossos <span className="text-[#cc1c1c]">Serviços</span>
          </h2>
          <p className="text-[#888] text-base mt-4 max-w-lg">
            Solução completa para sua moto: mecânica, borracharia, estética e
            muito mais — tudo em um só lugar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {categorias.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.titulo}
                className={`relative rounded-2xl p-8 border transition-all duration-300 group hover:-translate-y-1 ${
                  cat.destaque
                    ? "bg-[#cc1c1c]/10 border-[#cc1c1c]/30 hover:border-[#cc1c1c]/60"
                    : "bg-[#141414] border-[#2a2a2a] hover:border-[#444]"
                }`}
              >
                {cat.destaque && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#cc1c1c] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    <Star size={10} />
                    Principal
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    cat.destaque ? "bg-[#cc1c1c]" : "bg-[#2a2a2a]"
                  }`}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="font-display font-black italic uppercase text-2xl text-white mb-2">
                  {cat.titulo}
                </h3>
                <p className="text-[#888] text-sm mb-6 leading-relaxed">
                  {cat.descricao}
                </p>

                <ul className="space-y-2">
                  {cat.itens.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#ccc]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cc1c1c] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/message/EKEEES5WV253M1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                    cat.destaque
                      ? "bg-[#cc1c1c] hover:bg-[#e52222] text-white"
                      : "border border-[#2a2a2a] hover:border-[#cc1c1c] text-[#aaa] hover:text-white"
                  }`}
                >
                  Solicitar Orçamento
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#666] text-sm mb-4">
            Não encontrou o que precisa? Fale conosco!
          </p>
          <a
            href="https://wa.me/message/EKEEES5WV253M1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#cc1c1c] hover:text-white font-semibold text-sm transition-colors"
          >
            <ShieldCheck size={16} />
            Consultar disponibilidade →
          </a>
        </div>
      </div>
    </section>
  );
}
