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

export function SectionHeading({ title, intro, id, tone = "light", className }: SectionHeadingProps) {
  return (
    <div {...reveal("up")} className={clsx("max-w-2xl", className)}>
      <h2
        id={id}
        className={clsx(
          "text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-ink" : "text-snow",
        )}
      >
        <EmphasisText text={title} />
      </h2>
      {intro && (
        <p
          className={clsx("mt-4 text-lg leading-relaxed", tone === "light" ? "text-muted" : "text-mist")}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
