import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader, CtaBand } from "@/components/site/PageParts";
import { AboutSection } from "@/components/site/AboutSection";
import { ClientsSection, AssuranceSection } from "@/components/site/TradeSections";

export const metadata: Metadata = {
  title: "About | AurumBridge Global — Gold Brokerage & Precious Metals Sourcing",
  description:
    "AurumBridge Global connects international buyers, suppliers and refineries with LBMA-accredited gold bars, backed by KYC / AML compliance, assay documentation and insured logistics.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        crumb="About"
        eyebrow="About Us"
        title={
          <>
            About <span className="ab-gold-text">AurumBridge</span>
          </>
        }
        lead="A gold brokerage and precious metals sourcing house for international buyers, suppliers and refineries."
      />
      <AboutSection imageSrc="/gold_hand.jpg" imageAlt="Gold hand holding investment gold" />
      <ClientsSection />
      <AssuranceSection />
      <CtaBand
        title={
          <>
            Let&apos;s build your next <span className="ab-gold-text">gold trade</span>
          </>
        }
        text="Whether you are buying, supplying or placing refinery output, our desk is ready to talk."
        primary={{ label: "Contact the desk", href: "/contact" }}
        secondary={{ label: "Browse gold bars", href: "/gold-bars" }}
      />
    </PageShell>
  );
}
