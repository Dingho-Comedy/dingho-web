import { Link, useLocation } from "react-router-dom";
import { useLocale } from "@/contexts/locale-context";
import { useHomeMessages } from "@/i18n/messages";

function LanguageSwitcher() {
  const { search, hash } = useLocation();
  const locale = useLocale();
  const m = useHomeMessages();

  if (locale === "zh") {
    return (
      <div className="site-header__lang" role="navigation" aria-label={m.langSwitchAria}>
        <Link
          className="site-header__lang-link"
          to={{ pathname: "/en", search, hash }}
          lang="en"
          aria-label={m.langSwitchToEnAria}
        >
          {m.langSwitchToEnLabel}
        </Link>
      </div>
    );
  }

  return (
    <div className="site-header__lang" role="navigation" aria-label={m.langSwitchAria}>
      <Link
        className="site-header__lang-link"
        to={{ pathname: "/", search, hash }}
        lang="zh-Hans"
        aria-label={m.langSwitchToZhAria}
      >
        {m.langSwitchToZhLabel}
      </Link>
    </div>
  );
}

/**
 * Primary navigation: logo + in-page anchors (long labels desktop, short on mobile).
 */
export function SiteHeader() {
  const locale = useLocale();
  const m = useHomeMessages();
  const basePath = locale === "en" ? "/en" : "";

  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <a className="site-header__logo-link" href={basePath || "/"} aria-label={m.logoAriaHome}>
          <img
            className="site-header__logo"
            src="/images/logo.png"
            alt=""
            decoding="async"
          />
        </a>
        <nav className="site-header__nav" aria-label={m.navAria}>
          <ul className="site-header__nav-list">
            {m.nav.map((item) => (
              <li key={item.href}>
                <a className="site-header__nav-link" href={`${basePath}${item.href}`}>
                  <span className="site-header__nav-label site-header__nav-label--desktop">
                    {item.labelDesktop}
                  </span>
                  <span className="site-header__nav-label site-header__nav-label--mobile">
                    {item.labelMobile}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
