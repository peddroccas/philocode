import { projects, type Project } from "@/content/site";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { reveal } from "@/lib/reveal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <li
      {...reveal("frame", index)}
      className="grid w-[85%] shrink-0 snap-start content-start gap-6 rounded-card border border-line bg-surface p-4 shadow-card sm:w-[60%] sm:p-5 md:w-auto"
    >
      <BrowserFrame
        src={project.image}
        alt={project.alt}
        domain={project.domain}
        sizes="(min-width: 768px) 46vw, 85vw"
        className="shadow-none"
      />
      <div className="px-2 pb-2">
        <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">{project.segment}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
        <p className="mt-2 leading-relaxed text-muted">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 inline-flex min-h-12 items-center gap-1.5 font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-brand"
        >
          Ver site no ar
          <span className="sr-only"> de {project.name} (abre em nova aba)</span>
          <ArrowUpRightIcon className="size-4 text-brand motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
        </a>
      </div>
    </li>
  );
}

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="scroll-mt-20 bg-surface/60 py-12 md:py-20 lg:py-28"
    >
      <Container>
        <SectionHeading id="projetos-title" eyebrow={projects.eyebrow} title={projects.title} intro={projects.intro} />

        {/* Celular: carrossel com rolagem lateral. A partir de md: grade 2 × 2. */}
        <ul
          aria-label="Projetos"
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] md:mt-12 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 lg:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {projects.items.map((project, index) => (
            <ProjectCard key={project.url} project={project} index={index % 2} />
          ))}
        </ul>
        <p className="mt-2 text-sm text-muted md:hidden">Arraste para o lado para ver mais.</p>

        <div className="mt-10 flex justify-center">
          <CtaButton location="projetos" className="w-full sm:w-auto" />
        </div>
      </Container>
    </section>
  );
}
