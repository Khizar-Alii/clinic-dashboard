"use client";
import { Appointment } from "@/types/appointment";
import { DateTime } from "luxon";
import AppointmentBlock from "./AppointmentBlock";
import TimeSlot from "./TimeSlot";
import { getWeekDays, hours } from "@/lib/utils/dateUtils";

interface Props {
  appointments: Appointment[];
  onSelect: (appointment: Appointment) => void;
  filter: {
    treatment?: string;
    doctor?: string;
    patient?: string;
  };
}

export default function Calendar({ appointments, onSelect, filter }: Props) {
  const days = getWeekDays();

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-background scrollbar-hide">
      {/* Day Headers */}
      <div className="grid grid-cols-8 border-b border-gray-300 dark:border-gray-700">
        <div></div>
        {days.map((d) => (
          <div
            key={d.toISODate()}
            className="text-center font-semibold text-gray-800 dark:text-gray-100 p-2 text-xs md:text-sm lg:text-base"
          >
            <div className="block md:hidden">{d.toFormat("ccc")}</div>
            <div className="hidden md:block">{d.toFormat("cccc")}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-normal">
              {d.toFormat("LLL dd")}
            </div>
          </div>
        ))}
      </div>

      {/* Time Grid */}
      <div className="flex">
        {/* Times Column */}
        <div className="w-10 md:w-16 flex-shrink-0">
          {hours.map((h) => (
            <TimeSlot key={h} hour={h} />
          ))}
        </div>

        {/* Appointments Grid */}
        {days.map((day) => (
          <div
            key={day.toISO()}
            className="flex-1 relative border-l border-gray-200 dark:border-gray-700 min-h-[720px]"
            style={{ overflow: "hidden" }}
          >
            {appointments
              .filter((a) => DateTime.fromISO(a.start).hasSame(day, "day"))
              .filter(
                (a) =>
                  (!filter.treatment ||
                    a.treatment
                      .toLowerCase()
                      .includes(filter.treatment.toLowerCase())) &&
                  (!filter.doctor ||
                    a.doctor
                      .toLowerCase()
                      .includes(filter.doctor.toLowerCase())) &&
                  (!filter.patient ||
                    a.patient
                      .toLowerCase()
                      .includes(filter.patient.toLowerCase()))
              )
              .map((a) => (
                <AppointmentBlock
                  key={a.id}
                  appointment={a}
                  onClick={() => onSelect(a)}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
