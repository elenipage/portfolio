export const siteConfig = {
  name: "Eleni Page",
  tagline: "Developer, designer, and interdisciplinary innovator.",
  description:
    "Portfolio and blog of Eleni Page — a developer and designer building thoughtful technology, currently studying at the London Interdisciplinary School.",
  url: "https://example.com",
  navLinks: [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/elenipage" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/eleni-page/" },
    { label: "Email", href: "mailto:elenipage@icloud.com" },
  ],
  facets: [
    {
      title: "Developer",
      description:
        "I build accessible, well-crafted web applications — from prototypes to production, with an eye for the details that make software feel considered rather than just functional.",
    },
    {
      title: "Designer",
      description:
        "I care about how things feel as much as how they work — interfaces that are calm, clear, and a little bit delightful, grounded in real research with real people.",
    },
    {
      title: "Innovator",
      description:
        "At the London Interdisciplinary School, I bring together systems thinking, technology, and human behaviour to work on problems that don't sit neatly inside one discipline.",
    },
  ],
} as const;
