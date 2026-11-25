import { ImageResponse } from "next/og";
import { company } from "@/content/site";
import { ANCHOR_PATH } from "@/components/ui/Logo";

export const alt = `${company.name} — ${company.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Segue o banner "Open Graph — Escuro" da página "Rebranding 2026" no Figma. */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0B0B0B", color: "#FFFFFF", padding: 72 }}>
        <div style={{ position: "absolute", left: 790, top: 140, width: 380, height: 380, borderRadius: 9999, border: "1px solid rgba(107,114,128,0.45)", display: "flex" }} />
        <div style={{ position: "absolute", left: 980, top: 0, width: 1, height: 630, background: "rgba(107,114,128,0.35)", display: "flex" }} />
        <svg width="230" height="264" viewBox="12 4 96 110" style={{ position: "absolute", left: 865, top: 198 }}>
          <path d={ANCHOR_PATH} fill="#FFFFFF" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="44" height="50" viewBox="12 4 96 110"><path d={ANCHOR_PATH} fill="#FFFFFF" /></svg>
            <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: -2 }}>philocode</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>
              <span>Engineering</span>
              <span>what’s next.</span>
            </div>
            <div style={{ fontSize: 28, color: "#A1A1AA" }}>Sites, Shopify e sistemas · Atendimento em todo o Brasil</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
