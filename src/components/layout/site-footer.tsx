import { useLocale } from "@/contexts/locale-context";
import "./site-footer.css";

/** Brand slogan — same on all locales (not translated). */
const FOOTER_SLOGAN_ZH = "喜剧看顶好 · 生活没烦恼";

const LEGAL_LINKS = {
  zh: [
    { href: "/privacy", label: "隐私协议" },
    { href: "/terms", label: "使用条款" },
    { href: "/video-consent", label: "视频采集许可" },
  ],
  en: [
    { href: "/en/privacy", label: "Privacy" },
    { href: "/en/terms", label: "Terms" },
    { href: "/en/video-consent", label: "Recording Consent" },
  ],
} as const;

/**
 * Brand closing line + copyright. Slogan uses ZCOOL QingKe HuangYou (loaded in index.html).
 * Copyright in content rail; slogan full-bleed, bottom ⅓ cropped on all breakpoints.
 */
export function SiteFooter() {
  const locale = useLocale();
  const year = new Date().getFullYear();
  const links = LEGAL_LINKS[locale];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <nav className="site-footer__legal" aria-label={locale === "en" ? "Legal" : "法律条款"}>
          {links.map((link, i) => (
            <span key={link.href}>
              {i > 0 && <span className="site-footer__legal-sep" aria-hidden>·</span>}
              <a className="site-footer__legal-link" href={link.href}>
                {link.label}
              </a>
            </span>
          ))}
        </nav>
        <p className="site-footer__copyright">
          © {year} DINGHO COMEDY, INC.
        </p>
      </div>
      <div className="site-footer__slogan-wrap">
        <div className="site-footer__slogan-clip">
          <p className="site-footer__slogan">{FOOTER_SLOGAN_ZH}</p>
        </div>
      </div>
    </footer>
  );
}
