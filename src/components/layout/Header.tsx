import Image from "next/image";
import { company, nav } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <a href="/" className="shrink-0 rounded-md" aria-label={`${company.name} — voltar ao início`}>
          <Image
            src="/images/philocode-logo.png"
            alt=""
            width={422}
            height={108}
            preload
            className="h-9 w-auto lg:h-10"
          />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-[0.9375rem] font-medium text-muted transition-colors hover:bg-canvas hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <CtaButton location="header" size="md" />
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
