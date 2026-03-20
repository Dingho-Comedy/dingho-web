import { SiteShell } from "@/components/layout/site-shell";
import { AboutDinghaoSection } from "@/components/sections/about-dinghao-section";
import { AppleMusicSection } from "@/components/sections/apple-music-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProgramListSection } from "@/components/sections/program-list-section";

/**
 * Root application shell. Home: hero + programs + about + Apple Music + FAQ.
 */
export function App() {
  return (
    <SiteShell>
      <HeroSection />
      <ProgramListSection />
      <AboutDinghaoSection />
      <AppleMusicSection />
      <FaqSection />
    </SiteShell>
  );
}
