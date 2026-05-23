const reviews = [
  {
    nome: "Rafael Souza",
    inicial: "R",
    cor: "#cc1c1c",
    nota: 5,
    tempo: "há 2 semanas",
    texto: "Melhor oficina de Osasco! Levei minha CB 300 com problema na injeção eletrônica, me atenderam super rápido e saiu perfeito. Preço justo e transparência total. Já indiquei pra galera do trampo.",
    servico: "Injeção Eletrônica",
  },
  {
    nome: "Marcos Pereira",
    inicial: "M",
    cor: "#1565C0",
    nota: 5,
    tempo: "há 1 mês",
    texto: "Fui trocar os pneus da minha Fazer 250 e aproveitei pra fazer a revisão. Equipe muito profissional, me explicaram tudo que seria feito antes de começar. Loja bem organizada e com bastante opção de peça.",
    servico: "Troca de Pneus + Revisão",
  },
  {
    nome: "Carlos Motoboy",
    inicial: "C",
    cor: "#2E7D32",
    nota: 5,
    tempo: "há 3 semanas",
    texto: "Sou motoboy e dependo da moto todo dia. A RB Moto Parts me salvou quando minha Bros quebrou de madrugada. Guincho rápido, consertaram no mesmo dia. Agora faço revisão aqui toda vez. Parceiros!",
    servico: "Guincho + Manutenção",
  },
  {
    nome: "Thiago Lima",
    inicial: "T",
    cor: "#6A1B9A",
    nota: 5,
    tempo: "há 2 meses",
    texto: "Comprei capacete e equipamentos aqui. Variedade incrível, encontrei tudo que precisava. O atendimento é diferenciado, não te empurram produto, te ajudam a escolher o melhor pra sua necessidade.",
    servico: "Loja de Peças",
  },
  {
    nome: "Diego Ferreira",
    inicial: "D",
    cor: "#E65100",
    nota: 5,
    tempo: "há 1 semana",
    texto: "Fiz a estética da minha Honda aqui e ficou incrível! Polimento e limpeza técnica impecável. Parece que saiu 0km da concessionária. Recomendo pra qualquer motoqueiro de Osasco.",
    servico: "Estética Automotiva",
  },
  {
    nome: "Anderson Santos",
    inicial: "A",
    cor: "#00695C",
    nota: 5,
    tempo: "há 3 dias",
    texto: "Rápido, honesto e profissional. Levei pra alinhar e balancear, fizeram tudo certo, sem cobrar nada a mais. O ambiente da loja é muito organizado, dá pra ver que levam o trabalho a sério.",
    servico: "Balanceamento e Alinhamento",
  },
];

function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < nota ? "text-[#FBBC04]" : "text-[#333]"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-[#cc1c1c] text-xs font-bold uppercase tracking-widest mb-2">
              O que dizem nossos clientes
            </p>
            <h2 className="font-display font-black italic uppercase leading-none text-white"
              style={{ fontSize: "clamp(34px,8vw,68px)" }}>
              Avaliações <span className="text-[#cc1c1c]">Google</span>
            </h2>
          </div>

          {/* Badge Google */}
          <div className="flex items-center gap-3 bg-[#141414] border border-[#2a2a2a] rounded-2xl px-5 py-3 self-start sm:self-auto">
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-black text-lg leading-none">5,0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-[#FBBC04]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#555] text-[10px] mt-0.5">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Cards — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {reviews.map((r) => (
            <div
              key={r.nome}
              className="flex flex-col bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#cc1c1c]/30 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar com inicial */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-base flex-shrink-0"
                    style={{ backgroundColor: r.cor }}
                  >
                    {r.inicial}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{r.nome}</p>
                    <p className="text-[#555] text-xs mt-0.5">{r.tempo}</p>
                  </div>
                </div>
                {/* Logo Google */}
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              {/* Estrelas */}
              <Estrelas nota={r.nota} />

              {/* Texto */}
              <p className="text-[#999] text-sm leading-relaxed mt-3 flex-1">
                "{r.texto}"
              </p>

              {/* Serviço tag */}
              <div className="mt-4 pt-4 border-t border-[#1f1f1f]">
                <span className="text-[10px] font-semibold text-[#cc1c1c] uppercase tracking-wider">
                  {r.servico}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Google Maps */}
        <div className="text-center">
          <a
            href="https://maps.app.goo.gl/NCfPPg7uhYhpic6D7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#2a2a2a] hover:border-[#cc1c1c]/40 text-[#aaa] hover:text-white font-semibold text-sm px-7 py-4 rounded-full transition-all w-full sm:w-auto max-w-xs"
          >
            Ver todas as avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
}
