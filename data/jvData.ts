export interface EquityPartner {
  partner: string;
  ticker?: string;
  percent: number;
  role: string;
}

export interface TickerInfo {
  exchange: string;
  symbol: string;
  companyName?: string;
  price?: string;
  change24h?: string;
}

export interface JointVentureItem {
  id: string;
  company: string;
  equityBreakdown: EquityPartner[];
  tickers: TickerInfo[];
  primaryAsset: string;
  primaryRole: string;
  region: string;
  status: "Active Operations" | "Expansion" | "Development" | "Underground Block Cave";
  annualProductionOz: number;
  aiscPerOz: number;
  provenReservesMoz: number;
  mineType: string;
  operator: string;
  esgScore: string;
  ownershipType: "Joint Venture" | "Consolidated 100%" | "State-Partnered JV";
  highlighted?: boolean;
}

export const JV_DATA: JointVentureItem[] = [
  {
    id: "wagagai-gold-uganda",
    company: "Wagagai Mining (Uganda) Limited",
    ownershipType: "State-Partnered JV",
    highlighted: true,
    equityBreakdown: [
      { partner: "Wagagai Mining Group", ticker: "USE / Private Desk", percent: 85, role: "Operator & Refining Developer" },
      { partner: "Government of Uganda (MEMD)", ticker: "Uganda National Concession", percent: 15, role: "State Free Carry & Royalty Partner" },
    ],
    tickers: [
      { exchange: "USE", symbol: "WGG", companyName: "Wagagai Busia Desk", price: "UGX 18,500", change24h: "+2.80%" },
      { exchange: "OTC", symbol: "WGG.UG", companyName: "Uganda Gold Desk", price: "UGX 18,650", change24h: "+2.15%" },
    ],
    primaryAsset: "Wagagai Busia Gold Mine & Modern Refinery",
    primaryRole: "Operates Busia Gold Complex (Uganda's premier integrated mine and refinery facility)",
    region: "Busia District, Eastern Uganda",
    status: "Active Operations",
    annualProductionOz: 165000,
    aiscPerOz: 890,
    provenReservesMoz: 4.8,
    mineType: "Modern Open Pit & Carbon-in-Leach (CIL) Gold Refinery",
    operator: "Wagagai Mining (Uganda) Limited",
    esgScore: "AAA - Connected to Uganda National Grid (100% Clean Hydro) & Community Trust",
  },
  {
    id: "karamoja-gold-jv",
    company: "Karamoja Gold Consortium / UNMC",
    ownershipType: "State-Partnered JV",
    highlighted: true,
    equityBreakdown: [
      { partner: "East Africa Mining Consortium", ticker: "EAMC Regional", percent: 65, role: "Operator & Technical Lead" },
      { partner: "Uganda National Mining Corp (State)", ticker: "UNMC Uganda", percent: 35, role: "State Equity Shareholder" },
    ],
    tickers: [
      { exchange: "USE", symbol: "UNMC", companyName: "Karamoja Concession", price: "UGX 42,000", change24h: "+1.65%" },
      { exchange: "EAX", symbol: "KRM.UG", companyName: "East Africa Exchange", price: "UGX 41,800", change24h: "+1.90%" },
    ],
    primaryAsset: "Rupa & Lokales Gold Corridor Concessions",
    primaryRole: "Explores and operates the expansive Karamoja Greenstone Gold Belt in Eastern Uganda",
    region: "Moroto & Kotido, Karamoja, Uganda",
    status: "Development",
    annualProductionOz: 120000,
    aiscPerOz: 920,
    provenReservesMoz: 6.2,
    mineType: "High-Grade Hardrock Open Pit & Modern Heap Leach",
    operator: "Uganda National Mining Corp & Partners",
    esgScore: "AA - Solar Mini-Grid & Karamoja Regional Pastoral Water Harvesting Initiative",
  },
  {
    id: "kibali-goldmines",
    company: "Kibali Goldmines SA",
    ownershipType: "Joint Venture",
    highlighted: true,
    equityBreakdown: [
      { partner: "Barrick Gold", ticker: "NYSE: GOLD / TSX: ABX", percent: 45, role: "Operator" },
      { partner: "AngloGold Ashanti", ticker: "NYSE: AU / JSE: ANG", percent: 45, role: "Joint Venture Partner" },
      { partner: "SOKIMO (State)", ticker: "State Enterprise", percent: 10, role: "Government Shareholder" },
    ],
    tickers: [
      { exchange: "NYSE", symbol: "GOLD", price: "UGX 75,665 ($20.45)", change24h: "+1.85%" },
      { exchange: "TSX", symbol: "ABX", companyName: "Barrick", price: "UGX 103,230 (CA$27.90)", change24h: "+1.72%" },
      { exchange: "NYSE", symbol: "AU", price: "UGX 104,710 ($28.30)", change24h: "+2.14%" },
      { exchange: "JSE", symbol: "ANG", companyName: "AngloGold", price: "UGX 103,450 (ZAR 520)", change24h: "+2.05%" },
    ],
    primaryAsset: "Kibali Gold Mine (Kampala Supply Corridor)",
    primaryRole: "Operates Kibali (East & Central Africa's largest gold mine with Kampala regional logistical desk)",
    region: "Haut-Uélé / East Africa Corridor",
    status: "Active Operations",
    annualProductionOz: 760000,
    aiscPerOz: 980,
    provenReservesMoz: 9.2,
    mineType: "Automated Underground & Twin Open Pits",
    operator: "Barrick Gold Corporation",
    esgScore: "AAA - 3 Micro-Hydro Power Stations (80% Renewable)",
  },
  {
    id: "nevada-gold-mines",
    company: "Nevada Gold Mines LLC",
    ownershipType: "Joint Venture",
    equityBreakdown: [
      { partner: "Barrick Gold", ticker: "NYSE: GOLD", percent: 61.5, role: "Operator" },
      { partner: "Newmont Corporation", ticker: "NYSE: NEM", percent: 38.5, role: "Joint Venture Partner" },
    ],
    tickers: [
      { exchange: "NYSE", symbol: "GOLD", companyName: "Barrick (61.5%)", price: "$20.45", change24h: "+1.85%" },
      { exchange: "NYSE", symbol: "NEM", companyName: "Newmont (38.5%)", price: "$49.12", change24h: "+1.40%" },
    ],
    primaryAsset: "Carlin, Cortez, Turquoise Ridge & Goldstrike Complex",
    primaryRole: "Operates Nevada Complex (World's largest single gold mining complex)",
    region: "Nevada, United States",
    status: "Active Operations",
    annualProductionOz: 3100000,
    aiscPerOz: 1150,
    provenReservesMoz: 29.5,
    mineType: "Multi-Mine Heap Leach, Autoclave & Underground",
    operator: "Barrick Gold Corporation",
    esgScore: "AA - 200MW Solar Facility Integration",
  },
  {
    id: "pueblo-viejo",
    company: "Pueblo Viejo Dominicana Corporation",
    ownershipType: "Joint Venture",
    equityBreakdown: [
      { partner: "Barrick Gold", ticker: "NYSE: GOLD", percent: 60, role: "Operator" },
      { partner: "Newmont Corporation", ticker: "NYSE: NEM", percent: 40, role: "Joint Venture Partner" },
    ],
    tickers: [
      { exchange: "NYSE", symbol: "GOLD", companyName: "Barrick (60%)", price: "$20.45", change24h: "+1.85%" },
      { exchange: "NYSE", symbol: "NEM", companyName: "Newmont (40%)", price: "$49.12", change24h: "+1.40%" },
    ],
    primaryAsset: "Pueblo Viejo Mine",
    primaryRole: "Operates Pueblo Viejo (Tier-1 Caribbean autoclave bio-leach asset)",
    region: "Sánchez Ramírez, Dominican Republic",
    status: "Expansion",
    annualProductionOz: 720000,
    aiscPerOz: 1040,
    provenReservesMoz: 11.8,
    mineType: "Open Pit & Pressure Oxidation Autoclave",
    operator: "Barrick Gold Corporation",
    esgScore: "AA - Plant Expansion & Tailings Management",
  },
  {
    id: "grasberg-jv",
    company: "PT Freeport Indonesia / Grasberg JV",
    ownershipType: "State-Partnered JV",
    equityBreakdown: [
      { partner: "PT Mind ID / Inalum (State)", ticker: "IDX: ANTM", percent: 51.24, role: "Majority Government Owner" },
      { partner: "Freeport-McMoRan", ticker: "NYSE: FCX", percent: 48.76, role: "Operator" },
    ],
    tickers: [
      { exchange: "NYSE", symbol: "FCX", companyName: "Freeport", price: "$44.80", change24h: "+0.95%" },
      { exchange: "IDX", symbol: "ANTM", companyName: "Mind ID State", price: "IDR 1,540", change24h: "+0.65%" },
    ],
    primaryAsset: "Grasberg Block Cave Complex",
    primaryRole: "Operates Grasberg (World's 2nd largest gold mine & copper producer)",
    region: "Mimika, Papua, Indonesia",
    status: "Underground Block Cave",
    annualProductionOz: 1850000,
    aiscPerOz: 620,
    provenReservesMoz: 26.3,
    mineType: "Massive Underground Block Caving",
    operator: "Freeport-McMoRan Inc.",
    esgScore: "A - Large Scale Slurry Pipeline Transport",
  },
  {
    id: "loulo-gounkoto",
    company: "Société des Mines de Loulo & Gounkoto",
    ownershipType: "State-Partnered JV",
    equityBreakdown: [
      { partner: "Barrick Gold", ticker: "NYSE: GOLD", percent: 80, role: "Operator" },
      { partner: "Government of Mali", ticker: "State Enterprise", percent: 20, role: "Government Shareholder" },
    ],
    tickers: [
      { exchange: "NYSE", symbol: "GOLD", companyName: "Barrick (80%)", price: "$20.45", change24h: "+1.85%" },
      { exchange: "TSX", symbol: "ABX", companyName: "Barrick", price: "CA$27.90", change24h: "+1.72%" },
    ],
    primaryAsset: "Loulo-Gounkoto Complex",
    primaryRole: "Operates Loulo-Gounkoto (West Africa's flagship gold producing hub)",
    region: "Kayes Region, Mali",
    status: "Active Operations",
    annualProductionOz: 680000,
    aiscPerOz: 1080,
    provenReservesMoz: 6.7,
    mineType: "Underground Yalea & Gara + Gounkoto Open Pit",
    operator: "Barrick Gold Corporation",
    esgScore: "AA - 20MW Solar Hybrid Grid",
  },
  {
    id: "canadian-malartic",
    company: "Canadian Malartic Mining Complex",
    ownershipType: "Consolidated 100%",
    equityBreakdown: [
      { partner: "Agnico Eagle Mines", ticker: "NYSE: AEM / TSX: AEM", percent: 100, role: "100% Owner & Operator" },
    ],
    tickers: [
      { exchange: "NYSE", symbol: "AEM", price: "$82.15", change24h: "+2.40%" },
      { exchange: "TSX", symbol: "AEM", companyName: "Agnico Eagle", price: "CA$112.40", change24h: "+2.35%" },
    ],
    primaryAsset: "Canadian Malartic & Odyssey Project",
    primaryRole: "Operates Canadian Malartic (Canada's premier long-life gold operation)",
    region: "Quebec, Canada",
    status: "Active Operations",
    annualProductionOz: 660000,
    aiscPerOz: 1010,
    provenReservesMoz: 12.1,
    mineType: "Open Pit Transitioning to Odyssey Underground",
    operator: "Agnico Eagle Mines Limited",
    esgScore: "AAA - Hydroelectric Grid Powered",
  },
  {
    id: "cadia-valley",
    company: "Cadia Valley Mining Operations",
    ownershipType: "Consolidated 100%",
    equityBreakdown: [
      { partner: "Newmont Corporation", ticker: "NYSE: NEM / ASX: NEM", percent: 100, role: "100% Owner & Operator" },
    ],
    tickers: [
      { exchange: "NYSE", symbol: "NEM", price: "$49.12", change24h: "+1.40%" },
      { exchange: "ASX", symbol: "NEM", companyName: "Newmont Ltd", price: "A$74.30", change24h: "+1.30%" },
    ],
    primaryAsset: "Cadia East Panel Cave Mine",
    primaryRole: "Operates Cadia East (Low-cost Tier-1 Australian gold & copper asset)",
    region: "New South Wales, Australia",
    status: "Active Operations",
    annualProductionOz: 590000,
    aiscPerOz: 580,
    provenReservesMoz: 18.4,
    mineType: "Underground Panel Cave",
    operator: "Newmont Corporation",
    esgScore: "AA - Low Carbon Hydro-Electric Off-Take",
  },
  {
    id: "detour-lake",
    company: "Detour Lake Gold Complex",
    ownershipType: "Consolidated 100%",
    equityBreakdown: [
      { partner: "Agnico Eagle Mines", ticker: "NYSE: AEM / TSX: AEM", percent: 100, role: "100% Owner & Operator" },
    ],
    tickers: [
      { exchange: "NYSE", symbol: "AEM", price: "$82.15", change24h: "+2.40%" },
      { exchange: "TSX", symbol: "AEM", companyName: "Agnico Eagle", price: "CA$112.40", change24h: "+2.35%" },
    ],
    primaryAsset: "Detour Lake Mine",
    primaryRole: "Operates Detour Lake (Ultra long-life Canadian open pit powerhouse)",
    region: "Ontario, Canada",
    status: "Expansion",
    annualProductionOz: 730000,
    aiscPerOz: 970,
    provenReservesMoz: 15.6,
    mineType: "High-Capacity Open Pit",
    operator: "Agnico Eagle Mines Limited",
    esgScore: "AAA - Zero Carbon Hydro Connection",
  },
  {
    id: "boddington",
    company: "Boddington Gold Operation",
    ownershipType: "Consolidated 100%",
    equityBreakdown: [
      { partner: "Newmont Corporation", ticker: "NYSE: NEM / ASX: NEM", percent: 100, role: "100% Owner & Operator" },
    ],
    tickers: [
      { exchange: "NYSE", symbol: "NEM", price: "$49.12", change24h: "+1.40%" },
      { exchange: "ASX", symbol: "NEM", companyName: "Newmont Ltd", price: "A$74.30", change24h: "+1.30%" },
    ],
    primaryAsset: "Boddington Open Pit Complex",
    primaryRole: "Operates Boddington (Western Australia's largest open pit gold mine)",
    region: "Western Australia, Australia",
    status: "Active Operations",
    annualProductionOz: 790000,
    aiscPerOz: 1190,
    provenReservesMoz: 11.2,
    mineType: "Autonomous Haulage Open Pit",
    operator: "Newmont Corporation",
    esgScore: "AA - 100% Autonomous Electric Haul Fleet",
  },
  {
    id: "norte-abierto",
    company: "Norte Abierto JV (Cerro Casale & Caspiche)",
    ownershipType: "Joint Venture",
    equityBreakdown: [
      { partner: "Barrick Gold", ticker: "NYSE: GOLD", percent: 50, role: "Co-Operator" },
      { partner: "Kinross Gold", ticker: "NYSE: KGC / TSX: K", percent: 50, role: "Co-Operator" },
    ],
    tickers: [
      { exchange: "NYSE", symbol: "GOLD", companyName: "Barrick (50%)", price: "$20.45", change24h: "+1.85%" },
      { exchange: "NYSE", symbol: "KGC", companyName: "Kinross (50%)", price: "$9.85", change24h: "+3.10%" },
      { exchange: "TSX", symbol: "K", companyName: "Kinross", price: "CA$13.40", change24h: "+3.00%" },
    ],
    primaryAsset: "Cerro Casale & Caspiche Deposits",
    primaryRole: "Holds Norte Abierto (Giant undeveloped copper-gold megaproject in Chile)",
    region: "Atacama Region, Chile",
    status: "Development",
    annualProductionOz: 1000000,
    aiscPerOz: 850,
    provenReservesMoz: 23.2,
    mineType: "Planned Open Pit & Block Cave",
    operator: "Norte Abierto Management Committee",
    esgScore: "Pending Desalinated Water Permitting",
  },
  {
    id: "fruta-del-norte",
    company: "Fruta del Norte Operation",
    ownershipType: "State-Partnered JV",
    equityBreakdown: [
      { partner: "Lundin Gold Inc.", ticker: "TSX: LUG / OTC: LUGDF", percent: 80.1, role: "Operator" },
      { partner: "Newmont Corporation", ticker: "NYSE: NEM", percent: 19.9, role: "Strategic Equity Partner" },
    ],
    tickers: [
      { exchange: "TSX", symbol: "LUG", companyName: "Lundin Gold", price: "CA$24.50", change24h: "+2.90%" },
      { exchange: "OTC", symbol: "LUGDF", companyName: "Lundin Gold", price: "$17.80", change24h: "+2.80%" },
      { exchange: "NYSE", symbol: "NEM", companyName: "Newmont (19.9%)", price: "$49.12", change24h: "+1.40%" },
    ],
    primaryAsset: "Fruta del Norte Underground Mine",
    primaryRole: "Operates Fruta del Norte (Ultra high-grade gold asset in Ecuador)",
    region: "Zamora-Chinchipe, Ecuador",
    status: "Active Operations",
    annualProductionOz: 480000,
    aiscPerOz: 840,
    provenReservesMoz: 5.0,
    mineType: "High-Grade Underground Drift-and-Fill",
    operator: "Lundin Gold Inc.",
    esgScore: "AAA - National Award for Sustainable Mining",
  },
  {
    id: "muruntau-nmmc",
    company: "Muruntau Complex (NMMC)",
    ownershipType: "Consolidated 100%",
    equityBreakdown: [
      { partner: "Navoi Mining & Metallurgical Combinat", ticker: "State Enterprise", percent: 100, role: "State Owner & Operator" },
    ],
    tickers: [
      { exchange: "OTC", symbol: "NMMC", companyName: "State Enterprise", price: "N/A (State)", change24h: "0.0%" },
    ],
    primaryAsset: "Muruntau Open Pit Supermine",
    primaryRole: "Operates Muruntau (World's largest single open-pit gold mine by area)",
    region: "Kyzylkum Desert, Uzbekistan",
    status: "Active Operations",
    annualProductionOz: 2500000,
    aiscPerOz: 650,
    provenReservesMoz: 71.0,
    mineType: "Massive Open Pit (>600m depth)",
    operator: "Navoi Mining & Metallurgical Combinat (NMMC)",
    esgScore: "A - Massive Regional Hydro Infrastructure",
  },
];

