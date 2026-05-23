import { Navigation, Phone, Mail, AtSign, ExternalLink } from "lucide-react";

const LAT = -23.5013919;
const LNG = -46.792689;
const MAPS_EMBED = `https://maps.google.com/maps?q=${LAT},${LNG}&hl=pt-BR&z=17&output=embed`;
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;
const MAPS_PLACE = `https://maps.app.goo.gl/NCfPPg7uhYhpic6D7`;

const WA_ICON = (
  <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.617a.5.5 0 00.609.61l5.886-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.654-.493-5.188-1.357l-.37-.213-3.835 1.005 1.022-3.73-.232-.384A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

export default function Localizacao() {
  return (
    <section id="contato" className="bg-[#0a0a0a]">

      {/* Linha separadora */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

      {/* Label topo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-6">
        <p className="text-[#555] text-xs uppercase tracking-[0.2em] font-medium">
          / Venha nos visitar
        </p>
        <h2
          className="font-display font-black italic uppercase leading-none text-white mt-2"
          style={{ fontSize: "clamp(36px,9vw,72px)" }}
        >
          Como <span className="text-[#cc1c1c]">Chegar</span>
        </h2>

        {/* Ponto de referência — visível e indexável pelo Google */}
        <p className="text-[#666] text-sm mt-3 max-w-xl">
          📍 Próximo à <span className="text-[#aaa] font-medium">Rodovia Raposo Tavares</span> e{" "}
          <span className="text-[#aaa] font-medium">Av. dos Autonomistas</span> — fácil acesso de{" "}
          <span className="text-[#aaa] font-medium">Carapicuíba, Barueri, Cotia, Jandira</span> e
          toda a Zona Oeste de SP.
        </p>

        {/* Bairros atendidos */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "Helena Maria", "Jardim D'Abril", "Presidente Altino", "Km 18",
            "Jardim Veloso", "Bonança", "COHAB", "Rochdale", "Piratininga",
            "Umuarama", "Pestana", "Carapicuíba", "Barueri", "Cotia",
          ].map((b) => (
            <span
              key={b}
              className="text-[10px] font-semibold text-[#555] border border-[#222] px-2.5 py-1 rounded-full"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Grid: mapa | info — empilha em mobile */}
      <div className="flex flex-col lg:flex-row">

        {/* ── MAPA ── */}
        <div className="w-full lg:w-[58%] h-64 sm:h-80 lg:h-auto lg:min-h-[540px] relative">
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{
              border: 0,
              display: "block",
              filter: "grayscale(70%) invert(90%) contrast(85%) brightness(82%)",
              position: "absolute",
              inset: 0,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RB Moto Parts — localização"
          />

          {/* "Abrir no Maps" sobre o mapa */}
          <a
            href={MAPS_PLACE}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#0a0a0a]/85 backdrop-blur-sm border border-[#2a2a2a] text-white text-xs font-semibold px-3 py-2 rounded-full hover:bg-[#141414] transition-colors"
          >
            <ExternalLink size={12} />
            Ver no Google Maps
          </a>
        </div>

        {/* ── INFO ── */}
        <div className="w-full lg:w-[42%] flex flex-col justify-center px-4 sm:px-6 lg:px-10 xl:px-14 py-8 lg:py-12 gap-6 bg-[#0a0a0a]">

          {/* Endereço */}
          <div>
            <p className="text-[#555] text-[10px] uppercase tracking-widest font-semibold mb-2">
              Endereço
            </p>
            <p className="text-white text-xl sm:text-2xl font-bold leading-snug">
              R. Pres. Costa e Silva, 534
            </p>
            <p className="text-[#888] text-sm mt-1">
              Helena Maria · Osasco · SP · 06253-000
            </p>
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#cc1c1c] hover:text-[#e52222] font-semibold text-sm mt-3 transition-colors group"
            >
              <Navigation size={14} />
              Abrir rota no Maps
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>

          <div className="h-px bg-[#1f1f1f]" />

          {/* Horários */}
          <div>
            <p className="text-[#555] text-[10px] uppercase tracking-widest font-semibold mb-3">
              Horário de Funcionamento
            </p>
            <div className="space-y-2.5">
              {[
                ["Segunda – Sexta", "08:00 – 18:00", false],
                ["Sábado", "08:00 – 13:00", false],
                ["Domingo", "Fechado", true],
              ].map(([dia, hora, fechado]) => (
                <div key={String(dia)} className="flex justify-between items-center">
                  <span className="text-[#888] text-sm">{dia}</span>
                  <span className={`text-sm font-semibold ${fechado ? "text-[#444]" : "text-white"}`}>
                    {hora}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-[#1f1f1f]" />

          {/* Contato */}
          <div>
            <p className="text-[#555] text-[10px] uppercase tracking-widest font-semibold mb-3">
              Contato
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+5511934521534"
                className="flex items-center gap-2 text-[#aaa] hover:text-white text-sm transition-colors"
              >
                <Phone size={14} className="text-[#cc1c1c] flex-shrink-0" />
                (11) 93452-1534
              </a>
              <a
                href="mailto:rbmotoparts8@gmail.com"
                className="flex items-center gap-2 text-[#aaa] hover:text-white text-sm transition-colors"
              >
                <Mail size={14} className="text-[#cc1c1c] flex-shrink-0" />
                rbmotoparts8@gmail.com
              </a>
              <a
                href="https://www.instagram.com/rbmoto_parts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#aaa] hover:text-white text-sm transition-colors"
              >
                <AtSign size={14} className="text-[#cc1c1c] flex-shrink-0" />
                @rbmoto_parts
              </a>
            </div>
          </div>

          {/* CTA principal */}
          <a
            href="https://wa.me/message/EKEEES5WV253M1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#cc1c1c] hover:bg-[#e52222] active:bg-[#a01515] text-white font-black text-base py-4 px-6 rounded-2xl transition-colors shadow-lg shadow-[#cc1c1c]/20 w-full"
          >
            {WA_ICON}
            Falar no WhatsApp
          </a>

          {/* Botão como chegar — secundário */}
          <a
            href={MAPS_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-[#2a2a2a] hover:border-[#cc1c1c]/50 active:bg-[#141414] text-[#aaa] hover:text-white font-semibold text-sm py-4 rounded-2xl transition-all w-full"
          >
            <Navigation size={16} />
            Como Chegar — Abrir no Maps
          </a>
        </div>
      </div>
    </section>
  );
}
