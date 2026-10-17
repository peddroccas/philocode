import clsx from "clsx";
import { primaryCta, whatsappMessages } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowRightIcon, WhatsAppIcon } from "./Icons";

type CtaButtonProps = {
  /** Valor do atributo data-cta, para medição futura. */
  location: string;
  message?: string;
  className?: string;
  size?: "md" | "lg";
};

/** A ação principal do site. Texto único em primaryCta.label. */
export function CtaButton({ location, message = whatsappMessages.default, className, size = "lg" }: CtaButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={location}
      className={clsx(
        "group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent font-semibold text-white shadow-[0_6px_18px_-8px_rgb(20_104_200/0.7)] transition-colors hover:bg-accent-strong active:bg-accent-strong",
        size === "lg" ? "min-h-13 px-5 text-[0.9375rem] sm:px-6 sm:text-base" : "min-h-11 px-5 text-[0.9375rem]",
        className,
      )}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      <span className="whitespace-nowrap">{primaryCta.label}</span>
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
      <ArrowRightIcon className="hidden size-4 shrink-0 min-[400px]:block motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" />
    </a>
  );
}

type CtaLinkProps = {
  location: string;
  message: string;
  children: React.ReactNode;
  className?: string;
};

/** Chamada secundária em estilo de link, pelo mesmo canal. */
export function CtaLink({ location, message, children, className }: CtaLinkProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={location}
      className={clsx(
        "group inline-block py-3 leading-snug font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-brand",
        className,
      )}
    >
      {children}
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
      <ArrowRightIcon className="ml-1.5 inline size-4 align-[-2px] text-brand motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" />
    </a>
  );
}
