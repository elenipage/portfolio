import { SectionReveal } from "@/components/ui/SectionReveal";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { siteConfig } from "@/lib/site-config";

export function FacetsSection() {
  return (
    <SectionReveal id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="flex items-center gap-2 font-heading text-3xl font-bold tracking-tight">
        <PixelIcon />
        Three ways I show up
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {siteConfig.facets.map((facet) => (
          <div key={facet.title} className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-heading text-xl font-semibold text-accent-rose">
              {facet.title}
            </h3>
            <p className="mt-3 text-muted">{facet.description}</p>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
