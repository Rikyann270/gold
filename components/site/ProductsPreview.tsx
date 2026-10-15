"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/goldBarsData";
import { PRODUCT_ICONS } from "@/components/site/ProductsSection";
import { Reveal, SectionHeading } from "@/components/site/Brand";

/** Home-page teaser: four product columns that link through to /gold-bars. */
export function ProductsPreview() {
  return (
    <section id="products" className="ab-section">
      <div className="ab-aura ab-aura--r" />
      <div className="ab-container">
        <SectionHeading eyebrow="Our Products">
          Our Gold <span className="ab-gold-text">Bars</span>
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="ab-prod-tabs">
            {PRODUCTS.map((p) => {
              const Icon = PRODUCT_ICONS[p.icon];
              return (
                <Link
                  key={p.id}
                  id={`home-product-${p.id}`}
                  href={`/gold-bars?type=${p.id}`}
                  className="ab-prod-tab ab-prod-tab--link"
                >
                  <Icon className="ab-prod-tab__icon" size={44} strokeWidth={1} />
                  <span className="ab-prod-tab__name">{p.name}</span>
                  <span className="ab-prod-tab__range">{p.range}</span>
                  <span className="ab-prod-tab__desc">{p.bestFor}</span>
                  <span className="ab-prod-tab__more">
                    Explore <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
