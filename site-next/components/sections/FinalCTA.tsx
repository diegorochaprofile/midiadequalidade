import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsappIcon } from "@/components/icons";
import { finalCta, contact } from "@/lib/content";

export function FinalCTA() {
  return (
    <section id="contato" className="py-24 md:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-card border border-accent/30 bg-gradient-to-br from-accent/20 via-surface to-purple/10 px-7 py-16 text-center md:px-16">
          <div aria-hidden className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-h2 font-bold text-fg-primary">{finalCta.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lead text-fg-muted">{finalCta.lead}</p>
            <div className="mt-9 flex justify-center">
              <Button href={finalCta.cta.href} external>
                <WhatsappIcon className="h-5 w-5" />
                {finalCta.cta.label}
              </Button>
            </div>
            <p className="mt-6 text-sm text-fg-subtle">
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-fg-muted">
                {contact.email}
              </a>{" "}
              · {contact.phoneLabel}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
