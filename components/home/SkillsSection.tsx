import { SectionReveal } from "@/components/ui/SectionReveal";

// PLACEHOLDER COPY — replace with your real focus areas.
const skillGroups = [
  {
    title: "Frontend",
    skills: ["TypeScript", "JavaScript", "React, React Native & Next.js", "CSS & Tailwind", "Accessibility (WCAG)"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "SQL", "REST APIs", "Supabase", "Express.js", "OAuth & JWT"],
  },
  {
    title: "Design",
    skills: ["User research", "UX Design", "Figma", "Interaction design", "Design systems & Design Justice", "Prototyping"],
  },
  {
    title: "Interdisciplinary",
    skills: ["Systems thinking", "Social entrepreneurship", "Data storytelling", "Facilitation"],
  },
];

export function SkillsSection() {
  return (
    <SectionReveal className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-heading text-3xl font-bold tracking-tight">Focus areas</h2>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent-lavender">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-muted">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
