import { PROGRAM_LIST } from "@/data/program-list-from-json";
import { useLocale, type Locale } from "@/contexts/locale-context";
import { useHomeMessages } from "@/i18n/messages";
import { appendCurrentPageUtmParams } from "@/lib/append-utm-to-url";
import type { ProgramListItem } from "@/types/program";
import "./program-list.css";

function LocationIcon() {
  return (
    <svg className="program-card__meta-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="program-card__meta-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function formatUsdPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function getProgramDisplayTitle(item: ProgramListItem, locale: Locale): string {
  if (locale === "en" && item.titleEn?.trim()) return item.titleEn.trim();
  return item.title;
}

function ProgramCard({
  item,
  displayTitle,
}: {
  item: ProgramListItem;
  displayTitle: string;
}) {
  const m = useHomeMessages();
  const priceText = item.priceUsd !== undefined ? formatUsdPrice(item.priceUsd) : "";
  const ariaLabel = m.programTicketAria(displayTitle, item.priceUsd, priceText);

  const body = (
    <>
      <div className="program-card__main">
        <h3 className="program-card__title">{displayTitle}</h3>
        <div className="program-card__meta">
          <div className="program-card__meta-row">
            <LocationIcon />
            <span>{item.venue}</span>
          </div>
          <div className="program-card__meta-row">
            <ClockIcon />
            <span>{item.timeLabel}</span>
          </div>
          {item.priceUsd !== undefined ? (
            <p className="program-card__price">{formatUsdPrice(item.priceUsd)}</p>
          ) : null}
        </div>
      </div>
      <div className="program-card__poster-wrap">
        {item.imageSrc ? (
          <img
            className="program-card__poster"
            src={item.imageSrc}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="program-card__poster program-card__poster--empty" aria-hidden />
        )}
      </div>
    </>
  );

  if (item.ticketUrl) {
    return (
      <a
        className="program-card program-card--link"
        href={appendCurrentPageUtmParams(item.ticketUrl)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {body}
      </a>
    );
  }

  return <article className="program-card">{body}</article>;
}

function ProgramRow({ item }: { item: ProgramListItem }) {
  const locale = useLocale();
  const displayTitle = getProgramDisplayTitle(item, locale);
  const dateLabel = locale === "en" ? item.dateLabelEn : item.dateLabel;
  const weekdayLabel = locale === "en" ? item.weekdayLabelEn : item.weekdayLabel;

  return (
    <div className="program-row">
      <div className="program-row__date">
        <span className="program-row__day">{dateLabel}</span>
        <span className="program-row__weekday">{weekdayLabel}</span>
      </div>
      <div className="program-row__node">
        <span className="program-row__dot" />
      </div>
      <ProgramCard item={item} displayTitle={displayTitle} />
    </div>
  );
}

/**
 * Static timeline: side art edge-aligned; list vertically centered beside art.
 */
export function ProgramListSection() {
  const m = useHomeMessages();

  return (
    <section
      id="program"
      className="program program-section"
      aria-labelledby="program-heading"
    >
      <div className="program-section__layout">
        <div className="program-section__rail program-section__rail--left" aria-hidden>
          <img className="program-section__rail-img" src="/images/left.png" alt="" />
        </div>
        <div className="program-section__center">
          <header className="section-intro section-intro--compact">
            <span className="section-intro__badge">{m.programBadge}</span>
            <h2 id="program-heading" className="section-intro__title">
              {m.programHeading}
            </h2>
            <p className="section-intro__lead">{m.programLead}</p>
          </header>
          <div className="program-timeline" role="list">
            {PROGRAM_LIST.length > 0 ? (
              PROGRAM_LIST.map((item) => (
                <div key={item.id} className="program-timeline__item" role="listitem">
                  <ProgramRow item={item} />
                </div>
              ))
            ) : (
              <div className="program-empty-state">
                <p className="program-empty-state__text">敬请期待</p>
              </div>
            )}
          </div>
        </div>
        <div className="program-section__rail program-section__rail--right" aria-hidden>
          <img className="program-section__rail-img" src="/images/right.png" alt="" />
        </div>
      </div>
    </section>
  );
}
