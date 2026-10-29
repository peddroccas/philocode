import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { EmphasisText, Eyebrow } from "@/components/ui/Heading";
import { TideCanvas } from "./TideCanvas";
import { whatsappMessages, type Emphasis, type Service } from "@/content/site";

type Props = { eyebrow: string; title: Emphasis; subtitle: string; service?: Service; children?: React.ReactNode };
export function Hero({ eyebrow, title, subtitle, service, children }: Props) {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate scroll-mt-24 overflow-hidden bg-[radial-gradient(120%_90%_at_80%_10%,#1b2230_0%,#0b0f17_60%,var(--color-night)_100%)]">
      <TideCanvas className="absolute inset-0 -z-10 size-full" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-night/90 via-night/60 to-night/20" />
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 id="hero-title" className="mt-5 text-[2.5rem] leading-[1.07] font-semibold tracking-tight text-balance text-snow sm:text-5xl lg:text-[3.6rem]"><EmphasisText text={title} /></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">{subtitle}</p>
          {service ? <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5"><CtaButton location={`${service}-hero`} message={whatsappMessages[service]} className="w-full sm:w-auto" /><a href="#valores" data-cta={`${service}-ver-valores`} className="inline-flex min-h-11 items-center gap-2 font-semibold text-snow underline decoration-white/30 underline-offset-4 hover:decoration-brand">Ver serviços e valores <span aria-hidden>↓</span></a></div> : (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/criacao-de-sites" data-cta="home-sites" className="inline-flex min-h-13 items-center justify-center rounded-full bg-accent px-6 font-semibold text-white hover:bg-accent-strong">Preciso de um site <span aria-hidden className="ml-3">↗</span></Link>
              <Link href="/shopify" data-cta="home-shopify" className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/25 px-6 font-semibold text-snow hover:bg-white/10">Preciso de Shopify <span aria-hidden className="ml-3">↗</span></Link>
            </div>
          )}
          {service && <p className="mt-4 max-w-lg text-sm leading-relaxed text-mist">Conte sua demanda. Você recebe escopo, valor e prazo antes de decidir.</p>}
          <p className="mt-7 flex items-center gap-2 text-sm text-mist"><span aria-hidden className="size-1.5 rounded-full bg-brand" />Atendimento direto · Brasília para todo o Brasil</p>
        </div>
        {children}
      </Container>
    </section>
  );
}
