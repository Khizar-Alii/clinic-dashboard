"use client";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import Calendar from "@/components/calendar/Calendar";
import AppointmentForm from "@/components/form/AppointmentForm";
import { useCalendar } from "@/hooks/useCalendar";
import { useState } from "react";
import { Appointment } from "@/types/appointment";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { appointments, addAppointment, updateAppointment, deleteAppointment } =
    useCalendar();
  const [filter, setFilter] = useState<{
    treatment?: string;
    doctor?: string;
    patient?: string;
  }>({});

  const [selected, setSelected] = useState<Appointment | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const handleSelect = (appt: Appointment) => {
    setSelected(appt);
    setFormOpen(true);
  };

  const handleSubmit = (data: Omit<Appointment, "id">, id?: string) => {
    if (id) updateAppointment(id, data);
    else addAppointment(data);
  };

  const handleDelete = (id: string) => {
    deleteAppointment(id);
    setFormOpen(false);
    setSelected(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 overflow-hidden">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <Sidebar onFilter={setFilter} />
        <div className="flex-1 overflow-auto scrollbar-hide">
          <Calendar
            appointments={appointments}
            filter={filter}
            onSelect={handleSelect}
          />
        </div>
      </div>

      <Button
        onClick={() => {
          setSelected(null);
          setFormOpen(true);
        }}
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-md z-50"
      >
        + New Appointment
      </Button>

      <AppointmentForm
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
          setSelected(null);
        }}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        appointments={appointments}
        initialData={selected}
      />
    </div>
  );
}
