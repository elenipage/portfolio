"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type PixelAvatarProps = {
  className?: string;
};

// A 16x16 pixel-art self-portrait, framed in a circle where a headshot would
// usually go. Row strings map to PIXEL_COLORS below; "." is transparent.
const PIXEL_ROWS = [
  "................",
  ".....HHHHHH.....",
  "...HHHHHHHHHH...",
  "..HHHHHHHHHHHH..",
  "..HHSSSSSSSHHH..",
  ".HHSSSSSSSSSHHH.",
  ".HSSSSSSSSSSSHH.",
  ".HSSSESSSESSSHH.",
  ".HSSSSSSSSSSSHH.",
  ".HSSCCSSSCCSSHH.",
  ".HSSSSMMSSSSHHH.",
  "..SSSSSSSSSSHHH.",
  "...SSSSSSSSSHHH.",
  "...TTTTTTTTTT...",
  "..TTTTTTTTTTTT..",
  ".TTTTTTTTTTTTTT.",
];

// Hair and shirt follow the site's theme accents; skin, eyes, and blush stay
// fixed so the little sprite reads consistently in light and dark mode.
const PIXEL_COLORS: Record<string, string> = {
  H: "#aa4329",
  T: "rgb(var(--color-accent-lavender))",
  S: "#e8b98a",
  E: "#3a2f2f",
  C: "#e3a9a0",
  M: "#8a5a4a",
};

export function PixelAvatar({ className }: PixelAvatarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "flex aspect-square items-center justify-center overflow-hidden rounded-full border border-border bg-surface-2",
        className
      )}
      animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 16 16"
        className="h-[85%] w-[85%]"
        role="img"
        aria-label="Pixel-art self portrait"
      >
        {PIXEL_ROWS.map((row, y) =>
          [...row].map((char, x) =>
            char === "." ? null : (
              <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={PIXEL_COLORS[char]} />
            )
          )
        )}
      </svg>
    </motion.div>
  );
}
