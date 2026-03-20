/** Single row after JSON load + sort (for timeline / cards). */
export interface ProgramListItem {
  id: string;
  dateLabel: string;
  weekdayLabel: string;
  timeLabel: string;
  title: string;
  venue: string;
  /** Optional poster URL; empty in JSON → placeholder block */
  imageSrc?: string;
  /** Ticket price in USD; displayed as $xx.xx */
  priceUsd?: number;
  /** Checkout / event page URL for the CTA */
  ticketUrl?: string;
}
