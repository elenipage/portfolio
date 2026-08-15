"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { ThemeToggle } from "./ThemeToggle";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useFocusTrap(panelRef, open);

  // Close on route change, since App Router navigations don't unmount this.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-40 flex flex-col bg-background md:hidden"
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <span className="font-heading text-lg font-semibold">{siteConfig.name}</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center border border-border hover:bg-surface-2"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Primary" className="flex flex-1 flex-col justify-between px-6 py-8">
            <ul className="flex flex-col gap-6">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-heading text-2xl font-medium text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle className="self-start" />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
