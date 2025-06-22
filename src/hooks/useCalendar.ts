"use client";
import { useEffect, useState } from "react";
import { Appointment } from "@/types/appointment";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "clinic_appointments";

export const useCalendar = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) setAppointments(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appt: Omit<Appointment, "id">) => {
    setAppointments((prev) => [...prev, { ...appt, id: uuidv4() }]);
  };

  const updateAppointment = (id: string, updated: Omit<Appointment, "id">) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...updated, id } : a))
    );
  };

  const deleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  return { appointments, addAppointment, updateAppointment, deleteAppointment };
};
