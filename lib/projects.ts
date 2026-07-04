export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

// PLACEHOLDER COPY — replace with your real projects.
export const projects: Project[] = [
  {
    slug: "kindred",
    title: "Kindred",
    description:
      "An app to help young people find their people. Inspired by a desire to tackle rising loneliness and social isolation, as well as experiences as a neurodivergent person: Kindred is an activity finding app for teens and young adults to connect with others who share their interests and experiences.",
    tags: ["Product design", "React Native", "App Development"],
    href: "https://kindredapp.org.uk",
  },
  {
    slug: "eco-xp",
    title: "Eco-XP",
    description:
      "A gamified recycling app that encourages users to recycle more by rewarding them with points and badges for their recycling efforts, with leaderboards and competitions among peers. The app also provides educational content about the environmental impact of recycling and how to recycle properly.",
    tags: ["App Development", "React Native", "Ed Tech"],
    href: "https://github.com/elenipage/eco-xp-app",
    repo: "https://github.com/elenipage/eco-xp-app"
  },
];
