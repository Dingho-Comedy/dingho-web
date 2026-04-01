import { useEffect } from "react";
import { useLocale } from "@/contexts/locale-context";
import { SiteShell } from "@/components/layout/site-shell";
import { LegalPage } from "@/components/pages/legal-page";
import { VIDEO_CONSENT_CONTENT } from "@/data/legal-video-consent";

export function VideoConsentPage() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-Hans";
    document.title =
      locale === "en"
        ? "Video & Photo Recording Consent — Dingho Comedy"
        : "视频采集许可协议 — 顶好喜剧";
  }, [locale]);

  return (
    <SiteShell>
      <LegalPage content={VIDEO_CONSENT_CONTENT} />
    </SiteShell>
  );
}
