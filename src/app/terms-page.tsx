import { useEffect } from "react";
import { useLocale } from "@/contexts/locale-context";
import { SiteShell } from "@/components/layout/site-shell";
import { LegalPage } from "@/components/pages/legal-page";
import { TERMS_CONTENT } from "@/data/legal-terms";

export function TermsPage() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-Hans";
    document.title =
      locale === "en" ? "Terms of Use — Dingho Comedy" : "使用条款 — 顶好喜剧";
  }, [locale]);

  return (
    <SiteShell>
      <LegalPage content={TERMS_CONTENT} />
    </SiteShell>
  );
}
