import "./site-footer.css";

/** Brand slogan — same on all locales (not translated). */
const FOOTER_SLOGAN_ZH = "喜剧看顶好 · 生活没烦恼";

/**
 * Brand closing line + copyright. Slogan uses ZCOOL QingKe HuangYou (loaded in index.html).
 * Copyright in content rail; slogan full-bleed, bottom ⅓ cropped on all breakpoints.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
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
