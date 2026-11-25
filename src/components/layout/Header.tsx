"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { catequeseCtaLabel, company, nav, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const service = pathname === "/shopify" ? "shopify" : pathname === "/criacao-de-sites" ? "sites" : pathname === "/sistema-catequese" ? "catequese" : "default";
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/80 backdrop-blur-md">
      <div aria-hidden className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-ink" />
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="shrink-0 rounded-md" aria-label={`${company.name} — voltar ao início`}>
<Logo className="text-[1.6rem] text-ink lg:text-[1.75rem]" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="rounded-full px-3 py-2 text-[0.9375rem] font-medium text-muted transition-colors transition-colors duration-200 hover:bg-ink/5 hover:text-ink aria-[current=page]:bg-ink/5 aria-[current=page]:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <CtaButton location="header" message={whatsappMessages[service]} label={service === "catequese" ? catequeseCtaLabel : undefined} size="md" />
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
