/**
 * AurumBridge Global — gold-bar brokerage content.
 *
 * Premiums are INDICATIVE ranges over LBMA-linked spot and vary with brand,
 * order size and market conditions. Always confirm with a live quote.
 */

export const BRAND = {
  name: "AurumBridge",
  suffix: "Global",
  tagline: "Gold brokerage & precious metals sourcing",
  email: "trade@aurumbridge.global",
  phoneNumbers: ["0767033189", "0747742997"],
  whatsappUrl: "https://wa.me/254767033189",
  whatsappNumbers: [
    { number: "0767033189", url: "https://wa.me/254767033189" },
    { number: "0747742997", url: "https://wa.me/254747742997" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Gold Bars", href: "/gold-bars" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export type ProductId = "minted" | "cast" | "good-delivery" | "vault";

export interface GoldProduct {
  id: ProductId;
  name: string;
  range: string;
  icon: "coins" | "layers" | "landmark" | "vault";
  summary: string;
  sizes: string[];
  purity: string;
  packaging: string;
  premium: string;
  bestFor: string;
}

export const PRODUCTS: GoldProduct[] = [
  {
    id: "minted",
    name: "Minted Bars",
    range: "1 g – 100 g",
    icon: "coins",
    summary:
      "Struck from gold blanks and sealed in tamper-evident assay cards with a laser-engraved serial number. The easiest bar to hold, gift and resell.",
    sizes: ["1 g", "5 g", "10 g", "20 g", "50 g", "100 g", "1 oz"],
    purity: "Up to 999.9 fine gold",
    packaging: "Sealed assay card + certificate",
    premium: "≈ 3–6% over spot (higher on the smallest sizes)",
    bestFor: "First-time buyers, gifting, flexible exits",
  },
  {
    id: "cast",
    name: "Cast Bars",
    range: "100 g – 1 kg",
    icon: "layers",
    summary:
      "Poured and hand-finished by LBMA-accredited refiners. Lower premiums than minted bars, with the refiner hallmark, fineness and serial number stamped on every bar.",
    sizes: ["100 g", "250 g", "500 g", "1 kg"],
    purity: "995.0 – 999.9 fine gold",
    packaging: "Refiner-sealed, serial-numbered",
    premium: "≈ 1–3% over spot",
    bestFor: "Private investors and family offices stacking value",
  },
  {
    id: "good-delivery",
    name: "Good Delivery Bars",
    range: "≈ 400 oz (12.4 kg)",
    icon: "landmark",
    summary:
      "The LBMA benchmark bar used by central banks, refiners and bullion banks: 350–430 troy oz gross weight at a minimum fineness of 995.0. The lowest premium and the deepest liquidity.",
    sizes: ["350 – 430 oz bars", "Multi-bar lots"],
    purity: "Min. 995.0 fine gold",
    packaging: "Refiner-stamped, individually numbered",
    premium: "Typically below 1% over spot",
    bestFor: "Institutions, refineries and bulk OTC trades",
  },
  {
    id: "vault",
    name: "Vault & Logistics",
    range: "Allocated storage",
    icon: "vault",
    summary:
      "Take delivery insured to your door, or keep your bars allocated in a partner vault in a major bullion hub such as Zurich, Singapore, London or Dubai.",
    sizes: ["Door-to-door insured", "Allocated vault storage"],
    purity: "Bars stay in original refiner packaging",
    packaging: "Insured, tracked, tamper-evident",
    premium: "Storage & insurance quoted per order",
    bestFor: "Buyers who prefer not to hold metal at home",
  },
];

export interface Refiner {
  name: string;
  country: string;
}

/** LBMA Good Delivery refiners / government mints whose bars we source. */
export const REFINERS: Refiner[] = [
  { name: "MKS PAMP", country: "Switzerland" },
  { name: "Valcambi", country: "Switzerland" },
  { name: "Metalor", country: "Switzerland" },
  { name: "Argor-Heraeus", country: "Switzerland" },
  { name: "Heraeus", country: "Germany" },
  { name: "The Perth Mint", country: "Australia" },
  { name: "Royal Canadian Mint", country: "Canada" },
  { name: "Rand Refinery", country: "South Africa" },
];

export interface ProcessStep {
  step: string;
  title: string;
  text: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Enquiry & KYC",
    text: "Tell us what you need to buy or supply. We verify every counterparty under AML / KYC rules before any quote is issued.",
  },
  {
    step: "02",
    title: "Spot-Linked Quote",
    text: "Receive a transparent quote tied to live LBMA-linked spot, plus a clear premium for the brand and bar size.",
  },
  {
    step: "03",
    title: "Contract & Payment",
    text: "Sign a trade contract and settle by bank transfer, with escrow structures available for larger orders.",
  },
  {
    step: "04",
    title: "Assay & Authentication",
    text: "Each bar ships with its refiner assay certificate and serial number, checked against the packing list.",
  },
  {
    step: "05",
    title: "Insured Delivery",
    text: "Fully insured, tracked delivery to your door, your bank, or straight into allocated vault storage.",
  },
];

export interface Assurance {
  icon: "badge" | "file" | "shield" | "truck" | "scale" | "globe";
  title: string;
  text: string;
}

export const ASSURANCES: Assurance[] = [
  {
    icon: "badge",
    title: "LBMA-Accredited Only",
    text: "We source exclusively from Good Delivery refiners and government mints, so your bars are accepted worldwide.",
  },
  {
    icon: "file",
    title: "Assay & Serial Numbers",
    text: "Weight, fineness, serial number and refiner hallmark are documented on every single bar.",
  },
  {
    icon: "shield",
    title: "KYC / AML Compliant",
    text: "Every buyer, supplier and refinery is vetted, protecting you and your counterparties.",
  },
  {
    icon: "truck",
    title: "Insured Logistics",
    text: "Door-to-door shipments are tracked, tamper-sealed and fully insured from refinery to recipient.",
  },
  {
    icon: "scale",
    title: "Transparent Pricing",
    text: "Spot-linked quotes with the premium shown separately. No hidden spreads or surprise fees.",
  },
  {
    icon: "globe",
    title: "Global Reach",
    text: "International trade support across major bullion hubs, with duty and tax guidance for each jurisdiction.",
  },
];

export interface ClientType {
  title: string;
  tag: string;
  points: string[];
}

export const CLIENT_TYPES: ClientType[] = [
  {
    title: "International Buyers",
    tag: "Buy",
    points: [
      "Investors, family offices and trading houses",
      "1 g minted bars up to 400 oz Good Delivery",
      "Insured delivery or allocated vault storage",
    ],
  },
  {
    title: "Bullion Suppliers",
    tag: "Supply",
    points: [
      "Verified, KYC-cleared sourcing partners",
      "Fast access to qualified end-buyers",
      "Secure settlement and documented chain of custody",
    ],
  },
  {
    title: "Refineries",
    tag: "Partner",
    points: [
      "Placement of refined and certified output",
      "Assay-backed bars sold through our buyer network",
      "Consistent, compliant offtake relationships",
    ],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  quote: string;
  rating: number;
}

/** Sample content — replace with real client feedback before launch. */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Daniel K.",
    role: "Procurement Director, Trading House",
    initials: "DK",
    quote:
      "From KYC to insured delivery, the process was clear at every step. The quote matched spot exactly and the assay paperwork was spotless.",
    rating: 5,
  },
  {
    name: "Nadia R.",
    role: "Family Office Principal",
    initials: "NR",
    quote:
      "We moved into 1 kg cast bars through AurumBridge. Sensible premiums, genuine LBMA brands and genuinely responsive communication.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Operations Lead, Refining Partner",
    initials: "MT",
    quote:
      "A professional desk that understands refinery output. Compliance checks were thorough and settlement was on time, every time.",
    rating: 5,
  },
];

export const CLIENT_ROLES = ["Buyer", "Supplier", "Refinery"] as const;

export const QUANTITY_OPTIONS = [
  "Under 1 kg",
  "1 – 10 kg",
  "10 – 100 kg",
  "100 kg +",
];

export const STATS = [
  { value: "999.9", label: "Fine gold purity" },
  { value: "1 g – 400 oz", label: "Bar sizes" },
  { value: "LBMA", label: "Good Delivery brands" },
];

export const FAQS = [
  {
    q: "How is the price of a gold bar calculated?",
    a: "Every quote is built from live LBMA-linked spot price plus a premium that depends on the brand, bar size and order volume. The premium is always shown separately, so you can see exactly what you are paying above spot.",
  },
  {
    q: "Do I need to complete KYC before I can buy or supply?",
    a: "Yes. We verify every buyer, supplier and refinery under AML / KYC rules before issuing a binding quote. It protects you and every counterparty in the trade.",
  },
  {
    q: "What documents come with the gold?",
    a: "Each bar carries its refiner hallmark, fineness and serial number, supported by the assay certificate, invoice and packing list for your shipment.",
  },
  {
    q: "How is payment handled?",
    a: "Payment is settled by bank transfer against a signed trade contract. For larger orders we can structure the transaction through escrow.",
  },
  {
    q: "Can I store my gold instead of taking delivery?",
    a: "Yes. We can arrange allocated storage with partner vaults in major bullion hubs, or ship your bars fully insured and tracked to your door or bank.",
  },
];
