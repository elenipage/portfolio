import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { mdxComponents } from "@/components/mdx";
import { formatDate } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { frontmatter } = getPostBySlug(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.summary,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.summary,
        type: "article",
        publishedTime: frontmatter.date,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <time dateTime={frontmatter.date} className="text-sm text-muted">
          {formatDate(frontmatter.date)}
        </time>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight">
          {frontmatter.title}
        </h1>
        <ul className="mt-4 flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent-lavender/20 px-3 py-1 text-xs font-medium text-accent-lavender"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="prose max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  );
}
