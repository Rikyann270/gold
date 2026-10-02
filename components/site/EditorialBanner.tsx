"use client";
import { ArrowRight } from "lucide-react";

interface EditorialBannerProps {
  onExplore: () => void;
}

export function EditorialBanner({ onExplore }: EditorialBannerProps) {
  return (
    <section className="section-gap">
      <div className="container">
        {/* Two-column editorial split */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — image */}
          <div className="img-zoom relative" style={{ aspectRatio: "3/4" }}>
            <img
              src="/about-gold.jpg"
              alt="Gold bullion editorial"
              className="w-full h-full object-cover"
            />
            {/* Accent corner frame */}
            <div
              className="absolute top-0 left-0 w-12 h-12 pointer-events-none"
              style={{ borderTop: "2px solid var(--color-accent)", borderLeft: "2px solid var(--color-accent)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none"
              style={{ borderBottom: "2px solid var(--color-accent)", borderRight: "2px solid var(--color-accent)" }}
            />

            {/* Floating stat */}
            <div
              className="absolute bottom-8 left-0 -translate-x-1/3 px-5 py-4 shadow-xl"
              style={{ background: "var(--color-navy)" }}
            >
              <div className="stat-value" style={{ fontSize: "1.3rem" }}>UGX 10.17M</div>
              <div className="stat-label" style={{ color: "rgba(243,231,197,0.6)" }}>
                Gold Spot / oz (UGX)
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <span className="section-eyebrow">East African Mining Corridor</span>
            <h2
              className="heading mt-2"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
            >
              The Great Lakes
              <br />
              <em style={{ fontStyle: "italic" }}>Gold Nexus</em>
            </h2>

            <div
              className="mt-6 prose"
              style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(28,28,28,0.75)", maxWidth: "420px" }}
            >
              <p>
                From the mineral-rich greenstone belts of Busia and Karamoja in Uganda to the
                monumental Haut-Uélé deposits of Kibali, East Africa is the world's most
                dynamic gold frontier. Operated by Barrick Gold, partnered with AngloGold Ashanti
                and state enterprises, this regional corridor delivers over 900,000 ounces of gold
                annually supported through Kampala's financial and trade infrastructure.
              </p>
              <p>
                Anchored by Uganda's modern refining capacity at Busia and hydro-electric
                renewable infrastructure, these joint ventures represent the gold standard of
                institutional mineral stewardship in Africa.
              </p>
            </div>

            {/* Equity split visual */}
            <div
              className="mt-8 p-5"
              style={{
                background: "rgba(11,31,59,0.05)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="label mb-3"
                style={{ color: "var(--color-accent-dark)" }}
              >
                Equity Structure
              </div>
              {[
                { name: "Barrick Gold", ticker: "NYSE: GOLD · TSX: ABX", pct: 45 },
                { name: "AngloGold Ashanti", ticker: "NYSE: AU · JSE: ANG", pct: 45 },
                { name: "SOKIMO (State)", ticker: "State Enterprise", pct: 10 },
              ].map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between py-2"
                  style={{ borderBottom: "1px solid var(--color-border)" }}
                >
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 500 }}>{p.name}</div>
                    <div className="ticker-badge mt-0.5">
                      <strong>{p.ticker}</strong>
                    </div>
                  </div>
                  <span
                    className="heading"
                    style={{ fontSize: "1.4rem", fontWeight: 300, color: "var(--color-accent-dark)" }}
                  >
                    {p.pct}%
                  </span>
                </div>
              ))}
            </div>

            <button className="btn btn-solid mt-8" onClick={onExplore}>
              Full Dossier <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
