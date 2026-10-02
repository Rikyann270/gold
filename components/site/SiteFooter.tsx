import { MapPin, Phone, Mail } from "lucide-react";

const footerCols = [
  {
    heading: "Ventures",
    links: [
      "African Operations",
      "Americas Complex",
      "Asia Pacific",
      "State-Partnered JV",
      "Development Stage",
      "View Full Matrix",
    ],
  },
  {
    heading: "Intelligence",
    links: [
      "Equity Simulator",
      "AISC Cost Curve",
      "Reserve Rankings",
      "Financial Analytics",
      "Live Market Data",
      "Download CSV",
    ],
  },
  {
    heading: "Company",
    links: [
      "Our Story",
      "Editorial Board",
      "Methodology",
      "Accreditations",
      "Careers",
      "Press",
    ],
  },
  {
    heading: "Client Care",
    links: [
      "Institutional Access",
      "Research Requests",
      "Data Licensing",
      "Privacy Policy",
      "Terms of Use",
      "Contact Us",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer style={{ background: "var(--color-footer-bg)", color: "var(--color-footer-text)" }}>
      {/* Main footer body */}
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-6 gap-10 md:gap-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <span
              className="heading block mb-4"
              style={{
                fontSize: "1.6rem",
                fontWeight: 300,
                letterSpacing: "0.25em",
                color: "#F3E7C5",
              }}
            >
              GOLDEN
            </span>
            <p style={{ fontSize: "12px", lineHeight: 1.8, color: "rgba(243,231,197,0.55)", maxWidth: "320px" }}>
              Fine gold venture intelligence for institutional investors and asset managers.
              Est. 1997.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              {[
                { icon: Mail, text: "intelligence@golden.ug" },
                { icon: Phone, text: "+256 414 789 200" },
                { icon: MapPin, text: "Plot 14 Lumumba Ave, Nakasero, Kampala · Uganda" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2">
                  <Icon size={12} style={{ color: "var(--color-accent)", marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "11px", color: "rgba(243,231,197,0.55)" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              {["IG", "X", "LI"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="opacity-50 hover:opacity-100 transition-opacity"
                  style={{
                    color: "var(--color-footer-text)",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                    border: "1px solid rgba(243,231,197,0.3)",
                    padding: "4px 8px",
                  }}
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h4
                className="label mb-5"
                style={{ color: "rgba(243,231,197,0.5)", letterSpacing: "0.18em" }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors duration-150"
                      style={{
                        fontSize: "12px",
                        color: "rgba(243,231,197,0.65)",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,231,197,0.65)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Giant footer typography */}
        <div className="mt-16 md:mt-24 w-full overflow-hidden flex justify-center items-center select-none pointer-events-none">
          <span 
            style={{ 
              fontSize: "clamp(4rem, 20vw, 24rem)", 
              lineHeight: 0.8,
              fontWeight: 300,
              fontFamily: "var(--font-fraunces)",
              color: "rgba(243,231,197,0.03)",
              letterSpacing: "0.05em",
              textTransform: "uppercase"
            }}
          >
            Golden
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(243,231,197,0.1)",
        }}
      >
        <div
          className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ fontSize: "11px", color: "rgba(243,231,197,0.4)" }}
        >
          <span>© 2026 GOLDEN Mining Intelligence (Uganda) Ltd. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <span>XAU/UGX&nbsp; <strong style={{ color: "var(--color-accent)" }}>UGX 10,169,450/oz</strong></span>
            <span>|</span>
            <span>USD/UGX 3,700</span>
            <span>|</span>
            <span>Kampala Desk · Bank of Uganda Ref.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
