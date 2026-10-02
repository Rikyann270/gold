"use client";
import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

interface SiteNavProps {
  onOpenMatrix: () => void;
  onOpenCalculator: () => void;
}

const navLinks = [
  {
    label: "Ventures",
    children: [
      { label: "Uganda & East Africa", desc: "Busia, Karamoja, Kibali" },
      { label: "Americas", desc: "Nevada, Pueblo Viejo, Detour" },
      { label: "Asia Pacific", desc: "Grasberg, Cadia, Boddington" },
      { label: "State Partnered", desc: "UNMC Uganda, SOKIMO, Mind ID" },
    ],
  },
  { label: "Intelligence Matrix" },
  { label: "Analytics" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav({ onOpenMatrix, onOpenCalculator }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (label: string) => {
    if (label === "Intelligence Matrix" || label === "Analytics") {
      onOpenMatrix();
      setMobileOpen(false);
    }
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: "var(--color-header-bg)",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(11,31,59,0.06)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Mobile burger */}
          <button
            className="md:hidden p-1 cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          {/* Logo — centre on mobile, left on desktop */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            <span
              className="heading text-2xl md:text-3xl tracking-widest"
              style={{ fontWeight: 300, letterSpacing: "0.25em" }}
            >
              GOLDEN
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="nav-link flex items-center gap-1 cursor-pointer bg-transparent border-0">
                    {link.label}
                    <ChevronDown size={11} />
                  </button>
                  {activeDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-2 w-56 py-3 z-50"
                      style={{
                        background: "var(--bg-body)",
                        border: "1px solid var(--color-border)",
                        boxShadow: "0 8px 30px rgba(11,31,59,0.1)",
                      }}
                    >
                      {link.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => onOpenMatrix()}
                          className="w-full text-left px-4 py-2.5 hover:bg-black/5 cursor-pointer border-0 bg-transparent"
                        >
                          <div className="text-xs font-medium tracking-wide">{child.label}</div>
                          <div className="text-xs opacity-50 mt-0.5">{child.desc}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.href ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  className="nav-link bg-transparent border-0 cursor-pointer"
                  onClick={() => handleNavClick(link.label)}
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="p-1 cursor-pointer">
              <Search size={17} />
            </button>
            <button
              className="btn btn-solid hidden md:inline-flex"
              style={{ padding: "0.55rem 1.25rem", fontSize: "10px" }}
              onClick={onOpenCalculator}
            >
              Simulator
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="flex-1 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="w-72 h-full overflow-y-auto p-8 flex flex-col gap-6"
            style={{ background: "var(--bg-body)" }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end cursor-pointer bg-transparent border-0"
            >
              <X size={20} />
            </button>
            <span className="heading text-2xl tracking-widest" style={{ fontWeight: 300, letterSpacing: "0.25em" }}>
              GOLDEN
            </span>
            <nav className="flex flex-col gap-5 mt-4">
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="nav-link text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.label)}
                    className="text-left nav-link bg-transparent border-0 cursor-pointer text-sm"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>
            <div className="mt-auto pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
              <button className="btn btn-solid w-full" onClick={onOpenCalculator}>
                Equity Simulator
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
