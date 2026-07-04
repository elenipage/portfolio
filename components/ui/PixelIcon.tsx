import { cn } from "@/lib/utils";

type PixelIconProps = {
  className?: string;
};

// A tiny 8x8-grid hand-drawn pixel star, used as a decorative section marker.
// Purely decorative — always rendered with aria-hidden by callers.
const STAR_PIXELS = [
  [3, 0], [4, 0],
  [3, 1], [4, 1],
  [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2],
  [2, 3], [3, 3], [4, 3], [5, 3],
  [2, 4], [3, 4], [4, 4], [5, 4],
  [1, 5], [2, 5], [5, 5], [6, 5],
  [0, 6], [1, 6], [6, 6], [7, 6],
];

export function PixelIcon({ className }: PixelIconProps) {
  return (
    <svg
      viewBox="0 0 8 8"
      className={cn("h-3 w-3 text-accent-gold", className)}
      aria-hidden="true"
      focusable="false"
    >
      {STAR_PIXELS.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="currentColor" />
      ))}
    </svg>
  );
}
