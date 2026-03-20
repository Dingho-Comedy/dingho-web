import { FAQ_ITEMS } from "@/data/faq";
import "./faq-section.css";

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Single-column FAQ accordion (native details/summary for a11y, no extra deps).
 */
export function FaqSection() {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-section__inner">
        <div className="section-intro">
          <span className="section-intro__badge">FAQ</span>
          <h2 id="faq-heading" className="section-intro__title">
            常见问题
          </h2>
          <p className="section-intro__lead">
            为您整理了购票、观演与参与顶好喜剧时的常见疑问。
          </p>
        </div>

        <div className="faq-section__panel">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} className="faq-item" name="dinghao-faq">
              <summary className="faq-item__summary">
                <span className="faq-item__question">{item.question}</span>
                <ChevronIcon className="faq-item__chevron" />
              </summary>
              <div className="faq-item__body">
                <p className="faq-item__answer">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
