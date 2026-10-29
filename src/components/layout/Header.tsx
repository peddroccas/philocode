"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { company, nav, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const service = pathname === "/shopify" ? "shopify" : pathname === "/criacao-de-sites" ? "sites" : "default";
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" className="shrink-0 rounded-md" aria-label={`${company.name} — voltar ao início`}>
          <Image
            src="/images/philocode-logo.png"
            alt=""
            width={422}
            height={108}
            preload
            className="h-9 w-auto lg:h-10"
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="rounded-full px-3 py-2 text-[0.9375rem] font-medium text-muted transition-colors hover:bg-canvas hover:text-ink aria-[current=page]:bg-canvas aria-[current=page]:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <CtaButton location="header" message={whatsappMessages[service]} size="md" />
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
