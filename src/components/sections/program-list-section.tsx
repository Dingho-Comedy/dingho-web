import { PROGRAM_LIST } from "@/data/program-list-from-json";
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

function buildTicketAriaLabel(item: ProgramListItem): string {
  const parts = [
    `购票：${item.title}`,
    item.priceUsd !== undefined ? formatUsdPrice(item.priceUsd) : null,
    "已包含所有手续费，新标签页打开",
  ].filter(Boolean);
  return parts.join("，");
}

function ProgramCard({ item }: { item: ProgramListItem }) {
  const body = (
    <>
      <div className="program-card__main">
        <h3 className="program-card__title">{item.title}</h3>
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
        aria-label={buildTicketAriaLabel(item)}
      >
        {body}
      </a>
    );
  }

  return <article className="program-card">{body}</article>;
}

function ProgramRow({ item }: { item: ProgramListItem }) {
  return (
    <div className="program-row">
      <div className="program-row__date">
        <span className="program-row__day">{item.dateLabel}</span>
        <span className="program-row__weekday">{item.weekdayLabel}</span>
      </div>
      <div className="program-row__node">
        <span className="program-row__dot" />
      </div>
      <ProgramCard item={item} />
    </div>
  );
}

/**
 * Static timeline: side art edge-aligned; list vertically centered beside art.
 */
export function ProgramListSection() {
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
            <span className="section-intro__badge">SHOWS</span>
            <h2 id="program-heading" className="section-intro__title">
              近期节目
            </h2>
            <p className="section-intro__lead">
              现场演出安排与购票入口；更多规则与说明请见页面底部「常见问题」。
            </p>
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
