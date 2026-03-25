import { useHomeMessages } from "@/i18n/messages";
import "./about-dinghao-section.css";

/** Gallery assets under /public/images */
const ABOUT_PHOTOS = {
  hero: "/images/1.jpg",
  fanLeft: "/images/2.webp",
  fanCenter: "/images/3.jpg",
  fanRight: "/images/4.webp",
} as const;

const WEWORK_ASSISTANT_URL =
  "https://work.weixin.qq.com/kfid/kfcc64a9da9d5b0cbfe" as const;

function HeadingMark() {
  return <span className="about-dinghao__heading-mark" aria-hidden />;
}

/**
 * About Dinghao Comedy: hero column ~1/3 width, spans full height of three text blocks.
 */
export function AboutDinghaoSection() {
  const m = useHomeMessages();

  return (
    <section id="about" className="about-dinghao" aria-labelledby="about-dinghao-heading">
      <div className="about-dinghao__inner">
        <header className="section-intro">
          <span className="section-intro__badge">{m.aboutBadge}</span>
          <h2 id="about-dinghao-heading" className="section-intro__title">
            {m.aboutHeading}
          </h2>
        </header>
        <div className="about-dinghao__grid">
          <article className="about-dinghao__block about-dinghao__block--1">
            <div className="about-dinghao__body">
              <p>{m.aboutBlock1}</p>
            </div>
          </article>

          <article className="about-dinghao__block about-dinghao__block--2">
            <h2 className="about-dinghao__title">
              <HeadingMark />
              {m.aboutVolunteersTitle}
            </h2>
            <div className="about-dinghao__body">
              {m.aboutVolunteersBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>

          <figure className="about-dinghao__hero">
            <img
              className="about-dinghao__photo about-dinghao__hero-img"
              src={ABOUT_PHOTOS.hero}
              alt=""
              decoding="async"
            />
          </figure>

          <article className="about-dinghao__block about-dinghao__block--3">
            <h2 className="about-dinghao__title">
              <HeadingMark />
              {m.aboutJoinTitle}
            </h2>
            <div className="about-dinghao__body">
              {m.aboutJoinBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              className="about-dinghao__cta"
              href={WEWORK_ASSISTANT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {m.aboutCta}
            </a>
          </article>

          <div className="about-dinghao__fan" aria-label={m.aboutFanGalleryAria}>
            <img
              className="about-dinghao__photo about-dinghao__fan-img about-dinghao__fan-img--left"
              src={ABOUT_PHOTOS.fanLeft}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <img
              className="about-dinghao__photo about-dinghao__fan-img about-dinghao__fan-img--center"
              src={ABOUT_PHOTOS.fanCenter}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <img
              className="about-dinghao__photo about-dinghao__fan-img about-dinghao__fan-img--right"
              src={ABOUT_PHOTOS.fanRight}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
