"use client";

import type { CSSProperties, ReactNode } from "react";
import type { ProductId } from "@/data/goldBarsData";

/* ────────────────────────────────────────────────────────────────────────
   Pure-CSS 3D gold engine — no image assets required.
   Bar3D        : a six-faced box (gold / glass / plate / card materials)
   Stage        : perspective wrapper with sway / spin / still motion
   Drift        : orbiting float wrapper for loose pieces
   HeroCube     : glass cube filled with a pyramid of bars and nuggets
   ShardField   : exploding bars above a dark glass plate
   ProductScene : one scene per product category
   ──────────────────────────────────────────────────────────────────────── */

type Variant = "gold" | "glass" | "plate" | "card" | "nugget";

interface Bar3DProps {
  w: number;
  h: number;
  d: number;
  x?: number;
  y?: number;
  z?: number;
  rx?: number;
  ry?: number;
  rz?: number;
  variant?: Variant;
  front?: string;
  top?: string;
  fs?: number;
}

type CssVars = CSSProperties & Record<`--${string}`, string | number>;

export function Bar3D({
  w,
  h,
  d,
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
  variant = "gold",
  front,
  top,
  fs = 9,
}: Bar3DProps) {
  const material = variant === "nugget" ? "gold" : variant;
  const style: CssVars = {
    "--w": `${w}px`,
    "--h": `${h}px`,
    "--d": `${d}px`,
    "--fs": `${fs}px`,
    transform: `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`,
  };

  return (
    <div
      className={`ab-box ab-box--${material}${variant === "nugget" ? " ab-box--nugget" : ""}`}
      style={style}
      aria-hidden="true"
    >
      <div className="ab-face ab-face--front">{front && <span className="ab-engrave">{front}</span>}</div>
      <div className="ab-face ab-face--back" />
      <div className="ab-face ab-face--left" />
      <div className="ab-face ab-face--right" />
      <div className="ab-face ab-face--top">{top && <span className="ab-engrave">{top}</span>}</div>
      <div className="ab-face ab-face--bottom" />
    </div>
  );
}

interface StageProps {
  children: ReactNode;
  scale?: number;
  motion?: "sway" | "spin" | "still";
}

export function Stage({ children, scale = 1, motion = "sway" }: StageProps) {
  const inner: CssVars = { "--s": scale };
  return (
    <div className="ab-stage">
      <div className="ab-stage__inner" style={inner}>
        <div className={`ab-scene ab-scene--${motion}`}>{children}</div>
      </div>
    </div>
  );
}

interface DriftProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

export function Drift({ children, duration = 7, delay = 0 }: DriftProps) {
  const style: CssVars = { "--dur": `${duration}s`, "--delay": `${delay}s` };
  return (
    <div className="ab-drift" style={style}>
      {children}
    </div>
  );
}

/* ─── Hero: glass cube with gold ─────────────────────────────────────── */

const CUBE = 250;

const HERO_NUGGETS = [
  // inside the cube
  { x: -62, y: 6, z: 34, w: 30, h: 20, d: 22, rx: 25, ry: 40, rz: -12, dur: 6, delay: 0 },
  { x: 54, y: -4, z: -30, w: 26, h: 18, d: 20, rx: -30, ry: 70, rz: 20, dur: 7.5, delay: -2 },
  { x: -18, y: -38, z: -52, w: 22, h: 16, d: 18, rx: 40, ry: -25, rz: 35, dur: 5.5, delay: -1 },
  { x: 70, y: 26, z: 52, w: 20, h: 14, d: 16, rx: 15, ry: 110, rz: -40, dur: 8, delay: -3 },
  // floating outside, above the cube
  { x: 48, y: -182, z: 20, w: 34, h: 22, d: 24, rx: 30, ry: 35, rz: 18, dur: 6.5, delay: -1.5 },
  { x: -64, y: -168, z: -30, w: 26, h: 18, d: 20, rx: -35, ry: 60, rz: -25, dur: 7, delay: -4 },
  { x: 8, y: -214, z: -6, w: 20, h: 14, d: 16, rx: 45, ry: -50, rz: 10, dur: 5.8, delay: -2.5 },
];

export function HeroCube() {
  return (
    <Stage scale={1.12} motion="sway">
      {/* pyramid of bars on the cube floor */}
      {[-56, 0, 56].map((z) => (
        <Bar3D key={`l1-${z}`} w={124} h={26} d={52} y={112} z={z} front="AurumBridge" fs={7} />
      ))}
      {[-28, 28].map((z) => (
        <Bar3D key={`l2-${z}`} w={124} h={26} d={52} y={86} z={z} top={z < 0 ? "1 KG" : undefined} fs={9} />
      ))}
      <Bar3D w={124} h={26} d={52} y={60} ry={90} top={"999.9\nFINE GOLD"} fs={8} />

      {/* nuggets */}
      {HERO_NUGGETS.map((n, i) => (
        <Drift key={i} duration={n.dur} delay={n.delay}>
          <Bar3D variant="nugget" w={n.w} h={n.h} d={n.d} x={n.x} y={n.y} z={n.z} rx={n.rx} ry={n.ry} rz={n.rz} />
        </Drift>
      ))}

      {/* glass cube */}
      <Bar3D variant="glass" w={CUBE} h={CUBE} d={CUBE} />
    </Stage>
  );
}

