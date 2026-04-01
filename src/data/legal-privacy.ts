import type { LegalContent } from "@/components/pages/legal-page";

export const PRIVACY_CONTENT: Record<"zh" | "en", LegalContent> = {
  zh: {
    title: "隐私协议",
    lastUpdated: "2026 年 4 月 1 日",
    sections: [
      {
        heading: "概述",
        body: [
          "顶好喜剧（Dingho Comedy, Inc.）尊重并保护您的个人隐私。本隐私协议说明我们在您使用本网站及相关服务时如何收集、使用和保护您的信息。",
        ],
      },
      {
        heading: "信息收集",
        body: [
          "本网站为静态展示网站，不直接收集您的个人信息。我们不设用户账户，不使用 Cookie 跟踪您的浏览行为。",
          "当您通过第三方平台 LUMA 购买演出票务时，相关购票信息由 LUMA 平台收集和处理，请参阅 LUMA 的隐私政策了解详情。",
        ],
      },
      {
        heading: "社群与通讯",
        body: [
          "如果您加入我们的微信观众群或通过企业微信联系我们，您提供的信息（如微信昵称）将仅用于社群运营和演出信息推送。",
          "我们的观众群禁止发布广告，群内信息仅限于顶好喜剧的演出资讯和社群交流。",
        ],
      },
      {
        heading: "信息共享",
        body: [
          "我们不会出售、交易或以其他方式将您的个人信息转让给第三方，法律要求除外。",
        ],
      },
      {
        heading: "联系我们",
        body: [
          "如对本隐私协议有任何疑问，请通过企业微信小助手与我们联系。",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "April 1, 2026",
    sections: [
      {
        heading: "Overview",
        body: [
          "Dingho Comedy, Inc. respects and protects your personal privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and related services.",
        ],
      },
      {
        heading: "Information we collect",
        body: [
          "This is a static website and does not directly collect personal information. We do not maintain user accounts or use cookies to track your browsing behavior.",
          "When you purchase tickets through our third-party ticketing platform LUMA, your purchase information is collected and processed by LUMA. Please refer to LUMA's privacy policy for details.",
        ],
      },
      {
        heading: "Community & communications",
        body: [
          "If you join our WeChat audience groups or contact us via WeCom (WeChat Work), information you provide (such as your WeChat display name) is used solely for community management and show announcements.",
          "Advertising is not permitted in our audience groups. Group communication is limited to Dingho Comedy show information and community discussion.",
        ],
      },
      {
        heading: "Information sharing",
        body: [
          "We do not sell, trade, or otherwise transfer your personal information to third parties, except as required by law.",
        ],
      },
      {
        heading: "Contact us",
        body: [
          "If you have questions about this Privacy Policy, please reach out to us through our WeCom assistant.",
        ],
      },
    ],
  },
};
