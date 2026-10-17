import Image from "next/image";
import clsx from "clsx";

type BrowserFrameProps = {
  src: string;
  alt: string;
  domain: string;
  sizes: string;
  preload?: boolean;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLElement>, "className">;

/** Moldura de navegador em CSS para as capturas reais dos projetos. */
export function BrowserFrame({ src, alt, domain, sizes, preload, className, ...rest }: BrowserFrameProps) {
  return (
    <figure {...rest} className={clsx("overflow-hidden rounded-xl border border-line bg-surface shadow-frame", className)}>
      <div className="flex items-center gap-3 border-b border-line bg-canvas px-3 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-surface px-2.5 py-1 text-center font-mono text-[0.6875rem] text-muted ring-1 ring-line">
          {domain}
        </span>
      </div>
      <div className="relative aspect-16/10">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover object-top"
        />
      </div>
    </figure>
  );
}
