import clsx from "clsx";
import { primaryCta, whatsappMessages } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

type CtaButtonProps = {
  /** Valor do atributo data-cta, para medição futura. */
  location: string;
  message?: string;
  /** Texto do botão. Padrão: primaryCta.label. */
  label?: string;
  className?: string;
  size?: "md" | "lg";
  /** "dark" para botões sobre fundo escuro (hero, contato). */
  tone?: "light" | "dark";
};

/** A ação principal do site. Texto único em primaryCta.label. */
export function CtaButton({ location, message = whatsappMessages.default, label, className, size = "lg", tone = "light" }: CtaButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={location}
      className={clsx(
        "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-px",
        tone === "dark"
          ? "bg-snow text-night shadow-cta-dark hover:bg-white active:bg-white/90"
          : "bg-accent text-snow shadow-cta hover:bg-accent-strong active:bg-accent-strong",
        size === "lg" ? "min-h-13 px-5 text-[0.9375rem] sm:px-6 sm:text-base" : "min-h-11 px-5 text-[0.9375rem]",
        className,
      )}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      <span className="whitespace-nowrap">{label ?? primaryCta.label}</span>
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
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
        "group inline-block py-3 leading-snug font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-ink",
        className,
      )}
    >
      {children}
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
    </a>
  );
}
