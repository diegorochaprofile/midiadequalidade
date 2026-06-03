import { Container } from "@/components/ui/Container";
import { nav, contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mq.png"
            alt="Mídia de Qualidade"
            className="h-14 w-auto object-contain"
          />
          <p className="mt-2 text-sm text-fg-subtle">Presença digital com rigor.</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-fg-muted transition-colors hover:text-fg-primary"
          >
            Instagram
          </a>
        </nav>
      </Container>
      <Container className="mt-8 border-t border-white/8 pt-6">
        <p className="text-center text-xs text-fg-subtle">
          © {new Date().getFullYear()} Mídia de Qualidade · {contact.phoneLabel} · {contact.email}
        </p>
      </Container>
    </footer>
  );
}
