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
    "Oficina mecânica completa, loja de peças, borracharia e estética para motos em Osasco SP. Atendimento rápido em Helena Maria, Carapicuíba, Barueri e região. Troca de óleo, revisão, pneus, capacetes e muito mais.",
  keywords: [
    // Serviços prioritários
    "oficina de motos osasco",
    "mecânica moto osasco sp",
    "troca de óleo moto osasco",
    "revisão moto osasco",
    "borracharia moto osasco",
    "troca pneu moto osasco",
    "estética moto osasco",
    "injeção eletrônica moto osasco",
    // Produtos prioritários
    "peças para moto osasco",
    "capacetes moto osasco",
    "pneu moto pirelli michelin osasco",
    "escapamento moto osasco",
    "bateria moto osasco",
    // Localização — bairros e cidades
    "oficina moto helena maria osasco",
    "mecânica moto carapicuíba",
    "oficina moto barueri",
    "mecânica moto cotia",
    "oficina moto jandira",
    "peças moto grande são paulo",
    // Marca
    "rb moto parts",
    "rb motoparts osasco",
    // Público motoboy
    "oficina motoboy osasco",
    "guincho moto osasco",
    "atendimento emergência moto osasco",
  ].join(", "),
  authors: [{ name: "RB Moto Parts" }],
  creator: "RB Moto Parts",
  metadataBase: new URL("https://site-oficial.vercel.app"),
  alternates: {
    canonical: "/",
  },
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
      "Oficina mecânica completa, loja de peças, borracharia e estética para motos em Osasco SP. Troca de óleo, revisão, pneus, capacetes, guincho e muito mais.",
    type: "website",
    locale: "pt_BR",
    siteName: "RB Moto Parts",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "RB Moto Parts" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