export interface LiveMarketTicker {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export const LIVE_MARKET_TICKERS: LiveMarketTicker[] = [
  { symbol: "XAU/UGX", name: "Gold Spot (UGX)", price: "UGX 10,169,450/oz", change: "+1.24%", isPositive: true },
  { symbol: "USD/UGX", name: "USD to UGX", price: "UGX 3,700.00", change: "-0.15%", isPositive: false },
  { symbol: "XAG/UGX", name: "Silver Spot (UGX)", price: "UGX 117,845/oz", change: "+0.82%", isPositive: true },
  { symbol: "USE: WGG", name: "Wagagai Mining (Uganda)", price: "UGX 18,500", change: "+2.80%", isPositive: true },
  { symbol: "USE: UNMC", name: "Karamoja Concession", price: "UGX 42,000", change: "+1.65%", isPositive: true },
  { symbol: "NYSE: GOLD", name: "Barrick Gold Corp", price: "UGX 75,665 ($20.45)", change: "+1.85%", isPositive: true },
  { symbol: "NYSE: AU", name: "AngloGold Ashanti", price: "UGX 104,710 ($28.30)", change: "+2.14%", isPositive: true },
  { symbol: "XAU/USD", name: "Gold Benchmark (USD)", price: "$2,748.50", change: "+1.24%", isPositive: true },
];
