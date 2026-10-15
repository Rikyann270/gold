"use client";

import { Plus } from "lucide-react";
import { FAQS } from "@/data/goldBarsData";
import { Reveal, SectionHeading } from "@/components/site/Brand";

export function FaqSection() {
  return (
    <section id="faq" className="ab-section">
      <div className="ab-container">
        <SectionHeading eyebrow="FAQ">
          Common <span className="ab-gold-text">questions</span>
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="ab-faq">
            {FAQS.map((f) => (
              <details key={f.q} className="ab-faq__item">
                <summary>
                  <span>{f.q}</span>
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
