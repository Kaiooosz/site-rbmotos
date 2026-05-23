import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import Script from "next/script";
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
  title: "RB Moto Parts — Oficina e Loja de Motos em Osasco SP | Helena Maria",
  description:
    "Oficina mecânica completa, loja de peças, borracharia e estética para motos em Osasco SP — bairro Helena Maria, próximo à Rodovia Raposo Tavares e Av. dos Autonomistas. Atendemos Carapicuíba, Barueri, Cotia, Jandira e toda Zona Oeste de SP. Troca de óleo, revisão, pneus, capacetes, guincho e muito mais.",
  keywords: [
    // ── Serviços prioritários
    "oficina de motos osasco",
    "mecânica moto osasco sp",
    "troca de óleo moto osasco",
    "revisão moto osasco",
    "revisão completa moto osasco",
    "borracharia moto osasco",
    "troca de pneu moto osasco",
    "balanceamento moto osasco",
    "estética moto osasco",
    "polimento moto osasco",
    "lavagem moto osasco",
    "injeção eletrônica moto osasco",
    "elétrica moto osasco",
    "suspensão moto osasco",
    "freio moto osasco",
    "embreagem moto osasco",
    "guincho moto osasco",
    "guincho moto carapicuíba",
    "atendimento delivery moto osasco",
    // ── Produtos prioritários
    "peças para moto osasco",
    "loja de peças moto osasco",
    "capacetes moto osasco",
    "pneu moto osasco pirelli michelin bridgestone",
    "escapamento moto osasco akrapovic yoshimura",
    "bateria moto osasco yuasa",
    "relação moto osasco did rk",
    "lubrificante moto osasco motul castrol",
    // ── Cidades a conquistar
    "oficina moto carapicuíba",
    "mecânica moto carapicuíba",
    "peças moto carapicuíba",
    "oficina moto barueri",
    "mecânica moto barueri",
    "oficina moto cotia",
    "oficina moto jandira",
    "oficina moto itapevi",
    "oficina moto santana de parnaíba",
    "oficina moto alphaville",
    "oficina moto zona oeste sp",
    "mecânica moto raposo tavares",
    // ── Bairros estratégicos de Osasco
    "oficina moto helena maria osasco",
    "oficina moto jardim d'abril osasco",
    "mecânica moto presidente altino osasco",
    "oficina moto km 18 osasco",
    "oficina moto jardim veloso osasco",
    "oficina moto bonança osasco",
    "oficina moto jardim padroeira osasco",
    "oficina moto cohab osasco",
    "oficina moto umuarama osasco",
    "oficina moto piratininga osasco",
    "oficina moto rochdale osasco",
    "oficina moto pestana osasco",
    // ── Corredores de tráfego
    "oficina moto próximo raposo tavares",
    "mecânica moto av autonomistas osasco",
    "oficina moto sp-280 castelo branco",
    "mecânica moto av brasil osasco",
    "oficina moto franz voegeli osasco",
    // ── Público motoboy
    "oficina motoboy osasco",
    "mecânica motoboy osasco",
    "emergência moto osasco",
    "socorro moto osasco",
    // ── Marca
    "rb moto parts",
    "rb motoparts",
    "rb motoparts osasco",
  ].join(", "),
  authors: [{ name: "RB Moto Parts" }],
  creator: "RB Moto Parts",
  metadataBase: new URL("https://site-oficial.vercel.app"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/icon-192.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "RB Moto Parts — Oficina e Loja de Motos em Osasco SP",
    description:
      "Oficina mecânica completa, peças, borracharia e estética em Osasco SP. Próximo ao Raposo Tavares. Atendemos Carapicuíba, Barueri, Cotia e região.",
    type: "website",
    locale: "pt_BR",
    siteName: "RB Moto Parts",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "RB Moto Parts" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

// JSON-LD — LocalBusiness para Google
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "RB Moto Parts",
  description:
    "Oficina mecânica completa, loja de peças, borracharia e estética para motos em Osasco SP.",
  url: "https://site-oficial.vercel.app",
  telephone: "+55-11-93452-1534",
  email: "rbmotoparts8@gmail.com",
  image: "https://site-oficial.vercel.app/icon-512.png",
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Pres. Costa e Silva, 534",
    addressLocality: "Osasco",
    addressRegion: "SP",
    postalCode: "06253-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5013919,
    longitude: -46.792689,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  areaServed: [
    "Osasco", "Helena Maria", "Carapicuíba", "Barueri", "Cotia",
    "Jandira", "Itapevi", "Santana de Parnaíba", "Alphaville",
    "Presidente Altino", "Jardim D'Abril", "Km 18", "Rochdale",
  ],
  hasMap: "https://maps.app.goo.gl/NCfPPg7uhYhpic6D7",
  sameAs: [
    "https://www.instagram.com/rbmoto_parts",
    "https://maps.app.goo.gl/NCfPPg7uhYhpic6D7",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Google Analytics 4 — G-Z8JJBK5X6L */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Z8JJBK5X6L"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z8JJBK5X6L');
        `}
      </Script>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