/* ─── About: exploding bars over a glass plate ───────────────────────── */

const SHARDS = [
  { x: -72, y: -12, z: 20, w: 74, h: 28, d: 36, rx: 20, ry: 30, rz: -14, dur: 7, delay: 0, label: "999.9" },
  { x: 34, y: -54, z: -40, w: 64, h: 26, d: 32, rx: -25, ry: 50, rz: 18, dur: 8, delay: -2, label: "AU" },
  { x: 96, y: -4, z: 30, w: 48, h: 22, d: 26, rx: 10, ry: -40, rz: 32, dur: 6.5, delay: -4, label: "" },
  { x: -24, y: 38, z: 74, w: 56, h: 24, d: 28, rx: 35, ry: 70, rz: -10, dur: 7.5, delay: -1, label: "" },
  { x: -118, y: 30, z: -34, w: 40, h: 18, d: 22, rx: -30, ry: 20, rz: 45, dur: 6, delay: -3, label: "" },
  { x: 12, y: -116, z: 12, w: 38, h: 16, d: 20, rx: 50, ry: -20, rz: 10, dur: 5.5, delay: -2.5, label: "" },
  { x: 64, y: 62, z: -72, w: 44, h: 18, d: 22, rx: 15, ry: 110, rz: -35, dur: 8.5, delay: -5, label: "" },
  { x: -62, y: -86, z: -62, w: 30, h: 14, d: 18, rx: -45, ry: 60, rz: 25, dur: 6.2, delay: -1.8, label: "" },
  { x: 124, y: -76, z: -20, w: 28, h: 12, d: 16, rx: 25, ry: -80, rz: 50, dur: 7.2, delay: -3.5, label: "" },
];

export function ShardField() {
  return (
    <Stage scale={1.15} motion="sway">
      <Bar3D variant="plate" w={320} h={16} d={320} y={116} />
      {SHARDS.map((s, i) => (
        <Drift key={i} duration={s.dur} delay={s.delay}>
          <Bar3D
            variant={s.w < 50 ? "nugget" : "gold"}
            w={s.w}
            h={s.h}
            d={s.d}
            x={s.x}
            y={s.y}
            z={s.z}
            rx={s.rx}
            ry={s.ry}
            rz={s.rz}
            front={s.label || undefined}
            fs={8}
          />
        </Drift>
      ))}
    </Stage>
  );
}

/* ─── Products ────────────────────────────────────────────────────────── */

export function ProductScene({ id }: { id: ProductId }) {
  switch (id) {
    case "minted":
      return (
        <Stage key={id} scale={1.25} motion="sway">
          <Bar3D variant="card" w={132} h={196} d={5} front={"AURUMBRIDGE\nCERTIFIED"} fs={8} />
          <Bar3D w={64} h={104} d={9} z={9} y={-4} front={"1 OZ\n999.9\nFINE GOLD"} fs={8} />
          <Bar3D variant="card" w={132} h={196} d={5} x={-96} z={-60} ry={26} front={"ASSAY\nCARD"} fs={8} />
        </Stage>
      );
    case "cast":
      return (
        <Stage key={id} scale={1} motion="sway">
          <Bar3D w={196} h={44} d={86} y={42} z={-48} front={"AURUMBRIDGE\n1 KG"} fs={9} />
          <Bar3D w={196} h={44} d={86} y={42} z={48} front={"AURUMBRIDGE\n1 KG"} fs={9} />
          <Bar3D w={196} h={44} d={86} y={-2} top={"1 KG\n999.9 FINE GOLD"} fs={9} />
        </Stage>
      );
    case "good-delivery":
      return (
        <Stage key={id} scale={0.92} motion="sway">
          <Bar3D w={250} h={52} d={104} y={62} front={"400 OZ\nGOOD DELIVERY"} fs={10} />
          <Bar3D w={250} h={52} d={104} y={6} front={"AURUMBRIDGE\n995.0+"} fs={10} />
          <Bar3D w={250} h={52} d={104} y={-50} top={"400 OZ\nGOOD DELIVERY\n999.9"} fs={10} />
        </Stage>
      );
    case "vault":
      return (
        <Stage key={id} scale={1.05} motion="sway">
          {[-24, 24].map((z) => (
            <Bar3D key={`a-${z}`} w={96} h={24} d={44} y={83} z={z} fs={7} front="AURUM" />
          ))}
          {[-24, 24].map((z) => (
            <Bar3D key={`b-${z}`} w={96} h={24} d={44} y={57} z={z} ry={90} />
          ))}
          <Bar3D w={96} h={24} d={44} y={31} top="VAULT" fs={8} />
          <Bar3D variant="glass" w={190} h={190} d={190} />
          <Bar3D variant="plate" w={230} h={12} d={230} y={102} />
        </Stage>
      );
    default:
      return null;
  }
}
