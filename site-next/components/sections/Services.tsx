"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceIcons } from "@/components/icons";
import { services, type Service } from "@/lib/content";

function StackCard({
  i,
  total,
  item,
  progress,
}: {
  i: number;
  total: number;
  item: Service;
  progress: MotionValue<number>;
}) {
  const Icon = serviceIcons[item.icon];
  // cada card encolhe um pouco conforme os próximos sobem por cima → efeito "pastas"
  const targetScale = 1 - (total - 1 - i) * 0.04;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-[76vh] items-center justify-center px-6">
      <motion.div
        style={{ scale, top: `${i * 26}px` }}
        className="relative w-full max-w-3xl origin-top overflow-hidden rounded-card border border-white/12 bg-surface p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] md:p-10"
      >
        <div
          aria-hidden
          className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(90%_80%_at_15%_0%,#000,transparent)]"
        />
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:gap-9">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-card border border-white/10 bg-canvas text-accent-light">
            {Icon && <Icon className="h-9 w-9" />}
          </div>
          <div>
            <span className="font-display text-sm font-semibold tracking-wide text-fg-subtle">
              {item.num} / 0{total}
            </span>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-fg-primary">
              {item.title}
            </h3>
            <p className="mt-3 max-w-xl text-body text-fg-muted">{item.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Services() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const total = services.items.length;

  return (
    <section id="servicos" className="py-24 md:py-28">
      <Container>
        <SectionHeader
          eyebrow={services.eyebrow}
          title={services.title}
          intro={services.intro}
          center
        />
      </Container>

      {/* pilha de pastas — cada card fixa no topo e encolhe quando o próximo sobe */}
      <div ref={container} className="relative mt-6">
        {services.items.map((item, i) => (
          <StackCard key={item.num} i={i} total={total} item={item} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
