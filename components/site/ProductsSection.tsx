"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Coins, Landmark, Layers, Vault } from "lucide-react";
import { PRODUCTS, type ProductId } from "@/data/goldBarsData";
import { ProductScene } from "@/components/site/GoldBar3D";
import { Reveal, SectionHeading } from "@/components/site/Brand";
import MetallicPaint from "@/components/MetallicPaint";

export const PRODUCT_ICONS = { coins: Coins, layers: Layers, landmark: Landmark, vault: Vault } as const;

const MINTED_LIQUID_SVG = "/alien-svgrepo-com.svg";

interface ProductsSectionProps {
  /** Tab to open first (e.g. from /gold-bars?type=cast). */
  initialId?: ProductId;
  /** Hide the section title when the page already shows an H1. */
  showHeading?: boolean;
}

export function ProductsSection({ initialId = "minted", showHeading = true }: ProductsSectionProps) {
  const [activeId, setActiveId] = useState<ProductId>(initialId);
  const [mintedView, setMintedView] = useState<"liquid" | "3d">("liquid");
  const active = PRODUCTS.find((p) => p.id === activeId) ?? PRODUCTS[0];

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const idx = PRODUCTS.findIndex((p) => p.id === activeId);
    if (e.key === "ArrowRight") setActiveId(PRODUCTS[(idx + 1) % PRODUCTS.length].id);
    if (e.key === "ArrowLeft") setActiveId(PRODUCTS[(idx - 1 + PRODUCTS.length) % PRODUCTS.length].id);
  };

  return (
    <section id="products" className="ab-section" style={showHeading ? undefined : { paddingTop: "clamp(2rem, 4vw, 3rem)" }}>
      <div className="ab-aura ab-aura--r" />
      <div className="ab-container">
        {showHeading && (
          <SectionHeading eyebrow="Our Products">
            Our Gold <span className="ab-gold-text">Bars</span>
          </SectionHeading>
        )}

        <Reveal delay={0.1}>
          <div
            className="ab-prod-tabs"
            style={showHeading ? undefined : { marginTop: 0 }}
            role="tablist"
            aria-label="Gold bar categories"
            onKeyDown={onKeyDown}
          >
            {PRODUCTS.map((p) => {
              const Icon = PRODUCT_ICONS[p.icon];
              const selected = p.id === activeId;
              return (
                <button
                  key={p.id}
                  id={`tab-${p.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls="product-panel"
                  tabIndex={selected ? 0 : -1}
                  className="ab-prod-tab"
                  onClick={() => setActiveId(p.id)}
                >
                  <Icon className="ab-prod-tab__icon" size={44} strokeWidth={1} />
                  <span className="ab-prod-tab__name">{p.name}</span>
                  <span className="ab-prod-tab__range">{p.range}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div id="product-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="ab-prod-panel"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="ab-prod-visual"
                aria-hidden="true"
                style={{ overflow: "hidden", borderRadius: 20 }}
              >
                <div className="ab-hero__glow" style={{ inset: "5%" }} />

                {active.id === "minted" && mintedView === "liquid" ? (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: 340,
                      position: "relative",
                      borderRadius: 20,
                      overflow: "hidden",
                    }}
                  >
                    <MetallicPaint
                      imageSrc={MINTED_LIQUID_SVG}
                      color="#f2c46b"
                      density={2}
                      softness={0.1}
                      dispersion={0.3}
                      distortion={0.07}
                      edgeBend={0.6}
                      angle={70}
                      scale={0.6}
                      speed={1}
                      rotation={0}
                      mouseTilt={0.5}
                      intro
                    />
                  </div>
                ) : (
                  <ProductScene id={active.id} />
                )}

                {active.id === "minted" && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 14,
                      right: 14,
                      zIndex: 10,
                      display: "flex",
                      gap: 4,
                      background: "rgba(10, 12, 16, 0.78)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      padding: "3px 4px",
                      borderRadius: 999,
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.4)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => setMintedView("liquid")}
                      style={{
                        padding: "3px 10px",
                        fontSize: 10.5,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        borderRadius: 999,
                        border: "none",
                        cursor: "pointer",
                        background: mintedView === "liquid" ? "rgba(212, 175, 55, 0.32)" : "transparent",
                        color: mintedView === "liquid" ? "#f2c46b" : "rgba(255, 255, 255, 0.6)",
                        fontWeight: mintedView === "liquid" ? 600 : 400,
                        transition: "all 0.2s ease",
                      }}
                    >
                      Liquid
                    </button>
                    <button
                      type="button"
                      onClick={() => setMintedView("3d")}
                      style={{
                        padding: "3px 10px",
                        fontSize: 10.5,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        borderRadius: 999,
                        border: "none",
                        cursor: "pointer",
                        background: mintedView === "3d" ? "rgba(212, 175, 55, 0.32)" : "transparent",
                        color: mintedView === "3d" ? "#f2c46b" : "rgba(255, 255, 255, 0.6)",
                        fontWeight: mintedView === "3d" ? 600 : 400,
                        transition: "all 0.2s ease",
                      }}
                    >
                      3D Card
                    </button>
                  </div>
                )}
              </div>

              <div>
                <h3 className="ab-prod-title">
                  <span className="ab-gold-text">{active.name}</span>
                </h3>
                <p className="ab-prod-summary">{active.summary}</p>

                <div className="ab-chips">
                  {active.sizes.map((s) => (
                    <span key={s} className="ab-chip">
                      {s}
                    </span>
                  ))}
                </div>

                <dl className="ab-specs">
                  <div className="ab-spec">
                    <dt>Purity</dt>
                    <dd>{active.purity}</dd>
                  </div>
                  <div className="ab-spec">
                    <dt>Packaging</dt>
                    <dd>{active.packaging}</dd>
                  </div>
                  <div className="ab-spec">
                    <dt>Indicative premium</dt>
                    <dd>{active.premium}</dd>
                  </div>
                  <div className="ab-spec">
                    <dt>Best for</dt>
                    <dd>{active.bestFor}</dd>
                  </div>
                </dl>

                <div className="ab-prod-actions">
                  <Link href={`/contact?product=${active.id}`} id={`quote-${active.id}`} className="ab-btn">
                    Quote {active.name} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="ab-note">
          Premiums are indicative ranges over LBMA-linked spot and vary with brand, bar size, order
          volume and market conditions. Every trade is priced against live spot at the time of quote.
        </p>
      </div>
    </section>
  );
}
