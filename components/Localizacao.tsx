import { MapPin, Phone, Mail, Clock, AtSign } from "lucide-react";

const contatos = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "R. Pres. Costa e Silva, 534\nHelena Maria, Osasco - SP\nCEP: 06253-000",
    href: "https://maps.app.goo.gl/NCfPPg7uhYhpic6D7",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(11) 93452-1534",
    href: "https://wa.me/message/EKEEES5WV253M1",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "rbmotoparts8@gmail.com",
    href: "mailto:rbmotoparts8@gmail.com",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@rbmoto_parts",
    href: "https://www.instagram.com/rbmoto_parts",
  },
];

export default function Localizacao() {
  return (
    <section id="contato" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-[#cc1c1c] text-sm font-semibold uppercase tracking-widest mb-3">
            Venha nos visitar
          </p>
          <h2 className="font-display font-black italic uppercase text-[clamp(36px,6vw,72px)] text-white leading-none">
            Onde <span className="text-[#cc1c1c]">Estamos</span>
          </h2>
          <p className="text-[#888] text-base mt-4 max-w-lg">
            Estamos no coração de Osasco. Fácil acesso para toda a Grande São Paulo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Mapa */}
          <div className="rounded-3xl overflow-hidden border border-[#2a2a2a] h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d-46.7752!3d-23.5321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff4d9b5a0001%3A0x0!2sR.+Pres.+Costa+e+Silva%2C+534+-+Helena+Maria%2C+Osasco+-+SP!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(80%) invert(90%) contrast(85%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RB Moto Parts - Localização"
            />
          </div>

          {/* Infos */}
          <div className="flex flex-col gap-4">
            {contatos.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 bg-[#141414] border border-[#2a2a2a] hover:border-[#cc1c1c]/40 rounded-2xl p-6 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#cc1c1c]/10 border border-[#cc1c1c]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cc1c1c] group-hover:border-[#cc1c1c] transition-all duration-200">
                    <Icon size={18} className="text-[#cc1c1c] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-xs text-[#555] uppercase tracking-widest mb-1">{c.label}</p>
                    <p className="text-white text-sm font-medium whitespace-pre-line">{c.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Horários */}
            <div className="flex items-start gap-4 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#cc1c1c]/10 border border-[#cc1c1c]/20 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-[#cc1c1c]" />
              </div>
              <div>
                <p className="text-xs text-[#555] uppercase tracking-widest mb-2">Horário de Funcionamento</p>
                <div className="space-y-1">
                  <div className="flex justify-between gap-8 text-sm">
                    <span className="text-[#888]">Segunda a Sexta</span>
                    <span className="text-white font-medium">08:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between gap-8 text-sm">
                    <span className="text-[#888]">Sábado</span>
                    <span className="text-white font-medium">08:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between gap-8 text-sm">
                    <span className="text-[#888]">Domingo</span>
                    <span className="text-[#555] font-medium">Fechado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/message/EKEEES5WV253M1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold text-base py-4 rounded-2xl transition-colors duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.617a.5.5 0 00.609.61l5.886-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.654-.493-5.188-1.357l-.37-.213-3.835 1.005 1.022-3.73-.232-.384A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Falar no WhatsApp agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
