import { useLocale } from "@/contexts/locale-context";
import "./legal-page.css";

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

interface LegalPageProps {
  content: Record<"zh" | "en", LegalContent>;
}

export function LegalPage({ content }: LegalPageProps) {
  const locale = useLocale();
  const basePath = locale === "en" ? "/en" : "";
  const c = content[locale];

  return (
    <article className="legal-page">
      <div className="legal-page__inner">
        <a className="legal-page__back" href={basePath || "/"}>
          ← {locale === "en" ? "Back to home" : "返回首页"}
        </a>
        <h1 className="legal-page__title">{c.title}</h1>
        <p className="legal-page__updated">
          {locale === "en" ? "Last updated: " : "最后更新："}
          {c.lastUpdated}
        </p>
        {c.sections.map((section, i) => (
          <section key={i} className="legal-page__section">
            <h2 className="legal-page__heading">{section.heading}</h2>
            {section.body.map((paragraph, j) => (
              <p key={j} className="legal-page__text">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
