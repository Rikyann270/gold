import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader, CtaBand } from "@/components/site/PageParts";
import { ProcessSection } from "@/components/site/TradeSections";
import { FaqSection } from "@/components/site/FaqSection";

export const metadata: Metadata = {
  title: "How It Works | AurumBridge Global — From Enquiry to Insured Delivery",
  description:
    "See how a gold bar trade works with AurumBridge Global: KYC, spot-linked quote, contract and payment, assay authentication and insured delivery or vault storage.",
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageHeader
        crumb="How It Works"
        eyebrow="Our Process"
        title={
          <>
            How it <span className="ab-gold-text">works</span>
          </>
        }
        lead="Five clear steps from your first enquiry to gold in your hands or in the vault."
      />
      <ProcessSection showHeading={false} />
      <FaqSection />
      <CtaBand
        title={
          <>
            Start with a <span className="ab-gold-text">private quote</span>
          </>
        }
        text="Begin the process today. Our desk will guide you through every step."
        primary={{ label: "Request a quote", href: "/contact" }}
        secondary={{ label: "Browse gold bars", href: "/gold-bars" }}
      />
    </PageShell>
  );
}
