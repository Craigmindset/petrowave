import type { Metadata } from "next";

type BuildMetadataInput = {
  title: string;
  description: string;
  pathname: string;
};

export function buildMetadata({
  title,
  description,
  pathname,
}: BuildMetadataInput): Metadata {
  const siteName = "PetrolLink";
  const baseUrl = "https://www.petrolink-energy.com";
  const url = `${baseUrl}${pathname}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      siteName,
      type: "website",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
