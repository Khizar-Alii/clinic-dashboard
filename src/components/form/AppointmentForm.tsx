"use client";
import { Appointment } from "@/types/appointment";
import { hasOverlap } from "@/lib/utils/validation";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DateTime } from "luxon";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (appointment: Omit<Appointment, "id">, id?: string) => void;
  onDelete: (id: string) => void;
  initialData?: Appointment | null;
  appointments: Appointment[];
}

const patients = [
  "Ali Raza",
  "Sara Khan",
  "John Doe",
  "Jane Smith",
  "Amir Ali",
];
const doctors = ["Dr. Ahmed", "Dr. Zainab", "Dr. Fatima"];
const treatments = ["Dental", "Orthopedic", "Cardio", "Skin", "Neuro"];

export default function AppointmentForm({
  open,
  onClose,
  onSubmit,
  onDelete,
  initialData,
  appointments,
}: Props) {
  const [form, setForm] = useState<Omit<Appointment, "id">>({
    patient: "",
    doctor: "",
    treatment: "",
    purpose: "",
    start: "",
    end: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      const { id, ...rest } = initialData;
      setForm(rest);
    } else {
      setForm({
        patient: "",
        doctor: "",
        treatment: "",
        purpose: "",
        start: "",
        end: "",
      });
    }
  }, [initialData]);

  const now = DateTime.local()
    .toISO({ suppressSeconds: true, includeOffset: false })
    ?.slice(0, 16);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (Object.values(form).some((v) => !v)) {
      return setError("All fields are required.");
    }

    const start = DateTime.fromISO(form.start);
    const end = DateTime.fromISO(form.end);
    if (end <= start) {
      return setError("End time must be after start time.");
    }

    if (hasOverlap({ ...form, id: initialData?.id || "temp" }, appointments)) {
      return setError("Appointment overlaps with another.");
    }

    onSubmit(form, initialData?.id);
    onClose();
    setForm({
      patient: "",
      doctor: "",
      treatment: "",
      purpose: "",
      start: "",
      end: "",
    });
    setError("");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="space-y-4 max-h-[90vh] overflow-y-auto sm:max-w-lg w-full">
        <DialogHeader className="text-lg font-bold text-gray-800 dark:text-gray-100">
          {initialData ? "Edit Appointment" : "New Appointment"}
        </DialogHeader>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <select
          name="patient"
          value={form.patient}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 rounded text-sm dark:text-white"
        >
          <option value="">Select Patient</option>
          {patients.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <select
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 rounded text-sm dark:text-white"
        >
          <option value="">Select Doctor</option>
          {doctors.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <select
          name="treatment"
          value={form.treatment}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 rounded text-sm dark:text-white"
        >
          <option value="">Select Treatment</option>
          {treatments.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <Input
          name="purpose"
          placeholder="Purpose"
          value={form.purpose}
          onChange={handleChange}
          className="text-sm"
        />

        <Input
          type="datetime-local"
          name="start"
          value={form.start}
          onChange={handleChange}
          min={now}
          className="text-sm"
        />

        <Input
          type="datetime-local"
          name="end"
          value={form.end}
          onChange={handleChange}
          min={now}
          className="text-sm"
        />

        <div className="flex flex-wrap justify-end gap-2 pt-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="text-gray-700 dark:text-gray-300"
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Save
          </Button>

          {initialData && (
            <Button
              onClick={() => {
                onDelete(initialData.id);
                onClose();
              }}
              className="bg-red-500 hover:bg-red-600 text-white"
              variant="destructive"
            >
              Delete
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
