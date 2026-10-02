"use client";

import React from "react";
import { 
  Building2, 
  TrendingUp, 
  Search, 
  Download, 
  Calculator, 
  Layers, 
  BarChart3, 
  Globe, 
  Activity,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { LIVE_MARKET_TICKERS } from "@/data/jvData";

interface NavbarProps {
  activeTab: "matrix" | "cards" | "analytics" | "calculator";
  setActiveTab: (tab: "matrix" | "cards" | "analytics" | "calculator") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onExportCsv: () => void;
  onOpenCalculator: () => void;
  totalCount: number;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onExportCsv,
  onOpenCalculator,
  totalCount,
  selectedCategoryFilter,
  setSelectedCategoryFilter,
}) => {
  const categories = [
    { id: "ALL", label: "ALL COLLECTIONS" },
    { id: "HIGHLIGHTS", label: "PRICCI HIGHLIGHTS" },
    { id: "AFRICA", label: "AFRICAN ASSETS" },
    { id: "AMERICAS", label: "AMERICAS COMPLEX" },
    { id: "ASIA", label: "ASIA PACIFIC" },
    { id: "STATE", label: "STATE PARTNERED" },
  ];

  return (
    <header className="w-full bg-[#0B1F3B] border-b border-[#D4AF37]/30 sticky top-0 z-40 backdrop-blur-md">
      {/* Top Announcement Bar (PRICCI Jewellery Style) */}
      <div className="w-full bg-[#1C1C1C] border-b border-[#D4AF37]/20 py-1.5 px-4 text-[10px] font-mono tracking-[0.2em] text-center uppercase text-[#F3E7C5]/80 flex items-center justify-between">
        <span className="hidden md:inline text-[#D4AF37]">
          PRICCI HAUTE INTELLIGENCE • EST. TIER-1 GLOBAL MINING MATRIX
        </span>
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center justify-center space-x-6 animate-ticker whitespace-nowrap">
            {LIVE_MARKET_TICKERS.concat(LIVE_MARKET_TICKERS).map((ticker, idx) => (
              <span key={`${ticker.symbol}-${idx}`} className="inline-flex items-center space-x-2 px-3 border-r border-[#123B6D]">
                <strong className="text-[#D4AF37]">{ticker.symbol}</strong>
                <span className="text-[#F3E7C5]">{ticker.price}</span>
                <span className="text-[#10B981] font-semibold">{ticker.change}</span>
              </span>
            ))}
          </div>
        </div>
        <span className="hidden md:inline text-[#D4AF37]">
          PORTUGAL & GLOBAL BOUTIQUE MATRIX
        </span>
      </div>

      {/* Main Luxury Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#D4AF37]/20">
        {/* PRICCI Style Brand Typography */}
        <div className="flex items-center space-x-4">
          <div className="w-11 h-11 bg-[#123B6D] border border-[#D4AF37] flex items-center justify-center shadow-lg relative">
            <span className="font-serif-luxury text-xl font-bold text-[#D4AF37] tracking-widest">P</span>
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D4AF37]"></span>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-serif-luxury tracking-[0.25em] text-[#F3E7C5] uppercase font-light">
              PRICCI <span className="text-[#D4AF37] font-normal">GOLDEN</span>
            </h1>
            <p className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase">
              DISTINCTIVE LUXURY & JOINT VENTURE MATRIX
            </p>
          </div>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center space-x-3 w-full md:w-auto justify-end font-mono">
          <div className="relative flex-1 md:w-60">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-[#D4AF37]" />
            <input
              type="text"
              placeholder="SEARCH ASSET, TICKER, JV..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1C1C1C] border border-[#D4AF37]/40 text-[#F3E7C5] text-xs pl-8 pr-3 py-1.5 focus:outline-none focus:border-[#D4AF37] placeholder-[#F3E7C5]/40 tracking-wider text-[11px]"
            />
          </div>

          <button
            onClick={onExportCsv}
            className="flex items-center space-x-1.5 bg-[#123B6D] hover:bg-[#D4AF37] text-[#F3E7C5] hover:text-[#0B1F3B] border border-[#D4AF37]/40 px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CSV</span>
          </button>

          <button
            onClick={onOpenCalculator}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E7C5] text-[#0B1F3B] border border-[#D4AF37] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">SIMULATOR</span>
          </button>
        </div>
      </div>

      {/* PRICCI Category Bar ("Shop by Metal / Shop by Category" Style Navigation) */}
      <div className="w-full bg-[#0B1F3B] py-2 px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-4 text-xs font-serif-luxury tracking-[0.2em] uppercase">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryFilter(cat.id)}
                className={`py-1.5 px-3 transition-all cursor-pointer whitespace-nowrap border-b-2 ${
                  selectedCategoryFilter === cat.id
                    ? "border-[#D4AF37] text-[#D4AF37] font-bold"
                    : "border-transparent text-[#F3E7C5]/70 hover:text-[#F3E7C5] hover:border-[#D4AF37]/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div className="hidden lg:flex items-center space-x-2 font-mono text-[11px] uppercase tracking-wider">
            <button
              onClick={() => setActiveTab("matrix")}
              className={`px-3 py-1 border transition-all cursor-pointer ${
                activeTab === "matrix"
                  ? "bg-[#123B6D] text-[#D4AF37] border-[#D4AF37]"
                  : "bg-transparent text-[#F3E7C5]/60 border-transparent hover:text-[#F3E7C5]"
              }`}
            >
              MATRIX TABLE
            </button>

            <button
              onClick={() => setActiveTab("cards")}
              className={`px-3 py-1 border transition-all cursor-pointer ${
                activeTab === "cards"
                  ? "bg-[#123B6D] text-[#D4AF37] border-[#D4AF37]"
                  : "bg-transparent text-[#F3E7C5]/60 border-transparent hover:text-[#F3E7C5]"
              }`}
            >
              PRICCI GALLERY
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-3 py-1 border transition-all cursor-pointer ${
                activeTab === "analytics"
                  ? "bg-[#123B6D] text-[#D4AF37] border-[#D4AF37]"
                  : "bg-transparent text-[#F3E7C5]/60 border-transparent hover:text-[#F3E7C5]"
              }`}
            >
              ANALYTICS
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
