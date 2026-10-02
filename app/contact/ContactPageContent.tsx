"use client";

import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Check,
  Building2,
  Globe,
  Shield,
  Send,
} from "lucide-react";

const OFFICES = [
  {
    city: "Kampala",
    label: "Headquarters",
    address: "Plot 14 Lumumba Avenue, Nakasero Hill, Kampala, Uganda",
    phone: "+256 414 789 200",
    email: "intelligence@golden.ug",
    hours: "Mon — Fri, 08:00 — 17:00 EAT",
    coords: "0.3163° N, 32.5822° E",
  },
  {
    city: "Busia",
    label: "Field Operations",
    address: "Mineral House, Customs Road, Busia District, Uganda",
    phone: "+256 454 420 100",
    email: "fieldops@golden.ug",
    hours: "Mon — Sat, 07:00 — 16:00 EAT",
    coords: "0.4608° N, 34.0922° E",
  },
];

const ENQUIRY_TYPES = [
  "Institutional Research Access",
  "Data Licensing & API",
  "Partnership Opportunity",
  "Press & Media",
  "Careers",
  "General Enquiry",
];

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PageShell>
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "55vh" }}
      >
        <div className="absolute inset-0">
          <img
            src="/mine-state.jpg"
            alt="Gold mining operations"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(11,31,59,0.88) 0%, rgba(11,31,59,0.7) 50%, rgba(11,31,59,0.4) 100%)",
            }}
          />
        </div>

        <div
          className="container relative z-10 flex flex-col justify-end"
          style={{
            minHeight: "55vh",
            paddingBottom: "4rem",
            paddingTop: "5rem",
          }}
        >
          <div className="max-w-xl fade-up">
            <span
              className="label"
              style={{ color: "var(--color-accent)", letterSpacing: "0.25em" }}
            >
              Get In Touch
            </span>
            <h1
              className="heading hero-text-shadow mt-4"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 300,
                color: "#F3E7C5",
                lineHeight: 1.1,
              }}
            >
              The Kampala
              <br />
              <em
                style={{ fontStyle: "italic", color: "var(--color-accent)" }}
              >
                Intelligence Desk
              </em>
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
              Institutional enquiries, research access, data licensing, and
              partnership opportunities — our team responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Offices Grid */}
      <section className="section-gap">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Left — Contact Form (3 cols) */}
            <div className="md:col-span-3">
              <span className="section-eyebrow">Send an Enquiry</span>
              <h2
                className="heading mt-2 mb-10"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                  lineHeight: 1.15,
                }}
              >
                How Can We Help?
              </h2>

              {submitted ? (
                <div
                  className="p-8"
                  style={{
                    border: "1px solid var(--color-accent)",
                    background: "rgba(212,175,55,0.04)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: 48,
                        height: 48,
                        background: "var(--color-accent)",
                        color: "var(--color-navy)",
                      }}
                    >
                      <Check size={22} />
                    </div>
                    <div>
                      <h3
                        className="heading"
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: 400,
                          marginBottom: "0.5rem",
                        }}
                      >
                        Message Received
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: 1.8,
                          color: "rgba(28,28,28,0.7)",
                        }}
                      >
                        Thank you, {formData.name}. Our Kampala desk will
                        respond to your enquiry within 24 business hours.
                        <br />A confirmation has been sent to{" "}
                        <strong>{formData.email}</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        className="label block mb-2"
                        style={{ color: "rgba(28,28,28,0.6)" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="newsletter-input w-full"
                        placeholder="James Kato"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="label block mb-2"
                        style={{ color: "rgba(28,28,28,0.6)" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="newsletter-input w-full"
                        placeholder="james@institution.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label
                        className="label block mb-2"
                        style={{ color: "rgba(28,28,28,0.6)" }}
                      >
                        Company / Institution
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        className="newsletter-input w-full"
                        placeholder="Optional"
                      />
                    </div>

                    {/* Enquiry Type */}
                    <div>
                      <label
                        className="label block mb-2"
                        style={{ color: "rgba(28,28,28,0.6)" }}
                      >
                        Enquiry Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => updateField("type", e.target.value)}
                        className="newsletter-input w-full"
                        style={{
                          appearance: "none",
                          backgroundImage:
                            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%231C1C1C\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          paddingRight: "2.5rem",
                          cursor: "pointer",
                        }}
                      >
                        <option value="">Select a type</option>
                        {ENQUIRY_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="label block mb-2"
                      style={{ color: "rgba(28,28,28,0.6)" }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className="newsletter-input w-full"
                      style={{ resize: "vertical", lineHeight: 1.7 }}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p
                      style={{
                        fontSize: "11px",
                        color: "rgba(28,28,28,0.45)",
                        maxWidth: "300px",
                        lineHeight: 1.6,
                      }}
                    >
                      By submitting this form you agree to our Privacy Policy.
                      We will never share your data.
                    </p>
                    <button
                      type="submit"
                      className="btn btn-solid"
                      style={{ flexShrink: 0 }}
                    >
                      Send Enquiry <Send size={13} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right — Office Details (2 cols) */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <span className="section-eyebrow">Our Offices</span>
                <h3
                  className="heading mt-2"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 300,
                    marginBottom: "1.5rem",
                  }}
                >
                  Visit Us
                </h3>
              </div>

              {OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="p-6"
                  style={{
                    border: "1px solid var(--color-border)",
                    background: "rgba(11,31,59,0.02)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: 36,
                        height: 36,
                        border: "1px solid var(--color-accent)",
                        color: "var(--color-accent-dark)",
                      }}
                    >
                      <Building2 size={16} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "14px", fontWeight: 600 }}>
                        {office.city}
                      </h4>
                      <span
                        className="label"
                        style={{ color: "var(--color-accent-dark)" }}
                      >
                        {office.label}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: MapPin, text: office.address },
                      { icon: Phone, text: office.phone },
                      { icon: Mail, text: office.email },
                      { icon: Clock, text: office.hours },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-start gap-3">
                        <Icon
                          size={13}
                          style={{
                            color: "var(--color-accent-dark)",
                            marginTop: "3px",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "12px",
                            lineHeight: 1.6,
                            color: "rgba(28,28,28,0.7)",
                          }}
                        >
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-4 pt-3"
                    style={{
                      borderTop: "1px solid var(--color-border)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        color: "rgba(28,28,28,0.4)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {office.coords}
                    </span>
                  </div>
                </div>
              ))}

              {/* Quick Links */}
              <div
                className="p-6"
                style={{
                  background: "var(--color-navy)",
                  color: "#F3E7C5",
                }}
              >
                <h4
                  className="label mb-4"
                  style={{
                    color: "var(--color-accent)",
                    letterSpacing: "0.15em",
                  }}
                >
                  Direct Lines
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      label: "Institutional Access",
                      desc: "For sovereign funds & accredited investors",
                      contact: "institutional@golden.ug",
                    },
                    {
                      icon: Globe,
                      label: "Data & API Licensing",
                      desc: "Matrix data feeds & integration",
                      contact: "data@golden.ug",
                    },
                    {
                      icon: Send,
                      label: "Press & Media",
                      desc: "Editorial enquiries & interviews",
                      contact: "press@golden.ug",
                    },
                  ].map(({ icon: Icon, label, desc, contact }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3 pb-3"
                      style={{
                        borderBottom:
                          "1px solid rgba(243,231,197,0.1)",
                      }}
                    >
                      <Icon
                        size={14}
                        style={{
                          color: "var(--color-accent)",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            marginBottom: "1px",
                          }}
                        >
                          {label}
                        </div>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "rgba(243,231,197,0.5)",
                            marginBottom: "2px",
                          }}
                        >
                          {desc}
                        </div>
                        <a
                          href={`mailto:${contact}`}
                          style={{
                            fontSize: "11px",
                            color: "var(--color-accent)",
                            textDecoration: "underline",
                            textDecorationColor: "rgba(212,175,55,0.3)",
                            textUnderlineOffset: "2px",
                          }}
                        >
                          {contact}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Banner */}
      <section className="section-dark">
        <div className="container py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="section-eyebrow"
                style={{ color: "var(--color-accent)" }}
              >
                Kampala, Uganda
              </span>
              <h2
                className="heading mt-2"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "#F3E7C5",
                  fontWeight: 300,
                  lineHeight: 1.15,
                }}
              >
                At the Heart of
                <br />
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--color-accent)",
                  }}
                >
                  East Africa's Gold Belt
                </em>
              </h2>
              <p
                className="mt-5"
                style={{
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "rgba(243,231,197,0.65)",
                  maxWidth: "420px",
                }}
              >
                Our headquarters on Nakasero Hill places us within walking
                distance of the Bank of Uganda, the Ministry of Energy and
                Mineral Development, and Kampala's principal financial district
                — the nerve centre of Uganda's mineral economy.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a href="mailto:intelligence@golden.ug" className="btn btn-gold">
                  Email Us <ArrowRight size={13} />
                </a>
                <a href="tel:+256414789200" className="btn btn-ghost-light">
                  Call Kampala Desk
                </a>
              </div>
            </div>

            {/* Map Visual */}
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "4/3",
                background:
                  "linear-gradient(135deg, #123B6D 0%, #0B1F3B 100%)",
              }}
            >
              {/* Stylised map representation */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <MapPin
                  size={32}
                  style={{ color: "var(--color-accent)", marginBottom: "0.5rem" }}
                />
                <span
                  className="heading"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    color: "#F3E7C5",
                    textAlign: "center",
                  }}
                >
                  Nakasero Hill
                </span>
                <span
                  className="label mt-1"
                  style={{
                    color: "rgba(243,231,197,0.5)",
                    letterSpacing: "0.15em",
                  }}
                >
                  0.3163° N, 32.5822° E
                </span>
              </div>

              {/* Corner accents */}
              <div
                className="absolute top-4 left-4 w-10 h-10"
                style={{
                  borderTop: "1px solid var(--color-accent)",
                  borderLeft: "1px solid var(--color-accent)",
                }}
              />
              <div
                className="absolute bottom-4 right-4 w-10 h-10"
                style={{
                  borderBottom: "1px solid var(--color-accent)",
                  borderRight: "1px solid var(--color-accent)",
                }}
              />

              {/* Grid lines */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(243,231,197,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(243,231,197,0.04) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-gap">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-eyebrow">Common Questions</span>
              <h2
                className="heading mt-2"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
              >
                Frequently Asked
              </h2>
            </div>

            <div className="space-y-0">
              {[
                {
                  q: "What is the GOLDEN Intelligence Matrix?",
                  a: "The Intelligence Matrix is our proprietary live dashboard tracking equity breakdowns, AISC cost curves, production data, and reserve estimates for tier-1 gold mining joint ventures worldwide — all denominated in both UGX and USD.",
                },
                {
                  q: "Who can access institutional research?",
                  a: "Our full dossier access is available to accredited investors, sovereign wealth funds, institutional treasuries, and licensed asset managers. Contact our institutional desk for qualification criteria.",
                },
                {
                  q: "How is gold priced in UGX on your platform?",
                  a: "We reference the Bank of Uganda's daily foreign exchange rate (currently UGX 3,700/USD) applied against the LBMA gold fixing. Spot UGX gold price is updated in real-time during market hours.",
                },
                {
                  q: "Do you offer data licensing or API access?",
                  a: "Yes. Our Matrix data feeds are available via REST API for integration into institutional trading systems, compliance dashboards, and portfolio management platforms. Contact data@golden.ug for pricing.",
                },
                {
                  q: "What regions does GOLDEN cover?",
                  a: "We cover 12 countries across East Africa (Uganda, DRC, Tanzania, Mali), the Americas (USA, Canada, Dominican Republic, Chile, Ecuador), and Asia Pacific (Indonesia, Australia, Uzbekistan).",
                },
              ].map(({ q, a }, idx) => (
                <div
                  key={idx}
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                    padding: "1.5rem 0",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {q}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.8,
                      color: "rgba(28,28,28,0.65)",
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
