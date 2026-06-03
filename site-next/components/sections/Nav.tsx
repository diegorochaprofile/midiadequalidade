"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { nav } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-canvas/80 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between">
        <a href="#top" aria-label="Mídia de Qualidade — início" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mq.png"
            alt="Mídia de Qualidade"
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-fg-muted transition-colors duration-fast ease-brand hover:text-fg-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.cta.href}
          className="hidden rounded-pill bg-accent px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-base ease-brand hover:-translate-y-0.5 hover:bg-accent-hover md:inline-flex"
        >
          {nav.cta.label}
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-button border border-white/12 md:hidden"
        >
          <span className="text-fg-primary">{open ? "✕" : "☰"}</span>
        </button>
      </Container>

      {open && (
        <Container className="flex flex-col gap-1 border-t border-white/8 py-4 md:hidden">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-button px-3 py-3 text-fg-muted transition-colors hover:bg-surface hover:text-fg-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-button bg-accent px-3 py-3 text-center font-semibold text-white"
          >
            {nav.cta.label}
          </a>
        </Container>
      )}
    </header>
  );
}
