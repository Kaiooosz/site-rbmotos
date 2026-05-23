import { Clock, MapPin, Award, Users, Truck, Wrench } from "lucide-react";

const diferenciais = [
  {
    icon: Award,
    titulo: "Padrão máximo",
    desc: "Equipamentos modernos e técnicos experientes em cada serviço.",
  },
  {
    icon: Clock,
    titulo: "Atendimento rápido",
    desc: "Agilidade real. Sua moto pronta no prazo combinado.",
  },
  {
    icon: MapPin,
    titulo: "Osasco · Helena Maria",
    desc: "Fácil acesso para toda a Grande São Paulo.",
  },
  {
    icon: Wrench,
    titulo: "Tudo em um lugar",
    desc: "Mecânica, borracharia, elétrica e estética no mesmo endereço.",
  },
  {
    icon: Users,
    titulo: "Atendimento humanizado",
    desc: "Transparência total. Você sabe tudo o que será feito.",
  },
  {
    icon: Truck,
    titulo: "Guincho & Delivery",
    desc: "Buscamos e entregamos. Atendimento onde você estiver.",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-16 sm:py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-10 sm:mb-14 text-center">
          <p className="text-[#cc1c1c] text-xs font-bold uppercase tracking-widest mb-2">
            Por que nos escolher
          </p>
          <h2 className="font-display font-black italic uppercase leading-none text-white"
            style={{ fontSize: "clamp(36px,9vw,72px)" }}>
            Por que a <span className="text-[#cc1c1c]">RB</span>
          </h2>
        </div>

        {/* 1 col mobile · 2 col sm · 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {diferenciais.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.titulo} className="group flex gap-4 bg-[#141414] border border-[#2a2a2a] hover:border-[#cc1c1c]/40 rounded-2xl p-5 transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#cc1c1c]/10 border border-[#cc1c1c]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cc1c1c] group-hover:border-[#cc1c1c] transition-all">
                  <Icon size={20} className="text-[#cc1c1c] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-black italic uppercase text-lg text-white leading-tight mb-1">
                    {d.titulo}
                  </h3>
                  <p className="text-[#777] text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-10 sm:mt-12 bg-[#cc1c1c] rounded-2xl sm:rounded-3xl p-7 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-display font-black italic uppercase text-white leading-tight"
              style={{ fontSize: "clamp(28px,7vw,44px)" }}>
              No corre com você.
            </h3>
            <p className="text-white/70 text-sm mt-1">
              Quem vive de moto confia na RB Moto Parts.
            </p>
          </div>
          <a
            href="https://wa.me/message/EKEEES5WV253M1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-[#cc1c1c] font-black text-sm px-7 py-4 rounded-full hover:bg-[#f5f5f5] active:bg-[#e8e8e8] transition-colors w-full sm:w-auto text-center"
          >
            Falar agora →
          </a>
        </div>
      </div>
    </section>
  );
}
