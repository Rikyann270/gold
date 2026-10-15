import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

interface PageShellProps {
  children: React.ReactNode;
  background?: React.ReactNode;
}

/** Shared frame for every page: dark nav, content, dark footer. */
export function PageShell({ children, background }: PageShellProps) {
  return (
    <div className="ab-page">
      {background}
      <SiteNav />
      <main className="ab-page-main" style={{ position: "relative", zIndex: 1 }}>{children}</main>
      <SiteFooter />
    </div>
  );
}
