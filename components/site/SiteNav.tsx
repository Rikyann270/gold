"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/goldBarsData";
import { Logo } from "@/components/site/Brand";

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header id="site-header" className={`ab-nav${scrolled ? " ab-nav--scrolled" : ""}`}>
      <div className="ab-nav__inner">
        <Logo />

        <nav className="ab-nav__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="ab-nav__link"
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" id="nav-request-quote" className="ab-btn ab-btn--sm ab-nav__cta">
          Request Quote
        </Link>

        <button
          type="button"
          id="nav-open-menu"
          className="ab-burger"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="ab-drawer" onClick={() => setOpen(false)}>
          <div className="ab-drawer__panel" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Logo size={30} />
              <button
                type="button"
                id="nav-close-menu"
                className="ab-burger"
                style={{ display: "inline-flex" }}
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="ab-drawer__links" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="ab-nav__link"
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="ab-btn ab-btn--block"
              style={{ marginTop: "auto" }}
              onClick={() => setOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
