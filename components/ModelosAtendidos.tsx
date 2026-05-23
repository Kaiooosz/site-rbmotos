"use client";

import { useState } from "react";
import { marcas } from "@/data/modelos";


export default function ModelosAtendidos() {
  const [marcaSelecionada, setMarcaSelecionada] = useState(marcas[0].nome);
  const marca = marcas.find(m => m.nome === marcaSelecionada)!;

  return (
    <section id="modelos" className="py-16 sm:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-[#cc1c1c] text-xs font-bold uppercase tracking-widest mb-2">
            Compatibilidade
          </p>
          <h2
            className="font-display font-black italic uppercase leading-none text-white"
            style={{ fontSize: "clamp(34px,8vw,68px)" }}
          >
            Modelos <span className="text-[#cc1c1c]">Atendidos</span>
          </h2>
          <p className="text-[#666] text-sm sm:text-base mt-3 max-w-lg">
            Atendemos mais de <strong className="text-white">150 modelos</strong> — peças,
            serviços e estética para todas as marcas e gerações.
            Não achou seu modelo? Fala com a gente no WhatsApp.
          </p>
        </div>

        {/* Abas de marcas — scroll horizontal mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {marcas.map(m => (
            <button
              key={m.nome}
              onClick={() => setMarcaSelecionada(m.nome)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold border transition-all duration-200 ${
                marcaSelecionada === m.nome
                  ? "text-white border-transparent"
                  : "text-[#666] border-[#2a2a2a] hover:text-[#aaa] hover:border-[#444] bg-transparent"
              }`}
              style={marcaSelecionada === m.nome ? { backgroundColor: m.cor, borderColor: m.cor } : {}}
            >
              {m.nome}
              <span className={`text-[10px] font-normal ${marcaSelecionada === m.nome ? "text-white/70" : "text-[#444]"}`}>
                {m.modelos.length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid de modelos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 mb-8">
          {marca.modelos.map(mod => {
            const msg = encodeURIComponent(
              `Olá! Preciso de atendimento para minha *${marca.nome} ${mod.nome}* (${mod.cc}). Pode me ajudar?`
            );
            return (
              <a
                key={mod.nome}
                href={`https://wa.me/5511934521534?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1.5 bg-[#141414] border border-[#222] hover:border-[#cc1c1c]/50 active:bg-[#1a1a1a] rounded-xl p-3.5 transition-all"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-white text-xs font-semibold leading-tight group-hover:text-[#cc1c1c] transition-colors">
                    {mod.nome}
                  </span>
                  <svg className="w-3 h-3 fill-[#333] group-hover:fill-[#25D366] flex-shrink-0 transition-colors" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.617a.5.5 0 00.609.61l5.886-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.654-.493-5.188-1.357l-.37-.213-3.835 1.005 1.022-3.73-.232-.384A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-[#555]">{mod.cc}</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Rodapé */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#1a1a1a]">
          <p className="text-[#444] text-xs">
            Não encontrou seu modelo?{" "}
            <a
              href="https://wa.me/message/EKEEES5WV253M1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cc1c1c] hover:underline"
            >
              Consulte no WhatsApp →
            </a>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {marcas.map(m => (
              <span key={m.nome} className="text-[10px] text-[#333] border border-[#1f1f1f] px-2 py-0.5 rounded-full">
                {m.nome}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
