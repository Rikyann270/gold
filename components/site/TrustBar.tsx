import { Shield, Award, Globe, Users } from "lucide-react";

const credentials = [
  { icon: Shield, label: "DGSM Regulated", sub: "Uganda Dept. of Geological Survey" },
  { icon: Award,  label: "Est. 1997",       sub: "Kampala & East Africa Desk" },
  { icon: Globe,  label: "Uganda & Global", sub: "Busia, Karamoja & Tier-1 JVs" },
  { icon: Users,  label: "UGX Reference",   sub: "Spot UGX 10,169,450 / oz" },
];

export function TrustBar() {
  return (
    <section
      style={{
        background: "var(--color-navy)",
        color: "var(--color-footer-text)",
        borderTop: "3px solid var(--color-accent)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {credentials.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 py-5 px-4 md:px-6"
            >
              <Icon size={18} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: "11px", opacity: 0.55, marginTop: "1px" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
