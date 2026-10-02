"use client";

import { useRef } from "react";

import { SiteNav } from "@/components/site/SiteNav";
import { HeroSection } from "@/components/site/HeroSection";
import { TrustBar } from "@/components/site/TrustBar";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { FeaturedVentures } from "@/components/site/FeaturedVentures";
import { EditorialBanner } from "@/components/site/EditorialBanner";
import { AboutSection } from "@/components/site/AboutSection";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { IntelligenceMatrix } from "@/components/site/IntelligenceMatrix";
import { JvDetailModal } from "@/components/JvDetailModal";
import { JvCalculatorModal } from "@/components/JvCalculatorModal";
import { JV_DATA, JointVentureItem } from "@/data/jvData";
import { useState } from "react";

export default function Home() {
  const matrixRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<JointVentureItem | null>(null);
  const [calcOpen, setCalcOpen] = useState(false);

  const scrollToMatrix = () => {
    matrixRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>

      <SiteNav onOpenMatrix={scrollToMatrix} onOpenCalculator={() => setCalcOpen(true)} />

      <main>
        <HeroSection onExplore={scrollToMatrix} />
        <TrustBar />
        <CategoryGrid onSelectRegion={scrollToMatrix} />
        <FeaturedVentures onSelect={(item) => setSelectedItem(item)} />
        <EditorialBanner onExplore={() => setSelectedItem(JV_DATA.find(v => v.id === "kibali-goldmines")!)} />
        <AboutSection />

        {/* Intelligence Matrix section */}
        <div ref={matrixRef}>
          <IntelligenceMatrix />
        </div>

        <NewsletterSection />
      </main>

      <SiteFooter />

      {/* Global modals */}
      <JvDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        spotGoldPrice={10169450}
      />
      <JvCalculatorModal
        isOpen={calcOpen}
        onClose={() => setCalcOpen(false)}
        items={JV_DATA}
        spotGoldPrice={10169450}
      />
    </>
  );
}
