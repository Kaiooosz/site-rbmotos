import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/foto53.jpg"
          alt="Oficina RB Moto Parts"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/70" />
      </div>

      {/* Red accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#cc1c1c] z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#cc1c1c]/40 bg-[#cc1c1c]/10 text-[#cc1c1c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#cc1c1c] animate-pulse" />
            Osasco · SP — Helena Maria
          </div>

          {/* Headline */}
          <h1 className="font-display font-black italic uppercase leading-none mb-6">
            <span className="block text-[clamp(56px,12vw,120px)] text-white tracking-tight">
              Sua moto em
            </span>
            <span className="block text-[clamp(56px,12vw,120px)] text-[#cc1c1c] tracking-tight">
              padrão máximo.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[#aaa] text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
            Oficina mecânica completa, loja de peças, borracharia e estética
            para motos. Qualidade, agilidade e respeito em cada atendimento.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="https://wa.me/message/EKEEES5WV253M1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#cc1c1c] hover:bg-[#e52222] text-white font-bold text-base px-7 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#cc1c1c]/30"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.617a.5.5 0 00.609.61l5.886-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.654-.493-5.188-1.357l-.37-.213-3.835 1.005 1.022-3.73-.232-.384A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Agendar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-semibold text-base px-7 py-4 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              Ver Serviços
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: "2024", label: "Ano de Fundação" },
              { value: "100%", label: "Comprometimento" },
              { value: "20+", label: "Categorias de Serviços" },
              { value: "Top", label: "Loja da Região" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display font-black text-3xl text-[#cc1c1c] italic">
                  {s.value}
                </p>
                <p className="text-xs text-[#888] uppercase tracking-wider mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#666] hover:text-white transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Explorar</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
