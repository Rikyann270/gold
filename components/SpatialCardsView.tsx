"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  TrendingUp, 
  Layers, 
  MapPin, 
  Coins, 
  ShieldCheck, 
  ChevronRight,
  Eye,
  Sparkles
} from "lucide-react";
import { JointVentureItem } from "@/data/jvData";

interface SpatialCardsViewProps {
  items: JointVentureItem[];
  onSelectItem: (item: JointVentureItem) => void;
  spotGoldPrice: number;
}

export const SpatialCardsView: React.FC<SpatialCardsViewProps> = ({
  items,
  onSelectItem,
  spotGoldPrice,
}) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
      {items.map((item, index) => {
        const estRevenueUsd = ((item.annualProductionOz * spotGoldPrice) / 1000000).toFixed(1);

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
            onClick={() => onSelectItem(item)}
            className="bg-pricci-card p-6 border relative group cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Top Collection Tag */}
              <div className="flex items-center justify-between mb-3 border-b border-[#D4AF37]/20 pb-2">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase">
                  PRICCI SELECTION • {item.ownershipType}
                </span>
                <span className="text-[10px] font-mono text-[#F3E7C5]/60 uppercase">
                  {item.status}
                </span>
              </div>

              {/* Title in PRICCI Luxury Serif Font */}
              <h3 className="text-2xl font-serif-luxury tracking-wide text-[#F3E7C5] group-hover:text-[#D4AF37] transition-colors mb-2">
                {item.company}
              </h3>

              {/* Asset Description */}
              <p className="text-xs text-[#F3E7C5]/70 line-clamp-2 mb-4 leading-relaxed font-sans font-light">
                {item.primaryRole}
              </p>

              {/* Equity Share Breakdown List */}
              <div className="mb-4 bg-[#0B1F3B] p-3 border border-[#D4AF37]/25 space-y-1.5 font-mono text-xs">
                <div className="text-[10px] text-[#D4AF37] uppercase tracking-widest flex items-center justify-between mb-1">
                  <span>EQUITY SHARE SPLIT</span>
                  <span>{item.equityBreakdown.length} PARTNERS</span>
                </div>
                {item.equityBreakdown.map((ep, idx) => (
                  <div key={idx} className="flex justify-between text-[11px] text-[#F3E7C5]/80 border-b border-[#D4AF37]/10 pb-1 last:border-0 last:pb-0">
                    <span>{ep.partner}</span>
                    <span className="text-[#D4AF37] font-bold">{ep.percent}%</span>
                  </div>
                ))}
              </div>

              {/* Public Exchange Tickers */}
              <div className="mb-4">
                <span className="text-[10px] font-mono text-[#F3E7C5]/50 uppercase block mb-1 tracking-widest">
                  EXCHANGE TICKERS:
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {item.tickers.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] bg-[#1C1C1C] border border-[#D4AF37]/35 text-[#F3E7C5]"
                    >
                      <strong className="text-[#D4AF37]">{t.exchange}:</strong> {t.symbol}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Metrics & PRICCI Quick View Button */}
            <div className="pt-4 border-t border-[#D4AF37]/25 space-y-3 font-mono">
              <div className="flex justify-between text-xs">
                <div>
                  <span className="text-[9px] text-[#F3E7C5]/60 block uppercase">ANNUAL YIELD</span>
                  <span className="font-bold text-[#F3E7C5]">{(item.annualProductionOz / 1000).toFixed(0)}k oz/yr</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-[#F3E7C5]/60 block uppercase">ESTIMATED VALUATION</span>
                  <span className="font-bold text-[#10B981]">${estRevenueUsd}M / yr</span>
                </div>
              </div>

              {/* Quick View Button (PRICCI Style) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectItem(item);
                }}
                className="w-full py-2.5 text-xs font-mono tracking-[0.2em] uppercase font-semibold bg-[#123B6D] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B1F3B] border border-[#D4AF37] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>QUICK VIEW DOSSIER</span>
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
