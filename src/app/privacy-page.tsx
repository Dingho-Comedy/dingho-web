import { useEffect } from "react";
import { useLocale } from "@/contexts/locale-context";
import { SiteShell } from "@/components/layout/site-shell";
import { LegalPage } from "@/components/pages/legal-page";
import { PRIVACY_CONTENT } from "@/data/legal-privacy";

export function PrivacyPage() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-Hans";
    document.title =
      locale === "en" ? "Privacy Policy — Dingho Comedy" : "隐私协议 — 顶好喜剧";
  }, [locale]);

  return (
    <SiteShell>
      <LegalPage content={PRIVACY_CONTENT} />
    </SiteShell>
  );
}
