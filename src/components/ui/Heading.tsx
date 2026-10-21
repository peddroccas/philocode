import clsx from "clsx";
import type { Emphasis } from "@/content/site";

/** Rótulo em mono com o traço azul dos braços da âncora. */
export function Eyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={clsx(
        "flex items-center gap-3 font-mono text-xs tracking-[0.08em] uppercase",
        tone === "light" ? "text-muted" : "text-mist",
      )}
    >
      <span aria-hidden className="h-0.75 w-5 rounded-full bg-brand" />
      {children}
    </p>
  );
}

/** Título com palavra-chave em serifa itálica. */
export function EmphasisText({ text }: { text: Emphasis }) {
  return (
    <>
      {text.before}
      <em className="emphasis-underline font-serif font-normal tracking-normal">{text.emphasis}</em>
      {text.after}
    </>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: Emphasis;
  intro?: string;
  id: string;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, id, tone = "light", className }: SectionHeadingProps) {
  return (
    <div className={clsx("max-w-2xl", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={clsx(
          "mt-4 text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
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
