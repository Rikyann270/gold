"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/goldBarsData";
import { Reveal, SectionHeading } from "@/components/site/Brand";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="ab-section">
      <div className="ab-aura ab-aura--l" />
      <div className="ab-container">
        <SectionHeading eyebrow="Testimonial">
          What our
          <br />
          <span className="ab-gold-text">customers</span> say
        </SectionHeading>

        <div className="ab-grid-3" style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="ab-quote" style={{ height: "100%" }}>
                <div className="ab-quote__head">
                  <div className="ab-avatar" aria-hidden="true">
                    {t.initials}
                  </div>
                  <figcaption>
                    <div className="ab-quote__name">{t.name}</div>
                    <div className="ab-quote__role">{t.role}</div>
                  </figcaption>
                </div>
                <blockquote className="ab-quote__text">{t.quote}</blockquote>
                <div className="ab-stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                  <span>{t.rating.toFixed(1)}</span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
