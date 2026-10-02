"use client";

import { PageShell } from "@/components/site/PageShell";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import ContourEmbers from "@/components/originkit/ui/contour-embers";
import { ArrowRight, Shield, Award, Globe, Users, MapPin, TrendingUp, Layers } from "lucide-react";

const TIMELINE = [
  { year: "1997", title: "Founded in Kampala", desc: "GOLDEN established as East Africa's first dedicated gold venture intelligence firm, operating from Nakasero Hill." },
  { year: "2003", title: "Pan-African Expansion", desc: "Coverage extended to DRC, Tanzania, and Mali — tracking the continent's largest greenstone belt deposits." },
  { year: "2010", title: "Global Intelligence Desk", desc: "Launched Americas and Asia Pacific desks, covering Nevada, Grasberg, and Boddington operations for institutional clients." },
  { year: "2016", title: "UGX Market Integration", desc: "Pioneered real-time UGX-denominated gold pricing for Ugandan sovereign funds and regional treasuries." },
  { year: "2021", title: "Digital Intelligence Matrix", desc: "Launched the GOLDEN Intelligence Matrix — live equity breakdowns, AISC analytics, and interactive profit simulators." },
  { year: "2024", title: "Karamoja & Busia Coverage", desc: "Deep coverage of Uganda's emerging Karamoja and Busia gold belts, including the Wagagai complex and state partnerships." },
];

const VALUES = [
  { icon: Shield, title: "Rigorous Independence", desc: "We accept no fees from the ventures we cover. Every dossier, every data point, every recommendation is editorially independent." },
  { icon: TrendingUp, title: "Institutional Precision", desc: "Our equity breakdowns and AISC cost curves meet the disclosure standards expected by sovereign wealth funds and accredited investors." },
  { icon: Globe, title: "Local Insight, Global Reach", desc: "Rooted in Kampala with deep geological and regulatory knowledge of Uganda's mineral corridors, serving clients across 40 countries." },
  { icon: Layers, title: "Transparent Methodology", desc: "Every metric is sourced from public filings, operator disclosures, and verified geological surveys. Our methodology is published and auditable." },
];

const TEAM = [
  { name: "James Kato", role: "Founder & Chief Intelligence Officer", bio: "27 years in East African mineral finance. Former advisor to the Uganda National Mining Corporation." },
  { name: "Dr. Sarah Nakamya", role: "Head of Geological Analytics", bio: "PhD in Economic Geology from Makerere University. Led resource estimation for 14 greenstone belt projects." },
  { name: "Michael Ochieng", role: "Director, Global Equity Desk", bio: "Former mining equity analyst at Standard Bank. Covers Americas and Asia Pacific joint venture structures." },
  { name: "Grace Auma", role: "Head of Data & Technology", bio: "Built the GOLDEN Intelligence Matrix. MSc Computer Science, specialising in real-time financial data systems." },
];

