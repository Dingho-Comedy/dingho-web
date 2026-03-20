import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

interface SiteShellProps {
  children?: ReactNode;
}

/**
 * Page chrome: header, main landmark, footer.
 * Follows semantic structure recommended for clarity (HIG: prioritize legibility and hierarchy).
 */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main" id="main">
        {children ?? <div className="site-main__placeholder" aria-hidden />}
      </main>
      <SiteFooter />
    </div>
  );
}
