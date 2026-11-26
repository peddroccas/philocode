import { projects, type Project } from "@/content/site";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Heading";
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
        flat
      />
      <div className="px-2 pb-2">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-muted">{project.segment}</p>
        <p className="mt-2 leading-relaxed text-muted">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 inline-flex min-h-12 items-center gap-1.5 font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-brand"
        >
          Ver site no ar
          <span className="sr-only"> de {project.name} (abre em nova aba)</span>
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
        <SectionHeading id="projetos-title" title={projects.title} intro={projects.intro} />

        {/* Celular: carrossel com rolagem lateral. A partir de md: grade 2 × 2. */}
        <ul
          aria-label="Projetos"
          className="relative mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-2 [scrollbar-width:none] md:mt-12 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 lg:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {projects.items.map((project, index) => (
            <ProjectCard key={project.url} project={project} index={index % 2} />
          ))}
        </ul>
        <p className="mt-2 text-sm text-muted md:hidden">Arraste para o lado para ver mais.</p>

      </Container>
    </section>
  );
}
