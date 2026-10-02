"use client";
import { ArrowRight, MapPin } from "lucide-react";
import { JV_DATA, JointVentureItem } from "@/data/jvData";

const FEATURED_IDS = [
  "wagagai-gold-uganda",
  "karamoja-gold-jv",
  "kibali-goldmines",
  "nevada-gold-mines",
  "grasberg-jv",
  "canadian-malartic",
];

const VENTURE_GRADIENTS = [
  "linear-gradient(160deg, rgba(11,31,59,0.6) 0%, rgba(26,58,92,0.8) 100%)",
  "linear-gradient(160deg, rgba(28,28,28,0.6) 0%, rgba(42,24,0,0.8) 100%)",
  "linear-gradient(160deg, rgba(18,59,109,0.6) 0%, rgba(11,31,59,0.8) 100%)",
  "linear-gradient(160deg, rgba(26,46,0,0.6) 0%, rgba(11,31,59,0.8) 100%)",
  "linear-gradient(160deg, rgba(42,24,0,0.6) 0%, rgba(28,28,28,0.8) 100%)",
  "linear-gradient(160deg, rgba(11,31,59,0.6) 0%, rgba(22,45,0,0.8) 100%)",
];

const VENTURE_IMAGES = [
  "/mine-uganda.jpg",
  "/mine-americas.jpg",
  "/mine-asia.jpg",
  "/mine-state.jpg",
];

const STATUS_LABELS: Record<string, { text: string; cls: string }> = {
  "Active Operations":       { text: "Active", cls: "badge-green" },
  "Expansion":               { text: "Expansion", cls: "badge-gold" },
  "Development":             { text: "Development", cls: "badge-dark" },
  "Underground Block Cave":  { text: "Block Cave", cls: "badge-outline" },
};

interface FeaturedVenturesProps {
  onSelect: (item: JointVentureItem) => void;
}

export function FeaturedVentures({ onSelect }: FeaturedVenturesProps) {
  const featured = FEATURED_IDS
    .map((id) => JV_DATA.find((v) => v.id === id))
    .filter(Boolean) as JointVentureItem[];

  return (
    <section className="section-gap" style={{ background: "var(--bg-body-darken)", borderTop: "1px solid var(--color-border)" }}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-eyebrow">New In · Featured Selection</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              Handpicked Ventures
            </h2>
          </div>
          <button
            className="nav-link flex items-center gap-2 bg-transparent border-0 cursor-pointer self-start md:self-auto"
            style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}
            onClick={() => onSelect(featured[0])}
          >
            View All <ArrowRight size={13} />
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
          {featured.map((item, idx) => {
            const statusInfo = STATUS_LABELS[item.status] ?? { text: item.status, cls: "badge-outline" };
            return (
              <div
                key={item.id}
                className="venture-card card-lift group cursor-pointer"
                onClick={() => onSelect(item)}
              >
                {/* Image area — rendered gradient with text overlay */}
                <div
                  className="venture-card-img img-zoom relative overflow-hidden"
                >
                  {/* Background Image */}
                  <img
                    src={VENTURE_IMAGES[idx % VENTURE_IMAGES.length]}
                    alt={item.company}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: VENTURE_GRADIENTS[idx % VENTURE_GRADIENTS.length] }}
                  />
                  {/* Featured badge */}
                  {item.highlighted && (
                    <span className="badge badge-gold absolute top-3 left-3 z-10">Featured</span>
                  )}
                  <span className={`badge ${statusInfo.cls} absolute top-3 right-3 z-10`}>
                    {statusInfo.text}
                  </span>

                  {/* Mine visual placeholder with data overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <div
                      style={{
                        fontSize: "clamp(1.6rem,4vw,2.5rem)",
                        fontFamily: "var(--font-fraunces)",
                        fontWeight: 300,
                        color: "rgba(243,231,197,0.12)",
                        lineHeight: 1,
                        userSelect: "none",
                      }}
                    >
                      {(item.annualProductionOz / 1000).toFixed(0)}k
                    </div>
                    <div style={{ fontSize: "9px", color: "rgba(243,231,197,0.4)", letterSpacing: "0.15em" }}>
                      OZ AU / YEAR
                    </div>
                  </div>

                  {/* Quick View overlay */}
                  <div className="venture-card-quick">
                    <span
                      className="btn btn-gold"
                      style={{ fontSize: "10px", padding: "0.5rem 1.1rem", pointerEvents: "none" }}
                    >
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="venture-card-body">
                  <div className="venture-card-name">{item.company}</div>
                  <div className="venture-card-sub flex items-center gap-1.5 mt-1">
                    <MapPin size={10} />
                    {item.region.split(",")[0]}
                  </div>

                  {/* Equity tickers inline */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.tickers.slice(0, 2).map((t, ti) => (
                      <span key={ti} className="ticker-badge">
                        <strong>{t.exchange}:</strong>{t.symbol}
                      </span>
                    ))}
                  </div>

                  {/* Price row */}
                  <div className="venture-card-price">
                    UGX {((item.aiscPerOz * 3700) / 1000000).toFixed(2)}M AISC/oz &nbsp;·&nbsp; {item.provenReservesMoz} Moz reserves
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
