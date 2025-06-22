// @ts-nocheck

import { Appointment } from "@/types/appointment";
import { DateTime } from "luxon";

export const hasOverlap = (
  newApp: Appointment,
  appointments: Appointment[]
) => {
  const newStart = DateTime.fromISO(newApp.start);
  const newEnd = DateTime.fromISO(newApp.end);

  return appointments.some((a) => {
    if (a.id === newApp.id) return false; // skip same
    const start = DateTime.fromISO(a.start);
    const end = DateTime.fromISO(a.end);
    return newStart < end && newEnd > start;
  });
};
