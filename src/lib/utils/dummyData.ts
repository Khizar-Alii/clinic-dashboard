import { Appointment } from "@/types/appointment";
import { DateTime } from "luxon";

export const dummyPatients = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "Diana Prince",
  "Eve Adams",
];

export const dummyDoctors = [
  "Dr. Alex Chen",
  "Dr. Sarah Lee",
  "Dr. Michael Green",
];

export const dummyTreatments = [
  "General Checkup",
  "Dental Cleaning",
  "Physical Therapy",
  "Vaccination",
  "Consultation",
];

export const initialAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "Alice Johnson",
    doctor: "Dr. Alex Chen",
    treatment: "General Checkup",
    purpose: "Annual physical exam",
    start: DateTime.local()
      .startOf("week")
      .plus({ days: 1, hours: 9, minutes: 0 }), // Tuesday 9:00 AM
    end: DateTime.local()
      .startOf("week")
      .plus({ days: 1, hours: 10, minutes: 0 }), // Tuesday 10:00 AM
  },
  {
    id: "2",
    patientName: "Bob Smith",
    doctor: "Dr. Sarah Lee",
    treatment: "Dental Cleaning",
    purpose: "Routine dental check",
    start: DateTime.local()
      .startOf("week")
      .plus({ days: 2, hours: 11, minutes: 30 }), // Wednesday 11:30 AM
    end: DateTime.local()
      .startOf("week")
      .plus({ days: 2, hours: 12, minutes: 30 }), // Wednesday 12:30 PM
  },
  {
    id: "3",
    patientName: "Charlie Brown",
    doctor: "Dr. Michael Green",
    treatment: "Physical Therapy",
    purpose: "Post-injury rehabilitation",
    start: DateTime.local()
      .startOf("week")
      .plus({ days: 3, hours: 14, minutes: 0 }), // Thursday 2:00 PM
    end: DateTime.local()
      .startOf("week")
      .plus({ days: 3, hours: 15, minutes: 0 }), // Thursday 3:00 PM
  },
  {
    id: "4",
    patientName: "Diana Prince",
    doctor: "Dr. Alex Chen",
    treatment: "Consultation",
    purpose: "Discuss test results",
    start: DateTime.local()
      .startOf("week")
      .plus({ days: 4, hours: 10, minutes: 0 }), // Friday 10:00 AM
    end: DateTime.local()
      .startOf("week")
      .plus({ days: 4, hours: 10, minutes: 45 }), // Friday 10:45 AM
  },
  {
    id: "5",
    patientName: "Eve Adams",
    doctor: "Dr. Sarah Lee",
    treatment: "Vaccination",
    purpose: "Flu shot",
    start: DateTime.local()
      .startOf("week")
      .plus({ days: 0, hours: 15, minutes: 0 }), // Monday 3:00 PM
    end: DateTime.local()
      .startOf("week")
      .plus({ days: 0, hours: 15, minutes: 20 }), // Monday 3:20 PM
  },
];
