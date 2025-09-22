import { Metadata } from "next";
import { ServiceMeta } from "./servicesMeta";

export function buildMetadata(meta: ServiceMeta): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords?.join(", "),
    alternates: {
      canonical: meta.canonical,
      languages:
        meta.hreflangs?.reduce<Record<string, string>>((acc, h) => {
          acc[h.hreflang] = h.href;
          return acc;
        }, {}) ?? undefined,
    },
    openGraph: {
      title: meta.openGraph?.title,
      description: meta.openGraph?.description,
      url: meta.openGraph?.url,
      images: meta.openGraph?.images?.map((u) => ({ url: u })) ?? undefined,
      siteName: meta.openGraph?.siteName,
      locale: meta.openGraph?.locale,
    },
    twitter: {
      card: (["summary", "summary_large_image", "player", "app"].includes(meta.twitter?.card ?? "")
        ? (meta.twitter?.card as "summary" | "summary_large_image" | "player" | "app")
        : undefined),
      title: meta.twitter?.title,
      description: meta.twitter?.description,
      images: meta.twitter?.image ? [meta.twitter.image] : undefined,
      creator: meta.twitter?.creator,
    },
  };
}

export function renderJsonLd(jsonLdArray: object[]) {
  // returns an array of <script> strings to inject on the page
  return jsonLdArray.map((obj, i) => ({
    key: `ldjson-${i}`,
    json: JSON.stringify(obj),
  }));
}
