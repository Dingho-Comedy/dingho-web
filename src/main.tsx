import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { App } from "@/app/app";
import { LocaleProvider, type Locale } from "@/contexts/locale-context";
import "@/styles/globals.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Missing #root element");
}

function Root() {
  const { pathname } = useLocation();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "zh";
  return (
    <LocaleProvider locale={locale}>
      <App />
    </LocaleProvider>
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/en" element={<Root />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
