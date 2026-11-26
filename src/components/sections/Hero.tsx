import type { CSSProperties } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { CtaButton, CtaLink } from "@/components/ui/CtaButton";
import { BlueprintGrid } from "./BlueprintGrid";
import { HeroSymbol } from "./HeroSymbol";
import {
  catequese,
  catequeseCtaLabel,
  formatPrice,
  offerMessage,
  shopifyOffers,
  siteOffers,
  whatsappMessages,
  type Emphasis,
  type Service,
} from "@/content/site";

const enter = (delay: number) => ({ className: "hero-enter", style: { "--d": `${delay}ms` } as CSSProperties });
/** O título entra palavra por palavra (CSS .word-rise; parado com "reduzir movimento"). */
function RisingHeadline({ title }: { title: Emphasis }) {
  const words = `${title.before}${title.emphasis}${title.after ?? ""}`.split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="word-rise" style={{ "--w": i } as CSSProperties}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

type HeroText = { title: Emphasis; subtitle: string; service?: Service; proof?: string[] };

/** Título, frase, ação e o link secundário: o mesmo conteúdo em todas as posturas. */
function HeroCopy({ title, subtitle, service, proof, size = "display-s", tone = "dark", className }: HeroText & { size?: "display" | "display-s"; tone?: "dark" | "light"; className?: string }) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      <h1 id="hero-title" className={clsx("max-w-[18ch]", dark ? "text-snow" : "text-ink", size === "display" ? "text-display" : "text-display-s")}>
        <RisingHeadline title={title} />
      </h1>
      <p {...enter(380)} className={clsx("hero-enter mt-6 max-w-[46ch] text-lead", dark ? "text-mist" : "text-muted")}>
        {subtitle}
      </p>
      <div {...enter(480)} className="hero-enter mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
        <CtaButton
          tone={tone}
          location={`${service ?? "home"}-hero`}
          message={whatsappMessages[service ?? "default"]}
          label={service === "catequese" ? catequeseCtaLabel : undefined}
          className="w-full sm:w-auto"
        />
        <a
          href={service ? "#valores" : "#produtos"}
          data-cta={`${service ?? "home"}-ver-valores`}
          className={clsx(
            "inline-flex min-h-11 items-center font-semibold whitespace-nowrap underline decoration-2 underline-offset-[6px]",
            dark ? "text-snow decoration-night-line hover:decoration-snow" : "text-ink decoration-line hover:decoration-ink",
          )}
        >
          {service ? "Ver serviços e valores" : "Conhecer produtos"}
        </a>
      </div>
      {proof && proof.length > 0 && (
        <ul {...enter(580)} className={clsx("hero-enter mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm", dark ? "text-mist" : "text-muted")}>
          {proof.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden className={dark ? "text-snow" : "text-ink"}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Início · Poster: a âncora desenhada sobre a sua grade ocupa a tela; o texto assenta embaixo, à esquerda. */
export function HomeHero(props: HeroText) {
  const entries = [
    { name: "Sites", note: "a partir de", price: `R$ ${formatPrice(siteOffers[0].price)}` },
    { name: "Shopify", note: "ajustes a partir de", price: `R$ ${formatPrice(shopifyOffers[0].price)}` },
    { name: catequese.name, note: "assinatura", price: `R$ ${formatPrice(catequese.pricing.monthly)}/mês` },
  ];
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-surface relative isolate scroll-mt-24 overflow-hidden lg:min-h-[calc(100svh-4.5rem)]">
      <BlueprintGrid className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-night/80 via-night/20 to-transparent" />
      <Container className="grid gap-14 pt-16 pb-10 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-8 lg:gap-y-14 lg:pt-12 lg:pb-12">
        <HeroCopy {...props} className="lg:col-span-7 lg:self-end" />
        <div className="hidden lg:col-span-5 lg:col-start-8 lg:row-span-1 lg:flex lg:items-center lg:justify-center">
          <HeroSymbol />
        </div>
        <dl {...enter(680)} className="hero-enter grid border-t border-night-line sm:grid-cols-3 lg:col-span-12">
          {entries.map((entry) => (
            <div key={entry.name} className="border-b border-night-line py-5 sm:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0">
              <dt className="text-sm text-mist">
                {entry.name}, {entry.note}
              </dt>
              <dd className="num mt-1 font-display text-title font-semibold text-snow">{entry.price}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/** Sites · Index: o título no alto à esquerda; os três formatos com preço são o visual, sobre a grade de construção. */
export function SitesHero(props: HeroText) {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-surface relative isolate scroll-mt-24 overflow-hidden">
      <BlueprintGrid className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-night/80 via-night/30 to-transparent" />
      <Container className="grid gap-14 pt-16 pb-16 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:content-center lg:gap-x-8 lg:pt-14 lg:pb-14">
        <HeroCopy {...props} className="lg:col-span-5" />
        <ol id="valores" aria-label="Formatos de site" className="scroll-mt-24 border-t border-snow/70 lg:col-span-7 lg:self-center">
          {siteOffers.map((offer, i) => (
            <li
              key={offer.id}
              {...enter(560 + i * 110)}
              className="hero-enter group relative grid gap-x-8 gap-y-3 border-b border-night-line py-7 sm:grid-cols-[1fr_auto] sm:items-end"
            >
              <span aria-hidden className="offer-line absolute inset-x-0 -bottom-px h-px bg-snow" />
              <div>
                <h2 className="text-title text-snow">{offer.name}</h2>
                <p className="mt-2 max-w-[44ch] text-[0.9375rem] leading-relaxed text-mist">{offer.summary}</p>
              </div>
              <div className="flex items-end justify-between gap-6 sm:flex-col sm:items-end sm:gap-2">
                <p className="sm:text-right">
                  <span className="block text-sm text-mist">A partir de</span>
                  <span className="num offer-price inline-block font-display text-[1.75rem] leading-none font-semibold tracking-tight text-snow">R$ {formatPrice(offer.price)}</span>
                </p>
                <CtaLink tone="dark" location={`sites-oferta-${offer.id}`} message={offerMessage(offer, "sites")} className="py-2">
                  Escolher este
                </CtaLink>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/** Diagrama do tema: os blocos da loja e a seção personalizada em Liquid encaixando no lugar dela. */
function ThemeDiagram() {
  const block = "flex items-center justify-between rounded-md border border-snow/15 bg-snow/[0.03] px-4 text-sm text-mist";
  return (
    <figure
      role="img"
      aria-label="Diagrama do tema da loja: cabeçalho, página de produto, uma seção personalizada em Liquid encaixando no lugar dela e o rodapé"
      className="diagram relative mx-auto w-full max-w-[34rem] rounded-[var(--radius-frame)] border border-snow/20 bg-snow/[0.035] p-4 backdrop-blur-sm"
    >
      <div className="mb-3 flex items-center justify-between px-1 text-xs text-mist">
        <span>Tema da sua loja</span>
        <span className="num">sections/</span>
      </div>
      <div className="grid gap-2.5">
        <div className={`${block} h-11`}>Cabeçalho</div>
        <div className={`${block} h-32`}>
          Página de produto
          <span aria-hidden className="grid w-24 gap-1.5">
            <span className="h-1.5 rounded-full bg-snow/15" />
            <span className="h-1.5 w-2/3 rounded-full bg-snow/15" />
            <span className="h-1.5 w-1/2 rounded-full bg-snow/15" />
          </span>
        </div>
        <div className="relative h-24">
          <div aria-hidden className="absolute inset-0 rounded-md border border-dashed border-snow/25" />
          <div className="section-slide absolute inset-0 flex items-center justify-between rounded-md border border-snow bg-snow/[0.08] px-4 text-sm text-snow">
            <span className="font-semibold">Seção personalizada</span>
            <span className="num text-xs text-mist">custom.liquid</span>
          </div>
        </div>
        <div className={`${block} h-11`}>Rodapé</div>
      </div>
      <figcaption className="mt-3 px-1 text-xs text-mist">Editável no próprio editor do tema.</figcaption>
    </figure>
  );
}

/** Shopify · Stage: a primeira linha do argumento à esquerda; à direita, a seção nova encaixando no tema. */
export function ShopifyHero(props: HeroText) {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-surface relative isolate scroll-mt-24 overflow-hidden">
      <BlueprintGrid className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-night/80 via-night/30 to-transparent" />
      <Container className="grid items-center gap-14 pt-16 pb-16 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:gap-x-8 lg:pt-14 lg:pb-14">
        <HeroCopy {...props} className="lg:col-span-6" />
        <div {...enter(300)} className="hero-enter lg:col-span-5 lg:col-start-8">
          <ThemeDiagram />
        </div>
      </Container>
    </section>
  );
}

/** Catequese Hub · Stage: o texto em cinco colunas; o painel real do sistema em sete, saindo pela borda. */
export function CatequeseHero(props: HeroText) {
  const shot = catequese.screens[0];
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-surface relative isolate scroll-mt-24 overflow-hidden">
      <BlueprintGrid className="absolute inset-0 -z-10" />
      <Container className="grid items-center gap-14 pt-16 pb-16 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:gap-x-8 lg:pt-14 lg:pb-14">
        <HeroCopy {...props} className="lg:col-span-5" />
        <figure {...enter(200)} className="hero-enter lg:col-span-7 lg:-mr-[var(--gutter)]">
          <div data-slot="hero" data-kind="product" data-alt={shot.alt} className="aspect-16/10 rounded-[var(--radius-frame)] shadow-frame ring-1 ring-snow/10 lg:rounded-r-none">
            <Image src={shot.image} alt={shot.alt} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-left-top" />
          </div>
          <figcaption className="mt-3 text-sm text-mist">{shot.title}, com dados fictícios de demonstração.</figcaption>
        </figure>
      </Container>
    </section>
  );
}
