// Four L-shaped corner brackets for framing a bordered panel in the site's
// HUD/terminal styling. The parent must be `relative`.
export function HudCorners() {
  return (
    <>
      <span
        className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-accent-teal"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-accent-teal"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-accent-teal"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-accent-teal"
        aria-hidden="true"
      />
    </>
  );
}
