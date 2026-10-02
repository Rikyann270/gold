import { JV_DATA } from "@/data/jvData";

const STATS = [
  { value: "27+", label: "Years of intelligence" },
  { value: "12", label: "Countries covered" },
  { value: "240", label: "Million oz in reserves" },
  { value: "11M", label: "Ounces produced annually" },
];

export function AboutSection() {
  const totalReserves = JV_DATA.reduce((s, v) => s + v.provenReservesMoz, 0);
  const totalProd = JV_DATA.reduce((s, v) => s + v.annualProductionOz, 0);

  return (
    <section className="section-dark section-gap">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — stats grid */}
          <div>
            <span className="section-eyebrow" style={{ color: "var(--color-accent)" }}>
              Our Heritage
            </span>
            <h2
              className="heading mt-3"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#F3E7C5",
                fontWeight: 300,
              }}
            >
              Trusted Intelligence,
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
                Since 1997
              </em>
            </h2>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { val: "Est. 1997", lbl: "Established" },
                { val: `${JV_DATA.length}`, lbl: "Ventures tracked" },
                { val: `${(totalProd / 1e6).toFixed(1)}M oz`, lbl: "Annual production" },
                { val: `${totalReserves.toFixed(0)} Moz`, lbl: "Proven Au reserves" },
              ].map(({ val, lbl }) => (
                <div
                  key={lbl}
                  className="py-5 px-1"
                  style={{ borderTop: "1px solid rgba(243,231,197,0.15)" }}
                >
                  <div className="stat-value">{val}</div>
                  <div className="stat-label">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — about text */}
          <div
            className="prose"
            style={{
              fontSize: "13px",
              lineHeight: 1.9,
              color: "rgba(243,231,197,0.75)",
            }}
          >
            <p>
              Headquartered at Plot 14 Lumumba Avenue, Nakasero, Kampala, GOLDEN was founded
              in 1997 to bring institutional investment intelligence to the world's most
              significant gold mining joint ventures. Situated at the crossroads of East Africa's
              prolific mineral corridors, our Kampala desk combines local geological intimacy
              with global financial scrutiny.
            </p>
            <p>
              Our intelligence matrix tracks Uganda's transformative ventures — including the
              Wagagai Busia complex and Karamoja Greenstone concessions — alongside tier-1
              powerhouses such as Kibali, Nevada Gold Mines, and Grasberg, delivering audited
              equity breakdowns, AISC metrics in UGX and USD, and operational reserve disclosures.
            </p>
            <p>
              Whether analyzing state-partnered concessions with the Uganda National Mining
              Corporation or multinational joint ventures on the NYSE and TSX, we serve sovereign
              funds, institutional treasuries, and accredited private investors.
            </p>

            <div
              className="mt-8 p-5"
              style={{
                border: "1px solid rgba(212,175,55,0.3)",
                background: "rgba(212,175,55,0.05)",
              }}
            >
              <blockquote
                className="heading"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#F3E7C5",
                  lineHeight: 1.6,
                }}
              >
                "Gold is the currency of last resort. Understanding who holds it, who mines
                it, and who owns the rights — that is institutional intelligence."
              </blockquote>
              <div
                className="label mt-4"
                style={{ color: "var(--color-accent)", letterSpacing: "0.15em" }}
              >
                — GOLDEN Editorial Board, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
