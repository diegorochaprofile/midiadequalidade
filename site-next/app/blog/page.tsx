import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Mídia de Qualidade",
  description:
    "Ideias, método e bastidores sobre presença digital, marketing e tecnologia — direto ao ponto.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main>
      <Container className="py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <span className="text-eyebrow font-bold uppercase text-accent-light">Blog</span>
          <h1 className="mt-5 font-display text-h1 font-bold text-fg-primary">
            Ideias e bastidores.
          </h1>
          <p className="mt-4 text-lead text-fg-muted">
            Conteúdo sobre presença digital, marketing e tecnologia — direto ao ponto.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-card border border-white/10 bg-surface p-7 transition-all duration-base ease-brand hover:-translate-y-1 hover:border-accent/50"
            >
              <span className="inline-flex w-fit rounded-pill border border-white/10 bg-canvas px-3 py-1 text-xs font-medium text-accent-light">
                {p.dateLabel}
              </span>
              <h2 className="mt-4 font-display text-h3 font-semibold text-fg-primary">{p.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{p.description}</p>
            </Link>
          ))}
          {posts.length === 0 && (
            <p className="text-fg-muted">Em breve, os primeiros artigos.</p>
          )}
        </div>
      </Container>
    </main>
  );
}
