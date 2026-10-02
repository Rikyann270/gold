"use client";

import React from "react";
import { 
  Building2, 
  Coins, 
  ShieldCheck, 
  TrendingUp, 
  Compass, 
  Activity,
  Layers,
  ArrowUpRight,
  Gauge
} from "lucide-react";
import { JointVentureItem } from "@/data/jvData";

interface MetricsOverviewProps {
  items: JointVentureItem[];
  spotGoldPrice: number;
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ items, spotGoldPrice }) => {
  const totalProductionOz = items.reduce((acc, item) => acc + item.annualProductionOz, 0);
  const totalReservesMoz = items.reduce((acc, item) => acc + item.provenReservesMoz, 0);
  const avgAisc = Math.round(items.reduce((acc, item) => acc + item.aiscPerOz, 0) / (items.length || 1));
  const totalEstimatedAnnualRevenueUsd = (totalProductionOz * spotGoldPrice) / 1000000000;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Metric 1: Annual Yield */}
      <div className="bg-gradient-navy-card p-4 relative group hover:border-[#D4AF37] transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono text-[#F3E7C5]/70 uppercase tracking-widest flex items-center">
            <Coins className="w-3.5 h-3.5 text-[#D4AF37] mr-1.5" />
            ANNUAL YIELD
          </span>
          <span className="px-1.5 py-0.5 text-[9px] font-mono bg-[#123B6D] text-[#D4AF37] border border-[#D4AF37]/30">
            AGGREGATE
          </span>
        </div>
        <div className="text-2xl lg:text-3xl font-bold font-mono text-[#F3E7C5] tracking-tight">
          {(totalProductionOz / 1000000).toFixed(2)} <span className="text-base font-normal text-[#D4AF37]">Moz Au</span>
        </div>
        <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-[#F3E7C5]/70">
          <span>Est. Gross Revenue:</span>
          <span className="text-[#D4AF37] font-semibold">${totalEstimatedAnnualRevenueUsd.toFixed(2)}B / yr</span>
        </div>
        <div className="w-full bg-[#0B1F3B] h-1.5 mt-2 overflow-hidden border border-[#D4AF37]/20">
          <div className="bg-gradient-to-r from-[#123B6D] to-[#D4AF37] h-full w-4/5 animate-pulse"></div>
        </div>
      </div>

      {/* Metric 2: AISC Cost Profile */}
      <div className="bg-gradient-navy-card p-4 relative group hover:border-[#D4AF37] transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono text-[#F3E7C5]/70 uppercase tracking-widest flex items-center">
            <Gauge className="w-3.5 h-3.5 text-[#D4AF37] mr-1.5" />
            AVERAGE AISC
          </span>
          <span className="px-1.5 py-0.5 text-[9px] font-mono bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40">
            COMPETITIVE
          </span>
        </div>
        <div className="text-2xl lg:text-3xl font-bold font-mono text-[#F3E7C5] tracking-tight">
          ${avgAisc} <span className="text-base font-normal text-[#D4AF37]">/ oz</span>
        </div>
        <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-[#F3E7C5]/70">
          <span>Net Profit Margin:</span>
          <span className="text-[#10B981] font-semibold">${Math.round(spotGoldPrice - avgAisc)} / oz</span>
        </div>
        <div className="w-full bg-[#0B1F3B] h-1.5 mt-2 overflow-hidden border border-[#D4AF37]/20">
          <div className="bg-[#10B981] h-full w-[65%]"></div>
        </div>
      </div>

      {/* Metric 3: Proven Reserves */}
      <div className="bg-gradient-navy-card p-4 relative group hover:border-[#D4AF37] transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono text-[#F3E7C5]/70 uppercase tracking-widest flex items-center">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] mr-1.5" />
            TOTAL RESERVES
          </span>
          <span className="px-1.5 py-0.5 text-[9px] font-mono bg-[#123B6D] text-[#D4AF37] border border-[#D4AF37]/30">
            AUDITED
          </span>
        </div>
        <div className="text-2xl lg:text-3xl font-bold font-mono text-[#F3E7C5] tracking-tight">
          {totalReservesMoz.toFixed(1)} <span className="text-base font-normal text-[#D4AF37]">Moz Au</span>
        </div>
        <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-[#F3E7C5]/70">
          <span>Reserve In-Ground Value:</span>
          <span className="text-[#D4AF37] font-semibold">${((totalReservesMoz * 1000000 * spotGoldPrice) / 1000000000).toFixed(0)}B</span>
        </div>
        <div className="w-full bg-[#0B1F3B] h-1.5 mt-2 overflow-hidden border border-[#D4AF37]/20">
          <div className="bg-[#D4AF37] h-full w-full"></div>
        </div>
      </div>

      {/* Metric 4: Kibali Spotlight & Global JV Share */}
      <div className="bg-gradient-charcoal-card p-4 relative border border-[#D4AF37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono text-[#D4AF37] font-bold uppercase tracking-widest flex items-center">
            <Building2 className="w-3.5 h-3.5 text-[#D4AF37] mr-1.5" />
            SPOTLIGHT: KIBALI SA
          </span>
          <span className="px-1.5 py-0.5 text-[9px] font-mono bg-[#D4AF37] text-[#0B1F3B] font-bold">
            TIER-1 AFRICA
          </span>
        </div>
        <div className="text-xl font-bold font-display text-[#F3E7C5] truncate">
          Kibali Goldmines SA
        </div>
        <div className="mt-2 text-[11px] font-mono text-[#F3E7C5]/80 space-y-1">
          <div className="flex justify-between">
            <span>Equity Structure:</span>
            <span className="text-[#D4AF37] font-semibold">45% ABX / 45% ANG / 10% SOK</span>
          </div>
          <div className="flex justify-between">
            <span>Primary Asset:</span>
            <span className="text-[#F3E7C5]">Kibali Mine (~760k oz)</span>
          </div>
        </div>
        <div className="mt-2 text-[10px] font-mono text-[#D4AF37] flex items-center justify-end">
          <span>VIEW FULL AUDIT</span>
          <ArrowUpRight className="w-3 h-3 ml-0.5" />
        </div>
      </div>
    </div>
  );
};
