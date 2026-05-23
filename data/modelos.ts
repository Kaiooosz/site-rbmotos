export type Modelo = {
  nome: string;
  cc: string;
  tipo: "commuter" | "sport" | "adventure" | "scooter" | "naked" | "trail" | "custom";
};

export type Marca = {
  nome: string;
  cor: string;
  modelos: Modelo[];
};

export const marcas: Marca[] = [
  {
    nome: "Honda",
    cor: "#E2001A",
    modelos: [
      // CG — a mais vendida do Brasil
      { nome: "CG 125", cc: "125cc", tipo: "commuter" },
      { nome: "CG 125 Fan", cc: "125cc", tipo: "commuter" },
      { nome: "CG 150 Titan", cc: "150cc", tipo: "commuter" },
      { nome: "CG 150 Fan", cc: "150cc", tipo: "commuter" },
      { nome: "CG 160 Titan", cc: "160cc", tipo: "commuter" },
      { nome: "CG 160 Fan", cc: "160cc", tipo: "commuter" },
      { nome: "CG 160 Cargo", cc: "160cc", tipo: "commuter" },
      // Pop / Biz
      { nome: "Pop 100", cc: "100cc", tipo: "commuter" },
      { nome: "Pop 110i", cc: "110cc", tipo: "commuter" },
      { nome: "Biz 110i", cc: "110cc", tipo: "scooter" },
      { nome: "Biz 125", cc: "125cc", tipo: "scooter" },
      // Bros / XRE
      { nome: "NXR 150 Bros", cc: "150cc", tipo: "trail" },
      { nome: "NXR 160 Bros", cc: "160cc", tipo: "trail" },
      { nome: "NXR 190 Bros", cc: "190cc", tipo: "trail" },
      { nome: "XRE 190", cc: "190cc", tipo: "adventure" },
      { nome: "XRE 300", cc: "300cc", tipo: "adventure" },
      // CB / PCX
      { nome: "PCX 150", cc: "150cc", tipo: "scooter" },
      { nome: "ADV 160", cc: "160cc", tipo: "scooter" },
      { nome: "CB 300R", cc: "300cc", tipo: "naked" },
      { nome: "CB 300F", cc: "300cc", tipo: "naked" },
      { nome: "CB 500F", cc: "500cc", tipo: "naked" },
      { nome: "CB 500X", cc: "500cc", tipo: "adventure" },
      { nome: "CB 600F Hornet", cc: "600cc", tipo: "naked" },
      { nome: "CB 650R", cc: "650cc", tipo: "naked" },
      { nome: "CB 1000R", cc: "1000cc", tipo: "naked" },
      // Sport
      { nome: "Twister 250", cc: "250cc", tipo: "sport" },
      { nome: "CBR 300R", cc: "300cc", tipo: "sport" },
      { nome: "CBR 500R", cc: "500cc", tipo: "sport" },
      { nome: "CBR 600RR", cc: "600cc", tipo: "sport" },
      { nome: "CBR 1000RR Fireblade", cc: "1000cc", tipo: "sport" },
      // Adventure
      { nome: "NC 750X", cc: "750cc", tipo: "adventure" },
      { nome: "Africa Twin 1100", cc: "1100cc", tipo: "adventure" },
    ],
  },
  {
    nome: "Yamaha",
    cor: "#003087",
    modelos: [
      // Entry / commuter
      { nome: "Crypton 115", cc: "115cc", tipo: "commuter" },
      { nome: "Neo 115", cc: "115cc", tipo: "scooter" },
      { nome: "YBR 125", cc: "125cc", tipo: "commuter" },
      { nome: "Factor 125", cc: "125cc", tipo: "commuter" },
      { nome: "Factor 150", cc: "150cc", tipo: "commuter" },
      { nome: "YBR 150", cc: "150cc", tipo: "commuter" },
      // Fazer
      { nome: "Fazer 150", cc: "150cc", tipo: "naked" },
      { nome: "Fazer 250 FZ25", cc: "250cc", tipo: "naked" },
      // Crosser
      { nome: "Crosser 150", cc: "150cc", tipo: "trail" },
      { nome: "Crosser 150 Z", cc: "150cc", tipo: "trail" },
      { nome: "Crosser 150 S", cc: "150cc", tipo: "trail" },
      // MT (Naked)
      { nome: "MT-03", cc: "321cc", tipo: "naked" },
      { nome: "MT-07", cc: "689cc", tipo: "naked" },
      { nome: "MT-09", cc: "890cc", tipo: "naked" },
      { nome: "MT-10", cc: "998cc", tipo: "naked" },
      // Sport
      { nome: "YZF-R3", cc: "321cc", tipo: "sport" },
      { nome: "YZF-R7", cc: "689cc", tipo: "sport" },
      { nome: "YZF-R1", cc: "998cc", tipo: "sport" },
      // Adventure / Trail
      { nome: "Lander 250", cc: "250cc", tipo: "adventure" },
      { nome: "Tenere 250", cc: "250cc", tipo: "adventure" },
      { nome: "Tenere 700", cc: "689cc", tipo: "adventure" },
      { nome: "NMAX 160", cc: "155cc", tipo: "scooter" },
      { nome: "XMAX 250", cc: "250cc", tipo: "scooter" },
      // Classic
      { nome: "V-Star 650", cc: "649cc", tipo: "custom" },
      { nome: "Drag Star 650", cc: "649cc", tipo: "custom" },
    ],
  },
  {
    nome: "Kawasaki",
    cor: "#008000",
    modelos: [
      { nome: "W175", cc: "177cc", tipo: "custom" },
      { nome: "KLX 150", cc: "150cc", tipo: "trail" },
      { nome: "KLX 300", cc: "292cc", tipo: "trail" },
      { nome: "Z300", cc: "296cc", tipo: "naked" },
      { nome: "Z400", cc: "399cc", tipo: "naked" },
      { nome: "Z650", cc: "649cc", tipo: "naked" },
      { nome: "Z800", cc: "806cc", tipo: "naked" },
      { nome: "Z900", cc: "948cc", tipo: "naked" },
      { nome: "Z H2", cc: "998cc", tipo: "naked" },
      { nome: "Ninja 300", cc: "296cc", tipo: "sport" },
      { nome: "Ninja 400", cc: "399cc", tipo: "sport" },
      { nome: "Ninja 650", cc: "649cc", tipo: "sport" },
      { nome: "Ninja ZX-4RR", cc: "399cc", tipo: "sport" },
      { nome: "Ninja ZX-6R", cc: "636cc", tipo: "sport" },
      { nome: "Ninja ZX-10R", cc: "998cc", tipo: "sport" },
      { nome: "Ninja H2", cc: "998cc", tipo: "sport" },
      { nome: "Versys 300X", cc: "296cc", tipo: "adventure" },
      { nome: "Versys 650", cc: "649cc", tipo: "adventure" },
      { nome: "Versys 1000", cc: "1043cc", tipo: "adventure" },
      { nome: "Eliminator 500", cc: "451cc", tipo: "custom" },
    ],
  },
  {
    nome: "Suzuki",
    cor: "#1C4B9C",
    modelos: [
      { nome: "GS 120", cc: "120cc", tipo: "commuter" },
      { nome: "GS 160", cc: "160cc", tipo: "commuter" },
      { nome: "Intruder 125", cc: "125cc", tipo: "custom" },
      { nome: "Intruder 250", cc: "249cc", tipo: "custom" },
      { nome: "Burgman 125", cc: "125cc", tipo: "scooter" },
      { nome: "Burgman 400", cc: "400cc", tipo: "scooter" },
      { nome: "V-Strom 250", cc: "249cc", tipo: "adventure" },
      { nome: "V-Strom 650", cc: "645cc", tipo: "adventure" },
      { nome: "V-Strom 1050", cc: "1037cc", tipo: "adventure" },
      { nome: "GSX-S750", cc: "749cc", tipo: "naked" },
      { nome: "GSX-S1000", cc: "999cc", tipo: "naked" },
      { nome: "GSX-S1000GT", cc: "999cc", tipo: "naked" },
      { nome: "GSX-R600", cc: "599cc", tipo: "sport" },
      { nome: "GSX-R750", cc: "749cc", tipo: "sport" },
      { nome: "GSX-R1000", cc: "999cc", tipo: "sport" },
      { nome: "DR 650S", cc: "644cc", tipo: "trail" },
      { nome: "Boulevard M800", cc: "805cc", tipo: "custom" },
      { nome: "Boulevard M1800", cc: "1783cc", tipo: "custom" },
      { nome: "Hayabusa", cc: "1340cc", tipo: "sport" },
      { nome: "Katana", cc: "999cc", tipo: "naked" },
    ],
  },
  {
    nome: "BMW",
    cor: "#0066B1",
    modelos: [
      { nome: "G 310 R", cc: "313cc", tipo: "naked" },
      { nome: "G 310 GS", cc: "313cc", tipo: "adventure" },
      { nome: "F 750 GS", cc: "853cc", tipo: "adventure" },
      { nome: "F 850 GS", cc: "853cc", tipo: "adventure" },
      { nome: "F 900 R", cc: "895cc", tipo: "naked" },
      { nome: "F 900 XR", cc: "895cc", tipo: "adventure" },
      { nome: "R 1250 GS", cc: "1254cc", tipo: "adventure" },
      { nome: "R 1250 GS Adventure", cc: "1254cc", tipo: "adventure" },
      { nome: "R 1250 RT", cc: "1254cc", tipo: "adventure" },
      { nome: "R 1250 R", cc: "1254cc", tipo: "naked" },
      { nome: "R nineT", cc: "1170cc", tipo: "custom" },
      { nome: "R nineT Scrambler", cc: "1170cc", tipo: "trail" },
      { nome: "S 1000 RR", cc: "999cc", tipo: "sport" },
      { nome: "S 1000 R", cc: "999cc", tipo: "naked" },
      { nome: "S 1000 XR", cc: "999cc", tipo: "adventure" },
      { nome: "M 1000 RR", cc: "999cc", tipo: "sport" },
      { nome: "C 400 X", cc: "350cc", tipo: "scooter" },
      { nome: "C 400 GT", cc: "350cc", tipo: "scooter" },
    ],
  },
  {
    nome: "Triumph",
    cor: "#D4A017",
    modelos: [
      { nome: "Trident 660", cc: "660cc", tipo: "naked" },
      { nome: "Street Triple R", cc: "765cc", tipo: "naked" },
      { nome: "Street Triple RS", cc: "765cc", tipo: "naked" },
      { nome: "Speed Triple 1200", cc: "1160cc", tipo: "naked" },
      { nome: "Speed Twin 900", cc: "900cc", tipo: "naked" },
      { nome: "Speed Twin 1200", cc: "1200cc", tipo: "naked" },
      { nome: "Bonneville T100", cc: "900cc", tipo: "custom" },
      { nome: "Bonneville T120", cc: "1200cc", tipo: "custom" },
      { nome: "Scrambler 900", cc: "900cc", tipo: "trail" },
      { nome: "Scrambler 1200 XC", cc: "1200cc", tipo: "trail" },
      { nome: "Tiger 660 Sport", cc: "660cc", tipo: "adventure" },
      { nome: "Tiger 850 Sport", cc: "888cc", tipo: "adventure" },
      { nome: "Tiger 900", cc: "888cc", tipo: "adventure" },
      { nome: "Tiger 900 GT", cc: "888cc", tipo: "adventure" },
      { nome: "Tiger 1200", cc: "1160cc", tipo: "adventure" },
      { nome: "Rocket 3 R", cc: "2458cc", tipo: "custom" },
      { nome: "Thruxton RS", cc: "1200cc", tipo: "custom" },
    ],
  },
  {
    nome: "KTM",
    cor: "#FF6600",
    modelos: [
      { nome: "Duke 200", cc: "200cc", tipo: "naked" },
      { nome: "Duke 390", cc: "373cc", tipo: "naked" },
      { nome: "Duke 790", cc: "799cc", tipo: "naked" },
      { nome: "Duke 890", cc: "889cc", tipo: "naked" },
      { nome: "Duke 1290 Super", cc: "1301cc", tipo: "naked" },
      { nome: "RC 200", cc: "200cc", tipo: "sport" },
      { nome: "RC 390", cc: "373cc", tipo: "sport" },
      { nome: "Adventure 390", cc: "373cc", tipo: "adventure" },
      { nome: "Adventure 790", cc: "799cc", tipo: "adventure" },
      { nome: "Adventure 890", cc: "889cc", tipo: "adventure" },
      { nome: "Adventure 1290 Super", cc: "1301cc", tipo: "adventure" },
      { nome: "EXC 250", cc: "249cc", tipo: "trail" },
      { nome: "EXC 300", cc: "293cc", tipo: "trail" },
      { nome: "EXC-F 350", cc: "349cc", tipo: "trail" },
      { nome: "EXC-F 500", cc: "510cc", tipo: "trail" },
    ],
  },
  {
    nome: "Royal Enfield",
    cor: "#8B0000",
    modelos: [
      { nome: "Meteor 350", cc: "349cc", tipo: "custom" },
      { nome: "Classic 350", cc: "349cc", tipo: "custom" },
      { nome: "Classic 500", cc: "499cc", tipo: "custom" },
      { nome: "Bullet 350", cc: "349cc", tipo: "custom" },
      { nome: "Thunderbird 350X", cc: "346cc", tipo: "custom" },
      { nome: "Himalayan", cc: "411cc", tipo: "adventure" },
      { nome: "Scram 411", cc: "411cc", tipo: "trail" },
      { nome: "Interceptor 650", cc: "648cc", tipo: "naked" },
      { nome: "Continental GT 650", cc: "648cc", tipo: "sport" },
      { nome: "Super Meteor 650", cc: "648cc", tipo: "custom" },
    ],
  },
];

