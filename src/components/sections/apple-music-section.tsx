import "./apple-music-section.css";

const APPLE_MUSIC_PLAYLIST_URL =
  "https://music.apple.com/us/playlist/顶好开笑序曲/pl.u-9N9LLpeTxDblBXE" as const;

/**
 * Apple mark — geometry matches Wikimedia Commons “Apple logo black” (814×1000).
 * @see https://commons.wikimedia.org/wiki/File:Apple_logo_black.svg
 * On our black CTA, `currentColor` renders white (inverse of the Commons asset).
 */
function AppleLogoMonochrome() {
  return (
    <svg
      className="apple-music__btn-logo"
      viewBox="0 0 814 1000"
      fill="currentColor"
      aria-hidden
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

/**
 * Background playlist promo: rotating CD with contained album art + Apple Music–style CTA.
 */
export function AppleMusicSection() {
  return (
    <section id="music" className="apple-music" aria-labelledby="apple-music-title">
      <div className="apple-music__inner">
        <div className="apple-music__visual">
          <div className="apple-music-cd">
            <div className="apple-music-cd__disc">
              <div className="apple-music-cd__label">
                <img
                  className="apple-music-cd__img"
                  src="/images/album.png"
                  alt="顶好喜剧专辑封面插画"
                  width={512}
                  height={512}
                  decoding="async"
                />
              </div>
              <span className="apple-music-cd__spindle" aria-hidden />
            </div>
          </div>
        </div>

        <div className="apple-music__copy">
          <h2 id="apple-music-title" className="apple-music__title">
            顶好开笑序曲
          </h2>
          <p className="apple-music__subtitle">顶好喜剧开场播放列表</p>
          <a
            className="apple-music__btn"
            href={APPLE_MUSIC_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="在 Apple Music 打开顶好开笑序曲播放列表"
          >
            <AppleLogoMonochrome />
            <span className="apple-music__btn-text">
              <span className="apple-music__btn-kicker">Listen on</span>
              <span className="apple-music__btn-title">Apple Music</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
