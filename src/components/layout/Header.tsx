"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { catequeseCtaLabel, company, primaryNav, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

/** Barra alinhada às bordas: a marca à esquerda; os três produtos e a ação à direita. */
export function Header() {
  const pathname = usePathname();
  const service = pathname === "/shopify" ? "shopify" : pathname === "/criacao-de-sites" ? "sites" : pathname === "/catequese-hub" ? "catequese" : "default";
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <div aria-hidden className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-ink" />
      <Container className="flex h-16 items-center justify-between gap-8 lg:h-[4.5rem]">
        <Link href="/" className="shrink-0 rounded-md" aria-label={`${company.name}, voltar ao início`}>
          <Logo className="text-[1.6rem] text-ink" />
        </Link>

        <div className="flex items-center gap-8">
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-muted underline-offset-[6px] transition-colors duration-200 hover:text-ink aria-[current=page]:text-ink aria-[current=page]:underline aria-[current=page]:decoration-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:block">
            <CtaButton location="header" message={whatsappMessages[service]} label={service === "catequese" ? catequeseCtaLabel : undefined} size="md" />
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
