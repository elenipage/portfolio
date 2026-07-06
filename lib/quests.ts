export type QuestStatus = "upcoming" | "in-progress" | "completed";
export type QuestIcon = "briefcase" | "rocket" | "code" | "school";

export type ChecklistItem = {
  text: string;
  // true once actually achieved — ongoing/not-yet-done items render as an
  // unchecked box instead of a tick, even while the quest itself is in progress.
  done: boolean;
};

export type Quest = {
  id: string;
  title: string;
  status: QuestStatus;
  icon: QuestIcon;
  xp: number;
  description: string;
  checklist: ChecklistItem[];
};

// Ordered most recent/upcoming first; the first entry is selected by default.
// XP values are a rough, subjective weighting — tune freely.
export const quests: Quest[] = [
  {
    id: "lis-masters",
    title:
      "London Interdisciplinary School: MASc Complex Systems and Problems",
    status: "upcoming",
    icon: "school",
    xp: 500,
    description:
      "Starting a masters degree to further deepen my ability to solve complex problems from an interdisciplinary lens.",
    checklist: [
      { text: "Starts September 2026", done: false },
      {
        text: "Deepening interdisciplinary approaches to complex systems and problems",
        done: false,
      },
    ],
  },
  {
    id: "force24",
    title: "Force24: Technical Services Engineer & Technical Project Manager",
    status: "in-progress",
    icon: "briefcase",
    xp: 550,
    description:
      "Moved from Technical Project Manager into an engineering and technical support focused role involving client-facing support, solution design, and integration delivery.",
    checklist: [
      { text: "Providing client-facing technical support", done: false },
      {
        text: "Leading solution design for customer integrations",
        done: false,
      },
      { text: "Delivering and building integration projects", done: false },
      {
        text: "Began working as a Technical Services Engineer alongside my PM role (May 2025)",
        done: true,
      },
      {
        text: "Completed the 'Project Fundamentals' level 3 qualification from the Association for Project Management (APM) - March 2026",
        done: true,
      },
      {
        text: "Shortlisted for the 'Rising Star' award at Leeds Digital Festival 2025",
        done: true,
      },
      {
        text: "Joined Force24 as Technical Project Manager (Jan 2025)",
        done: true,
      },
    ],
  },
  {
    id: "kindred",
    title: "Kindred",
    status: "in-progress",
    icon: "rocket",
    xp: 600,
    description: "Building an app tackling youth isolation in West Yorkshire.",
    checklist: [
      {
        text: "Developing the app further to tackle youth isolation across West Yorkshire",
        done: false,
      },
      {
        text: "Run user research with neurodivergent young people to shape the product",
        done: false,
      },
      {
        text: "Won ‘Most Creative Idea’ - West Yorkshire Mayor’s Big Ideas Challenge 2025",
        done: true,
      },
      {
        text: "Took Kindred from concept to a working React Native MVP",
        done: true,
      },
    ],
  },
  {
    id: "bootcamp",
    title: "Northcoders: Software development bootcamp",
    status: "completed",
    icon: "code",
    xp: 250,
    description:
      "Full-stack JavaScript fundamentals, independent and group projects, and agile project delivery.",
    checklist: [
      
      { text: "Completed independent and group projects", done: true },
      { text: "Practised agile project delivery", done: true },
      {
        text: "Learned to build full-stack applications with React, Node.js, and Express",
        done: true,
      },
      {
        text: "Built JavaScript fundamentals across the stack",
        done: true,
      },
      {
        text: "Learned to use SQL, HTML, and CSS",
        done: true,
      },
    ],
  },
  {
    id: "ba-innovation",
    title:
      "Leeds Beckett University: BA Innovation and Skills for Social Change",
    status: "completed",
    icon: "school",
    xp: 550,
    description:
      "First-class honours, focused on tackling problems from grassroots community capability building through to organisational change.",
    checklist: [
      { text: "Graduated with first-class honours", done: true },
      {
        text: "Studied grassroots community capability building through to organisational change",
        done: true,
      },
      {
        text: "Explored co-design, design justice, and social entrepreneurship",
        done: true,
      },
    ],
  },
  {
    id: "customer-service",
    title: "Customer service roles",
    status: "completed",
    icon: "briefcase",
    xp: 150,
    description: "A range of customer-facing roles, 2016–2020.",
    checklist: [
      { text: "Built foundational customer service experience", done: true },
      { text: "Webchat agent", done: true },
      { text: "Complaints Manager", done: true },
      { text: "NCS Team Leader", done: true },
      { text: "Customer Service Advisor", done: true },
    ],
  },
];
