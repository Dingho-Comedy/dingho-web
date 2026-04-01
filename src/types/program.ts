export type ProgramRegion = "boston" | "philadelphia" | "nyc";

/** Single row after JSON load + sort (for timeline / cards). */
export interface ProgramListItem {
  id: string;
  dateLabel: string;
  weekdayLabel: string;
  /** English labels for `/en` */
  dateLabelEn: string;
  weekdayLabelEn: string;
  timeLabel: string;
  title: string;
  /** From `nameEn` in JSON; shown on English site when set */
  titleEn?: string;
  venue: string;
  /** Region identifier for tab filtering */
  region: ProgramRegion;
  /** Optional poster URL; empty in JSON → placeholder block */
  imageSrc?: string;
  /** Ticket price in USD; displayed as $xx.xx */
  priceUsd?: number;
  /** Checkout / event page URL for the CTA */
  ticketUrl?: string;
}
