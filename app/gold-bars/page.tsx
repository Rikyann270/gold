import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader, CtaBand } from "@/components/site/PageParts";
import { ProductsSection } from "@/components/site/ProductsSection";
import { RefinersMarquee } from "@/components/site/RefinersMarquee";
import { PRODUCTS, type ProductId } from "@/data/goldBarsData";

export const metadata: Metadata = {
  title: "Gold Bars | AurumBridge Global — Minted, Cast & Good Delivery Bars",
  description:
    "Explore LBMA-accredited gold bars from 1 g to 400 oz: minted bars, cast bars and Good Delivery bars, with spot-linked pricing, assay certificates and insured delivery or vault storage.",
};

export default async function GoldBarsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { type } = await searchParams;
  const initialId = PRODUCTS.find((p) => p.id === type)?.id as ProductId | undefined;

  return (
    <PageShell>
      <PageHeader
        crumb="Gold Bars"
        eyebrow="Our Products"
        title={
          <>
            Gold <span className="ab-gold-text">Bars</span>
          </>
        }
        lead="From a 1 g minted bar to a 400 oz Good Delivery bar. Every bar is sourced from LBMA-accredited refiners and priced against live spot."
      />
      <ProductsSection initialId={initialId} showHeading={false} />
      <RefinersMarquee />
      <CtaBand
        title={
          <>
            Need a quote on <span className="ab-gold-text">your size?</span>
          </>
        }
        text="Share the bar type and quantity you have in mind and our desk will return a spot-linked quote."
        primary={{ label: "Request a quote", href: "/contact" }}
        secondary={{ label: "How it works", href: "/how-it-works" }}
      />
    </PageShell>
  );
}
