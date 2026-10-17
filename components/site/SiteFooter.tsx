import Link from "next/link";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { BRAND, PRODUCTS } from "@/data/goldBarsData";
import { Logo } from "@/components/site/Brand";

const companyLinks: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "About Us", href: "/about" },
  { label: "Who We Serve", href: "/about#clients" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
  { label: "Direct WhatsApp", href: BRAND.whatsappUrl, external: true },
];

const complianceLinks = ["KYC & AML Policy", "Privacy Policy", "Terms of Trade", "Risk Disclosure"];

function WhatsAppIcon({ size = 14, color = "#25D366" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.71C8.02 10.94 8.91 12.12 9.04 12.28C9.16 12.45 10.79 14.96 13.27 16.03C13.86 16.29 14.32 16.44 14.68 16.56C15.27 16.74 15.81 16.72 16.24 16.65C16.71 16.58 17.69 16.06 17.89 15.48C18.1 14.9 18.1 14.41 18.03 14.3C17.97 14.2 17.81 14.14 17.56 14.02C17.32 13.9 16.12 13.31 15.9 13.22C15.68 13.14 15.52 13.1 15.35 13.34C15.19 13.59 14.72 14.14 14.58 14.3C14.43 14.47 14.29 14.5 14.05 14.37C13.8 14.25 12.77 13.91 11.55 12.82C10.6 11.97 9.96 10.92 9.77 10.61C9.59 10.36 9.75 10.23 9.88 10.1C9.99 9.99 10.13 9.8 10.25 9.66C10.38 9.5 10.42 9.39 10.5 9.22C10.58 9.06 10.54 8.92 10.48 8.8C10.42 8.67 9.96 7.55 9.77 7.09C9.59 6.64 9.4 6.7 9.25 6.7H8.87C8.65 6.7 8.5 6.7 8.5 6.7" />
    </svg>
  );
}

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
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                <WhatsAppIcon size={14} color="#25D366" />
                <span style={{ color: "rgba(255,255,255,0.85)" }}>WhatsApp:</span>
                <a
                  href={BRAND.whatsappNumbers[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  0767033189
                </a>
                <span style={{ opacity: 0.4 }}>/</span>
                <a
                  href={BRAND.whatsappNumbers[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  0747742997
                </a>
              </div>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ab-footer__whatsapp-btn"
                id="footer-direct-whatsapp-link"
              >
                <WhatsAppIcon size={14} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
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
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href}>{l.label}</Link>
                  )}
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
