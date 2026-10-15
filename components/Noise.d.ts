import type { CSSProperties, ReactElement } from "react";

export interface NoiseProps {
  opacity?: number;
  size?: number;
  fps?: number;
  blendMode?: "normal" | "overlay" | "soft-light" | "multiply" | "screen" | "difference" | string;
  contrast?: number;
  colored?: boolean;
  dust?: number;
  scratches?: number;
  scanlines?: number;
  flicker?: number;
  fixed?: boolean;
  zIndex?: number;
  className?: string;
  style?: CSSProperties;
}

declare const Noise: (props: NoiseProps) => ReactElement | null;
export default Noise;
