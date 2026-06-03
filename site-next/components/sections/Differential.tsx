import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { differential } from "@/lib/content";

export function Differential() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-eyebrow font-bold uppercase text-accent-light">
            {differential.eyebrow}
          </span>
          <h2 className="mt-6 font-display text-h2 font-bold text-fg-primary">
            {differential.title.map((part, i) =>
              part.accent ? (
                <span key={i} className="text-gradient">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </h2>
          <p className="mt-6 text-lead text-fg-muted">{differential.body}</p>
        </Reveal>
      </Container>
    </section>
  );
}
