import { useLocale, type Locale } from "@/contexts/locale-context";

export interface NavItemCopy {
  href: string;
  labelDesktop: string;
  labelMobile: string;
}

export interface HomeMessages {
  metaTitle: string;
  htmlLang: string;
  nav: readonly NavItemCopy[];
  navAria: string;
  logoAriaHome: string;
  heroTagline: string;
  heroCta: string;
  programBadge: string;
  programHeading: string;
  programLead: string;
  programTicketAria: (title: string, priceUsd: number | undefined, priceText: string) => string;
  aboutBadge: string;
  aboutHeading: string;
  aboutBlock1: string;
  aboutVolunteersTitle: string;
  aboutVolunteersBody: readonly string[];
  aboutJoinTitle: string;
  aboutJoinBody: readonly string[];
  aboutCta: string;
  aboutFanGalleryAria: string;
  appleAlt: string;
  appleTitle: string;
  appleSubtitle: string;
  appleBtnAria: string;
  faqBadge: string;
  faqHeading: string;
  faqLead: string;
  /** Tab labels for filtering programs by region */
  programTabAll: string;
  programTabBoston: string;
  programTabPhiladelphia: string;
  programTabNyc: string;
  /** Region label for the language control */
  langSwitchAria: string;
  /** Visible label for the only button (Chinese site → link to English) */
  langSwitchToEnLabel: string;
  langSwitchToEnAria: string;
  /** Visible label for the only button (English site → link to Chinese) */
  langSwitchToZhLabel: string;
  langSwitchToZhAria: string;
}

const NAV_ZH: readonly NavItemCopy[] = [
  { href: "#program", labelDesktop: "近期演出", labelMobile: "演出" },
  { href: "#about", labelDesktop: "关于顶好", labelMobile: "关于" },
  { href: "#faq", labelDesktop: "常见问题", labelMobile: "问答" },
] as const;

const NAV_EN: readonly NavItemCopy[] = [
  { href: "#program", labelDesktop: "Shows", labelMobile: "Shows" },
  { href: "#about", labelDesktop: "About", labelMobile: "About" },
  { href: "#faq", labelDesktop: "FAQ", labelMobile: "FAQ" },
] as const;

