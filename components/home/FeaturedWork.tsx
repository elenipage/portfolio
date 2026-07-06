import { SectionReveal } from "@/components/ui/SectionReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export function FeaturedWork() {
  return (
    <SectionReveal id="work" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="font-heading text-3xl font-bold tracking-tight">Featured work</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionReveal>
  );
}
