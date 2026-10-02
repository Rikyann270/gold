"use client";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "africa",
    label: "Uganda & East Africa",
    sub: "Busia · Karamoja · Kibali · Mali",
    count: "4 ventures",
    accent: "#D4AF37",
    image: "/mine-uganda.jpg",
    gradient: "linear-gradient(135deg, rgba(11,31,59,0.7) 0%, rgba(26,58,92,0.7) 100%)",
    overlay: "rgba(11,31,59,0.55)",
  },
  {
    id: "americas",
    label: "Americas Complex",
    sub: "Nevada · Dominican Republic · Canada · Chile · Ecuador",
    count: "5 ventures",
    accent: "#D4AF37",
    image: "/mine-americas.jpg",
    gradient: "linear-gradient(135deg, rgba(28,28,28,0.7) 0%, rgba(58,42,0,0.7) 100%)",
    overlay: "rgba(28,28,28,0.55)",
  },
  {
    id: "asia",
    label: "Asia Pacific",
    sub: "Indonesia · Australia · Uzbekistan",
    count: "4 ventures",
    accent: "#D4AF37",
    image: "/mine-asia.jpg",
    gradient: "linear-gradient(135deg, rgba(11,31,59,0.7) 0%, rgba(18,59,109,0.7) 100%)",
    overlay: "rgba(11,31,59,0.5)",
  },
  {
    id: "state",
    label: "State Partnered",
    sub: "Uganda UNMC · SOKIMO · Mind ID State",
    count: "5 ventures",
    accent: "#D4AF37",
    image: "/mine-state.jpg",
    gradient: "linear-gradient(135deg, rgba(42,24,0,0.7) 0%, rgba(28,28,28,0.7) 100%)",
    overlay: "rgba(42,24,0,0.5)",
  },
];

interface CategoryGridProps {
  onSelectRegion: (region: string) => void;
}

export function CategoryGrid({ onSelectRegion }: CategoryGridProps) {
  return (
    <section className="section-gap">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-eyebrow">Shop by Region</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              Explore by Location
            </h2>
          </div>
          <button
            className="nav-link flex items-center gap-2 bg-transparent border-0 cursor-pointer self-start md:self-auto"
            onClick={() => onSelectRegion("ALL")}
            style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            View All Ventures <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectRegion(cat.id.toUpperCase())}
              className="group relative overflow-hidden cursor-pointer border-0 p-0 text-left"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{ background: cat.gradient }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: "rgba(212,175,55,0.15)" }}
              />

              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-1.5"
                style={{ background: "var(--color-accent)" }}
              />

              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    fontWeight: 500,
                    marginBottom: "0.4rem",
                  }}
                >
                  {cat.count}
                </span>
                <h3
                  className="heading"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 300,
                    color: "#F3E7C5",
                    marginBottom: "0.35rem",
                    lineHeight: 1.2,
                  }}
                >
                  {cat.label}
                </h3>
                <p
                  style={{
                    fontSize: "10px",
                    color: "rgba(243,231,197,0.6)",
                    lineHeight: 1.5,
                  }}
                >
                  {cat.sub}
                </p>

                <div
                  className="flex items-center gap-1.5 mt-4 transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    fontWeight: 600,
                  }}
                >
                  Explore <ArrowRight size={11} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
