"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-border bg-surface/80 backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        >
          <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden md:inline-flex" />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center border border-border hover:bg-surface-2 md:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Rendered outside <header> because backdrop-blur there creates a
          containing block for fixed descendants, which would confine this
          panel's `fixed inset-0` to the header's own box instead of the viewport. */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