const MESSAGES: Record<Locale, HomeMessages> = {
  zh: {
    metaTitle: "顶好喜剧",
    htmlLang: "zh-Hans",
    nav: NAV_ZH,
    navAria: "主导航",
    logoAriaHome: "顶好喜剧 首页",
    heroTagline: "喜剧看顶好，生活没烦恼",
    heroCta: "点我购票",
    programBadge: "SHOWS",
    programHeading: "近期节目",
    programLead: "现场演出安排与购票入口；更多规则与说明请见页面底部「常见问题」。",
    programTicketAria: (title, priceUsd, priceText) =>
      [
        `购票：${title}`,
        priceUsd !== undefined ? priceText : null,
        "已包含所有手续费，新标签页打开",
      ]
        .filter(Boolean)
        .join("，"),
    aboutBadge: "ABOUT",
    aboutHeading: "关于顶好喜剧",
    aboutBlock1:
      "顶好喜剧是一个充满激情的脱口秀社区，致力于为喜剧爱好者和表演者创造一个开放、包容的平台。我们相信幽默是连接人们的桥梁，能够打破隔阂，传递快乐和洞察。从业余选手到专业喜剧人，每个人都有机会在我们的舞台上绽放自我。",
    aboutVolunteersTitle: "我们的志愿者们",
    aboutVolunteersBody: [
      "顶好喜剧志愿者团队诚邀热爱喜剧的你加入我们！作为志愿者，你将参与演出的前期策划、舞台置景布置、周边商品采购管理以及票务服务等工作，与我们一起为波士顿华人社区打造最精彩的喜剧体验。",
      "在这里，你不仅能发挥自己的才能，还能在轻松愉快的氛围中结识志同道合的朋友，共同传递欢声笑语。",
    ],
    aboutJoinTitle: "加入我们",
    aboutJoinBody: [
      "欢迎通过企业微信联系小助手，加入我们的志愿者大家庭！",
      "成为顶好喜剧志愿者后，你将享有独特的福利：免费观看所有脱口秀演出，与优秀的脱口秀演员零距离互动交流，深度参与喜剧创作过程，获得珍贵的幕后体验。让我们一起在欢笑中成长，在奉献中收获！",
    ],
    aboutCta: "添加顶好喜剧小助手",
    aboutFanGalleryAria: "社群照片",
    appleAlt: "顶好喜剧专辑封面插画",
    appleTitle: "顶好开笑序曲",
    appleSubtitle: "顶好喜剧开场播放列表",
    appleBtnAria: "在 Apple Music 打开顶好开笑序曲播放列表",
    faqBadge: "FAQ",
    faqHeading: "常见问题",
    faqLead: "为您整理了购票、观演与参与顶好喜剧时的常见疑问。",
    programTabAll: "全部",
    programTabBoston: "波士顿",
    programTabPhiladelphia: "费城",
    programTabNyc: "纽约市",
    langSwitchAria: "语言",
    langSwitchToEnLabel: "En",
    langSwitchToEnAria: "切换到英文版",
    langSwitchToZhLabel: "中文",
    langSwitchToZhAria: "切换到中文版",
  },
  en: {
    metaTitle: "Dingho Comedy",
    htmlLang: "en",
    nav: NAV_EN,
    navAria: "Main navigation",
    logoAriaHome: "Dingho Comedy home",
    heroTagline: "Jokes in Chinese, Laughs with Ease",
    heroCta: "Get tickets",
    programBadge: "SHOWS",
    programHeading: "Upcoming shows",
    programLead:
      "Live schedule and ticket links. For policies and details, see FAQ at the bottom of the page.",
    programTicketAria: (title, priceUsd, priceText) =>
      [
        `Tickets: ${title}`,
        priceUsd !== undefined ? priceText : null,
        "Fees included; opens in a new tab",
      ]
        .filter(Boolean)
        .join(". "),
    aboutBadge: "ABOUT",
    aboutHeading: "About Dingho Comedy",
    aboutBlock1:
      "Dingho Comedy is a passionate stand-up community built for comedy lovers and performers alike—an open, inclusive platform where humor bridges people, breaks barriers, and shares joy and insight. From first-timers to pros, everyone can take the stage and shine.",
    aboutVolunteersTitle: "Our volunteers",
    aboutVolunteersBody: [
      "Love comedy? Join our volunteer team. You’ll help with pre-show planning, set dressing, merch, ticketing, and more—bringing the best live comedy experience to Greater Boston’s Chinese community.",
      "Use your skills, meet like-minded friends, and spread laughter in a relaxed, welcoming environment.",
    ],
    aboutJoinTitle: "Join us",
    aboutJoinBody: [
      "Reach out to our assistant on WeCom (WeChat Work) to join the volunteer family.",
      "Perks include complimentary show access, time with performers, a look behind the scenes, and hands-on experience helping build the shows—grow with us through laughter and service.",
    ],
    aboutCta: "Message Dingho on WeCom",
    aboutFanGalleryAria: "Community photos",
    appleAlt: "Dingho Comedy playlist artwork",
    appleTitle: "Opening Laughs",
    appleSubtitle: "Dingho Comedy pre-show playlist",
    appleBtnAria: "Open the Dingho Opening Laughs playlist on Apple Music",
    faqBadge: "FAQ",
    faqHeading: "FAQ",
    faqLead: "Ticketing, attending shows, and getting involved with Dingho Comedy.",
    programTabAll: "All",
    programTabBoston: "Boston",
    programTabPhiladelphia: "Philadelphia",
    programTabNyc: "NYC",
    langSwitchAria: "Language",
    langSwitchToEnLabel: "En",
    langSwitchToEnAria: "Switch to English",
    langSwitchToZhLabel: "中文",
    langSwitchToZhAria: "Switch to Chinese site",
  },
};

export function getHomeMessages(locale: Locale): HomeMessages {
  return MESSAGES[locale];
}

export function useHomeMessages(): HomeMessages {
  return getHomeMessages(useLocale());
}
