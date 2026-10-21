import { hero } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { EmphasisText, Eyebrow } from "@/components/ui/Heading";
import { TideCanvas } from "./TideCanvas";

/** Hero escuro com a "maré de pixels" ao fundo: grade de pontos que ondula e reage ao cursor. */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[radial-gradient(120%_90%_at_80%_10%,#1b2230_0%,#0b0f17_60%,var(--color-night)_100%)]"
    >
      <TideCanvas className="absolute inset-0 -z-10 size-full" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-night/75 to-night/45 md:bg-linear-to-r md:from-night/90 md:via-night/40 md:to-transparent"
      />

      <Container className="py-12 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-5 text-[2.375rem] leading-[1.06] font-semibold tracking-tight text-balance text-snow sm:text-5xl lg:text-[3.75rem] xl:text-[4rem]"
          >
            <EmphasisText text={hero.title} />
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">{hero.subtitle}</p>

          <CtaButton location="hero" className="mt-9 w-full sm:w-auto" />

          <ul className="mt-9 flex flex-col gap-2 text-[0.9375rem] text-mist md:w-max md:flex-row md:gap-8">
            {hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2 whitespace-nowrap">
                <span aria-hidden className="size-1.5 rounded-[2px] bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
