import programsJson from "./programs.json";
import type { ProgramListItem, ProgramRegion } from "@/types/program";

/** Raw row in `programs.json` — edit this file only to update the schedule. */
export interface ProgramJsonRow {
  date: string;
  time: string;
  name: string;
  /** English show title for the `/en` site */
  nameEn?: string;
  address: string;
  /** Region identifier: "boston" | "philadelphia" | "nyc" */
  region: ProgramRegion;
  image: string;
  /** Price in USD, e.g. 15.99 → shown as $15.99 */
  price?: number;
  /** “立刻购票” button target */
  ticketUrl?: string;
}

const WEEKDAYS_ZH = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const WEEKDAYS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS_EN_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

function parseLocalDateParts(isoDate: string): { y: number; m: number; d: number } | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim());
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  if (!y || mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  return { y, m: mo, d };
}

function parseTimeParts(time: string): { hh: number; mm: number } | null {
  const t = time.trim();
  const m = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(t);
  if (!m) return null;
  const hh = Number(m[1]);
  const mm = Number(m[2]);
  if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
  return { hh, mm };
}

function sortKeyForRow(row: ProgramJsonRow): number {
  const dp = parseLocalDateParts(row.date);
  const tp = parseTimeParts(row.time);
  if (!dp || !tp) return Number.MAX_SAFE_INTEGER;
  return new Date(dp.y, dp.m - 1, dp.d, tp.hh, tp.mm, 0, 0).getTime();
}

function toDisplayDateLabels(isoDate: string): { dateLabel: string; weekdayLabel: string } | null {
  const dp = parseLocalDateParts(isoDate);
  if (!dp) return null;
  const dt = new Date(dp.y, dp.m - 1, dp.d);
  return {
    dateLabel: `${dp.m}月${dp.d}日`,
    weekdayLabel: WEEKDAYS_ZH[dt.getDay()] ?? "",
  };
}

function toDisplayDateLabelsEn(isoDate: string): { dateLabel: string; weekdayLabel: string } | null {
  const dp = parseLocalDateParts(isoDate);
  if (!dp) return null;
  const dt = new Date(dp.y, dp.m - 1, dp.d);
  const month = MONTHS_EN_SHORT[dp.m - 1];
  if (!month) return null;
  return {
    dateLabel: `${month} ${dp.d}`,
    weekdayLabel: WEEKDAYS_EN[dt.getDay()] ?? "",
  };
}

function rowToItem(row: ProgramJsonRow, index: number): ProgramListItem | null {
  const labels = toDisplayDateLabels(row.date);
  const labelsEn = toDisplayDateLabelsEn(row.date);
  if (!labels || !labelsEn) return null;
  const tp = parseTimeParts(row.time);
  if (!tp) return null;
  const timeLabel = `${String(tp.hh).padStart(2, "0")}:${String(tp.mm).padStart(2, "0")}`;

  const slug = `${row.date}-${timeLabel}-${row.name}`.replace(/\s+/g, "-");
  const id = slug.slice(0, 120) || `program-${index}`;

  const priceRaw = row.price;
  const priceUsd =
    typeof priceRaw === "number" && Number.isFinite(priceRaw) ? priceRaw : undefined;
  const ticketUrl = row.ticketUrl?.trim() || undefined;
  const titleEnRaw = row.nameEn?.trim();

  return {
    id,
    dateLabel: labels.dateLabel,
    weekdayLabel: labels.weekdayLabel,
    dateLabelEn: labelsEn.dateLabel,
    weekdayLabelEn: labelsEn.weekdayLabel,
    timeLabel,
    title: row.name.trim(),
    titleEn: titleEnRaw || undefined,
    venue: row.address.trim(),
    region: row.region,
    imageSrc: row.image.trim() || undefined,
    priceUsd,
    ticketUrl,
  };
}

/** Sorted ascending by local date + time; invalid rows are dropped. */
export function getProgramListFromJson(): ProgramListItem[] {
  const rows = programsJson as ProgramJsonRow[];
  return [...rows]
    .map((row, i) => ({ row, i, key: sortKeyForRow(row) }))
    .sort((a, b) => a.key - b.key)
    .map(({ row, i }) => rowToItem(row, i))
    .filter((x): x is ProgramListItem => x !== null);
}

export const PROGRAM_LIST: ProgramListItem[] = getProgramListFromJson();
