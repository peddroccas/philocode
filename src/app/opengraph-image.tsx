import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { company } from "@/content/site";

export const alt = `${company.name} — ${company.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/porto-logo-escuro.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#020618",
          color: "#f8fafc",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo}`} alt="" width={296} height={145} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05 }}>{company.slogan}</div>
          <div style={{ fontSize: 30, color: "#aab2bf" }}>
            Sites profissionais e institucionais · Atendimento online · Brasília (DF)
          </div>
        </div>
        <div style={{ display: "flex", width: 120, height: 8, borderRadius: 4, background: "#2389f8" }} />
      </div>
    ),
    size,
  );
}
