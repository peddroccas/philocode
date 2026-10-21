import { testimonials } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Heading";

/** Só aparece quando houver depoimentos reais e autorizados em site.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="depoimentos-title" className="py-12 md:py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="depoimentos-title"
          eyebrow="Depoimentos"
          title={{ before: "Quem já tem ", emphasis: "site com a Pôrto", after: "." }}
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.author} className="rounded-card border border-line bg-surface p-7 shadow-card">
              <blockquote className="text-lg leading-relaxed text-ink">“{item.quote}”</blockquote>
              <p className="mt-5 font-semibold text-ink">{item.author}</p>
              <p className="text-sm text-muted">{item.role}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
