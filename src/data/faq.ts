import type { FaqItem } from "@/types/faq";

/** Copy for 常见问题 — Dinghao Comedy */
export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "ticket-location",
    question: "购票后我的票在哪里？",
    answer:
      "在购票后，您会收到来自顶好喜剧或LUMA的确认邮件。您可以将附在邮件中的电子票券加入到您的手机电子钱包中。在到达现场后请将二维码展示给入口处志愿者验票。如果您没有收到电子邮件，请在您的垃圾邮件箱中确认后联系微信小助手。",
  },
  {
    id: "seating",
    question: "如何选座位？",
    answer:
      "顶好喜剧的开放麦或专场的座位是按照入场顺序由观众自由挑选的。如果您有特别心仪的座位，请确保您在演出入场时间进入。",
  },
  {
    id: "refund",
    question: "我可以退票吗？",
    answer:
      "在演出开始前 72 小时您是可以申请退款的，但不支持换票。文体演出票具有特殊性，非普通商品，因为不可抗力因素导致的演出取消或延期外，在演出开始前 72 小时内不支持退换。",
  },
  {
    id: "improv",
    question: "什么是即兴喜剧？",
    answer:
      "顶好喜剧定期提供即兴喜剧活动。如果您感兴趣的话可以免费报名参加。您将会参与其中和其他朋友一起碰撞出欢乐的火花。",
  },
  {
    id: "open-mic",
    question: "我可以上台讲段子吗？",
    answer:
      "是的！我们随时欢迎您加入顶好喜剧。请在微信添加顶好喜剧小助手进入演员群。我们会提供审稿、读稿会和开放麦的机会！",
  },
] as const;
