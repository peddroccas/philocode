import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/criacao-de-sites", "/shopify", "/catequese-hub"].map(path => ({ url: `${SITE_URL}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.8 }));
}
