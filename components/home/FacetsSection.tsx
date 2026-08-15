import { SectionReveal } from "@/components/ui/SectionReveal";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { siteConfig } from "@/lib/site-config";

export function FacetsSection() {
  return (
    <SectionReveal className="mx-auto max-w-6xl px-6 py-14">
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {siteConfig.facets.map((facet, index) => (
          <div key={facet.title} className="border border-border bg-surface p-6">
            <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-1 font-heading text-xl font-semibold text-accent-rose">{facet.title}</h3>
            <p className="mt-3 text-muted">{facet.description}</p>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
