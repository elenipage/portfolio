import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { getAllPosts } from "@/lib/posts";

export function BlogTeaser() {
  const posts = getAllPosts().slice(0, 2);

  if (posts.length === 0) return null;

  return (
    <SectionReveal className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex items-baseline justify-between">
        <h2 className="font-heading text-3xl font-bold tracking-tight">From the blog</h2>
        <Link href="/blog" className="text-sm font-medium text-accent-rose hover:underline">
          View all posts
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </SectionReveal>
  );
}
