// @ts-nocheck

import { DateTime } from "luxon";

export const hours = Array.from({ length: 11 }, (_, i) => i + 8);

export function formatHour(hour: number) {
  return DateTime.fromObject({ hour }).toFormat("h a");
}

export function getWeekDays() {
  const today = DateTime.local();
  const start = today.startOf("day");
  return Array.from({ length: 7 }, (_, i) => start.plus({ days: i }));
}
