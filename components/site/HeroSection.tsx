"use client";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onExplore: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "90vh" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-mine.jpg"
          alt="Aerial view of a tier-1 gold mine at golden hour"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(11,31,59,0.72) 0%, rgba(11,31,59,0.4) 50%, rgba(11,31,59,0.2) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="container relative z-10 flex flex-col justify-end h-full"
        style={{ minHeight: "90vh", paddingBottom: "5rem", paddingTop: "5rem" }}
      >
        <div className="max-w-xl fade-up">
          <span className="label" style={{ color: "var(--color-accent)", letterSpacing: "0.25em" }}>
            Established 1997 · Kampala Intelligence Desk
          </span>

          <h1
            className="heading hero-text-shadow mt-4"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 300,
              color: "#F3E7C5",
              lineHeight: 1.1,
            }}
          >
            The World's Finest
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>Gold Ventures</em>
          </h1>

          <p
            className="mt-5 fade-up fade-up-delay-1"
            style={{
              fontSize: "14px",
              color: "rgba(243,231,197,0.85)",
              lineHeight: 1.8,
              maxWidth: "420px",
            }}
          >
            Handpicked tier-1 joint ventures, equity intelligence, and live UGX market data
            — curated from Kampala for institutional investors and sovereign wealth funds.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 fade-up fade-up-delay-2">
            <button className="btn btn-gold" onClick={onExplore}>
              Explore Ventures
              <ArrowRight size={14} />
            </button>
            <button className="btn btn-ghost-light" onClick={onExplore}>
              View Intelligence Matrix
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        >
          <span className="label" style={{ color: "#F3E7C5", fontSize: "9px" }}>
            Scroll
          </span>
          <div
            className="w-px h-10 origin-top"
            style={{
              background: "linear-gradient(to bottom, rgba(243,231,197,0.8), transparent)",
              animation: "fadeUp 1.5s ease infinite alternate",
            }}
          />
        </div>
      </div>
    </section>
  );
}
