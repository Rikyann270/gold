"use client";

import { useState } from "react";
import { Check, Mail, Phone, ShieldCheck, Clock } from "lucide-react";
import {
  BRAND,
  CLIENT_ROLES,
  PRODUCTS,
  QUANTITY_OPTIONS,
  type ProductId,
} from "@/data/goldBarsData";
import { Reveal, SectionHeading } from "@/components/site/Brand";

type ClientRole = (typeof CLIENT_ROLES)[number];

interface QuoteSectionProps {
  /** Product pre-selected via /contact?product=… */
  initialProduct?: ProductId;
  /** Role pre-selected via /contact?role=… */
  initialRole?: ClientRole;
}

export function QuoteSection({ initialProduct = PRODUCTS[0].id, initialRole = "Buyer" }: QuoteSectionProps) {
  const [role, setRole] = useState<ClientRole>(initialRole);
  const [product, setProduct] = useState<string>(initialProduct);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Front-end only: wire this to your CRM / email service when ready.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="ab-section">
      <div className="ab-aura ab-aura--r" />
      <div className="ab-container">
        <div className="ab-contact">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Contact Us"
              lead="Tell us what you want to buy or supply. A senior broker replies with a spot-linked quote after a quick KYC check."
            >
              Request a<br />
              <span className="ab-gold-text">private quote</span>
            </SectionHeading>

            <Reveal delay={0.1}>
              <ul className="ab-contact__list">
                <li>
                  <span className="ab-contact__icon">
                    <Mail size={16} />
                  </span>
                  <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
                </li>
                <li>
                  <span className="ab-contact__icon">
                    <Phone size={16} />
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}>
                    <a href="tel:0767033189">0767033189</a>
                    <span style={{ opacity: 0.4 }}>·</span>
                    <a href="tel:0747742997">0747742997</a>
                  </div>
                </li>
                <li>
                  <span className="ab-contact__icon">
                    <Clock size={16} />
                  </span>
                  Quotes issued within one business day
                </li>
                <li>
                  <span className="ab-contact__icon">
                    <ShieldCheck size={16} />
                  </span>
                  Your details stay confidential
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="ab-form">
              {submitted ? (
                <div className="ab-success" role="status">
                  <div className="ab-success__icon">
                    <Check size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 500 }}>Request received</h3>
                    <p style={{ marginTop: "0.4rem", color: "var(--ab-muted)", fontSize: 14, lineHeight: 1.7, fontWeight: 300 }}>
                      Thank you. Our desk will contact you shortly to complete KYC and share your
                      spot-linked quote.
                    </p>
                    <button
                      type="button"
                      id="quote-new-request"
                      className="ab-pill"
                      style={{ marginTop: "1.2rem" }}
                      onClick={() => setSubmitted(false)}
                    >
                      <span className="ab-pill__big">New request</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} aria-label="Request a private quote">
                  <div className="ab-form__grid">
                    <div className="ab-field ab-field--full">
                      <label id="role-label">I am a</label>
                      <div className="ab-segment" role="group" aria-labelledby="role-label">
                        {CLIENT_ROLES.map((r) => (
                          <button
                            key={r}
                            type="button"
                            id={`role-${r.toLowerCase()}`}
                            aria-pressed={role === r}
                            onClick={() => setRole(r)}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="ab-field">
                      <label htmlFor="q-name">Full name</label>
                      <input id="q-name" name="name" className="ab-input" placeholder="Your name" required />
                    </div>
                    <div className="ab-field">
                      <label htmlFor="q-email">Email</label>
                      <input id="q-email" name="email" type="email" className="ab-input" placeholder="you@company.com" required />
                    </div>
                    <div className="ab-field">
                      <label htmlFor="q-company">Company</label>
                      <input id="q-company" name="company" className="ab-input" placeholder="Company (optional)" />
                    </div>
                    <div className="ab-field">
                      <label htmlFor="q-country">Country</label>
                      <input id="q-country" name="country" className="ab-input" placeholder="Country of delivery" required />
                    </div>
                    <div className="ab-field">
                      <label htmlFor="q-product">Gold bar type</label>
                      <select id="q-product" name="product" className="ab-input" value={product} onChange={(e) => setProduct(e.target.value)}>
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} · {p.range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="ab-field">
                      <label htmlFor="q-qty">Quantity</label>
                      <select id="q-qty" name="quantity" className="ab-input" defaultValue={QUANTITY_OPTIONS[1]}>
                        {QUANTITY_OPTIONS.map((q) => (
                          <option key={q} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="ab-field ab-field--full">
                      <label htmlFor="q-msg">Message</label>
                      <textarea id="q-msg" name="message" className="ab-input" placeholder="Preferred brands, delivery or vault storage, timing…" />
                    </div>
                  </div>

                  <button type="submit" id="quote-submit" className="ab-btn ab-btn--block" style={{ marginTop: "1.4rem" }}>
                    Request quote
                  </button>
                  <p className="ab-form__foot">
                    By submitting you agree to a KYC / AML verification before any trade. Quotes are
                    indicative until a contract is signed.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
