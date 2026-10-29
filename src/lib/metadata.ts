import type { Metadata } from "next";
import { company } from "@/content/site";
export function pageMetadata(path: string, title: string, description: string): Metadata {
  return { title, description, alternates: { canonical: path }, openGraph: { type: "website", locale: "pt_BR", url: path, siteName: company.name, title, description }, twitter: { card: "summary_large_image", title, description } };
}
