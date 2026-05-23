import Image from "next/image";

const valores = [
  "Transparência e honestidade",
  "Qualidade em cada serviço",
  "Respeito ao motociclista",
  "Compromisso com segurança",
  "Agilidade sem perder excelência",
  "Paixão por motos e cultura 2 rodas",
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Narrativa emocional */}
        <div className="relative bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 sm:p-12 mb-10 sm:mb-14 overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#cc1c1c] rounded-l-2xl" />
          <div className="absolute -bottom-4 -right-4 font-display font-black italic text-[120px] sm:text-[180px] text-[#cc1c1c]/5 leading-none select-none pointer-events-none">
            RB
          </div>

          <svg className="w-7 h-7 text-[#cc1c1c] mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>

          <p className="text-lg sm:text-2xl text-white font-semibold leading-relaxed max-w-2xl">
            Tem gente que vê uma moto.{" "}
            <span className="text-[#cc1c1c] font-bold">
              A gente vê liberdade, trabalho, conquista e história.
            </span>
          </p>
          <p className="text-[#777] text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            Cada moto que entra aqui carrega sonhos, batalhas e quilômetros de vida.
            Nossa missão é cuidar disso com respeito. Não é só trocar peça ou fazer estética —
            é entregar confiança pra quem depende da moto todos os dias.
          </p>
        </div>

        {/* Split: texto + fotos */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <p className="text-[#cc1c1c] text-xs font-bold uppercase tracking-widest mb-2">
              Nossa história
            </p>
            <h2 className="font-display font-black italic uppercase leading-none text-white mb-5"
              style={{ fontSize: "clamp(34px,8vw,60px)" }}>
              <span className="text-[#cc1c1c]">RB</span> Moto Parts
            </h2>
            <p className="text-[#999] text-sm sm:text-base leading-relaxed mb-5">
              A RB Moto Parts nasceu da paixão pelo universo das duas rodas e da
              vontade de oferecer um serviço que realmente faz diferença.
              Localizada em Osasco-SP, somos referência em mecânica, peças e
              estética para motos.
            </p>

            <div className="mb-6">
              <p className="text-xs font-bold text-[#555] uppercase tracking-widest mb-3">
                Nossos valores
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {valores.map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-[#bbb]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cc1c1c] flex-shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-4">
                <p className="text-[#cc1c1c] text-xs font-black uppercase tracking-widest mb-1">Missão</p>
                <p className="text-[#888] text-xs leading-relaxed">
                  Qualidade, confiança e agilidade em cada atendimento.
                </p>
              </div>
              <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-4">
                <p className="text-[#cc1c1c] text-xs font-black uppercase tracking-widest mb-1">Visão</p>
                <p className="text-[#888] text-xs leading-relaxed">
                  Ser a oficina mais confiável de Osasco e região.
                </p>
              </div>
            </div>
          </div>

          {/* Fotos — ordem ajustada para mobile */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image src="/foto54.jpg" alt="Loja RB Moto Parts" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image src="/foto55.jpg" alt="Capacetes" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[80px]">
                <Image src="/foto52.jpg" alt="Produtos" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
