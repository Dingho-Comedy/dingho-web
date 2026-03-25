import { createContext, useContext, type ReactNode } from "react";

export type Locale = "zh" | "en";

const LocaleContext = createContext<Locale>("zh");

interface LocaleProviderProps {
  locale: Locale;
  children: ReactNode;
}

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
