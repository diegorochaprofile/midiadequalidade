import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cases } from "@/lib/content";

export function Cases() {
  return (
    <section id="cases" className="py-24 md:py-28">
      <Container>
        <SectionHeader eyebrow={cases.eyebrow} title={cases.title} intro={cases.note} />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.items.map((c) => (
            <StaggerItem
              key={c.title}
              className="group overflow-hidden rounded-card border border-white/10 bg-surface transition-all duration-base ease-brand hover:-translate-y-1.5 hover:border-accent/50"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center border-b border-white/8 bg-gradient-to-br from-surface-2 to-canvas">
                <div className="bg-grid absolute inset-0 opacity-50" />
                <span className="relative text-sm text-fg-subtle">mockup do projeto</span>
              </div>
              <div className="p-6">
                <span className="inline-flex rounded-pill border border-white/10 bg-canvas px-3 py-1 text-xs font-medium text-accent-light">
                  {c.tag}
                </span>
                <h3 className="mt-4 font-display text-h3 font-semibold text-fg-primary">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{c.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
