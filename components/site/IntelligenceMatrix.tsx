"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search, Download, Calculator, Filter, ArrowUpDown,
  Eye, MapPin, Coins, Layers, TrendingUp, Building2,
  BarChart3, SlidersHorizontal, X
} from "lucide-react";
import { JV_DATA, JointVentureItem } from "@/data/jvData";
import { JvDetailModal } from "@/components/JvDetailModal";
import { JvCalculatorModal } from "@/components/JvCalculatorModal";

const FX_UGX = 3700;
const SPOT_USD = 2748.50;
const SPOT_UGX = 10169450; // 2,748.50 * 3,700

const STATUS_OPTIONS = [
  "ALL", "Active Operations", "Expansion", "Development", "Underground Block Cave",
];
const EXCHANGES = ["ALL", "USE", "NYSE", "TSX", "JSE", "ASX", "IDX", "OTC"];

export function IntelligenceMatrix({ initialOpen = false }: { initialOpen?: boolean }) {
  const [view, setView] = useState<"table" | "analytics">("table");
  const [search, setSearch] = useState("");
  const [exchange, setExchange] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [sortField, setSortField] = useState<string>("company");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [selectedItem, setSelectedItem] = useState<JointVentureItem | null>(null);
  const [calcOpen, setCalcOpen] = useState(false);

  const filtered = useMemo(() => {
    return JV_DATA.filter((item) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        item.company.toLowerCase().includes(q) ||
        item.primaryAsset.toLowerCase().includes(q) ||
        item.region.toLowerCase().includes(q) ||
        item.tickers.some((t) => t.symbol.toLowerCase().includes(q) || t.exchange.toLowerCase().includes(q));

      const matchEx =
        exchange === "ALL" ||
        item.tickers.some((t) => t.exchange.toUpperCase() === exchange);

      const matchStatus = status === "ALL" || item.status === status;

      return matchSearch && matchEx && matchStatus;
    }).sort((a, b) => {
      let av: any = sortField === "production" ? a.annualProductionOz : sortField === "aisc" ? a.aiscPerOz : (a as any)[sortField];
      let bv: any = sortField === "production" ? b.annualProductionOz : sortField === "aisc" ? b.aiscPerOz : (b as any)[sortField];
      if (typeof av === "string") return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      return sortDir === "asc" ? av - bv : bv - av;
    });
  }, [search, exchange, status, sortField, sortDir]);

  const toggleSort = (field: string) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("asc"); }
  };

  const handleExport = () => {
    const headers = ["Company", "Tickers", "Region", "Status", "Production oz/yr", "AISC UGX/oz", "AISC USD/oz", "Reserves Moz"];
    const rows = filtered.map((v) => [
      `"${v.company}"`,
      `"${v.tickers.map(t => `${t.exchange}:${t.symbol}`).join(" | ")}"`,
      `"${v.region}"`,
      `"${v.status}"`,
      v.annualProductionOz,
      v.aiscPerOz * FX_UGX,
      v.aiscPerOz,
      v.provenReservesMoz,
    ]);
    const csv = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const a = document.createElement("a");
    a.href = encodeURI(csv);
    a.download = `GOLDEN_Uganda_Matrix_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  };

  const totalProd = filtered.reduce((s, v) => s + v.annualProductionOz, 0);
  const totalRes  = filtered.reduce((s, v) => s + v.provenReservesMoz, 0);
  const avgAisc   = Math.round(filtered.reduce((s, v) => s + v.aiscPerOz, 0) / (filtered.length || 1));
  const maxProd   = Math.max(...filtered.map(v => v.annualProductionOz), 1);

  return (
    <section
      id="matrix"
      style={{ background: "var(--bg-body-darken)", borderTop: "1px solid var(--color-border)" }}
      className="section-gap"
    >
      <div className="container">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <span className="section-eyebrow">Live Data</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}>
              Intelligence Matrix
            </h2>
          </div>

          {/* Controls row */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
              <input
                type="text"
                placeholder="Search ticker, JV, region…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="newsletter-input"
                style={{ paddingLeft: "2rem", width: "200px", fontSize: "12px" }}
              />
            </div>

            {/* Exchange filter */}
            <select
              value={exchange}
              onChange={e => setExchange(e.target.value)}
              className="newsletter-input"
              style={{ width: "auto", fontSize: "11px", letterSpacing: "0.1em" }}
            >
              {EXCHANGES.map(ex => <option key={ex} value={ex}>{ex === "ALL" ? "All Exchanges" : ex}</option>)}
            </select>

            {/* Status filter */}
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="newsletter-input"
              style={{ width: "auto", fontSize: "11px", letterSpacing: "0.1em" }}
            >
              {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s === "ALL" ? "All Statuses" : s}</option>)}
            </select>

            <button className="btn btn-outline" onClick={handleExport} style={{ padding: "0.55rem 1rem", fontSize: "10px" }}>
              <Download size={13} /> CSV
            </button>
            <button className="btn btn-gold" onClick={() => setCalcOpen(true)} style={{ padding: "0.55rem 1rem", fontSize: "10px" }}>
              <Calculator size={13} /> Simulator
            </button>
          </div>
        </div>

        {/* KPI summary bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-6"
          style={{ background: "var(--color-border)" }}
        >
          {[
            { label: "Showing", val: `${filtered.length} ventures` },
            { label: "Total Yield", val: `${(totalProd/1e6).toFixed(2)} Moz/yr` },
            { label: "Avg. AISC", val: `UGX ${((avgAisc * FX_UGX)/1000000).toFixed(2)}M/oz` },
            { label: "Total Reserves", val: `${totalRes.toFixed(0)} Moz` },
          ].map(({ label, val }) => (
            <div
              key={label}
              style={{ background: "var(--bg-body)", padding: "0.9rem 1.25rem" }}
            >
              <div className="label" style={{ opacity: 0.5, marginBottom: "3px" }}>{label}</div>
              <div className="heading" style={{ fontSize: "1.1rem", fontWeight: 300 }}>{val}</div>
            </div>
          ))}
        </div>

        {/* View tabs */}
        <div className="flex gap-2 mb-4">
          {(["table", "analytics"] as const).map(v => (
            <button
              key={v}
              className={`matrix-tab ${view === v ? "active" : ""}`}
              onClick={() => setView(v)}
            >
              {v === "table" ? "Data Table" : "Analytics"}
            </button>
          ))}
        </div>

        {/* ── TABLE VIEW ── */}
        {view === "table" && (
          <div style={{ border: "1px solid var(--color-border)", overflow: "hidden" }}>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th style={{ minWidth: 240 }}>
                      <button onClick={() => toggleSort("company")} className="flex items-center gap-1.5 bg-transparent border-0 cursor-pointer">
                        <Building2 size={12} /> Company / Joint Venture <ArrowUpDown size={11} className="opacity-40" />
                      </button>
                    </th>
                    <th style={{ minWidth: 200 }}>
                      <div className="flex items-center gap-1.5"><TrendingUp size={12} /> Ticker / Exchange</div>
                    </th>
                    <th style={{ minWidth: 300 }}>
                      <div className="flex items-center gap-1.5"><Layers size={12} /> Primary Asset / Role</div>
                    </th>
                    <th style={{ minWidth: 160, textAlign: "right" }}>
                      <button onClick={() => toggleSort("production")} className="flex items-center justify-end gap-1.5 w-full bg-transparent border-0 cursor-pointer">
                        <Coins size={12} /> Annual Yield <ArrowUpDown size={11} className="opacity-40" />
                      </button>
                    </th>
                    <th style={{ width: 90 }} />
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={5} style={{ textAlign: "center", padding: "3rem", color: "rgba(28,28,28,0.4)" }}>
                          No ventures match the current filters.
                        </td>
                      </tr>
                    ) : filtered.map((item, i) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.025 }}
                        onClick={() => setSelectedItem(item)}
                        style={{
                          cursor: "pointer",
                          borderLeft: item.highlighted ? "3px solid var(--color-accent)" : "3px solid transparent",
                        }}
                      >
                        <td>
                          <div className="td-company flex items-center gap-2">
                            {item.company}
                            {item.highlighted && (
                              <span className="badge badge-gold" style={{ fontSize: "8px" }}>Featured</span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {item.equityBreakdown.map((ep, ei) => (
                              <span key={ei} className="ticker-badge">
                                <strong>{ep.percent}%</strong> {ep.partner.split(" ").slice(0,2).join(" ")}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td>
                          <div className="flex flex-col gap-1">
                            {item.tickers.map((t, ti) => (
                              <span key={ti} className="ticker-badge w-fit">
                                <strong>{t.exchange}:</strong>{t.symbol}
                                {t.price && <span style={{ color: "var(--color-accent-dark)", marginLeft: 4 }}>{t.price}</span>}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td>
                          <p style={{ fontSize: "12px", lineHeight: 1.6 }}>{item.primaryRole}</p>
                          <div className="flex items-center gap-2 mt-1" style={{ fontSize: "10px", color: "rgba(28,28,28,0.5)" }}>
                            <MapPin size={10} style={{ color: "var(--color-accent-dark)" }} />
                            {item.region}
                            <span>·</span>
                            <span style={{ color: "var(--color-accent-dark)" }}>{item.status}</span>
                          </div>
                        </td>
                        <td style={{ textAlign: "right" }}>
                          <div style={{ fontWeight: 600, fontSize: "13px" }}>
                            {(item.annualProductionOz/1000).toFixed(0)}k oz/yr
                          </div>
                          <div style={{ fontSize: "11px", color: "#369d65", marginTop: 2 }}>
                            UGX {((item.aiscPerOz * FX_UGX)/1000000).toFixed(2)}M/oz AISC
                          </div>
                          <div style={{ fontSize: "10px", color: "rgba(28,28,28,0.5)", marginTop: 1 }}>
                            {item.provenReservesMoz} Moz reserves
                          </div>
                        </td>
                        <td>
                          <button
                            onClick={e => { e.stopPropagation(); setSelectedItem(item); }}
                            className="btn btn-outline"
                            style={{ fontSize: "10px", padding: "0.4rem 0.8rem" }}
                          >
                            <Eye size={12} /> View
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            <div
              style={{
                padding: "0.75rem 1.25rem",
                borderTop: "1px solid var(--color-border)",
                fontSize: "11px",
                color: "rgba(28,28,28,0.5)",
                display: "flex",
                justifyContent: "space-between",
                background: "rgba(28,28,28,0.03)",
              }}
            >
              <span>Showing <strong>{filtered.length}</strong> of <strong>{JV_DATA.length}</strong> tracked ventures</span>
              <span>Data updated Q3 2026 · XAU/UGX UGX 10,169,450/oz · Kampala Desk</span>
            </div>
          </div>
        )}

        {/* ── ANALYTICS VIEW ── */}
        {view === "analytics" && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Production ranking chart */}
            <div style={{ border: "1px solid var(--color-border)", padding: "1.5rem" }}>
              <h3 className="heading mb-5" style={{ fontSize: "1rem", fontWeight: 400 }}>
                Annual Production Rankings (k oz Au / yr)
              </h3>
              <div className="space-y-3">
                {[...filtered].sort((a,b) => b.annualProductionOz - a.annualProductionOz).map((item, i) => (
                  <div key={item.id}>
                    <div className="flex justify-between mb-1" style={{ fontSize: "11px" }}>
                      <span style={{ fontWeight: item.highlighted ? 600 : 400 }}>
                        {i+1}. {item.company.split(" ").slice(0,3).join(" ")}
                      </span>
                      <span style={{ color: "var(--color-accent-dark)", fontWeight: 600 }}>
                        {(item.annualProductionOz/1000).toFixed(0)}k
                      </span>
                    </div>
                    <div style={{ background: "var(--color-border)", height: 6 }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.annualProductionOz/maxProd)*100}%` }}
                        transition={{ duration: 0.8, delay: i * 0.04 }}
                        style={{
                          height: "100%",
                          background: item.highlighted
                            ? "linear-gradient(to right, var(--color-accent), var(--color-accent-dark))"
                            : "var(--color-navy)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AISC cost curve */}
            <div style={{ border: "1px solid var(--color-border)", padding: "1.5rem" }}>
              <h3 className="heading mb-5" style={{ fontSize: "1rem", fontWeight: 400 }}>
                AISC Cost Curve (UGX / oz) — Spot: UGX 10.17M/oz
              </h3>
              <div className="space-y-2">
                {[...filtered].sort((a,b) => a.aiscPerOz - b.aiscPerOz).map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.6rem 0.75rem",
                      border: "1px solid var(--color-border)",
                      fontSize: "11px",
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 500 }}>{item.company.split(" ").slice(0,3).join(" ")}</span>
                      <span style={{ fontSize: "10px", color: "rgba(28,28,28,0.45)", marginLeft: 6 }}>
                        {item.region.split(",")[0]}
                      </span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ color: "#369d65", fontWeight: 600 }}>
                        UGX {((item.aiscPerOz * FX_UGX)/1000000).toFixed(2)}M/oz
                      </span>
                      <span style={{ fontSize: "10px", color: "rgba(28,28,28,0.45)", marginLeft: 6 }}>
                        +UGX {(((SPOT_UGX - item.aiscPerOz * FX_UGX))/1000000).toFixed(2)}M margin
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <JvDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} spotGoldPrice={SPOT_UGX} />
      <JvCalculatorModal isOpen={calcOpen} onClose={() => setCalcOpen(false)} items={JV_DATA} spotGoldPrice={SPOT_UGX} />
    </section>
  );
}
