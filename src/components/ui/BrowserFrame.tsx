import Image from "next/image";
import clsx from "clsx";

type BrowserFrameProps = {
  src: string;
  alt: string;
  /** Endereço do site, mostrado como legenda. */
  domain?: string;
  sizes: string;
  preload?: boolean;
  /** Sem sombra, para quando a captura já está dentro de um cartão. */
  flat?: boolean;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLElement>, "className">;

/** Captura real de um projeto, com o endereço do site como legenda. */
export function BrowserFrame({ src, alt, domain, sizes, preload, flat, className, ...rest }: BrowserFrameProps) {
  return (
    <figure {...rest} className={clsx("grid gap-2.5", className)}>
      <div className={clsx("relative aspect-video overflow-hidden rounded-xl border border-line bg-surface", !flat && "shadow-frame")}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover object-top"
        />
      </div>
      {domain && <figcaption className="truncate text-sm text-muted">{domain}</figcaption>}
    </figure>
  );
}
