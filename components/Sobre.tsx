import Image from "next/image";
import { Quote } from "lucide-react";

const valores = [
  "Transparência e honestidade",
  "Qualidade em cada serviço",
  "Respeito ao motociclista",
  "Comprometimento com segurança",
  "Agilidade sem perder a excelência",
  "Paixão por motos e cultura duas rodas",
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Narrativa emocional em destaque */}
        <div className="relative bg-[#141414] border border-[#2a2a2a] rounded-3xl p-8 sm:p-14 mb-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#cc1c1c] rounded-l-3xl" />
          <div className="absolute -top-8 -right-8 text-[200px] font-display font-black italic text-[#cc1c1c]/5 leading-none select-none pointer-events-none">
            RB
          </div>
          <Quote size={32} className="text-[#cc1c1c] mb-6 opacity-80" />
          <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed max-w-3xl">
            Tem gente que vê uma moto.{" "}
            <span className="text-[#cc1c1c] font-bold">
              A gente vê liberdade, trabalho, conquista e história.
            </span>
          </p>
          <p className="text-[#888] text-base mt-4 max-w-2xl leading-relaxed">
            Cada moto que entra aqui carrega sonhos, batalhas e quilômetros de
            vida. Nossa missão é cuidar disso com respeito. Não é só sobre
            trocar peça, revisar motor ou fazer estética. É sobre entregar
            confiança pra quem depende da moto todos os dias.
          </p>
          <p className="text-[#666] text-sm mt-4 italic">
            — RB Moto Parts, desde 2024
          </p>
        </div>

        {/* Split: texto + imagem */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#cc1c1c] text-sm font-semibold uppercase tracking-widest mb-3">
              Nossa história
            </p>
            <h2 className="font-display font-black italic uppercase text-[clamp(36px,5vw,64px)] text-white leading-none mb-6">
              Quem somos a <span className="text-[#cc1c1c]">RB</span>
            </h2>
            <p className="text-[#aaa] text-base leading-relaxed mb-6">
              A RB Moto Parts nasceu da paixão pelo universo das duas rodas e da
              vontade de oferecer um serviço que realmente faz a diferença.
              Localizada em Osasco-SP, somos referência em mecânica, peças e
              estética para motos.
            </p>
            <p className="text-[#aaa] text-base leading-relaxed mb-8">
              Nossa missão é ser a oficina e loja mais confiável e lembrada da
              região, com atendimento humanizado e alto padrão em cada detalhe.
            </p>

            {/* Valores */}
            <div>
              <p className="text-sm font-semibold text-[#888] uppercase tracking-widest mb-4">
                Nossos valores
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {valores.map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-[#ccc]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cc1c1c] flex-shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fotos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/foto54.jpg"
                alt="Loja RB Moto Parts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/foto55.jpg"
                  alt="Capacetes na loja"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden flex-1">
                <Image
                  src="/foto52.jpg"
                  alt="Produtos RB Moto Parts"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Missão e Visão */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8">
            <p className="text-[#cc1c1c] text-xs font-bold uppercase tracking-widest mb-3">Missão</p>
            <p className="text-[#ccc] text-base leading-relaxed">
              Entregar soluções completas para motociclistas com qualidade,
              confiança e agilidade, garantindo segurança, desempenho e orgulho
              em cada moto.
            </p>
          </div>
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8">
            <p className="text-[#cc1c1c] text-xs font-bold uppercase tracking-widest mb-3">Visão</p>
            <p className="text-[#ccc] text-base leading-relaxed">
              Ser referência na região como a oficina e loja de motos mais
              confiável e lembrada pelos clientes, reconhecida pela excelência e
              paixão pelo universo das motos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
