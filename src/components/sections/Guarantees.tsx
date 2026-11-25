import { guarantees, type Service } from "@/content/site";
import { reveal } from "@/lib/reveal";

/** Faixa "sem surpresa" junto ao preço: responde a objeção no momento da decisão. */
export function Guarantees({ service, className = "mt-7" }: { service: Service; className?: string }) {
  return (
    <ul aria-label="Garantias" {...reveal("up")} className={`${className} grid gap-3 rounded-card bg-night p-5 text-snow sm:grid-cols-3 sm:p-6`}>
      {guarantees[service].map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug">
          <span aria-hidden className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-snow text-xs font-bold text-night">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