// Modelos mais buscados por categoria de produto
export const modelosPorCategoria: Record<string, string[]> = {
  "Pneus": [
    "CG 160", "Fazer 250", "CB 300R", "XRE 300", "Ninja 300",
    "MT-03", "Factor 150", "Bros 160", "Crosser 150", "Lander 250",
    "Tenere 700", "F 850 GS", "R 1250 GS",
  ],
  "Capacetes": [
    "CG 160", "Fazer 250", "CB 300R", "Ninja 400", "MT-03",
    "CB 500X", "Crosser 150", "Pop 110i", "Biz 125",
  ],
  "Escapamentos": [
    "CB 300R", "CB 600F Hornet", "CB 1000R", "MT-07", "MT-09",
    "Ninja 650", "Z900", "CBR 600RR", "Fazer 250", "Duke 390",
    "Street Triple RS", "S 1000 RR",
  ],
  "Lubrificantes": [
    "CG 160 Titan", "CG 160 Fan", "Fazer 250", "Factor 150",
    "CB 300R", "Bros 160", "Pop 110i", "Biz 125", "Crosser 150",
    "XRE 300", "MT-03", "Ninja 300", "Lander 250",
  ],
  "Baterias": [
    "CG 160", "Fazer 250", "CB 300R", "PCX 150", "Biz 125",
    "Factor 150", "MT-03", "Ninja 400", "NMAX 160",
    "CB 500F", "R 1250 GS",
  ],
  "Relação": [
    "CG 160 Titan", "CG 160 Fan", "Factor 150", "Fazer 250",
    "Bros 160", "Crosser 150", "CB 300R", "XRE 300", "Lander 250",
    "Ninja 300", "MT-03", "Duke 390",
  ],
  "Freios": [
    "CB 300R", "Fazer 250", "MT-03", "Ninja 400", "Z400",
    "CB 500F", "CBR 600RR", "Ninja ZX-6R", "S 1000 RR",
    "R 1250 GS", "CG 160", "XRE 300",
  ],
  "Suspensão": [
    "XRE 300", "Tenere 700", "Lander 250", "Bros 160", "F 850 GS",
    "R 1250 GS", "Tiger 900", "KTM Adventure 790", "Crosser 150",
    "CB 500X", "Himalayan", "Versys 650",
  ],
  "Elétrica": [
    "CG 160", "Pop 110i", "Biz 125", "Fazer 250", "Factor 150",
    "PCX 150", "CB 300R", "Bros 160", "XRE 300", "MT-03",
    "Ninja 300", "NMAX 160",
  ],
  "Performance": [
    "CB 600F Hornet", "CB 1000R", "MT-07", "MT-09", "Ninja ZX-6R",
    "Z900", "CBR 1000RR", "S 1000 RR", "GSX-R1000", "Duke 890",
    "Street Triple RS", "Speed Triple 1200",
  ],
  "Acessórios": [
    "R 1250 GS", "Tiger 900", "Tenere 700", "F 850 GS", "CB 500X",
    "Versys 650", "KTM Adventure", "Himalayan", "Lander 250",
    "V-Strom 650",
  ],
  "Vestuário": [
    "CG 160", "Fazer 250", "CB 300R", "MT-03", "Ninja 400",
    "CBR 600RR", "S 1000 RR", "R 1250 GS",
  ],
  "Proteção": [
    "CG 160", "Bros 160", "Fazer 250", "CB 300R", "MT-03",
    "Ninja 400", "CBR 600RR", "R 1250 GS", "Tiger 900",
  ],
};

// Todos os modelos em lista plana para SEO
export const todosModelos = marcas.flatMap(m =>
  m.modelos.map(mod => `${m.nome} ${mod.nome}`)
);
