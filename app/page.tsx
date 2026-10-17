import { PageShell } from "@/components/site/PageShell";
import { HeroSection } from "@/components/site/HeroSection";
import { RefinersMarquee } from "@/components/site/RefinersMarquee";
import { GoldenSlidesSection } from "@/components/site/GoldenSlidesSection";
import { ProductsPreview } from "@/components/site/ProductsPreview";
import { AboutSection } from "@/components/site/AboutSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { CtaBand } from "@/components/site/PageParts";
import Noise from "@/components/Noise";

export default function Home() {
  return (
    <PageShell
      background={
        <Noise
          opacity={5}
          size={1}
          fps={15}
          blendMode="overlay"
          contrast={0.2}
          colored={false}
          dust={0.1}
          scratches={0.1}
          scanlines={0}
          flicker={0.5}
        />
      }
    >
      <HeroSection />
      <RefinersMarquee />
      <GoldenSlidesSection />
      <ProductsPreview />
      <AboutSection teaser />
      <TestimonialsSection />
      <CtaBand
        title={
          <>
            Ready to buy or supply <span className="ab-gold-text">gold bars?</span>
          </>
        }
        text="Tell our desk what you need. We reply with a spot-linked quote after a quick KYC check."
        primary={{ label: "Request a quote", href: "/contact" }}
        secondary={{ label: "How it works", href: "/how-it-works" }}
      />
    </PageShell>
  );
}
