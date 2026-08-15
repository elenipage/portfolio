"use client";

import { useEffect, useRef } from "react";

type PixelGridBackgroundProps = {
  spacing?: number;
  dotSize?: number;
  // Optional rgb triplet override, e.g. "140,140,140". Left unset, the grid
  // follows the current theme's --color-grid-dot so it adapts between light and dark.
  color?: string;
  className?: string;
};

function hexToRgbTriplet(hex: string): string | null {
  const match = hex.trim().match(/^#([0-9a-f]{6})$/i);
  if (!match) return null;
  const value = match[1];
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `${r},${g},${b}`;
}

function readGridDotColor(): string {
  const themeColor = hexToRgbTriplet(
    getComputedStyle(document.documentElement).getPropertyValue("--color-grid-dot")
  );
  return themeColor ?? "140,140,140";
}

export function PixelGridBackground({
  spacing = 24,
  dotSize = 2,
  color,
  className = "",
}: PixelGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Mutable so the draw loop can pick up a theme change on its next frame
    // without tearing down and restarting the whole effect.
    let resolvedColor = color ?? readGridDotColor();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      // Without this, the canvas (a replaced element) renders at its intrinsic
      // buffer size on high-DPI screens — e.g. 2x the page height — since
      // `absolute inset-0` only sets offsets, not an explicit CSS size.
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    let frameId: number;
    const start = performance.now();

    const drawStaticFrame = () => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          ctx.fillStyle = `rgba(${resolvedColor},0.25)`;
          ctx.fillRect(i * spacing, j * spacing, dotSize, dotSize);
        }
      }
    };

    // Reading resolvedTheme from next-themes and re-running this effect isn't
    // reliable here: that context value updates before next-themes' own effect
    // actually applies the "dark" class to <html>, so a dependency-driven
    // re-read races the DOM mutation and grabs the *previous* theme's color.
    // Watching the class attribute directly sidesteps that ordering entirely —
    // this only fires once the class has actually changed.
    let themeObserver: MutationObserver | null = null;
    if (!color) {
      themeObserver = new MutationObserver(() => {
        resolvedColor = readGridDotColor();
        // The animated loop picks this up on its next frame automatically;
        // the static (reduced-motion) frame needs an explicit redraw.
        if (prefersReducedMotion) drawStaticFrame();
      });
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * spacing;
          const baseY = j * spacing;
          const phase = i * 0.7 + j * 0.5;

          // slow, gentle positional drift
          const dx = Math.sin(t * 0.4 + phase) * 1.6;
          const dy = Math.cos(t * 0.35 + phase * 1.3) * 1.6;

          // subtle opacity flicker so it doesn't feel mechanical
          const flicker = 0.2 + 0.12 * Math.sin(t * 0.5 + phase * 2);

          ctx.fillStyle = `rgba(${resolvedColor},${flicker.toFixed(3)})`;
          ctx.fillRect(baseX + dx, baseY + dy, dotSize, dotSize);
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    if (prefersReducedMotion) {
      drawStaticFrame();
    } else {
      frameId = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (frameId) cancelAnimationFrame(frameId);
      themeObserver?.disconnect();
    };
  }, [spacing, dotSize, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
    />
  );
}
