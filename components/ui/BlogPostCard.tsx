import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <article className="border border-border bg-surface p-6 transition-colors hover:bg-surface-2">
      <Link href={`/blog/${post.slug}`} className="group">
        <time
          dateTime={post.frontmatter.date}
          className="font-mono text-xs uppercase tracking-wide text-muted"
        >
          {formatDate(post.frontmatter.date)}
        </time>
        <h3 className="mt-2 font-heading text-xl font-semibold text-foreground group-hover:text-accent-rose">
          {post.frontmatter.title}
        </h3>
        <p className="mt-2 text-muted">{post.frontmatter.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.frontmatter.tags.map((tag) => (
            <li
              key={tag}
              className="border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent-lavender"
            >
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