export function AboutPageContent() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "70vh" }}>
        <div className="absolute inset-0">
          <ContourEmbers
            background="#0B1F3B"
            baseColor="#123B6D"
            accentColor="#D4AF37"
            density={20}
            scale={3}
            speed={30}
            reach={25}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(11,31,59,0.7) 0%, rgba(11,31,59,0.3) 50%, transparent 100%)",
            }}
          />
        </div>

        <div
          className="container relative z-10 flex flex-col justify-end"
          style={{ minHeight: "70vh", paddingBottom: "5rem", paddingTop: "5rem" }}
        >
          <div className="max-w-xl fade-up">
            <span className="label" style={{ color: "var(--color-accent)", letterSpacing: "0.25em" }}>
              Our Heritage
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
              Intelligence Built on
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>27 Years of Trust</em>
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
              From a single desk in Kampala to a global intelligence operation covering
              12 countries and UGX 240+ Moz in tracked reserves.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-gap" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-eyebrow">Our Mission</span>
              <h2
                className="heading mt-2"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
              >
                Democratising
                <br />
                <em style={{ fontStyle: "italic" }}>Gold Intelligence</em>
              </h2>
            </div>
            <div
              className="prose"
              style={{ fontSize: "13px", lineHeight: 1.9, color: "rgba(28,28,28,0.75)", maxWidth: "520px" }}
            >
              <p>
                GOLDEN was founded on a simple conviction: the world's most significant gold
                mining joint ventures deserve rigorous, independent, and accessible intelligence
                — not locked behind institutional paywalls or scattered across quarterly filings.
              </p>
              <p>
                Headquartered at Plot 14 Lumumba Avenue, Nakasero, Kampala, we sit at the
                crossroads of East Africa's most prolific mineral corridors. Our analysts combine
                deep local geological knowledge with the financial scrutiny expected by sovereign
                wealth funds, institutional treasuries, and accredited private investors worldwide.
              </p>
              <p>
                Every venture in our matrix is tracked through verified public filings, operator
                disclosures, and on-ground geological surveys. We publish in both UGX and USD,
                serving Uganda's financial ecosystem alongside global capital markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gap">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow">What We Stand For</span>
            <h2
              className="heading mt-2"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              Our Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5"
                style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    border: "1px solid var(--color-accent)",
                    color: "var(--color-accent-dark)",
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3
                    className="heading"
                    style={{ fontSize: "1.1rem", fontWeight: 400, marginBottom: "0.5rem" }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(28,28,28,0.7)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark section-gap">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-eyebrow" style={{ color: "var(--color-accent)" }}>
              Our Journey
            </span>
            <h2
              className="heading mt-2"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#F3E7C5",
                fontWeight: 300,
              }}
            >
              27 Years of <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>Gold Intelligence</em>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "rgba(212,175,55,0.25)", transform: "translateX(-50%)" }}
            />

            <div className="space-y-12 md:space-y-16">
              {TIMELINE.map((item, idx) => (
                <div
                  key={item.year}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 items-start ${
                    idx % 2 === 0 ? "" : "md:direction-rtl"
                  }`}
                >
                  {/* Left or right content depending on index */}
                  <div
                    className={`${idx % 2 === 0 ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}`}
                    style={{ direction: "ltr" }}
                  >
                    <span
                      className="heading block"
                      style={{
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 300,
                        color: "rgba(212,175,55,0.2)",
                        lineHeight: 1,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.year}
                    </span>
                    <h3
                      className="heading"
                      style={{ fontSize: "1.15rem", color: "#F3E7C5", fontWeight: 400, marginBottom: "0.5rem" }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(243,231,197,0.6)", maxWidth: "380px", marginLeft: idx % 2 === 0 ? "auto" : undefined }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div
                    className="absolute left-0 md:left-1/2 top-2 w-3 h-3 hidden md:block"
                    style={{
                      background: "var(--color-accent)",
                      transform: "translateX(-50%)",
                      border: "2px solid var(--color-navy)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-gap">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="section-eyebrow">Leadership</span>
              <h2
                className="heading mt-2"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                The Intelligence Desk
              </h2>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(28,28,28,0.6)", maxWidth: "380px", lineHeight: 1.7 }}>
              Our analysts combine deep geological expertise with institutional-grade
              financial analysis, serving clients across 40 countries.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                {/* Portrait placeholder */}
                <div
                  className="w-full overflow-hidden relative"
                  style={{
                    aspectRatio: "3/4",
                    background: "linear-gradient(160deg, #0B1F3B 0%, #123B6D 100%)",
                  }}
                >
                  {/* Initials as visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="heading"
                      style={{
                        fontSize: "3.5rem",
                        fontWeight: 300,
                        color: "rgba(212,175,55,0.15)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  {/* Accent corner */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-px"
                    style={{ background: "var(--color-accent)" }}
                  />
                </div>

                <div className="mt-4">
                  <h3
                    className="heading"
                    style={{ fontSize: "1rem", fontWeight: 400, marginBottom: "0.2rem" }}
                  >
                    {member.name}
                  </h3>
                  <span
                    className="label block"
                    style={{
                      color: "var(--color-accent-dark)",
                      letterSpacing: "0.1em",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {member.role}
                  </span>
                  <p style={{ fontSize: "12px", lineHeight: 1.7, color: "rgba(28,28,28,0.6)" }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section
        style={{
          background: "var(--color-accent)",
          color: "var(--color-navy)",
        }}
      >
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { val: "Est. 1997", lbl: "Founded" },
              { val: "12", lbl: "Countries Covered" },
              { val: "240+", lbl: "Moz Tracked Reserves" },
              { val: "40+", lbl: "Nations Served" },
            ].map(({ val, lbl }) => (
              <div key={lbl}>
                <div
                  className="heading"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 300, color: "var(--color-navy)" }}
                >
                  {val}
                </div>
                <div
                  className="label mt-2"
                  style={{ color: "rgba(11,31,59,0.6)", letterSpacing: "0.15em" }}
                >
                  {lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-gap section-accent">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-eyebrow" style={{ color: "rgba(11,31,59,0.7)" }}>Accreditations & Governance</span>
              <h2
                className="heading mt-2"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.15, color: "var(--color-navy)" }}
              >
                Regulated &
                <br />
                <em style={{ fontStyle: "italic" }}>Independently Audited</em>
              </h2>
              <p
                className="mt-4"
                style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(11,31,59,0.8)", maxWidth: "420px" }}
              >
                GOLDEN operates under the regulatory oversight of the Uganda Department
                of Geological Survey and Mines (DGSM) and adheres to the disclosure
                standards set by global mining exchanges.
              </p>
            </div>

            <div className="space-y-0">
              {[
                { icon: Shield, title: "DGSM Regulated", desc: "Licensed under the Uganda Mining Act, 2003. Regulatory compliance verified annually." },
                { icon: Award, title: "JORC & NI 43-101 Aligned", desc: "Reserve and resource data aligns with international reporting codes for mineral assets." },
                { icon: Globe, title: "EITI Supporter", desc: "Supporting the Extractive Industries Transparency Initiative for open and accountable mining governance." },
                { icon: Users, title: "Bank of Uganda Reference", desc: "UGX gold pricing referenced against Bank of Uganda foreign exchange rates and LBMA benchmarks." },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 py-6"
                  style={{ borderBottom: "1px solid rgba(11,31,59,0.15)" }}
                >
                  <Icon
                    size={20}
                    style={{ color: "var(--color-navy)", flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "0.25rem", color: "var(--color-navy)" }}>{title}</h4>
                    <p style={{ fontSize: "12px", lineHeight: 1.7, color: "rgba(11,31,59,0.7)" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </PageShell>
  );
}
