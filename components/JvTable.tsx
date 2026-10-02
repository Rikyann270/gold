"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  TrendingUp, 
  Layers, 
  MapPin, 
  ArrowUpDown,
  Eye,
  Filter,
  Coins,
  ShieldCheck
} from "lucide-react";
import { JointVentureItem } from "@/data/jvData";

interface JvTableProps {
  items: JointVentureItem[];
  onSelectItem: (item: JointVentureItem) => void;
  selectedExchangeFilter: string;
  setSelectedExchangeFilter: (exchange: string) => void;
  selectedStatusFilter: string;
  setSelectedStatusFilter: (status: string) => void;
  spotGoldPrice: number;
}

export const JvTable: React.FC<JvTableProps> = ({
  items,
  onSelectItem,
  selectedExchangeFilter,
  setSelectedExchangeFilter,
  selectedStatusFilter,
  setSelectedStatusFilter,
  spotGoldPrice,
}) => {
  const [sortField, setSortField] = useState<keyof JointVentureItem | "production">("company");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (field: keyof JointVentureItem | "production") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedItems = [...items].sort((a, b) => {
    let aVal: any = a[sortField as keyof JointVentureItem];
    let bVal: any = b[sortField as keyof JointVentureItem];

    if (sortField === "production") {
      aVal = a.annualProductionOz;
      bVal = b.annualProductionOz;
    }

    if (typeof aVal === "string") {
      return sortDirection === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
  });

  const exchanges = ["ALL", "NYSE", "TSX", "JSE", "ASX", "IDX", "OTC"];

  return (
    <div className="w-full bg-[#0B1F3B] border border-[#D4AF37]/35 shadow-2xl relative">
      {/* PRICCI Filter Bar */}
      <div className="bg-[#123B6D]/70 border-b border-[#D4AF37]/30 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
        <div className="flex items-center space-x-3">
          <div className="p-1.5 bg-[#0B1F3B] border border-[#D4AF37] text-[#D4AF37]">
            <Filter className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#F3E7C5]">
            FILTER BY EXCHANGE & STATUS:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Exchange Chips (Square / Rectangular) */}
          <div className="flex items-center space-x-1 bg-[#1C1C1C] border border-[#D4AF37]/30 p-1">
            <span className="text-[10px] text-[#F3E7C5]/60 px-2 uppercase">EXCHANGE:</span>
            {exchanges.map((ex) => (
              <button
                key={ex}
                onClick={() => setSelectedExchangeFilter(ex)}
                className={`px-2.5 py-1 text-[11px] font-mono transition-all cursor-pointer ${
                  selectedExchangeFilter === ex
                    ? "bg-[#D4AF37] text-[#0B1F3B] font-bold"
                    : "text-[#F3E7C5]/70 hover:text-[#F3E7C5] hover:bg-[#123B6D]"
                }`}
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1C1C1C] border-b-2 border-[#D4AF37] text-[#F3E7C5] font-serif-luxury text-base tracking-widest uppercase">
              <th className="py-4 px-6 font-medium min-w-[260px] select-none">
                <button
                  onClick={() => handleSort("company")}
                  className="flex items-center space-x-2 text-[#F3E7C5] hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Company / Joint Venture</span>
                  <ArrowUpDown className="w-3.5 h-3.5 ml-1 text-[#D4AF37]/70" />
                </button>
              </th>

              <th className="py-4 px-6 font-medium min-w-[220px]">
                <div className="flex items-center space-x-2 text-[#F3E7C5]">
                  <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
                  <span>Ticker / Exchange</span>
                </div>
              </th>

              <th className="py-4 px-6 font-medium min-w-[320px]">
                <div className="flex items-center space-x-2 text-[#F3E7C5]">
                  <Layers className="w-4 h-4 text-[#D4AF37]" />
                  <span>Primary Asset / Role</span>
                </div>
              </th>

              <th className="py-4 px-6 font-medium min-w-[180px] text-right select-none">
                <button
                  onClick={() => handleSort("production")}
                  className="flex items-center justify-end space-x-2 text-[#F3E7C5] hover:text-[#D4AF37] transition-colors w-full cursor-pointer"
                >
                  <Coins className="w-4 h-4 text-[#D4AF37]" />
                  <span>Annual Yield</span>
                  <ArrowUpDown className="w-3.5 h-3.5 ml-1 text-[#D4AF37]/70" />
                </button>
              </th>

              <th className="py-4 px-6 font-medium text-center w-28">
                <span className="sr-only">Quick View</span>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#123B6D]/60 text-xs font-mono">
            <AnimatePresence>
              {sortedItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-[#F3E7C5]/60">
                    No joint ventures match the current criteria.
                  </td>
                </tr>
              ) : (
                sortedItems.map((item, index) => {
                  const isHighlighted = item.highlighted;

                  return (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18, delay: index * 0.03 }}
                      onClick={() => onSelectItem(item)}
                      className={`group transition-all cursor-pointer ${
                        isHighlighted
                          ? "bg-[#123B6D]/50 border-l-4 border-l-[#D4AF37] hover:bg-[#123B6D]/80"
                          : "hover:bg-[#123B6D]/30"
                      }`}
                    >
                      {/* Column 1: Company / Joint Venture */}
                      <td className="py-4 px-6 align-top">
                        <div className="space-y-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-base text-[#F3E7C5] group-hover:text-[#D4AF37] transition-colors font-serif-luxury tracking-wide">
                              {item.company}
                            </span>
                            {isHighlighted && (
                              <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#D4AF37] text-[#0B1F3B] uppercase tracking-widest">
                                FEATURED
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-1 pt-1">
                            {item.equityBreakdown.map((ep, idx) => (
                              <span
                                key={idx}
                                className="px-1.5 py-0.5 text-[10px] bg-[#0B1F3B] border border-[#D4AF37]/30 text-[#F3E7C5]/80"
                              >
                                <strong className="text-[#D4AF37]">{ep.percent}%</strong> {ep.partner}
                              </span>
                            ))}
                          </div>
                        </div>
                      </td>

                      {/* Column 2: Ticker / Exchange */}
                      <td className="py-4 px-6 align-top">
                        <div className="flex flex-col space-y-1.5">
                          {item.tickers.map((t, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <span className="px-2 py-0.5 text-[11px] font-mono font-bold bg-[#1C1C1C] border border-[#D4AF37]/40 text-[#F3E7C5] group-hover:border-[#D4AF37] transition-all">
                                <span className="text-[#D4AF37]">{t.exchange}:</span> {t.symbol}
                              </span>
                              {t.companyName && (
                                <span className="text-[10px] text-[#F3E7C5]/60 font-sans">
                                  ({t.companyName})
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </td>

                      {/* Column 3: Primary Asset / Role */}
                      <td className="py-4 px-6 align-top">
                        <div className="space-y-1">
                          <p className="text-xs text-[#F3E7C5] font-light leading-relaxed">
                            {item.primaryRole}
                          </p>
                          <div className="flex items-center space-x-3 text-[10px] text-[#F3E7C5]/60 pt-1">
                            <span className="flex items-center">
                              <MapPin className="w-3 h-3 text-[#D4AF37] mr-1" />
                              {item.region}
                            </span>
                            <span>•</span>
                            <span className="text-[#D4AF37]">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Region & Yield Metrics */}
                      <td className="py-4 px-6 align-top text-right font-mono">
                        <div className="space-y-1">
                          <div className="text-sm font-bold text-[#F3E7C5]">
                            {(item.annualProductionOz / 1000).toFixed(0)}k <span className="text-[10px] text-[#D4AF37]">oz/yr</span>
                          </div>
                          <div className="text-[11px] text-[#F3E7C5]/70">
                            AISC: <span className="text-[#10B981] font-semibold">${item.aiscPerOz}</span>/oz
                          </div>
                          <div className="text-[10px] text-[#D4AF37]/80">
                            Reserves: {item.provenReservesMoz} Moz
                          </div>
                        </div>
                      </td>

                      {/* PRICCI Quick View Action */}
                      <td className="py-4 px-6 align-top text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectItem(item);
                          }}
                          className="px-3 py-1.5 text-[10px] font-mono tracking-[0.15em] uppercase bg-[#123B6D] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B1F3B] border border-[#D4AF37]/50 transition-all cursor-pointer font-semibold flex items-center justify-center space-x-1"
                        >
                          <Eye className="w-3 h-3" />
                          <span>DOSSIER</span>
                        </button>
                      </td>
                    </motion.tr>
                  );
                })
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <div className="bg-[#1C1C1C] border-t border-[#D4AF37]/20 px-6 py-3 flex items-center justify-between text-xs font-mono text-[#F3E7C5]/70">
        <div>
          PRICCI SELECTION: <span className="text-[#D4AF37] font-bold">{sortedItems.length}</span> OF{" "}
          <span className="text-[#D4AF37] font-bold">{items.length}</span> GLOBAL JOINT VENTURES
        </div>
        <div className="text-[#D4AF37] text-[10px] tracking-widest uppercase">
          HAUTE INTELLIGENCE MATRIX
        </div>
      </div>
    </div>
  );
};
