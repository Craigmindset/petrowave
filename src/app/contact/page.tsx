import { ContactSection } from "@/components/contact-section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact us | PetrolLink",
  description:
    "Get in touch with PetrolLink for procurement support, project partnerships, and investor conversations in the energy sector.",
  pathname: "/contact",
});

export default function ContactPage() {
  return <ContactSection />;
}
