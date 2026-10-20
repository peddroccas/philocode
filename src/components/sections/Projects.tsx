import clsx from "clsx";
import { projects, whatsappMessages, type Project } from "@/content/site";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { reveal } from "@/lib/reveal";

function ProjectCard({ project, featured, index }: { project: Project; featured?: boolean; index: number }) {
  return (
    <li
      {...reveal("frame", index)}
      className={clsx(
        "grid gap-6 rounded-card border border-line bg-surface p-4 shadow-card sm:p-5",
        featured && "md:col-span-2 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-10 lg:p-6",
      )}
    >
      <BrowserFrame
        src={project.image}
        alt={project.alt}
        domain={project.domain}
        sizes={featured ? "(min-width: 1024px) 680px, 92vw" : "(min-width: 768px) 46vw, 92vw"}
        className="shadow-none"
      />
      <div className={clsx("px-2 pb-2", featured && "lg:pr-6")}>
        <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">{project.segment}</p>
        <h3 className={clsx("mt-2 font-semibold tracking-tight text-ink", featured ? "text-2xl lg:text-3xl" : "text-xl")}>
          {project.name}
        </h3>
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
  const [featured, ...rest] = projects.items;

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="scroll-mt-20 border-y border-line bg-surface/60 py-20 lg:py-28"
    >
      <Container>
        <SectionHeading id="projetos-title" eyebrow={projects.eyebrow} title={projects.title} intro={projects.intro} />

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          <ProjectCard project={featured} featured index={0} />
          {rest.map((project, index) => (
            <ProjectCard key={project.url} project={project} index={index + 1} />
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3 text-muted">
            <span aria-hidden className="relative flex size-2.5">
              <span className="absolute inset-0 rounded-full bg-brand/40 motion-safe:animate-ping" />
              <span className="relative size-2.5 rounded-full bg-brand" />
            </span>
            {projects.footnote}
          </p>
          <CtaButton location="projetos" message={whatsappMessages.projects} className="w-full sm:w-auto" />
        </div>
      </Container>
    </section>
  );
}
