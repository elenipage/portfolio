import { Hero } from "@/components/home/Hero";
import { FacetsSection } from "@/components/home/FacetsSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <FacetsSection />
      <SkillsSection />
      <FeaturedWork />
      <BlogTeaser />
      <ContactTeaser />
    </>
  );
}
