import { REFINERS } from "@/data/goldBarsData";

export function RefinersMarquee() {
  const loop = [...REFINERS, ...REFINERS];
  return (
    <section className="ab-marquee-wrap" aria-label="Bar brands we source">
      <p className="ab-marquee-label">Bar brands we source</p>
      <div className="ab-marquee">
        <div className="ab-marquee__track">
          {loop.map((r, i) => (
            <span key={`${r.name}-${i}`} className="ab-marquee__item" aria-hidden={i >= REFINERS.length}>
              {r.name}
              <small>{r.country}</small>
            </span>
          ))}
        </div>
      </div>
      <p className="ab-disclaimer">
        LBMA Good Delivery refiners and government mints. Brand names belong to their respective
        owners and indicate the bar ranges we source, not an official partnership.
      </p>
    </section>
  );
}
