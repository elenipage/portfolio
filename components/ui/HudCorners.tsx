import { cn } from "@/lib/utils";

type HudCornersProps = {
  colorClassName?: string;
};

// Four L-shaped corner brackets for framing a bordered panel in the site's
// HUD/terminal styling. The parent must be `relative`.
export function HudCorners({ colorClassName = "border-accent-teal" }: HudCornersProps) {
  return (
    <>
      <span
        className={cn("pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2", colorClassName)}
        aria-hidden="true"
      />
      <span
        className={cn("pointer-events-none absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2", colorClassName)}
        aria-hidden="true"
      />
      <span
        className={cn(
          "pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2",
          colorClassName
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2",
          colorClassName
        )}
        aria-hidden="true"
      />
    </>
  );
}
