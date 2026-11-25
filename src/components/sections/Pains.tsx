import Link from "next/link";
import { pains as homePains, type PainsContent } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Heading";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { reveal } from "@/lib/reveal";

/** Problema antes do produto: uma dor por público, nas palavras do cliente, com o caminho para a solução. */
export function Pains({ content = homePains }: { content?: PainsContent }) {
  const pains = content;
  return (
    <section id="familiar" aria-labelledby="familiar-title" className="scroll-mt-24 border-b border-line bg-surface py-14 md:py-20">
      <Container>
        <SectionHeading id="familiar-title" eyebrow={pains.eyebrow} title={pains.title} />
        <ul className="mt-9 grid gap-5 lg:grid-cols-3">
          {pains.items.map((item, i) => (
            <li key={item.pain} {...reveal("up", i)} className="brackets flex flex-col rounded-card border border-line bg-canvas p-7">
              {item.who && <p className="mb-4 font-mono text-xs tracking-[0.08em] text-muted uppercase">{item.who}</p>}
              <p className="font-display text-xl leading-snug font-semibold tracking-tight text-ink">{item.pain}</p>
              <p className="mt-4 leading-relaxed text-muted">{item.fix}</p>
              {item.href && <Link href={item.href} data-cta={`home-dor-${item.href.slice(1)}`} className="group mt-6 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-ink">
                {item.link}
                <ArrowRightIcon className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" />
              </Link>}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
