"use client";

import FlexCarousel from "@/components/FlexCarousel";

const goldenSlideItems = [
  { src: "/golden-slides/2149241140.jpg" },
  { src: "/golden-slides/2149241141.jpg" },
  { src: "/golden-slides/2149836423.jpg" },
  { src: "/golden-slides/2151693759.jpg" },
  {
    src: "/golden-slides/igE0uOHyfezqLWKF7ei6wb0qAkTYen6R-rABRviDkVQgF09CQ4SJpx02MuO4iFjgliznOc9PENrSi6Ks4dQrXO5ApF9zO1CX7kWM7T8L1tl5JA5DE8RPqYHZNUt7xB3d2DODmYyWlfo5qFs_IZ1_fmQ38uibIwXJ629cgMZVypL5afxK-fJwqIKW48bKNsc_.jpeg",
  },
  {
    src: "/golden-slides/jPIFQL_76sJtsz4MyKBED6UHTEAmfstaaUOGjkI26TKQoYUeoN2OObcPaleGQsQisnEiU_wu1okSCVvCge1nSxec1HMZML-ONbg-nKmfPeDyJi0JTw5cAQoZC8aBpSGYkqH41Agk5_86ogBJR_IVdUPDVYialHLlG4A_1KAV0r4DQ1X9h7diaqKR4B9WGd5m.jpeg",
  },
];

export function GoldenSlidesSection() {
  return (
    <section
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(1rem, 2.5vw, 2rem) 0",
      }}
    >
      <div style={{ width: "100%", height: "560px", position: "relative" }}>
        <FlexCarousel
          items={goldenSlideItems}
          preset="liquid"
          intro="rise"
          cardHeight={0.5}
          gap={35}
          squeeze={0.2}
          focusOnClick
          captions={false}
          fit="natural"
          radius={0}
          lensWidth={0.70}
          lensHeight={1.18}
          tilt={62}
          roundness={1}
          bend={0.40}
          reach={0.38}
          curl="twist"
          dispersion={0.45}
          liquid={0}
          followCursor={false}
          autoplay={false}
          interval={4}
          captureWheel
        />
      </div>
    </section>
  );
}
