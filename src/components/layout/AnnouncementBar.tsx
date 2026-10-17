import { pricing } from "@/content/site";
import { ArrowRightIcon } from "@/components/ui/Icons";

/** Barra no topo com a oferta de lançamento. Some junto com a faixa quando as vagas acabam. */
export function AnnouncementBar() {
  const { launch } = pricing;
  if (!launch.active || launch.spotsLeft <= 0) return null;

  return (
    <a
      href="#lancamento"
      data-cta="barra-anuncio"
      className="group block bg-night text-canvas transition-colors hover:bg-ink"
    >
      <span className="mx-auto flex min-h-11 max-w-312 flex-wrap items-center justify-center gap-x-3 gap-y-0.5 px-5 py-2 text-center text-sm sm:px-8">
        <span aria-hidden className="hidden gap-1 sm:flex">
          {Array.from({ length: launch.spotsTotal }, (_, index) => (
            <span
              key={index}
              className={index < launch.spotsLeft ? "size-2 rounded-[2px] bg-brand" : "size-2 rounded-[2px] bg-white/20"}
            />
          ))}
        </span>
        <span className="font-semibold">{launch.announcement}</span>
        <span className="text-mist">
          {launch.spotsLeft} de {launch.spotsTotal} vagas
        </span>
        <span className="inline-flex items-center gap-1.5 font-semibold underline decoration-white/30 underline-offset-4 group-hover:decoration-brand">
          Ver oferta
          <ArrowRightIcon className="size-3.5 text-brand motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" />
        </span>
      </span>
    </a>
  );
}
