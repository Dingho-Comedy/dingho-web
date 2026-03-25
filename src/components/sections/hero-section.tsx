import { useLocale } from "@/contexts/locale-context";
import { useHomeMessages } from "@/i18n/messages";
import { HeroTitles } from "@/components/sections/hero-titles";

/**
 * Full-viewport hero: responsive background treatment + brand titles.
 */
export function HeroSection() {
  const locale = useLocale();
  const m = useHomeMessages();
  const basePath = locale === "en" ? "/en" : "";

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden />
      <div className="hero__side-fade" aria-hidden>
        <div className="hero__side-fade__blur hero__side-fade__blur--left" />
        <div className="hero__side-fade__wash hero__side-fade__wash--left" />
        <div className="hero__side-fade__blur hero__side-fade__blur--right" />
        <div className="hero__side-fade__wash hero__side-fade__wash--right" />
      </div>
      <div className="hero__scrim" aria-hidden />
      <div className="hero__inner">
        <HeroTitles />
        <a className="hero__cta" href={`${basePath}#program`}>
          {m.heroCta}
        </a>
      </div>
    </section>
  );
}
