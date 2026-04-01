import type { LegalContent } from "@/components/pages/legal-page";

export const VIDEO_CONSENT_CONTENT: Record<"zh" | "en", LegalContent> = {
  zh: {
    title: "视频采集许可协议",
    lastUpdated: "2026 年 4 月 1 日",
    sections: [
      {
        heading: "拍摄与录制告知",
        body: [
          "顶好喜剧（Dingho Comedy, Inc.）的现场演出期间，我们可能会进行照片拍摄和视频录制，用于宣传推广、社交媒体发布及存档记录等用途。",
        ],
      },
      {
        heading: "参与即同意",
        body: [
          "购票进入顶好喜剧演出场地，即表示您知晓并同意：您的肖像、声音和形象可能被拍摄、录制，并用于顶好喜剧的宣传材料、社交媒体账号、网站及其他推广渠道。",
          "该等素材的使用不会向您提供额外补偿。",
        ],
      },
      {
        heading: "素材使用范围",
        body: [
          "我们可能在以下场景使用演出期间采集的影像素材：社交媒体平台（包括但不限于微信公众号、小红书、Instagram 等）发布演出回顾或宣传内容；本网站的活动展示；印刷或电子宣传材料；演出录制和剪辑。",
        ],
      },
      {
        heading: "观众自行拍摄",
        body: [
          "除演出方特别许可外，演出期间观众不得对演员的表演内容进行录音或录像。简短的照片拍摄通常是允许的，但请勿使用闪光灯或影响其他观众的观演体验。",
          "未经授权录制和传播演员的表演内容可能侵犯演员的著作权和表演者权，由此产生的法律责任由行为人自行承担。",
        ],
      },
      {
        heading: "退出与联系",
        body: [
          "如果您不希望出现在我们的拍摄素材中，请在演出前告知现场工作人员，我们将尽力配合。如果您发现自己出现在已发布的内容中并希望移除，请通过企业微信小助手与我们联系，我们将在合理时间内处理您的请求。",
        ],
      },
    ],
  },
  en: {
    title: "Video & Photo Recording Consent",
    lastUpdated: "April 1, 2026",
    sections: [
      {
        heading: "Recording notice",
        body: [
          "During Dingho Comedy, Inc. live events, we may take photographs and record video for promotional, social media, and archival purposes.",
        ],
      },
      {
        heading: "Consent by attendance",
        body: [
          "By purchasing a ticket and entering a Dingho Comedy venue, you acknowledge and consent to the capture, recording, and use of your likeness, voice, and image in Dingho Comedy's promotional materials, social media accounts, website, and other marketing channels.",
          "No additional compensation will be provided for such use.",
        ],
      },
      {
        heading: "How footage may be used",
        body: [
          "Visual materials captured during shows may be used for: social media posts and show recaps (including but not limited to WeChat, Xiaohongshu, and Instagram); event showcases on this website; print and digital promotional materials; show recordings and highlight reels.",
        ],
      },
      {
        heading: "Audience recording policy",
        body: [
          "Unless expressly permitted, audience members may not audio- or video-record performers' material during shows. Brief photos are generally allowed, but please do not use flash or disturb other attendees.",
          "Unauthorized recording and distribution of performers' material may infringe upon their copyright and performer's rights. Any legal liability arising from such actions is borne by the individual responsible.",
        ],
      },
      {
        heading: "Opt-out & contact",
        body: [
          "If you prefer not to appear in our footage, please inform our on-site staff before the show and we will do our best to accommodate your request. If you find yourself in published content and wish to have it removed, contact us through our WeCom assistant and we will process your request within a reasonable timeframe.",
        ],
      },
    ],
  },
};
