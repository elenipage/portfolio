"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/hooks/useHasMounted";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHasMounted();

  // Avoid rendering theme-dependent UI until mounted, since the resolved
  // theme is only known client-side after next-themes' blocking script runs.
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:bg-surface-2",
        className
      )}
    >
      {mounted && isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
