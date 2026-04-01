import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { App } from "@/app/app";
import { PrivacyPage } from "@/app/privacy-page";
import { TermsPage } from "@/app/terms-page";
import { VideoConsentPage } from "@/app/video-consent-page";
import { LocaleProvider, type Locale } from "@/contexts/locale-context";
import "@/styles/globals.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Missing #root element");
}

function WithLocale({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "zh";
  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithLocale><App /></WithLocale>} />
        <Route path="/en" element={<WithLocale><App /></WithLocale>} />
        <Route path="/privacy" element={<WithLocale><PrivacyPage /></WithLocale>} />
        <Route path="/en/privacy" element={<WithLocale><PrivacyPage /></WithLocale>} />
        <Route path="/terms" element={<WithLocale><TermsPage /></WithLocale>} />
        <Route path="/en/terms" element={<WithLocale><TermsPage /></WithLocale>} />
        <Route path="/video-consent" element={<WithLocale><VideoConsentPage /></WithLocale>} />
        <Route path="/en/video-consent" element={<WithLocale><VideoConsentPage /></WithLocale>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
