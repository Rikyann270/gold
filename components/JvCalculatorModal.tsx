"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calculator, Coins, Sliders, ArrowRight, Building2, PieChart } from "lucide-react";
import { JointVentureItem } from "@/data/jvData";

interface JvCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: JointVentureItem[];
  spotGoldPrice: number;
}

export const JvCalculatorModal: React.FC<JvCalculatorModalProps> = ({
  isOpen,
  onClose,
  items,
  spotGoldPrice,
}) => {
  const [modelGoldPrice, setModelGoldPrice] = useState<number>(spotGoldPrice);
  const [selectedJvId, setSelectedJvId] = useState<string>(items[0]?.id || "wagagai-gold-uganda");

  if (!isOpen) return null;

  const FX_UGX = 3700;
  const currentJv = items.find((i) => i.id === selectedJvId) || items[0];
  const annualOz = currentJv.annualProductionOz;
  const grossRevenueUgx = annualOz * modelGoldPrice;
  const aiscTotalUgx = annualOz * (currentJv.aiscPerOz * FX_UGX);
  const totalOperatingCashFlowUgx = grossRevenueUgx - aiscTotalUgx;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3B]/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-3xl bg-[#0B1F3B] border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.3)] font-mono overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#123B6D] border-b border-[#D4AF37]/40 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#0B1F3B] border border-[#D4AF37] text-[#D4AF37]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-[#F3E7C5]">
                  INSTITUTIONAL EQUITY SHARE SIMULATOR
                </h3>
                <p className="text-xs text-[#D4AF37]">
                  PARTNER CASH FLOW & DIVIDEND WATERFALL MODEL (UGX)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 bg-[#0B1F3B] hover:bg-[#D4AF37] text-[#F3E7C5] hover:text-[#0B1F3B] border border-[#D4AF37]/40 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Select Joint Venture */}
            <div>
              <label className="block text-xs uppercase text-[#D4AF37] mb-2 font-bold flex items-center">
                <Building2 className="w-3.5 h-3.5 mr-1.5" />
                SELECT TARGET JOINT VENTURE:
              </label>
              <select
                value={selectedJvId}
                onChange={(e) => setSelectedJvId(e.target.value)}
                className="w-full bg-[#1C1C1C] border border-[#D4AF37] text-[#F3E7C5] p-2.5 text-xs focus:outline-none"
              >
                {items.map((jv) => (
                  <option key={jv.id} value={jv.id} className="bg-[#0B1F3B]">
                    {jv.company} ({jv.region}) - {(jv.annualProductionOz / 1000).toFixed(0)}k oz/yr
                  </option>
                ))}
              </select>
            </div>

            {/* Model Inputs */}
            <div className="bg-[#1C1C1C] border border-[#D4AF37]/40 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#F3E7C5]">GOLD SPOT PRICE MODEL (UGX):</span>
                <span className="text-lg font-bold text-[#D4AF37]">UGX {modelGoldPrice.toLocaleString()} / oz</span>
              </div>
              <input
                type="range"
                min={6500000}
                max={15000000}
                step={50000}
                value={modelGoldPrice}
                onChange={(e) => setModelGoldPrice(Number(e.target.value))}
                className="w-full accent-[#D4AF37] bg-[#0B1F3B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#F3E7C5]/50 mt-1">
                <span>UGX 6.5M/oz</span>
                <span>UGX 10.2M/oz (Current)</span>
                <span>UGX 15.0M/oz</span>
              </div>
            </div>

            {/* Waterfall Summary */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="bg-[#123B6D]/60 border border-[#D4AF37]/30 p-3">
                <span className="text-[10px] text-[#F3E7C5]/60 block">ANNUAL YIELD</span>
                <span className="text-base font-bold text-[#F3E7C5]">{(annualOz / 1000).toFixed(0)}k oz</span>
              </div>
              <div className="bg-[#123B6D]/60 border border-[#D4AF37]/30 p-3">
                <span className="text-[10px] text-[#F3E7C5]/60 block">GROSS REVENUE</span>
                <span className="text-base font-bold text-[#D4AF37]">
                  {grossRevenueUgx >= 1e12
                    ? `UGX ${(grossRevenueUgx / 1e12).toFixed(2)}T`
                    : `UGX ${(grossRevenueUgx / 1e9).toFixed(1)}B`}
                </span>
              </div>
              <div className="bg-[#123B6D]/60 border border-[#D4AF37]/30 p-3">
                <span className="text-[10px] text-[#F3E7C5]/60 block">NET CASH FLOW</span>
                <span className="text-base font-bold text-[#10B981]">
                  {totalOperatingCashFlowUgx >= 1e12
                    ? `UGX ${(totalOperatingCashFlowUgx / 1e12).toFixed(2)}T`
                    : `UGX ${(totalOperatingCashFlowUgx / 1e9).toFixed(1)}B`}
                </span>
              </div>
            </div>

            {/* Equity Share Waterfall Breakdown */}
            <div>
              <h4 className="text-xs uppercase text-[#D4AF37] mb-2 font-bold flex items-center">
                <PieChart className="w-3.5 h-3.5 mr-1.5" />
                PARTNER DISTRIBUTION WATERFALL:
              </h4>

              <div className="space-y-2">
                {currentJv.equityBreakdown.map((ep, idx) => {
                  const partnerShareUgx = totalOperatingCashFlowUgx * (ep.percent / 100);
                  const formattedShare = partnerShareUgx >= 1e12
                    ? `UGX ${(partnerShareUgx / 1e12).toFixed(2)}T / yr`
                    : `UGX ${(partnerShareUgx / 1e9).toFixed(1)}B / yr`;
                  return (
                    <div key={idx} className="bg-[#0B1F3B] p-3 border border-[#D4AF37]/30 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#F3E7C5]">{ep.partner}</span>
                        <span className="text-[10px] text-[#F3E7C5]/60 block">{ep.role}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-[#D4AF37]">{ep.percent}% SHARE</span>
                        <span className="text-xs text-[#10B981] font-bold block">{formattedShare}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#123B6D] border-t border-[#D4AF37]/40 px-6 py-3 text-right">
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs uppercase bg-[#D4AF37] text-[#0B1F3B] font-bold border border-[#D4AF37] hover:bg-[#F3E7C5] transition-colors cursor-pointer"
            >
              CLOSE SIMULATOR
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
