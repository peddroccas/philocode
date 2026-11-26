import clsx from "clsx";
import { projects, type Project } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { reveal } from "@/lib/reveal";

function SiteLink({ project, className }: { project: Project; className?: string }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex min-h-11 items-center font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-ink",
        className,
      )}
    >
      Ver site no ar
      <span className="sr-only"> de {project.name} (abre em nova aba)</span>
    </a>
  );
}

/**
 * Projetos reais: um aberto em tamanho grande e os outros três em screenshots lado a lado.
 * "case" põe o destaque à esquerda (Início); "bento" o espelha, com o texto à esquerda (Sites).
 */
export function Projects({ variant = "case" }: { variant?: "case" | "bento" }) {
  const [lead, ...rest] = projects.items;
  const mirrored = variant === "bento";
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="scroll-mt-20 border-y border-line bg-surface py-[var(--section-gap-l)]">
      <Container>
        <div {...reveal("up")} className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 id="projetos-title" className="text-section text-ink lg:col-span-6">
            {projects.title.before}
            {projects.title.emphasis}
            {projects.title.after}
          </h2>
          <p className="max-w-[44ch] text-lead text-muted lg:col-span-5 lg:col-start-8">{projects.intro}</p>
        </div>

        <article aria-labelledby="projeto-destaque" className="mt-[var(--space-2xl)] grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div {...reveal("frame")} className={clsx("lg:col-span-8", mirrored && "lg:order-2 lg:col-start-5")}>
            <BrowserFrame src={lead.image} alt={lead.alt} domain={lead.domain} sizes="(min-width: 1024px) 64vw, 100vw" />
          </div>
          <div className={clsx("lg:col-span-4 lg:pb-10", mirrored && "lg:order-1 lg:row-start-1")}>
            <h3 id="projeto-destaque" className="text-[1.625rem] leading-tight text-ink">{lead.name}</h3>
            <p className="mt-2 text-sm font-medium text-muted">{lead.segment}</p>
            <p className="mt-5 leading-relaxed text-muted">{lead.description}</p>
            <SiteLink project={lead} className="mt-5" />
          </div>
        </article>

        <ul aria-label="Outros projetos" className="mt-[var(--space-2xl)] grid gap-12 border-t border-ink pt-10 md:grid-cols-3 md:gap-8">
          {rest.map((project, i) => (
            <li key={project.url} {...reveal("up", i)} className="grid content-start gap-5">
              <BrowserFrame src={project.image} alt={project.alt} domain={project.domain} sizes="(min-width: 768px) 30vw, 100vw" flat />
              <div>
                <h3 className="text-title text-ink">{project.name}</h3>
                <p className="mt-1 text-sm font-medium text-muted">{project.segment}</p>
                <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
                <SiteLink project={project} className="mt-2" />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
