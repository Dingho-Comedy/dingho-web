import { useLocale } from "@/contexts/locale-context";

/**
 * Temporary promo hero — full-viewport (minus header), fav.PNG centred,
 * with a CTA that scrolls to the program section.
 */
export function PromoHeroSection() {
  const locale = useLocale();
  const basePath = locale === "en" ? "/en" : "";
  const ctaLabel = locale === "en" ? "Get tickets now" : "立刻购票";

  return (
    <section className="promo-hero" aria-label={ctaLabel}>
      <img
        className="promo-hero__img"
        src="/images/fav.PNG"
        alt={
          locale === "en"
            ? "Be Yourself — Karl Standup Special"
            : "率性之谓 — Karl 脱口秀专场"
        }
      />
      <a className="promo-hero__cta" href={`${basePath}#program`}>
        {ctaLabel}
      </a>
    </section>
  );
}
