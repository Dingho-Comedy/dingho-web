const NAV_ITEMS = [
  { href: "#program", labelDesktop: "近期演出", labelMobile: "演出" },
  { href: "#about", labelDesktop: "关于顶好", labelMobile: "关于" },
  { href: "#faq", labelDesktop: "常见问题", labelMobile: "问答" },
] as const;

/**
 * Primary navigation: logo + in-page anchors (long labels desktop, short on mobile).
 */
export function SiteHeader() {
  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <a className="site-header__logo-link" href="/" aria-label="顶好喜剧 首页">
          <img
            className="site-header__logo"
            src="/images/logo.png"
            alt=""
            decoding="async"
          />
        </a>
        <nav className="site-header__nav" aria-label="主导航">
          <ul className="site-header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className="site-header__nav-link" href={item.href}>
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
        </nav>
      </div>
    </header>
  );
}
