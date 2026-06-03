import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { method } from "@/lib/content";

const VW = 1000;
const SRC = { x: 500, y: 26 };
const NODE_Y = 178;

export function Method() {
  const n = method.steps.length;
  const xs = method.steps.map((_, i) => (VW / n) * (i + 0.5));

  return (
    <section id="metodo" className="border-y border-white/8 bg-surface/40 py-24 md:py-28">
      <Container>
        <Reveal className="text-center">
          <span className="text-eyebrow font-bold uppercase tracking-[0.32em] text-fg-subtle">
            Metodologia
          </span>
          <h2 className="mx-auto mt-5 max-w-xl font-display text-h2 font-bold text-fg-primary">
            {method.title}
          </h2>
        </Reveal>

        {/* conector de energia (desktop) — nó central distribui energia aos passos */}
        <Reveal className="mx-auto mt-12 hidden max-w-5xl md:block">
          <svg viewBox={`0 0 ${VW} 200`} className="w-full overflow-visible" fill="none">
            {/* nó fonte */}
            <circle cx={SRC.x} cy={SRC.y} r="16" className="fill-accent/15" />
            <circle cx={SRC.x} cy={SRC.y} r="6" className="fill-accent-light [filter:drop-shadow(0_0_6px_#5B8DFF)]" />
            {xs.map((x, i) => {
              const d = `M ${SRC.x} ${SRC.y + 6} C ${SRC.x} 110, ${x} 90, ${x} ${NODE_Y}`;
              return (
                <g key={i}>
                  {/* trilho base + traço de energia animado */}
                  <path d={d} className="stroke-white/10" strokeWidth={1.5} />
                  <path
                    d={d}
                    className="energy-line stroke-accent-light"
                    strokeWidth={2.5}
                    style={{ animationDelay: `${i * 0.22}s` }}
                  />
                  {/* nó do passo */}
                  <circle cx={x} cy={NODE_Y} r="11" className="fill-accent/15" />
                  <circle cx={x} cy={NODE_Y} r="4.5" className="fill-accent-light [filter:drop-shadow(0_0_5px_#5B8DFF)]" />
                </g>
              );
            })}
          </svg>
        </Reveal>

        {/* cards dos passos */}
        <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step) => (
            <StaggerItem
              key={step.num}
              className="rounded-card border border-white/10 bg-canvas p-7 transition-colors duration-base ease-brand hover:border-accent/40"
            >
              <span className="font-display text-5xl font-bold text-gradient">{step.num}</span>
              <h3 className="mt-5 font-display text-h3 font-semibold text-fg-primary">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{step.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
