import { Container } from "@/components/ui/Container";
import { logos } from "@/lib/content";

export function LogoMarquee() {
  const items = [...logos.items, ...logos.items]; // duplica pra loop contínuo

  return (
    <section className="border-y border-white/8 bg-surface/40 py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-fg-subtle">
          {logos.label}
        </p>
        <div className="group mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max gap-12 animate-marquee">
            {items.map((name, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-lg font-semibold text-fg-subtle/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
