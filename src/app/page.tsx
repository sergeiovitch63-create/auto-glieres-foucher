import { Hero } from "@/components/home/hero";
import { MarqueeBar } from "@/components/home/marquee-bar";
import { StatsSection } from "@/components/home/stats";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyUs } from "@/components/home/why-us";
import { Process } from "@/components/home/process";
import { CodePreview } from "@/components/home/code-preview";
import { ReviewsSection } from "@/components/home/reviews-section";
import { TeamSection } from "@/components/home/team-section";
import { FaqSnippet } from "@/components/home/faq-snippet";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <StatsSection />
      <ServicesGrid />
      <WhyUs />
      <Process />
      <CodePreview />
      <ReviewsSection />
      <TeamSection />
      <FaqSnippet />
      <FinalCTA />
    </>
  );
}
