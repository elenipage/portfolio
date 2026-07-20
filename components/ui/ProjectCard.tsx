"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex flex-col rounded-xl border border-border bg-surface p-6"
    >
      <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-accent-rose"
          >
            {tag}
          </li>
        ))}
      </ul>
      {(project.href || project.repo) && (
        <div className="mt-5 flex gap-4 text-sm font-medium">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-rose hover:underline"
            >
              View {project.title} project<span className="sr-only"> (opens in new tab)</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground hover:underline"
            >
              Source<span className="sr-only"> (opens in new tab)</span>
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
