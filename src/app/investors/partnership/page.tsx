import { PartnershipContent } from "@/components/partnership-content";
import { buildMetadata } from "@/lib/metadata";

const pathname = "/investors/partnership";

export const metadata = buildMetadata({
  title: "Partnership Strategy | PetrolLink",
  description:
    "Explore strategic partnership opportunities with Petrowave Energy Limited across procurement, distribution, and maintenance.",
  pathname,
});

export default function PartnershipPage() {
  return <PartnershipContent />;
}
