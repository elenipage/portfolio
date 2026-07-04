import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-2">
      <Link href={`/blog/${post.slug}`} className="group">
        <time
          dateTime={post.frontmatter.date}
          className="text-sm text-muted"
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
              className="rounded-full bg-accent-lavender/20 px-3 py-1 text-xs font-medium text-accent-lavender"
            >
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
