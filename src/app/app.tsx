import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocale } from "@/contexts/locale-context";
import { getHomeMessages } from "@/i18n/messages";
import { SiteShell } from "@/components/layout/site-shell";
import { AboutDinghaoSection } from "@/components/sections/about-dinghao-section";
import { AppleMusicSection } from "@/components/sections/apple-music-section";
import { FaqSection } from "@/components/sections/faq-section";
// import { HeroSection } from "@/components/sections/hero-section";
import { PromoHeroSection } from "@/components/sections/promo-hero-section";
import { ProgramListSection } from "@/components/sections/program-list-section";

/**
 * Root application shell. Home: hero + programs + about + Apple Music + FAQ.
 */
export function App() {
  const locale = useLocale();
  const messages = getHomeMessages(locale);
  const { hash } = useLocation();

  useEffect(() => {
    document.documentElement.lang = messages.htmlLang;
    document.title = messages.metaTitle;
  }, [messages.htmlLang, messages.metaTitle]);

  // Scroll to the hash target after the DOM has rendered
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <SiteShell>
      {/* <HeroSection /> */}
      <PromoHeroSection />
      <ProgramListSection />
      <AboutDinghaoSection />
      <AppleMusicSection />
      <FaqSection />
    </SiteShell>
  );
}
