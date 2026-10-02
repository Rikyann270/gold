import { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About | GOLDEN — Fine Gold Ventures & Institutional Mining Intelligence",
  description:
    "Founded in 1997 in Kampala, Uganda, GOLDEN delivers institutional-grade gold mining intelligence covering tier-1 joint ventures across East Africa and the world.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
