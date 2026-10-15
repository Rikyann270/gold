import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Brand";

interface PageHeaderProps {
  /** Current page name shown in the breadcrumb. */
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}

/** Hero-style header for inner pages (breadcrumb · eyebrow · H1 · lead). */
export function PageHeader({ crumb, eyebrow, title, lead }: PageHeaderProps) {
  return (
    <header className="ab-pagehead">
      <div className="ab-aura ab-aura--r" style={{ top: "-10%" }} />
      <div className="ab-container">
        <Reveal y={16}>
          <nav className="ab-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <i aria-hidden="true" />
            <span aria-current="page">{crumb}</span>
          </nav>
          <div className="ab-eyebrow">{eyebrow}</div>
          <h1 className="ab-h1">{title}</h1>
          {lead && <p className="ab-lead">{lead}</p>}
        </Reveal>
      </div>
    </header>
  );
}

interface CtaBandProps {
  title: ReactNode;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** Closing call-to-action shown at the bottom of content pages. */
export function CtaBand({ title, text, primary, secondary }: CtaBandProps) {
  return (
    <section className="ab-section" style={{ paddingTop: 0 }}>
      <div className="ab-container">
        <Reveal>
          <div className="ab-cta">
            <div>
              <h2 className="ab-cta__title">{title}</h2>
              <p className="ab-cta__text">{text}</p>
            </div>
            <div className="ab-cta__actions">
              <Link href={primary.href} className="ab-btn">
                {primary.label}
              </Link>
              {secondary && (
                <Link href={secondary.href} className="ab-pill">
                  <span className="ab-pill__big">{secondary.label}</span>
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
