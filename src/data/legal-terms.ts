import type { LegalContent } from "@/components/pages/legal-page";

export const TERMS_CONTENT: Record<"zh" | "en", LegalContent> = {
  zh: {
    title: "使用条款",
    lastUpdated: "2026 年 4 月 1 日",
    sections: [
      {
        heading: "接受条款",
        body: [
          "访问或使用顶好喜剧（Dingho Comedy, Inc.）网站即表示您同意遵守本使用条款。如您不同意以下任何条款，请勿使用本网站。",
        ],
      },
      {
        heading: "网站内容",
        body: [
          "本网站提供顶好喜剧的演出信息、社群介绍和相关资讯。网站上显示的所有内容，包括但不限于文字、图片、插画和设计，均为顶好喜剧所有或已获授权使用。",
          "未经我们书面许可，您不得复制、修改、分发或以商业目的使用本网站的任何内容。",
        ],
      },
      {
        heading: "票务服务",
        body: [
          "本网站的购票链接将引导您至第三方售票平台 LUMA 完成购买。票务交易受 LUMA 平台条款约束。",
          "退票政策：演出开始前 72 小时可申请退票；不支持换票。因不可抗力导致演出取消或延期的情况除外，演出前 72 小时内不接受退票。",
        ],
      },
      {
        heading: "社群行为规范",
        body: [
          "加入顶好喜剧微信观众群的用户应遵守以下规范：群内禁止发布任何形式的广告或推广内容；请保持友善、尊重的交流氛围；群内信息仅限顶好喜剧相关话题。",
          "违反社群规范的用户可能被移出群聊。",
        ],
      },
      {
        heading: "免责声明",
        body: [
          "本网站内容按「现状」提供，不作任何明示或暗示的保证。演出信息（包括时间、地点和票价）可能随时变更，请以购票平台上的最终信息为准。",
        ],
      },
      {
        heading: "条款修改",
        body: [
          "我们保留随时修改本使用条款的权利。修改后的条款将在本页面发布，继续使用本网站即视为您接受修改后的条款。",
        ],
      },
    ],
  },
  en: {
    title: "Terms of Use",
    lastUpdated: "April 1, 2026",
    sections: [
      {
        heading: "Acceptance of terms",
        body: [
          "By accessing or using the Dingho Comedy, Inc. website, you agree to be bound by these Terms of Use. If you do not agree to any of these terms, please do not use this website.",
        ],
      },
      {
        heading: "Website content",
        body: [
          "This website provides show information, community details, and related content for Dingho Comedy. All content displayed on this site, including but not limited to text, images, illustrations, and design, is owned by or licensed to Dingho Comedy.",
          "You may not copy, modify, distribute, or use any content from this website for commercial purposes without our written permission.",
        ],
      },
      {
        heading: "Ticketing",
        body: [
          "Ticket purchase links on this website direct you to LUMA, a third-party ticketing platform. All ticket transactions are governed by LUMA's terms of service.",
          "Refund policy: refunds are available up to 72 hours before show time. Ticket exchanges are not supported. Except for cancellations or postponements due to force majeure, refunds are not available within 72 hours of the show.",
        ],
      },
      {
        heading: "Community guidelines",
        body: [
          "Users who join Dingho Comedy WeChat audience groups must follow these guidelines: no advertising or promotional content of any kind; maintain a friendly and respectful atmosphere; keep discussions related to Dingho Comedy.",
          "Users who violate community guidelines may be removed from the group.",
        ],
      },
      {
        heading: "Disclaimer",
        body: [
          "This website and its content are provided \"as is\" without warranties of any kind, express or implied. Show details including dates, venues, and pricing are subject to change—please refer to the ticketing platform for final information.",
        ],
      },
      {
        heading: "Changes to terms",
        body: [
          "We reserve the right to modify these Terms of Use at any time. Updated terms will be posted on this page. Continued use of this website constitutes acceptance of the revised terms.",
        ],
      },
    ],
  },
};
