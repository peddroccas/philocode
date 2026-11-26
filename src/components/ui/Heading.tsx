import clsx from "clsx";
import type { Emphasis } from "@/content/site";
import { reveal } from "@/lib/reveal";

/** Título montado das partes de Emphasis, todo num só peso e numa só cor. */
export function EmphasisText({ text }: { text: Emphasis }) {
  return (
    <>
      {text.before}
      {text.emphasis}
      {text.after}
    </>
  );
}

type SectionHeadingProps = {
  title: Emphasis;
  intro?: string;
  id: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Bloco de título de seção: h2 no tamanho de seção e, no máximo, uma linha de apoio. */
export function SectionHeading({ title, intro, id, tone = "light", className }: SectionHeadingProps) {
  return (
    <div {...reveal("up")} className={clsx("max-w-3xl", className)}>
      <h2 id={id} className={clsx("text-section", tone === "light" ? "text-ink" : "text-snow")}>
        <EmphasisText text={title} />
      </h2>
      {intro && (
        <p className={clsx("mt-5 max-w-[52ch] text-lead", tone === "light" ? "text-muted" : "text-mist")}>{intro}</p>
      )}
    </div>
  );
}
