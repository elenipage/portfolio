import Link from "next/link";
import { PixelIcon } from "@/components/ui/PixelIcon";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <div className="flex items-center gap-1" aria-hidden="true">
        <PixelIcon className="h-5 w-5" />
        <PixelIcon className="h-5 w-5" />
        <PixelIcon className="h-5 w-5" />
      </div>
      <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight">
        404 — Game over
      </h1>
      <p className="mt-3 text-muted">
        This page doesn&apos;t exist, but there&apos;s always a continue.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-accent-rose px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
