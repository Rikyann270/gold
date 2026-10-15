import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { QuoteSection } from "@/components/site/QuoteSection";
import { CLIENT_ROLES, PRODUCTS, type ProductId } from "@/data/goldBarsData";

export const metadata: Metadata = {
  title: "Contact | AurumBridge Global — Request a Private Gold Bar Quote",
  description:
    "Contact the AurumBridge Global desk. Request a spot-linked quote to buy gold bars, or register as a supplier or refinery.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { product, role } = await searchParams;
  const initialProduct = PRODUCTS.find((p) => p.id === product)?.id as ProductId | undefined;
  const initialRole = CLIENT_ROLES.find((r) => typeof role === "string" && r.toLowerCase() === role.toLowerCase());

  return (
    <PageShell>
      <QuoteSection initialProduct={initialProduct} initialRole={initialRole} />
    </PageShell>
  );
}
