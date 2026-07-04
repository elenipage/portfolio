"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-6 pb-20 pt-20 sm:pt-28">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-2 text-sm font-medium text-accent-gold"
      >
        <PixelIcon />
        Hello, I&apos;m {siteConfig.name}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {siteConfig.tagline}
      </motion.h1>

      {/* PLACEHOLDER COPY — replace with your own introduction. */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-muted"
      >
        I build calm, considered software and interfaces, soon to be studying at 
        the London Interdisciplinary School — bringing systems
        thinking and empathy into how I design and code. When I&apos;m not working,
        I&apos;m usually deep in an old-school video game or journalling about
        whatever I just learned.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <Link
          href="#work"
          className="rounded-full bg-accent-rose px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          See my work
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
        >
          Get in touch
        </Link>
      </motion.div>
    </div>
  );
}
