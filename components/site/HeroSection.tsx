"use client";

import Link from "next/link";
import { ArrowRight, FileText, Layers } from "lucide-react";
import { STATS } from "@/data/goldBarsData";
import { HeroCube } from "@/components/site/GoldBar3D";

const DUST = [
  { left: "12%", top: "22%", delay: "0s" },
  { left: "78%", top: "14%", delay: "1.1s" },
  { left: "88%", top: "48%", delay: "2.2s" },
  { left: "20%", top: "70%", delay: "0.6s" },
  { left: "64%", top: "82%", delay: "1.8s" },
  { left: "40%", top: "10%", delay: "2.9s" },
  { left: "6%", top: "46%", delay: "3.4s" },
  { left: "52%", top: "58%", delay: "0.3s" },
];

export function HeroSection() {
  return (
    <section id="top" className="ab-hero" aria-labelledby="hero-title">
      <div className="ab-aura ab-aura--l" style={{ top: "30%" }} />
      <div className="ab-container">
        <div className="ab-hero__grid">
          <div>
            <p className="ab-hero__kicker">Gold brokerage &amp; precious metals sourcing</p>
            <h1 id="hero-title" className="ab-hero__title">
              <span>Pure</span>
              <span>
                <b className="ab-gold-text" style={{ fontWeight: 600 }}>
                  Gold
                </b>{" "}
                Bars
              </span>
            </h1>
            <p className="ab-hero__copy">
              LBMA-accredited gold bars from 1 g to 400 oz, sourced direct from the world&apos;s top
              refiners and delivered insured to buyers, suppliers and refineries worldwide.
            </p>

            <div className="ab-hero__cta">
              <Link href="/contact" id="hero-request-quote" className="ab-pill">
                <span className="ab-pill__icon">
                  <FileText size={16} />
                </span>
                <span>
                  <span className="ab-pill__small">Private OTC desk</span>
                  <span className="ab-pill__big">Request a quote</span>
                </span>
              </Link>
              <Link href="/gold-bars" id="hero-view-bars" className="ab-pill">
                <span className="ab-pill__icon">
                  <Layers size={16} />
                </span>
                <span>
                  <span className="ab-pill__small">1 g to 400 oz</span>
                  <span className="ab-pill__big">
                    View gold bars <ArrowRight size={12} style={{ display: "inline", verticalAlign: "-1px" }} />
                  </span>
                </span>
              </Link>
            </div>

            <dl className="ab-stats">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="ab-stat__value">{s.value}</dt>
                  <dd className="ab-stat__label">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="ab-hero__art" aria-hidden="true">
            <div className="ab-hero__glow" />
            <div className="ab-floor" />
            <HeroCube />
            <div className="ab-dust">
              {DUST.map((d, i) => (
                <i key={i} style={{ left: d.left, top: d.top, animationDelay: d.delay }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
