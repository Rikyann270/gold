import type { CSSProperties, ReactElement } from "react";

export interface FlexCarouselItem {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}

export interface FlexCarouselProps {
  items?: FlexCarouselItem[];
  preset?: string;
  intro?: string;
  cardHeight?: number;
  gap?: number;
  squeeze?: number;
  focusOnClick?: boolean;
  captions?: boolean;
  fit?: string;
  radius?: number;
  lensWidth?: number;
  lensHeight?: number;
  tilt?: number;
  roundness?: number;
  bend?: number;
  reach?: number;
  curl?: string;
  dispersion?: number;
  liquid?: number;
  followCursor?: boolean;
  autoplay?: boolean;
  interval?: number;
  captureWheel?: boolean;
  className?: string;
  style?: CSSProperties;
}

declare const FlexCarousel: (props: FlexCarouselProps) => ReactElement | null;
export default FlexCarousel;
