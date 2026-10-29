"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, whatsappMessages } from "@/content/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";

export function MobileMenu() {
  const pathname = usePathname();
  const service = pathname === "/shopify" ? "shopify" : pathname === "/criacao-de-sites" ? "sites" : "default";
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-surface px-4 text-[0.9375rem] font-medium text-ink"
      >
        {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        {open ? "Fechar" : "Menu"}
      </button>

      <div
        id="menu-mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-surface shadow-card"
      >
        <nav aria-label="Menu" className="mx-auto max-w-312 px-5 pt-2 pb-6 sm:px-8">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-13 items-center justify-between text-lg font-medium text-ink aria-[current=page]:text-accent"
                >
                  {item.label}
                  <span aria-hidden className="h-0.75 w-4 rounded-full bg-line" />
                </Link>
              </li>
            ))}
          </ul>
          <CtaButton location="menu-mobile" message={whatsappMessages[service]} className="mt-5 w-full" />
        </nav>
      </div>
    </div>
  );
}
