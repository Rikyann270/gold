"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, FileText, HandCoins, Info } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Brand";

interface AboutSectionProps {
  /** Short version used on the home page, linking through to /about. */
  teaser?: boolean;
  /** Image source override */
  imageSrc?: string;
  imageAlt?: string;
}

const Arrow = () => <ArrowRight size={12} style={{ display: "inline", verticalAlign: "-1px" }} />;

export function AboutSection({
  teaser = false,
  imageSrc = "/ornament.jpg",
  imageAlt = "Golden sculpture and craftsmanship",
}: AboutSectionProps) {
  return (
    <section id="about" className="ab-section">
      <div className="ab-aura ab-aura--l" />
      <div className="ab-container">
        <div className="ab-about">
          <Reveal className="ab-about__art" y={0}>
            <div className="ab-hero__glow" style={{ inset: "5% 10%", filter: "blur(50px)" }} />
            <div className="ab-about__img-wrap">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={800}
                className="ab-about__img"
                priority={false}
              />
            </div>
          </Reveal>

          <div className="ab-about__copy">
            <SectionHeading eyebrow="About Us">
              The bridge between
              <br />
              refiners &amp; <span className="ab-gold-text">buyers</span>
            </SectionHeading>

            <Reveal delay={0.1}>
              <p>
                <strong>AurumBridge Global</strong> is a gold brokerage and precious metals sourcing
                house connecting international buyers, suppliers and refineries.
              </p>
              <p>
                We source investment-grade gold bars from <strong>LBMA-accredited refiners</strong>,
                verify every counterparty, and manage assay, settlement, insurance and logistics, so
                every trade closes with certainty and a clean chain of custody.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="ab-about__cta">
                {teaser ? (
                  <>
                    <Link href="/about" id="home-about-more" className="ab-pill">
                      <span className="ab-pill__icon">
                        <Info size={16} />
                      </span>
                      <span>
                        <span className="ab-pill__small">Our story &amp; clients</span>
                        <span className="ab-pill__big">
                          Learn more <Arrow />
                        </span>
                      </span>
                    </Link>
                    <Link href="/contact" id="home-about-quote" className="ab-pill">
                      <span className="ab-pill__icon">
                        <FileText size={16} />
                      </span>
                      <span>
                        <span className="ab-pill__small">Private OTC desk</span>
                        <span className="ab-pill__big">
                          Request a quote <Arrow />
                        </span>
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/contact?role=buyer" id="about-become-buyer" className="ab-pill">
                      <span className="ab-pill__icon">
                        <HandCoins size={16} />
                      </span>
                      <span>
                        <span className="ab-pill__small">For investors &amp; traders</span>
                        <span className="ab-pill__big">
                          Become a buyer <Arrow />
                        </span>
                      </span>
                    </Link>
                    <Link href="/contact?role=supplier" id="about-become-supplier" className="ab-pill">
                      <span className="ab-pill__icon">
                        <Factory size={16} />
                      </span>
                      <span>
                        <span className="ab-pill__small">For suppliers &amp; refineries</span>
                        <span className="ab-pill__big">
                          Become a supplier <Arrow />
                        </span>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
