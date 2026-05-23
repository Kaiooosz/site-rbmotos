import Image from "next/image";

const WA_ICON = (
  <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.617a.5.5 0 00.609.61l5.886-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.654-.493-5.188-1.357l-.37-.213-3.835 1.005 1.022-3.73-.232-.384A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/foto53.jpg"
          alt="Oficina RB Moto Parts"
          fill
          className="object-cover object-center"
          priority
          quality={80}
          sizes="100vw"
        />
        {/* Gradiente forte na base para o texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />
      </div>

      {/* Linha vermelha topo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#cc1c1c] z-10" />

      {/* Content — ancorado na base */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 pt-24">

        {/* Badge localização */}
        <div className="inline-flex items-center gap-2 bg-[#cc1c1c]/15 border border-[#cc1c1c]/40 text-[#ff4444] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#cc1c1c] animate-pulse" />
          Osasco · Helena Maria · SP
        </div>

        {/* Headline */}
        <h1 className="font-display font-black italic uppercase leading-[0.9] mb-4 sm:mb-5">
          <span className="block text-white" style={{ fontSize: "clamp(52px,14vw,110px)" }}>
            Sua moto em
          </span>
          <span className="block text-[#cc1c1c]" style={{ fontSize: "clamp(52px,14vw,110px)" }}>
            padrão máximo.
          </span>
        </h1>

        {/* Sub */}
        <p className="text-[#bbb] text-base sm:text-lg max-w-md mb-7 leading-relaxed">
          Oficina completa, peças, borracharia e estética. Rápido,
          confiável e no seu corre.
        </p>

        {/* CTAs — full width em mobile */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
          <a
            href="https://wa.me/message/EKEEES5WV253M1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#cc1c1c] hover:bg-[#e52222] active:bg-[#a01515] text-white font-black text-base px-6 py-4 rounded-full transition-colors shadow-lg shadow-[#cc1c1c]/30 w-full sm:w-auto"
          >
            {WA_ICON}
            Agendar no WhatsApp
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=-23.5013919,-46.792689"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 active:bg-white/10 text-white font-semibold text-base px-6 py-4 rounded-full transition-all w-full sm:w-auto"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            Ir até a loja
          </a>
        </div>

        {/* Stats — 2 colunas em mobile */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-10 border-t border-white/10 pt-6">
          {[
            { value: "2024", label: "Fundada em" },
            { value: "100%", label: "Comprometimento" },
            { value: "20+", label: "Serviços" },
            { value: "#1", label: "Da região" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black italic text-[clamp(26px,7vw,38px)] text-[#cc1c1c] leading-none">
                {s.value}
              </p>
              <p className="text-[11px] text-[#666] uppercase tracking-wider mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
