import { SubPageTemplate } from "@/components/subpage-template";
import { buildMetadata } from "@/lib/metadata";
import { subPageContent } from "@/lib/site-data";

const pathname = "/who-we-are/oil-gas-objective";
const content = subPageContent[pathname];

export const metadata = buildMetadata({
  title: content.title,
  description: content.description,
  pathname,
});

export default function OilGasObjectivePage() {
  return <SubPageTemplate content={content} />;
}
