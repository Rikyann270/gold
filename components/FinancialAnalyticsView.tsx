"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, PieChart, Coins, ShieldCheck, Gauge, TrendingUp, Layers } from "lucide-react";
import { JointVentureItem } from "@/data/jvData";

interface FinancialAnalyticsViewProps {
  items: JointVentureItem[];
  spotGoldPrice: number;
}

export const FinancialAnalyticsView: React.FC<FinancialAnalyticsViewProps> = ({
  items,
  spotGoldPrice,
}) => {
  const sortedByProduction = [...items].sort((a, b) => b.annualProductionOz - a.annualProductionOz);
  const sortedByAisc = [...items].sort((a, b) => a.aiscPerOz - b.aiscPerOz);
  const maxProdOz = sortedByProduction[0]?.annualProductionOz || 1;

  return (
    <div className="w-full space-y-8 font-mono">
      {/* Top Section: Annual Yield Comparison Chart */}
      <div className="bg-gradient-navy-card p-6 border border-[#D4AF37]/40 shadow-xl">
        <div className="flex items-center justify-between mb-6 border-b border-[#D4AF37]/20 pb-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#0B1F3B] border border-[#D4AF37] text-[#D4AF37]">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-[#F3E7C5]">
                ANNUAL PRODUCTION RANKINGS (K-OUNCES AU / YR)
              </h3>
              <p className="text-xs text-[#F3E7C5]/60">
                Comparative annual gold output across top global joint ventures and complexes
              </p>
            </div>
          </div>
          <span className="px-2 py-1 text-xs bg-[#1C1C1C] text-[#D4AF37] border border-[#D4AF37]/30">
            {items.length} VENTURES
          </span>
        </div>

        <div className="space-y-3">
          {sortedByProduction.map((item, idx) => {
            const percent = (item.annualProductionOz / maxProdOz) * 100;
            const isKibali = item.id === "kibali-goldmines";

            return (
              <div key={item.id} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className={`font-semibold ${isKibali ? "text-[#D4AF37]" : "text-[#F3E7C5]"}`}>
                    {idx + 1}. {item.company} <span className="text-[#F3E7C5]/50 text-[10px]">({item.region.split(",")[0]})</span>
                  </span>
                  <span className="text-[#D4AF37] font-bold">
                    {(item.annualProductionOz / 1000).toFixed(0)}k oz/yr
                  </span>
                </div>
                <div className="w-full bg-[#0B1F3B] h-3 border border-[#D4AF37]/20 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.04 }}
                    className={`h-full ${
                      isKibali
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#F3E7C5] shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                        : "bg-[#123B6D]"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AISC Cost Curve vs Reserves Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: AISC Cost Profile Efficiency */}
        <div className="bg-gradient-navy-card p-6 border border-[#D4AF37]/40 shadow-xl">
          <div className="flex items-center space-x-3 mb-4 border-b border-[#D4AF37]/20 pb-3">
            <Gauge className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h4 className="text-base font-bold font-display text-[#F3E7C5]">
                AISC COST EFFICIENCY CURVE ($/OZ)
              </h4>
              <p className="text-xs text-[#F3E7C5]/60">Lowest cost per ounce operating advantage</p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs">
            {sortedByAisc.slice(0, 7).map((item) => (
              <div key={item.id} className="bg-[#0B1F3B] p-2.5 border border-[#D4AF37]/20 flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#F3E7C5]">{item.company}</span>
                  <span className="text-[10px] text-[#F3E7C5]/60 block">{item.mineType}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#10B981]">${item.aiscPerOz} / oz</span>
                  <span className="text-[10px] text-[#D4AF37] block">
                    Margin: +${Math.round(spotGoldPrice - item.aiscPerOz)}/oz
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Proven Reserves Distribution */}
        <div className="bg-gradient-navy-card p-6 border border-[#D4AF37]/40 shadow-xl">
          <div className="flex items-center space-x-3 mb-4 border-b border-[#D4AF37]/20 pb-3">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h4 className="text-base font-bold font-display text-[#F3E7C5]">
                PROVEN RESERVES POOL (MOZ AU)
              </h4>
              <p className="text-xs text-[#F3E7C5]/60">Audited in-ground asset reserves</p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs">
            {[...items].sort((a, b) => b.provenReservesMoz - a.provenReservesMoz).slice(0, 7).map((item) => (
              <div key={item.id} className="bg-[#0B1F3B] p-2.5 border border-[#D4AF37]/20 flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#F3E7C5]">{item.company}</span>
                  <span className="text-[10px] text-[#F3E7C5]/60 block">{item.region}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#D4AF37]">{item.provenReservesMoz} Moz</span>
                  <span className="text-[10px] text-[#F3E7C5]/70 block">
                    In-Ground: ${((item.provenReservesMoz * 1000000 * spotGoldPrice) / 1000000000).toFixed(1)}B
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
