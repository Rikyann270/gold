"use client";

import { BadgeCheck, FileCheck, Globe, Scale, ShieldCheck, Truck } from "lucide-react";
import { ASSURANCES, CLIENT_TYPES, PROCESS_STEPS } from "@/data/goldBarsData";
import { Reveal, SectionHeading } from "@/components/site/Brand";

const ASSURE_ICONS = {
  badge: BadgeCheck,
  file: FileCheck,
  shield: ShieldCheck,
  truck: Truck,
  scale: Scale,
  globe: Globe,
} as const;

export function ClientsSection() {
  return (
    <section id="clients" className="ab-section">
      <div className="ab-container">
        <SectionHeading
          eyebrow="Who We Serve"
          lead="One desk, three sides of the gold market. We match qualified demand with verified supply."
        >
          Built for <span className="ab-gold-text">serious</span> trade
        </SectionHeading>

        <div className="ab-grid-3" style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }}>
          {CLIENT_TYPES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="ab-card" style={{ height: "100%" }}>
                <span className="ab-card__tag">{c.tag}</span>
                <h3 className="ab-card__title">{c.title}</h3>
                <ul className="ab-card__list">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="process" className="ab-section" style={showHeading ? undefined : { paddingTop: "clamp(2rem, 4vw, 3rem)" }}>
      <div className="ab-aura ab-aura--r" />
      <div className="ab-container">
        {showHeading && (
          <SectionHeading eyebrow="How It Works">
            From enquiry to <span className="ab-gold-text">delivery</span>
          </SectionHeading>
        )}

        <div className="ab-steps" style={showHeading ? undefined : { marginTop: 0 }}>
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="ab-step">
                <div className="ab-step__num">{s.step}</div>
                <h3 className="ab-step__title">{s.title}</h3>
                <p className="ab-step__text">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AssuranceSection() {
  return (
    <section id="assurance" className="ab-section">
      <div className="ab-container">
        <SectionHeading
          eyebrow="Why AurumBridge"
          lead="Gold is only as good as the paperwork, the provenance and the people behind it."
        >
          Trade with <span className="ab-gold-text">confidence</span>
        </SectionHeading>

        <div className="ab-grid-3" style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }}>
          {ASSURANCES.map((a, i) => {
            const Icon = ASSURE_ICONS[a.icon];
            return (
              <Reveal key={a.title} delay={(i % 3) * 0.08}>
                <article className="ab-card" style={{ height: "100%" }}>
                  <div className="ab-assure__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="ab-assure__title">{a.title}</h3>
                  <p className="ab-assure__text">{a.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
