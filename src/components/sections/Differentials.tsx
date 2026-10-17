import { differentials } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Heading";
import { reveal } from "@/lib/reveal";
import { BoltIcon, ChatIcon, DiamondIcon, SparkIcon } from "@/components/ui/Icons";

const icons = {
  ai: SparkIcon,
  speed: BoltIcon,
  quality: DiamondIcon,
  service: ChatIcon,
};

export function Differentials() {
  return (
    <section aria-labelledby="diferenciais-title" className="py-20 lg:py-28">
      <Container>
        <SectionHeading id="diferenciais-title" eyebrow={differentials.eyebrow} title={differentials.title} />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {differentials.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className="bg-surface p-7 lg:p-8">
                <div {...reveal("up", index)}>
                <span {...reveal("pop", index + 1)} className="flex size-11 items-center justify-center rounded-xl bg-canvas text-ink ring-1 ring-line">
                  <Icon className="size-5.5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
