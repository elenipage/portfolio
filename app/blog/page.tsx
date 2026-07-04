import type { Metadata } from "next";
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

      <div className="mt-10 flex flex-col gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </SectionReveal>
  );
}
