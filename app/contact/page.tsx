import { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | GOLDEN — Kampala Intelligence Desk",
  description:
    "Get in touch with GOLDEN's Kampala intelligence desk. Institutional enquiries, research requests, data licensing, and partnership opportunities.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
