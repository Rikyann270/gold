"use client";

import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <SiteNav
        onOpenMatrix={() => (window.location.href = "/#matrix")}
        onOpenCalculator={() => (window.location.href = "/#matrix")}
      />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
