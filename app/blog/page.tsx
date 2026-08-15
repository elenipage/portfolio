import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates on projects, research, and reflections from developer, designer, and LIS student Eleni Page.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <SectionReveal className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-3 text-muted">
        Updates on what I&apos;m building, designing, and thinking about at LIS.
      </p>

      {posts.length === 0 ? (
        <div className="mt-10 border border-border border-l-4 border-l-accent-gold bg-surface p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-gold">Coming soon</p>
          <p className="mt-2 text-muted">
            Nothing published here yet - the first posts are in progress. In the meantime, take a look at{" "}
            <Link href="/#work" className="text-accent-rose hover:underline">
              featured work
            </Link>{" "}
            or the{" "}
            <Link href="/#quest-log" className="text-accent-rose hover:underline">
              quest log
            </Link>
            .
          </p>
        </div>
      ) : (
        <div className="mt-10 flex flex-col gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </SectionReveal>
  );
}
