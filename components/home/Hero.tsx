"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PixelAvatar } from "@/components/ui/PixelAvatar";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-6 pb-16 pt-16 sm:pt-24 md:flex-row md:items-center md:justify-between">
      <div className="flex max-w-2xl flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2 text-sm font-medium text-accent-gold"
        >
          <PixelIcon />
          Hello, I&apos;m Eleni
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
          I build and design calm, considered software and interfaces with personality. I bring together my interests in technology, human behaviour, and social systems, and integrate principles of accessibility, systems thinking and design justice into how I build and create. I'm soon to be studying at the London Interdisciplinary School, and when I&apos;m not working or learning, I&apos;m usually deep in an old-school video
          game or walking around some yorkshire hills.
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

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-40 flex-shrink-0 sm:w-48"
      >
        <PixelAvatar className="w-full" />
      </motion.div>
    </div>
  );
}
