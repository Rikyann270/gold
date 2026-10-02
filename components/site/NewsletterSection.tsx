"use client";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      style={{
        background: "var(--color-accent)",
        color: "var(--color-navy)",
        borderTop: "none",
      }}
    >
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="label"
              style={{ letterSpacing: "0.2em", color: "rgba(11,31,59,0.7)" }}
            >
              Stay in the know
            </span>
            <h2
              className="heading mt-3"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                color: "var(--color-navy)",
                fontWeight: 300,
              }}
            >
              Intelligence, Delivered
              <br />
              <em style={{ fontStyle: "italic" }}>Weekly</em>
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: "13px", color: "rgba(11,31,59,0.7)", lineHeight: 1.8 }}
            >
              Live gold spot alerts, equity move summaries, and new venture dossiers —
              direct to your inbox, every Monday morning.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="flex items-center gap-3 p-5" style={{ border: "1px solid rgba(11,31,59,0.25)", background: "rgba(11,31,59,0.06)" }}>
                <Check size={18} style={{ color: "var(--color-navy)" }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: "13px" }}>You're subscribed.</div>
                  <div style={{ fontSize: "12px", opacity: 0.65, marginTop: "2px" }}>
                    First edition arrives Monday.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input flex-1"
                  style={{
                    border: "1px solid rgba(11,31,59,0.4)",
                    color: "var(--color-navy)",
                    background: "rgba(255,255,255,0.3)",
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-solid"
                  style={{ borderRadius: 0, flexShrink: 0 }}
                >
                  Subscribe <ArrowRight size={13} />
                </button>
              </form>
            )}

            <p style={{ fontSize: "11px", marginTop: "0.75rem", opacity: 0.55 }}>
              No spam. Unsubscribe at any time. GDPR compliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
