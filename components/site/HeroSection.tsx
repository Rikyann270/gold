"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Play, Pause } from "lucide-react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="top" className="ab-hero-cinematic" aria-labelledby="hero-title">
      {/* Background Video Layer */}
      <div className="ab-hero-cinematic__video-container" aria-hidden="true">
        <video
          ref={videoRef}
          src="/hero_video2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="ab-hero-cinematic__video"
        />
        {/* Cinematic ambient lighting & dark gradient overlays for maximum legibility */}
        <div className="ab-hero-cinematic__vignette" />
        <div className="ab-hero-cinematic__gradient" />
      </div>

      <div className="ab-container ab-hero-cinematic__content">
        {/* Top / Main Headline Area */}
        <div className="ab-hero-cinematic__top">
          <div className="ab-hero-cinematic__kicker">
            <span className="ab-hero-cinematic__dot" />
            <span>LBMA-accredited gold bars &amp; institutional sourcing</span>
          </div>

          <h1 id="hero-title" className="ab-hero-cinematic__title">
            Pure gold bars <br className="hidden sm:inline" />
            secured for global markets.
          </h1>

          <div className="ab-hero-cinematic__actions">
            <button
              type="button"
              onClick={togglePlay}
              className="ab-hero-btn ab-hero-btn--glass"
              aria-label={isPlaying ? "Pause background video" : "Play background video"}
            >
              <span className="ab-hero-btn__icon">
                {isPlaying ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" />}
              </span>
              <span>{isPlaying ? "Pause motion" : "Play film"}</span>
            </button>

            <Link href="/contact" className="ab-hero-btn ab-hero-btn--solid">
              Request a quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Editorial Description + AurumBridge Crest / Signature */}
        <div className="ab-hero-cinematic__bottom">
          <div className="ab-hero-cinematic__summary">
            <div className="ab-hero-cinematic__rule" />
            <p>
              AurumBridge Global delivers investment-grade physical gold bars from 1 g to 400 oz,
              complete with spot-linked pricing, LBMA assay certificates, and insured custody direct
              to private buyers, refineries, and trading houses.
            </p>
          </div>

          <div className="ab-hero-cinematic__badge">
            <div className="ab-hero-cinematic__crest">
              <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
                <path
                  d="M24 8L36 34H12L24 8Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle cx="24" cy="26" r="3.5" fill="currentColor" />
              </svg>
            </div>
            <span className="ab-hero-cinematic__brand">AURUMBRIDGE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

