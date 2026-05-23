import { MapPin, Phone, Mail, Clock, AtSign, Navigation } from "lucide-react";

// Coordenadas exatas extraídas do Google Maps da loja
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
    <section id="contato" className="py-16 sm:py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="mb-8 sm:mb-12">
          <p className="text-[#cc1c1c] text-xs font-bold uppercase tracking-widest mb-2">
            Venha nos visitar
          </p>
          <h2 className="font-display font-black italic uppercase leading-none text-white"
            style={{ fontSize: "clamp(36px,9vw,72px)" }}>
            Onde <span className="text-[#cc1c1c]">Estamos</span>
          </h2>
          <p className="text-[#777] text-sm sm:text-base mt-3 max-w-sm">
            Osasco · Helena Maria · fácil acesso para toda a Grande São Paulo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-start">

          {/* Mapa com coordenadas exatas */}
          <div className="rounded-2xl overflow-hidden border border-[#2a2a2a] h-56 sm:h-80 lg:h-full lg:min-h-[420px]">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(80%) invert(92%) contrast(82%) brightness(85%)",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RB Moto Parts no Google Maps"
            />
          </div>

          {/* Info lado direito */}
          <div className="flex flex-col gap-3">

            {/* BOTÃO "COMO CHEGAR" — destaque máximo */}
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#cc1c1c] hover:bg-[#e52222] active:bg-[#a01515] text-white font-black text-base py-4 px-6 rounded-2xl transition-colors shadow-lg shadow-[#cc1c1c]/25 w-full"
            >
              <Navigation size={20} className="flex-shrink-0" />
              Como Chegar — Abrir no Maps
            </a>

            {/* Endereço clicável */}
            <a
              href={MAPS_PLACE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-[#141414] border border-[#2a2a2a] hover:border-[#cc1c1c]/40 active:bg-[#1a1a1a] rounded-2xl p-5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#cc1c1c]/10 border border-[#cc1c1c]/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-[#cc1c1c]" />
              </div>
              <div>
                <p className="text-[10px] text-[#555] uppercase tracking-widest mb-1">Endereço</p>
                <p className="text-white text-sm font-semibold leading-snug">
                  R. Pres. Costa e Silva, 534
                </p>
                <p className="text-[#888] text-xs mt-0.5">Helena Maria · Osasco · SP · 06253-000</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/message/EKEEES5WV253M1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#141414] border border-[#2a2a2a] hover:border-[#25D366]/40 active:bg-[#1a1a1a] rounded-2xl p-5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.617a.5.5 0 00.609.61l5.886-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.654-.493-5.188-1.357l-.37-.213-3.835 1.005 1.022-3.73-.232-.384A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-[#555] uppercase tracking-widest mb-0.5">WhatsApp</p>
                <p className="text-white text-sm font-semibold">(11) 93452-1534</p>
              </div>
            </a>

            {/* Telefone */}
            <a
              href="tel:+5511934521534"
              className="flex items-center gap-4 bg-[#141414] border border-[#2a2a2a] hover:border-[#cc1c1c]/40 active:bg-[#1a1a1a] rounded-2xl p-5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#cc1c1c]/10 border border-[#cc1c1c]/20 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-[#cc1c1c]" />
              </div>
              <div>
                <p className="text-[10px] text-[#555] uppercase tracking-widest mb-0.5">Ligar</p>
                <p className="text-white text-sm font-semibold">(11) 93452-1534</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rbmoto_parts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#141414] border border-[#2a2a2a] hover:border-[#e1306c]/40 active:bg-[#1a1a1a] rounded-2xl p-5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e1306c]/10 border border-[#e1306c]/20 flex items-center justify-center flex-shrink-0">
                <AtSign size={18} className="text-[#e1306c]" />
              </div>
              <div>
                <p className="text-[10px] text-[#555] uppercase tracking-widest mb-0.5">Instagram</p>
                <p className="text-white text-sm font-semibold">@rbmoto_parts</p>
              </div>
            </a>

            {/* Horários */}
            <div className="flex items-start gap-4 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-5">
              <div className="w-11 h-11 rounded-xl bg-[#cc1c1c]/10 border border-[#cc1c1c]/20 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-[#cc1c1c]" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-[#555] uppercase tracking-widest mb-2">Funcionamento</p>
                <div className="space-y-1">
                  {[
                    ["Seg – Sex", "08:00 – 18:00"],
                    ["Sábado", "08:00 – 13:00"],
                    ["Domingo", "Fechado"],
                  ].map(([dia, hora]) => (
                    <div key={dia} className="flex justify-between text-sm">
                      <span className="text-[#777]">{dia}</span>
                      <span className={hora === "Fechado" ? "text-[#555]" : "text-white font-medium"}>
                        {hora}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA final */}
            <a
              href="https://wa.me/message/EKEEES5WV253M1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1db954] active:bg-[#18a349] text-white font-black text-sm py-4 rounded-2xl transition-colors w-full"
            >
              {WA_ICON}
              Falar no WhatsApp agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
