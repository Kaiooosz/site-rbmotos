import Image from "next/image";
import { AtSign, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo + tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="RB Moto Parts"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <p className="font-display font-black italic text-lg text-white leading-none">
                  RB <span className="text-[#cc1c1c]">MOTO</span>PARTS
                </p>
                <p className="text-[10px] text-[#555] uppercase tracking-widest">
                  Osasco · SP
                </p>
              </div>
            </div>
            <p className="text-[#666] text-sm leading-relaxed max-w-sm">
              Oficina mecânica completa, loja de peças, borracharia e estética
              para motos em Osasco - SP. Performance, estilo e confiança sobre
              duas rodas.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/rbmoto_parts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center hover:bg-[#cc1c1c] hover:border-[#cc1c1c] transition-all duration-200"
              >
                <AtSign size={16} className="text-[#888] hover:text-white" />
              </a>
              <a
                href="https://wa.me/message/EKEEES5WV253M1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-[#888]" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.617a.5.5 0 00.609.61l5.886-1.543A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.654-.493-5.188-1.357l-.37-.213-3.835 1.005 1.022-3.73-.232-.384A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Serviços</p>
            <ul className="space-y-2">
              {[
                "Mecânica completa",
                "Revisão e diagnóstico",
                "Troca de óleo",
                "Borracharia",
                "Elétrica e injeção",
                "Estética automotiva",
                "Guincho",
              ].map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-[#666] hover:text-[#cc1c1c] text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contato</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#666] text-sm">
                <MapPin size={14} className="text-[#cc1c1c] flex-shrink-0 mt-0.5" />
                <span>R. Pres. Costa e Silva, 534 · Osasco SP</span>
              </li>
              <li>
                <a
                  href="https://wa.me/message/EKEEES5WV253M1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#666] hover:text-white text-sm transition-colors"
                >
                  <Phone size={14} className="text-[#cc1c1c]" />
                  (11) 93452-1534
                </a>
              </li>
              <li>
                <a
                  href="mailto:rbmotoparts8@gmail.com"
                  className="flex items-center gap-2 text-[#666] hover:text-white text-sm transition-colors"
                >
                  <Mail size={14} className="text-[#cc1c1c]" />
                  rbmotoparts8@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rbmoto_parts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#666] hover:text-white text-sm transition-colors"
                >
                  <AtSign size={14} className="text-[#cc1c1c]" />
                  @rbmoto_parts
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1f1f1f] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs">
            © 2024 RB Moto Parts · CNPJ 39.794.551/0001-00 · Todos os direitos reservados.
          </p>
          <p className="text-[#333] text-xs">
            Desenvolvido por{" "}
            <span className="text-[#555]">Tech Tsu</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
