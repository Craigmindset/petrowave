import { SubPageTemplate } from "@/components/subpage-template";
import { buildMetadata } from "@/lib/metadata";
import { subPageContent } from "@/lib/site-data";

const pathname = "/why-us/downstream";
const content = subPageContent[pathname];

export const metadata = buildMetadata({
  title: content.title,
  description: content.description,
  pathname,
});

export default function DownstreamPage() {
  return <SubPageTemplate content={content} />;
}
