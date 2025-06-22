export interface Appointment {
  id: string;
  patient: string;
  doctor: string;
  treatment: string;
  purpose: string;
  start: string; // ISO string
  end: string; // ISO string
}
