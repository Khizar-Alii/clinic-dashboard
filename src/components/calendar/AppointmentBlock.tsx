// @ts-nocheck

import { Appointment } from "@/types/appointment";
import { DateTime } from "luxon";

interface Props {
  appointment: Appointment;
  onClick: () => void;
}

export default function AppointmentBlock({ appointment, onClick }: Props) {
  const start = DateTime.fromISO(appointment.start);
  const end = DateTime.fromISO(appointment.end);
  const duration = end.diff(start, "minutes").minutes;

  const top = ((start.hour - 8) * 60 + start.minute) * 1;
  const height = duration * 1;

  return (
    <div
      className={`
        absolute left-1 right-1 
        bg-cyan-500 dark:bg-cyan-600 
        text-white dark:text-gray-100 
        text-xs p-1 rounded cursor-pointer 
        shadow hover:shadow-md transition-shadow duration-200
      `}
      style={{ top, height: Math.max(height, 20) }}
      onClick={onClick}
      title={`${start.toFormat("t")} - ${end.toFormat("t")}`}
    >
      <div className="font-semibold truncate">{appointment.patient}</div>
      <div className="text-[10px] truncate">{appointment.purpose}</div>
    </div>
  );
}
