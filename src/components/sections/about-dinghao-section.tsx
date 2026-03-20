import "./about-dinghao-section.css";

/** Gallery assets under /public/images */
const ABOUT_PHOTOS = {
  hero: "/images/1.jpg",
  fanLeft: "/images/2.webp",
  fanCenter: "/images/3.jpg",
  fanRight: "/images/4.webp",
} as const;

function HeadingMark() {
  return <span className="about-dinghao__heading-mark" aria-hidden />;
}

const WEWORK_ASSISTANT_URL =
  "https://work.weixin.qq.com/kfid/kfcc64a9da9d5b0cbfe" as const;

/**
 * About Dinghao Comedy: hero column ~1/3 width, spans full height of three text blocks.
 */
export function AboutDinghaoSection() {
  return (
    <section id="about" className="about-dinghao" aria-labelledby="about-dinghao-heading">
      <div className="about-dinghao__inner">
        <header className="section-intro">
          <span className="section-intro__badge">ABOUT</span>
          <h2 id="about-dinghao-heading" className="section-intro__title">
            关于顶好喜剧
          </h2>
          <p className="section-intro__lead">
            充满激情的脱口秀社区，为爱好者与表演者提供开放、包容的舞台；幽默连接彼此，每个人都能在这里绽放自我。
          </p>
        </header>
        <div className="about-dinghao__grid">
          <article className="about-dinghao__block about-dinghao__block--1">
            <div className="about-dinghao__body">
              <p>
                顶好喜剧是一个充满激情的脱口秀社区，致力于为喜剧爱好者和表演者创造一个开放、包容的平台。
                我们相信幽默是连接人们的桥梁，能够打破隔阂，传递快乐和洞察。
                从业余选手到专业喜剧人，每个人都有机会在我们的舞台上绽放自我。
              </p>
            </div>
          </article>

          <article className="about-dinghao__block about-dinghao__block--2">
            <h2 className="about-dinghao__title">
              <HeadingMark />
              我们的志愿者们
            </h2>
            <div className="about-dinghao__body">
              <p>
                顶好喜剧志愿者团队诚邀热爱喜剧的你加入我们！作为志愿者，你将参与演出的前期策划、舞台置景布置、周边商品采购管理以及票务服务等工作，与我们一起为波士顿华人社区打造最精彩的喜剧体验。
              </p>
              <p>
                在这里，你不仅能发挥自己的才能，还能在轻松愉快的氛围中结识志同道合的朋友，共同传递欢声笑语。
              </p>
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
              加入我们
            </h2>
            <div className="about-dinghao__body">
              <p>欢迎通过企业微信联系小助手，加入我们的志愿者大家庭！</p>
              <p>
                成为顶好喜剧志愿者后，你将享有独特的福利：免费观看所有脱口秀演出，与优秀的脱口秀演员零距离互动交流，深度参与喜剧创作过程，获得珍贵的幕后体验。让我们一起在欢笑中成长，在奉献中收获！
              </p>
            </div>
            <a
              className="about-dinghao__cta"
              href={WEWORK_ASSISTANT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              添加顶好喜剧小助手
            </a>
          </article>

          <div className="about-dinghao__fan" aria-label="社群照片">
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
