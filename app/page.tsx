import { Hero } from "@/components/home/Hero";
import { FacetsSection } from "@/components/home/FacetsSection";
import { QuestLog } from "@/components/home/QuestLog";
import { SkillsSection } from "@/components/home/SkillsSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <FacetsSection />
      <QuestLog />
      <SkillsSection />
      <FeaturedWork />
      <BlogTeaser />
      <ContactTeaser />
    </>
  );
}
