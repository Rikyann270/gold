"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, KeyRound, ArrowRight, CheckCircle2, X } from "lucide-react";
import { BRAND } from "@/data/goldBarsData";

export default function ComingSoonPage() {
  const router = useRouter();
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 500);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Incorrect passcode.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error, please try again.");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030407",
        color: "#ffffff",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "2rem",
        overflow: "hidden",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
      }}
    >
      {/* Subtle Ambient Gold Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Centered Title & Coming Soon */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            margin: 0,
            textTransform: "uppercase",
            background: "linear-gradient(135deg, #FFF6DD 0%, #D4AF37 50%, #997300 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {BRAND.name}
        </h1>

        <p
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
            marginTop: "1.2rem",
            fontWeight: 300,
          }}
        >
          Coming Soon
        </p>
      </div>

      {/* Discreet Authorized Access in the Corner */}
      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 10,
        }}
      >
        <button
          type="button"
          onClick={() => {
            setShowUnlockModal(true);
            setStatus("idle");
            setErrorMessage("");
            setPassword("");
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            background: "rgba(10, 12, 16, 0.7)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "999px",
            color: "rgba(255, 255, 255, 0.45)",
            padding: "0.45rem 0.95rem",
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#d4af37";
            e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255, 255, 255, 0.45)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
          }}
        >
          <Lock size={12} /> Authorized Access
        </button>
      </div>

      {/* Password Modal */}
      {showUnlockModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setShowUnlockModal(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "380px",
              background: "#0d0f14",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              borderRadius: "16px",
              padding: "2rem",
              boxShadow: "0 24px 70px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.1)",
              position: "relative",
              textAlign: "left",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowUnlockModal(false)}
              style={{
                position: "absolute",
                top: "1.2rem",
                right: "1.2rem",
                background: "transparent",
                border: "none",
                color: "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "rgba(212, 175, 55, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <KeyRound size={16} color="#d4af37" />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 500, margin: 0, color: "#ffffff" }}>
                Authorized Access
              </h3>
            </div>

            <p style={{ fontSize: "12.5px", color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.6, marginBottom: "1.4rem" }}>
              Enter the access passcode to unlock the website preview.
            </p>

            <form onSubmit={handleUnlock}>
              <div style={{ marginBottom: "1rem" }}>
                <input
                  type="password"
                  placeholder="Enter passcode..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: status === "error" ? "1px solid #ef4444" : "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ab-gold, #d4af37)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = status === "error" ? "#ef4444" : "rgba(255, 255, 255, 0.15)")}
                />
              </div>

              {errorMessage && (
                <div style={{ fontSize: "12px", color: "#ef4444", marginBottom: "0.8rem" }}>
                  {errorMessage}
                </div>
              )}

              {status === "success" && (
                <div style={{ fontSize: "12px", color: "#22c55e", display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.8rem" }}>
                  <CheckCircle2 size={14} /> Access granted! Loading...
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #f2c46b, #d4af37)",
                  border: "none",
                  color: "#0B1F3B",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  opacity: status === "loading" ? 0.7 : 1,
                  transition: "all 0.2s ease",
                }}
              >
                {status === "loading" ? "Verifying..." : (
                  <>
                    Unlock <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
