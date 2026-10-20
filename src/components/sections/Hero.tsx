import { hero, projects } from "@/content/site";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { EmphasisText, Eyebrow } from "@/components/ui/Heading";
import { PixelSteps } from "@/components/ui/Icons";
import { reveal } from "@/lib/reveal";

export function Hero() {
  const [front, back] = projects.items;

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative scroll-mt-24 overflow-hidden">
      <div aria-hidden className="bg-pixel-grid absolute inset-0 mask-[linear-gradient(to_bottom,black,transparent_85%)]" />

      <Container className="relative grid items-center gap-14 pt-10 pb-12 sm:pt-16 lg:grid-cols-[1.08fr_1fr] lg:gap-12 lg:pt-20 lg:pb-16">
        <div>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-5 text-[2.25rem] leading-[1.08] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.375rem] xl:text-[3.75rem]"
          >
            <EmphasisText text={hero.title} />
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <CtaButton location="hero" className="w-full sm:w-auto" />
            <a
              href={hero.secondaryLink.href}
              className="inline-flex min-h-12 items-center justify-center font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-brand"
            >
              {hero.secondaryLink.label}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[0.9375rem] text-muted">
            {hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-[2px] bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl pb-10 lg:max-w-none lg:pb-14">
          <BrowserFrame
            src={back.image}
            alt={back.alt}
            domain={back.domain}
            sizes="(min-width: 1024px) 40vw, 80vw"
            className="ml-auto w-[82%]"
            {...reveal("frame", 1)}
          />
          <BrowserFrame
            src={front.image}
            alt={front.alt}
            domain={front.domain}
            sizes="(min-width: 1024px) 40vw, 85vw"
            preload
            className="absolute bottom-0 left-0 w-[86%]"
            {...reveal("frame-left", 3)}
          />
          <p
            {...reveal("fade", 6)}
            className="absolute -top-4 left-0 flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink shadow-card lg:-top-5">
            <PixelSteps className="h-2.5 w-7 text-brand" />
            {hero.visualCaption}
          </p>
        </div>
      </Container>
    </section>
  );
}
