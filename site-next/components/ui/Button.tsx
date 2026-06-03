import { ArrowIcon } from "@/components/icons";

type ButtonProps = {
  variant?: "primary" | "ghost";
  href: string;
  children: React.ReactNode;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
};

export function Button({
  variant = "primary",
  href,
  children,
  withArrow = false,
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-button px-6 py-3.5 text-[15px] font-semibold transition-all duration-base ease-brand";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 shadow-[0_8px_30px_-8px_rgba(46,107,255,0.6)]",
    ghost:
      "border border-white/12 text-fg-primary hover:border-accent/60 hover:-translate-y-0.5",
  };
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {withArrow && (
        <ArrowIcon className="h-4 w-4 transition-transform duration-base ease-brand group-hover:translate-x-1" />
      )}
    </a>
  );
}
