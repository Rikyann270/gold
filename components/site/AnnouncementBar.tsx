"use client";
import { useState } from "react";
import { LIVE_MARKET_TICKERS } from "@/data/jvData";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      style={{ background: "var(--color-ann-bg)", color: "var(--color-ann-text)" }}
      className="relative flex items-center justify-center text-center py-2.5 px-10"
    >
      <div className="ticker-wrap flex-1 overflow-hidden">
        <div className="ticker-inner">
          {[...LIVE_MARKET_TICKERS, ...LIVE_MARKET_TICKERS].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-xs font-medium tracking-wider">
              <strong>{t.symbol}</strong>
              <span>{t.price}</span>
              <span className={t.isPositive ? "text-emerald-800" : "text-red-700"}>
                {t.change}
              </span>
              <span className="opacity-30">|</span>
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Close"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 text-base leading-none cursor-pointer"
        style={{ fontFamily: "inherit" }}
      >
        ×
      </button>
    </div>
  );
}
