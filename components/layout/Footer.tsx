import { siteConfig } from "@/lib/site-config";
import { PixelIcon } from "@/components/ui/PixelIcon";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted md:flex-row md:justify-between">
        <p className="flex items-center gap-2">
          <PixelIcon />
          {new Date().getFullYear()} {siteConfig.name}. Made with care.
        </p>
        <ul className="flex items-center gap-6">
          {siteConfig.socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                className="transition-colors hover:text-foreground"
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {social.label}
                {social.href.startsWith("http") && (
                  <span className="sr-only"> (opens in new tab)</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
