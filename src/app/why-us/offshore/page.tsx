import { SubPageTemplate } from "@/components/subpage-template";
import { buildMetadata } from "@/lib/metadata";
import { subPageContent } from "@/lib/site-data";

const pathname = "/why-us/offshore";
const content = subPageContent[pathname];

export const metadata = buildMetadata({
  title: content.title,
  description: content.description,
  pathname,
});

export default function OffshorePage() {
  return <SubPageTemplate content={content} />;
}
