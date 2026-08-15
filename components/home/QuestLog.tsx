"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Check, Code2, GraduationCap, Rocket, type LucideIcon } from "lucide-react";
import { HudCorners } from "@/components/ui/HudCorners";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { quests, type Quest, type QuestIcon, type QuestStatus } from "@/lib/quests";
import { cn } from "@/lib/utils";

const QUEST_ICONS: Record<QuestIcon, LucideIcon> = {
  briefcase: Briefcase,
  rocket: Rocket,
  code: Code2,
  school: GraduationCap,
};

const STATUS_META: Record<
  QuestStatus,
  { tag: string; eyebrow: string; accentText: string; iconBox: string }
> = {
  upcoming: {
    tag: "[ upcoming ]",
    eyebrow: "Upcoming quest",
    accentText: "text-quest-gold",
    iconBox: "border-quest-gold/60 text-quest-gold",
  },
  "in-progress": {
    tag: "[ active ]",
    eyebrow: "Active quest",
    accentText: "text-quest-teal",
    iconBox: "border-quest-teal/60 text-quest-teal",
  },
  completed: {
    tag: "[ complete ]",
    eyebrow: "Quest complete",
    accentText: "text-quest-muted",
    iconBox: "border-dashed border-quest-border text-quest-muted",
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15, ease: "easeIn" as const } },
};

export function QuestLog() {
  const [selectedId, setSelectedId] = useState(quests[0]?.id ?? null);
  const selectedQuest = quests.find((quest) => quest.id === selectedId) ?? null;

  const activeCount = quests.filter((quest) => quest.status === "in-progress").length;
  const upcomingCount = quests.filter((quest) => quest.status === "upcoming").length;
  const completeCount = quests.filter((quest) => quest.status === "completed").length;
  const totalXp = quests.reduce((sum, quest) => sum + quest.xp, 0);

  return (
    <SectionReveal id="quest-log" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="font-heading text-3xl font-bold tracking-tight">Quest log</h2>
      <p className="mt-2 text-muted">A running log of roles, projects, and qualifications.</p>

      <div className="relative mt-10 border border-quest-border bg-quest-bg">
        <HudCorners colorClassName="border-quest-teal" />

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-quest-border bg-quest-surface px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-quest-muted sm:px-6">
          <span>Quest log</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              <span className="text-quest-teal">{activeCount}</span> active
            </span>
            <span>
              <span className="text-quest-gold">{upcomingCount}</span> upcoming
            </span>
            <span>{completeCount} complete</span>
            <span className="text-quest-teal">{totalXp} xp</span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
          <ol className="flex flex-col gap-3">
            {quests.map((quest, index) => (
              <li key={quest.id}>
                <QuestCard
                  quest={quest}
                  index={index}
                  isSelected={quest.id === selectedId}
                  onSelect={() => setSelectedId(quest.id)}
                />

                {/* Mobile: checklist appears inline, directly below the selected card. */}
                <div className="md:hidden">
                  <AnimatePresence mode="wait">
                    {quest.id === selectedId && (
                      <motion.div
                        key={quest.id}
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="mt-2"
                      >
                        <QuestChecklist quest={quest} idPrefix="mobile" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            ))}
          </ol>

          {/* Desktop: checklist sits beside the list in its own column. */}
          <div className="hidden md:block md:sticky md:top-24">
            <AnimatePresence mode="wait">
              {selectedQuest && (
                <motion.div
                  key={selectedQuest.id}
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative border border-quest-border bg-quest-surface p-5"
                >
                  <HudCorners colorClassName="border-quest-teal" />
                  <QuestChecklist quest={selectedQuest} idPrefix="desktop" showTitle />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

function QuestCard({
  quest,
  index,
  isSelected,
  onSelect,
}: {
  quest: Quest;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const Icon = QUEST_ICONS[quest.icon];
  const isCompleted = quest.status === "completed";
  const meta = STATUS_META[quest.status];
  const desktopPanelId = `quest-panel-desktop-${quest.id}`;
  const mobilePanelId = `quest-panel-mobile-${quest.id}`;

  return (
    <button
      type="button"
      aria-expanded={isSelected}
      aria-controls={`${desktopPanelId} ${mobilePanelId}`}
      onClick={onSelect}
      className={cn(
        "flex w-full items-start gap-3 border-y border-r border-l-4 bg-quest-surface p-3 text-left transition-colors sm:gap-4 sm:p-4",
        isSelected
          ? "border-l-accent-rose border-y-quest-border border-r-quest-border"
          : "border-l-transparent border-y-quest-border border-r-quest-border hover:bg-quest-teal/10 dark:hover:bg-quest-gold/15",
        isCompleted && !isSelected && "opacity-60"
      )}
    >
      <span className={cn("flex h-9 w-9 flex-shrink-0 items-center justify-center border", meta.iconBox)}>
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>

      <span className="flex min-w-0 flex-1 flex-col gap-1.5">
        <span className="flex items-baseline justify-between gap-3">
          <span className="flex min-w-0 items-baseline gap-2">
            <span className="flex-shrink-0 font-mono text-xs text-quest-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-heading text-base font-semibold">{quest.title}</span>
          </span>
          <span className="flex-shrink-0 whitespace-nowrap font-mono text-[11px] font-bold tracking-wide text-quest-teal">
            +{quest.xp} XP
          </span>
        </span>
        <span className={cn("font-mono text-[10px] font-bold uppercase tracking-[0.2em]", meta.accentText)}>
          {meta.tag}
        </span>
      </span>
    </button>
  );
}

function QuestChecklist({
  quest,
  idPrefix,
  showTitle,
}: {
  quest: Quest;
  idPrefix: string;
  showTitle?: boolean;
}) {
  const headingId = useId();
  const meta = STATUS_META[quest.status];

  return (
    <div
      id={`quest-panel-${idPrefix}-${quest.id}`}
      role="region"
      aria-labelledby={showTitle ? headingId : undefined}
      aria-label={showTitle ? undefined : quest.title}
    >
      {showTitle && (
        <div className="mb-4 flex items-start justify-between gap-3 border-b border-quest-border pb-3">
          <div>
            <p className={cn("font-mono text-[10px] uppercase tracking-[0.2em]", meta.accentText)}>{meta.eyebrow}</p>
            <h3 id={headingId} className="mt-1 font-heading text-lg font-semibold">
              {quest.title}
            </h3>
          </div>
          <span className="whitespace-nowrap font-mono text-xs font-bold text-quest-teal">+{quest.xp} XP</span>
        </div>
      )}
      <p className="mb-4 text-sm text-quest-muted">{quest.description}</p>
      <ul className={cn("flex flex-col gap-3", !showTitle && "border border-quest-border bg-quest-surface p-3")}>
        {quest.checklist.map((item) => (
          <li key={item.text} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center border",
                item.done ? "border-quest-border text-quest-muted" : "border-quest-teal/70"
              )}
              aria-hidden="true"
            >
              {item.done && <Check className="h-3 w-3" />}
            </span>
            <span className={cn(item.done && "text-quest-muted")}>
              <span className="sr-only">{item.done ? "Completed: " : "Ongoing: "}</span>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
