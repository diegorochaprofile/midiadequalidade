import { Reveal } from "@/components/motion/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  center?: boolean;
};

export function SectionHeader({ eyebrow, title, intro, center = false }: SectionHeaderProps) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <span className="text-eyebrow font-bold uppercase text-accent-light">{eyebrow}</span>
      <div
        className={`mt-5 h-1 w-16 rounded-pill bg-gradient-to-r from-accent to-accent-light ${
          center ? "mx-auto" : ""
        }`}
      />
      <h2 className="mt-6 font-display text-h2 font-bold text-fg-primary">{title}</h2>
      {intro && <p className="mt-4 text-body text-fg-muted">{intro}</p>}
    </Reveal>
  );
}
