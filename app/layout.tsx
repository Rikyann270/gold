import type { Metadata } from "next";
import { Fraunces, Jost, Outfit, Geist } from "next/font/google";
import "./globals.css";
import "./aurum.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AurumBridge Global | LBMA-Accredited Gold Bars · Gold Brokerage & Sourcing",
  description:
    "AurumBridge Global is a gold brokerage and precious metals sourcing house. Buy and supply LBMA-accredited gold bars from 1 g to 400 oz with spot-linked pricing, assay certificates and insured delivery worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(fraunces.variable, jost.variable, outfit.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
