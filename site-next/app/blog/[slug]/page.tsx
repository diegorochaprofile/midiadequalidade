import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getAllSlugs, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Mídia de Qualidade`,
    description: post.description,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main>
      <Container className="py-24 md:py-28">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-eyebrow font-bold uppercase text-accent-light transition-colors hover:text-accent"
          >
            ← Voltar ao blog
          </Link>
          <h1 className="mt-6 font-display text-h1 font-bold leading-tight text-fg-primary">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-fg-subtle">{post.dateLabel}</p>
          <div
            className="prose prose-invert mt-10 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Container>
    </main>
  );
}
