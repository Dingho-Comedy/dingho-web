import type { FaqItem } from "@/types/faq";

/** English FAQ copy — mirrors structure of `faq.ts` */
export const FAQ_ITEMS_EN: readonly FaqItem[] = [
  {
    id: "ticket-location",
    question: "Where is my ticket after purchase?",
    answer:
      "After purchase you’ll receive a confirmation email from Dinghao Comedy or LUMA. Add the e-ticket to your phone wallet. At the venue, show the QR code to volunteers at the entrance. If you don’t see the email, check spam/junk, then contact us via WeChat assistant.",
  },
  {
    id: "seating",
    question: "How does seating work?",
    answer:
      "For open mics and specials, seating is first-come, first-served after doors open. Arrive at door time if you want a specific spot.",
  },
  {
    id: "refund",
    question: "Can I get a refund?",
    answer:
      "Refunds are available up to 72 hours before show time; ticket exchanges are not supported. Live event tickets are non-standard goods; except for cancellations or postponements due to force majeure, refunds are not available within 72 hours of the show.",
  },
  {
    id: "improv",
    question: "What is improv comedy?",
    answer:
      "We host improv events regularly. Interested? Sign up for free—you’ll join others on stage to spark joy together.",
  },
  {
    id: "open-mic",
    question: "Can I get on stage?",
    answer:
      "Yes! Add the Dinghao assistant on WeChat to join the performer group. We offer review sessions, table reads, and open mic slots.",
  },
] as const;
