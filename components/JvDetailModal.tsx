"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Building2, 
  TrendingUp, 
  Layers, 
  MapPin, 
  Coins, 
  ShieldCheck, 
  ExternalLink,
  Calculator,
  PieChart,
  Activity,
  Sliders,
  DollarSign,
  Award
} from "lucide-react";
import { JointVentureItem } from "@/data/jvData";

interface JvDetailModalProps {
  item: JointVentureItem | null;
  onClose: () => void;
  spotGoldPrice: number;
}

export const JvDetailModal: React.FC<JvDetailModalProps> = ({
  item,
  onClose,
  spotGoldPrice,
}) => {
  const [customGoldPrice, setCustomGoldPrice] = useState<number>(spotGoldPrice);

  if (!item) return null;

  const FX_UGX = 3700;
  const annualOz = item.annualProductionOz;
  const aiscUgx = item.aiscPerOz * FX_UGX;
  const netMarginPerOzUgx = customGoldPrice - aiscUgx;
  const totalNetOperatingProfitUgx = annualOz * netMarginPerOzUgx;
  const totalGrossRevenueUgx = annualOz * customGoldPrice;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3B]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-4xl max-h-[90vh] bg-[#0B1F3B] border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-y-auto relative flex flex-col"
        >
          {/* Top Bar Header */}
          <div className="bg-[#123B6D] border-b border-[#D4AF37]/40 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#0B1F3B] border border-[#D4AF37] text-[#D4AF37]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl md:text-2xl font-bold font-display text-[#F3E7C5]">
                    {item.company}
                  </h2>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#D4AF37] text-[#0B1F3B] uppercase">
                    {item.ownershipType}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#D4AF37] tracking-wider">
                  OPERATIONAL INTELLIGENCE DOSSIER
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-[#0B1F3B] hover:bg-[#D4AF37] text-[#F3E7C5] hover:text-[#0B1F3B] border border-[#D4AF37]/50 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Grid */}
          <div className="p-6 space-y-6">
            {/* Asset Role Banner */}
            <div className="bg-[#1C1C1C] border border-[#D4AF37]/40 p-4 font-mono">
              <div className="text-[10px] text-[#D4AF37] uppercase tracking-widest mb-1 flex items-center">
                <Layers className="w-3.5 h-3.5 mr-1.5" />
                PRIMARY ASSET & OPERATIONAL ROLE
              </div>
              <p className="text-sm text-[#F3E7C5] font-semibold leading-relaxed font-sans">
                {item.primaryRole}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[#F3E7C5]/70 pt-2 border-t border-[#D4AF37]/20">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                  Region: <strong className="text-[#F3E7C5] ml-1">{item.region}</strong>
                </span>
                <span>•</span>
                <span>Operator: <strong className="text-[#D4AF37] ml-1">{item.operator}</strong></span>
                <span>•</span>
                <span>Status: <strong className="text-[#10B981] ml-1">{item.status}</strong></span>
              </div>
            </div>

            {/* Equity Ownership Split & Partner Revenue Distribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Equity Split */}
              <div className="bg-gradient-navy-card p-5 border border-[#D4AF37]/30 font-mono">
                <h3 className="text-sm font-bold text-[#F3E7C5] font-display mb-3 uppercase tracking-wider flex items-center">
                  <PieChart className="w-4 h-4 text-[#D4AF37] mr-2" />
                  EQUITY SHAREHOLDERS & GOVERNANCE
                </h3>

                <div className="space-y-3">
                  {item.equityBreakdown.map((partner, idx) => {
                    const partnerProfitUgx = totalNetOperatingProfitUgx * (partner.percent / 100);
                    const formattedProfit = partnerProfitUgx >= 1e12
                      ? `UGX ${(partnerProfitUgx / 1e12).toFixed(2)}T / yr`
                      : `UGX ${(partnerProfitUgx / 1e9).toFixed(1)}B / yr`;
                    return (
                      <div key={idx} className="bg-[#0B1F3B] p-3 border border-[#D4AF37]/20 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#F3E7C5]">{partner.partner}</span>
                          <span className="font-mono text-sm text-[#D4AF37] font-bold">{partner.percent}%</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[#F3E7C5]/70">
                          <span>{partner.role}</span>
                          {partner.ticker && <span className="text-[#D4AF37]">{partner.ticker}</span>}
                        </div>
                        <div className="w-full bg-[#1C1C1C] h-1.5 mt-1 overflow-hidden">
                          <div
                            style={{ width: `${partner.percent}%` }}
                            className="bg-[#D4AF37] h-full"
                          />
                        </div>
                        <div className="text-[10px] text-right text-[#10B981] pt-1">
                          Est. Profit Share: <strong>{formattedProfit}</strong>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Public Market Tickers & ESG */}
              <div className="space-y-4 font-mono">
                <div className="bg-gradient-navy-card p-5 border border-[#D4AF37]/30">
                  <h3 className="text-sm font-bold text-[#F3E7C5] font-display mb-3 uppercase tracking-wider flex items-center">
                    <TrendingUp className="w-4 h-4 text-[#D4AF37] mr-2" />
                    PUBLIC EXCHANGE QUOTES
                  </h3>

                  <div className="space-y-2">
                    {item.tickers.map((t, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-[#1C1C1C] p-2.5 border border-[#D4AF37]/30 text-xs">
                        <div>
                          <span className="text-[#D4AF37] font-bold">{t.exchange}: {t.symbol}</span>
                          {t.companyName && <span className="text-[10px] text-[#F3E7C5]/60 ml-2">({t.companyName})</span>}
                        </div>
                        <div className="text-right">
                          <span className="text-[#F3E7C5] font-bold mr-2">{t.price || "N/A"}</span>
                          <span className="text-[#10B981] font-semibold">{t.change24h || "+0.0%"}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-navy-card p-4 border border-[#D4AF37]/30 text-xs">
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest block mb-1 flex items-center">
                    <Award className="w-3.5 h-3.5 mr-1" />
                    ESG & INFRASTRUCTURE PROFILE
                  </span>
                  <p className="text-[#F3E7C5] font-sans text-xs leading-relaxed">
                    {item.esgScore}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Gold Price Profit & Revenue Simulator */}
            <div className="bg-[#1C1C1C] border border-[#D4AF37] p-5 font-mono">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider flex items-center">
                    <Calculator className="w-4 h-4 mr-2 text-[#D4AF37]" />
                    SIMULATE OPERATING REVENUE AT SPOT GOLD PRICE
                  </h4>
                  <p className="text-[11px] text-[#F3E7C5]/70">
                    Adjust gold spot price slider to model net cash flow for {item.company}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#F3E7C5]/60">MODELLED GOLD SPOT (UGX):</span>
                  <div className="text-xl font-bold text-[#D4AF37]">UGX {customGoldPrice.toLocaleString()} / oz</div>
                </div>
              </div>

              {/* Range Slider */}
              <div className="mb-4">
                <input
                  type="range"
                  min={6500000}
                  max={15000000}
                  step={50000}
                  value={customGoldPrice}
                  onChange={(e) => setCustomGoldPrice(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-[#0B1F3B] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#F3E7C5]/50 mt-1">
                  <span>UGX 6.5M/oz</span>
                  <span>UGX 10.2M/oz (Current)</span>
                  <span>UGX 15.0M/oz</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#D4AF37]/30 text-center">
                <div className="bg-[#0B1F3B] p-3 border border-[#D4AF37]/20">
                  <span className="text-[10px] text-[#F3E7C5]/60 uppercase">ANNUAL GROSS REVENUE</span>
                  <div className="text-lg font-bold text-[#F3E7C5]">
                    {totalGrossRevenueUgx >= 1e12
                      ? `UGX ${(totalGrossRevenueUgx / 1e12).toFixed(2)}T`
                      : `UGX ${(totalGrossRevenueUgx / 1e9).toFixed(1)}B`}
                  </div>
                </div>

                <div className="bg-[#0B1F3B] p-3 border border-[#D4AF37]/20">
                  <span className="text-[10px] text-[#F3E7C5]/60 uppercase">NET OPERATING MARGIN</span>
                  <div className="text-lg font-bold text-[#10B981]">
                    UGX {((netMarginPerOzUgx) / 1000000).toFixed(2)}M / oz
                  </div>
                </div>

                <div className="bg-[#0B1F3B] p-3 border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <span className="text-[10px] text-[#D4AF37] uppercase font-bold">TOTAL NET PROFIT POOL</span>
                  <div className="text-lg font-bold text-[#D4AF37]">
                    {totalNetOperatingProfitUgx >= 1e12
                      ? `UGX ${(totalNetOperatingProfitUgx / 1e12).toFixed(2)}T`
                      : `UGX ${(totalNetOperatingProfitUgx / 1e9).toFixed(1)}B`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions (Square Buttons - NO PILLS) */}
          <div className="bg-[#123B6D] border-t border-[#D4AF37]/40 px-6 py-4 flex items-center justify-between font-mono">
            <span className="text-xs text-[#F3E7C5]/70">
              ASSET ID: <strong className="text-[#D4AF37]">{item.id.toUpperCase()}</strong>
            </span>
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono uppercase bg-[#0B1F3B] hover:bg-[#1C1C1C] text-[#F3E7C5] border border-[#D4AF37]/40 transition-all cursor-pointer font-semibold"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
