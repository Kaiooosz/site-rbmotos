import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RB Moto Parts — Oficina, Peças e Estética em Osasco SP",
  description:
    "Oficina mecânica completa, loja de peças e acessórios, borracharia e estética para motos em Osasco - SP. Performance, estilo e confiança sobre duas rodas.",
  keywords:
    "oficina de motos osasco, peças para moto osasco, estética moto osasco, mecânica moto helena maria, troca de óleo moto, pneu moto osasco, rb moto parts",
  icons: {
    icon: [
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/icon-192.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "RB Moto Parts — Oficina, Peças e Estética em Osasco SP",
    description:
      "Oficina completa, peças e estética para motos em Osasco SP. Atendimento rápido, qualidade e confiança.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "RB Moto Parts" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
