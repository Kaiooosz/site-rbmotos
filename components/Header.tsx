"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Peças", href: "#pecas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-gradient-to-b from-[#0a0a0a]/80 to-transparent"
      }`}
    >
      {/* Top bar vermelho no topo */}
      <div className="h-0.5 bg-[#cc1c1c] w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 flex-shrink-0" onClick={close}>
            <Image
              src="/logo.jpg"
              alt="RB Moto Parts"
              width={40}
              height={40}
              className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12"
            />
            <div>
              <p className="font-display font-black italic text-base sm:text-lg leading-none text-white tracking-wide">
                RB <span className="text-[#cc1c1c]">MOTO</span>PARTS
              </p>
              <p className="text-[9px] text-[#666] uppercase tracking-widest leading-none mt-0.5">
                Osasco · SP
              </p>
            </div>
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[#aaa] hover:text-white transition-colors uppercase tracking-wider py-2"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA direito */}
          <div className="flex items-center gap-2">
            {/* Telefone direto — visível em mobile */}
            <a
              href="tel:+5511934521534"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#aaa] hover:text-white hover:border-[#cc1c1c] transition-all lg:hidden"
              aria-label="Ligar"
            >
              <Phone size={16} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/message/EKEEES5WV253M1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] active:bg-[#18a349] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2.5 rounded-full transition-colors"
            >
              <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.617a.5.5 0 00.609.61l5.886-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.654-.493-5.188-1.357l-.37-.213-3.835 1.005 1.022-3.73-.232-.384A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              <span className="hidden xs:inline sm:inline">WhatsApp</span>
            </a>

            {/* Hamburguer */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-[#aaa] hover:text-white rounded-full hover:bg-[#1a1a1a] transition-all"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="lg:hidden bg-[#0f0f0f]/98 backdrop-blur-xl border-t border-[#2a2a2a]">
          <nav className="flex flex-col px-4 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="flex items-center text-base font-semibold text-[#ccc] hover:text-white active:text-[#cc1c1c] py-4 border-b border-[#1a1a1a] uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 py-4">
              <a
                href="tel:+5511934521534"
                className="flex-1 flex items-center justify-center gap-2 border border-[#2a2a2a] text-white font-semibold text-sm py-3.5 rounded-full active:bg-[#1a1a1a]"
              >
                <Phone size={16} />
                Ligar agora
              </a>
              <a
                href="https://wa.me/message/EKEEES5WV253M1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm py-3.5 rounded-full active:bg-[#1db954]"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
