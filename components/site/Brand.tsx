"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { BRAND } from "@/data/goldBarsData";

/* ─── Logo ─────────────────────────────────────────────────────────────── */

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg className="ab-logo__mark" width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="abLogoGrad" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff1a8" />
          <stop offset="0.5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#8a6516" />
        </linearGradient>
      </defs>
      <path d="M20 2.5 37.5 20 20 37.5 2.5 20Z" stroke="url(#abLogoGrad)" strokeWidth="1.5" />
      <path d="M9 25.5C12.5 13 27.5 13 31 25.5" stroke="url(#abLogoGrad)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 27.5h24" stroke="url(#abLogoGrad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 15.5v12M14.5 18.8v8.7M25.5 18.8v8.7" stroke="url(#abLogoGrad)" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link href="/" className="ab-logo" aria-label={`${BRAND.name} ${BRAND.suffix} — home`}>
      <LogoMark size={size} />
      <span className="ab-logo__text">
        <span className="ab-logo__name">{BRAND.name}</span>
        <span className="ab-logo__sub">{BRAND.suffix}</span>
      </span>
    </Link>
  );
}

/* ─── Scroll reveal ────────────────────────────────────────────────────── */

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section heading (line · eyebrow · title) ─────────────────────────── */

interface SectionHeadingProps {
  eyebrow: string;
  children: ReactNode;
  lead?: string;
  /** Use "h1" when this is the page's main title. */
  as?: "h1" | "h2";
}

export function SectionHeading({ eyebrow, children, lead, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="ab-eyebrow">{eyebrow}</div>
      <Tag className="ab-h2">{children}</Tag>
      {lead && <p className="ab-lead">{lead}</p>}
    </Reveal>
  );
}
