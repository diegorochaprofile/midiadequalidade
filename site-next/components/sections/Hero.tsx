import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden py-16 md:py-20"
    >
      {/* profundidade animada: grade + aurora + glows que respiram/derivam */}
      <div aria-hidden className="absolute inset-0 bg-grid [mask-image:radial-gradient(80%_70%_at_50%_0%,#000,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(46,107,255,0.28),transparent)] blur-2xl animate-aurora"
      />
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-[460px] w-[460px] rounded-full bg-accent/25 blur-[120px] animate-breathe" />
      <div aria-hidden className="pointer-events-none absolute -right-20 top-24 h-[380px] w-[380px] rounded-full bg-purple/20 blur-[120px] animate-drift" />

      <Container className="relative grid items-center gap-12 md:grid-cols-2">
        <div>
          <FadeIn delay={0.05}>
            <span className="text-eyebrow font-bold uppercase text-accent-light">
              {hero.eyebrow}
            </span>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="mt-6 font-display text-h1 font-bold text-fg-primary">
              {hero.title.map((part, i) =>
                part.accent ? (
                  <span key={i} className="text-gradient">
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h1>
          </FadeIn>
          <FadeIn delay={0.28}>
            <p className="mt-6 max-w-lg text-lead text-fg-muted">{hero.lead}</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={hero.primaryCta.href} withArrow>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="ghost">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* visual: monograma da marca num painel */}
        <FadeIn delay={0.35} className="relative">
          <div aria-hidden className="absolute -inset-4 rounded-card bg-accent/20 blur-3xl animate-pulse-glow" />
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-card border border-white/12 bg-gradient-to-br from-surface-2 to-surface">
            <div aria-hidden className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-mq.png"
              alt="Mídia de Qualidade — agência de marketing"
              className="relative w-3/4 max-w-sm drop-shadow-[0_10px_50px_rgba(46,107,255,0.4)]"
            />
          </div>
        </FadeIn>
      </Container>

      {/* indicador de scroll */}
      <div aria-hidden className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-fg-subtle">scroll</span>
        <span className="relative flex h-9 w-5 justify-center rounded-pill border border-white/15">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-light animate-scroll-cue" />
        </span>
      </div>
    </section>
  );
}
