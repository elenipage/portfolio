"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type PixelSpinnerProps = {
  className?: string;
  label?: string;
};

// A blocky, step-timed loading indicator (the site's one nod to old-school
// pixel-art loading screens). Falls back to a static pulsing block when the
// user prefers reduced motion, since this isn't a motion.* component that
// MotionConfig's reducedMotion="user" would otherwise catch automatically.
export function PixelSpinner({ className, label = "Loading" }: PixelSpinnerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center gap-1", className)}
    >
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={cn(
            "h-2 w-2 bg-accent-gold",
            shouldReduceMotion ? "opacity-60" : "animate-pixel-blink"
          )}
          style={shouldReduceMotion ? undefined : { animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}
