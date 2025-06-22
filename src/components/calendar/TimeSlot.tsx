// @ts-nocheck

import { formatHour } from "@/lib/utils/dateUtils";

export default function TimeSlot({ hour }: { hour: number }) {
  return (
    <div className="h-[60px] border-t border-gray-200 dark:border-gray-700 px-2 text-gray-600 dark:text-gray-400 text-xs md:text-sm">
      {formatHour(hour)}
    </div>
  );
}
