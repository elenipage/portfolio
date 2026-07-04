import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function ContactTeaser() {
  return (
    <SectionReveal className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-2xl border border-border bg-surface px-8 py-14 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Have a project, question, or just want to say hello?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          I read every message myself — whether it&apos;s a collaboration idea, a
          question about LIS, or a recommendation for a good retro game.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-accent-rose px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Send an enquiry
        </Link>
      </div>
    </SectionReveal>
  );
}
