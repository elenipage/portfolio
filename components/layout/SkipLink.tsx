export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:border focus:border-foreground focus:bg-foreground focus:px-4 focus:py-2 focus:text-background focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}
