import Link from "next/link";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { BRAND, PRODUCTS } from "@/data/goldBarsData";
import { Logo } from "@/components/site/Brand";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Who We Serve", href: "/about#clients" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

const complianceLinks = ["KYC & AML Policy", "Privacy Policy", "Terms of Trade", "Risk Disclosure"];

export function SiteFooter() {
  return (
    <footer className="ab-footer">
      <div className="ab-container">
        <div className="ab-footer__grid">
          <div>
            <Logo size={40} />
            <p className="ab-footer__about">
              {BRAND.tagline}. We connect international buyers, suppliers and refineries with
              LBMA-accredited gold bars, from 1 g to 400 oz.
            </p>
            <div style={{ display: "grid", gap: "0.7rem", marginTop: "1.4rem" }}>
              <a
                href={`mailto:${BRAND.email}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: 13, color: "rgba(255,255,255,0.7)" }}
              >
                <Mail size={14} color="#d4af37" /> {BRAND.email}
              </a>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                <Phone size={14} color="#d4af37" />
                <a href="tel:0767033189" style={{ color: "inherit" }}>0767033189</a>
                <span style={{ opacity: 0.4 }}>/</span>
                <a href="tel:0747742997" style={{ color: "inherit" }}>0747742997</a>
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
                <ShieldCheck size={14} color="#d4af37" /> KYC / AML-verified trading only
              </span>
            </div>
          </div>

          <div>
            <h4 className="ab-footer__head">Gold Bars</h4>
            <ul className="ab-footer__links">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link href={`/gold-bars?type=${p.id}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="ab-footer__head">Company</h4>
            <ul className="ab-footer__links">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="ab-footer__head">Compliance</h4>
            <ul className="ab-footer__links">
              {complianceLinks.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="ab-footer__risk">
          Gold prices are volatile and past performance is not indicative of future results. All
          quotes are indicative until a trade contract is signed. Refiner and mint names are
          trademarks of their respective owners and are shown to describe the bar brands we source.
        </p>
      </div>

      <div className="ab-footer__mega" aria-hidden="true">
        AurumBridge
      </div>

      <div style={{ borderTop: "1px solid var(--ab-line)" }}>
        <div className="ab-container ab-footer__bar">
          <span>
            © {new Date().getFullYear()} {BRAND.name} {BRAND.suffix}. All rights reserved.
          </span>
          <span>Prices quoted in USD</span>
        </div>
      </div>
    </footer>
  );
}
