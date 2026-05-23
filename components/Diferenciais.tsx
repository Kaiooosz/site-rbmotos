import { Clock, MapPin, Award, Users, Truck, Wrench } from "lucide-react";

const diferenciais = [
  {
    icon: Award,
    titulo: "Padrão máximo",
    descricao:
      "Equipamentos modernos e técnicos experientes garantem um serviço de alto nível em cada moto.",
  },
  {
    icon: Clock,
    titulo: "Atendimento rápido",
    descricao:
      "Agilidade sem perder a qualidade. Sabemos que sua moto é ferramenta de trabalho e vida.",
  },
  {
    icon: MapPin,
    titulo: "Localização estratégica",
    descricao:
      "Osasco-SP, Helena Maria. Fácil acesso para toda a região de Osasco e Grande São Paulo.",
  },
  {
    icon: Wrench,
    titulo: "Oficina completa",
    descricao:
      "Mecânica, borracharia, elétrica, injeção eletrônica e estética — tudo em um só lugar.",
  },
  {
    icon: Users,
    titulo: "Atendimento humanizado",
    descricao:
      "Aqui cada cliente é tratado como parceiro de estrada. Transparência em tudo.",
  },
  {
    icon: Truck,
    titulo: "Guincho & Delivery",
    descricao:
      "Serviço de guincho disponível e atendimento delivery para sua comodidade.",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-[#cc1c1c] text-sm font-semibold uppercase tracking-widest mb-3">
            Por que nos escolher
          </p>
          <h2 className="font-display font-black italic uppercase text-[clamp(36px,6vw,72px)] text-white leading-none">
            Nossos <span className="text-[#cc1c1c]">Diferenciais</span>
          </h2>
          <p className="text-[#888] text-base mt-4 max-w-lg mx-auto">
            Performance, estilo e confiança sobre duas rodas. Excelência para quem
            leva moto a sério.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={d.titulo}
                className="group bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#cc1c1c]/40 hover:bg-[#cc1c1c]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#cc1c1c]/10 border border-[#cc1c1c]/20 flex items-center justify-center mb-5 group-hover:bg-[#cc1c1c] group-hover:border-[#cc1c1c] transition-all duration-300">
                  <Icon size={22} className="text-[#cc1c1c] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-black italic uppercase text-xl text-white mb-2">
                  {d.titulo}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">{d.descricao}</p>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-16 bg-[#cc1c1c] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-black italic uppercase text-3xl sm:text-4xl text-white leading-none">
              No corre com você.
            </h3>
            <p className="text-white/70 text-base mt-1">
              Quem vive de moto, confia na RB Moto Parts.
            </p>
          </div>
          <a
            href="https://wa.me/message/EKEEES5WV253M1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-[#cc1c1c] font-bold text-base px-8 py-4 rounded-full hover:bg-[#f5f5f5] transition-colors duration-200"
          >
            Falar agora →
          </a>
        </div>
      </div>
    </section>
  );
}
