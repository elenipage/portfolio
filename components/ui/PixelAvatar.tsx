"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HudCorners } from "@/components/ui/HudCorners";
import { cn } from "@/lib/utils";

type PixelAvatarProps = {
  className?: string;
};

export function PixelAvatar({ className }: PixelAvatarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <motion.div
        className="relative flex aspect-square w-full items-center justify-center border border-border bg-surface-2"
        animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <HudCorners />
        <Image
          src="/Pixel_Leni_1.png"
          alt="Pixel-art self portrait"
          width={75}
          height={75}
          unoptimized
          className="h-[100%] w-[100%] [image-rendering:pixelated]"
        />
      </motion.div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Eleni · Lv. 27</p>
    </div>
  );
}
