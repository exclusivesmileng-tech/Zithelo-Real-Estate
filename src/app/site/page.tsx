import { Hero } from "@/components/home/Hero";
import { FeaturedDevelopments } from "@/components/home/FeaturedDevelopments";
import { AuthoritySection } from "@/components/home/AuthoritySection";
import { VisionStatement } from "@/components/home/VisionStatement";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDevelopments />
      <AuthoritySection />
      <VisionStatement />
      <ContactCTA />
    </>
  );
}
