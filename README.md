# Clinic Appointment Dashboard 🏥

This is a modern, responsive web dashboard for managing clinic appointments.

It lets you:

- View appointments week by week 🗓️
- Create, edit, delete appointments ✏️
- Filter by doctor, patient, or treatment 🔍
- Supports light and dark themes 🌞🌙

---

## 🔧 Installation

1. Clone this repo:

```bash
git clone https://github.com/Khizar-Alii/clinic-dashboard.git
cd clinic-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Add Shadcn UI:

```bash
npx shadcn@latest init
npx shadcn@latest add input button dialog label select textarea
```

---

## 📦 Project Overview

### 📛 Project Name

**Clinic Appointment Dashboard** – built with **Next.js**, **Tailwind CSS**, **shadcn/ui**, and **Luxon** for date/time.

---

### ✨ Features Summary

- Weekly calendar view with appointments
- Click to add/edit/delete appointments
- Light/dark theme toggle
- Responsive for small screens
- Smooth animations using Framer Motion

---

### 📂 Folder & File Structure

```bash
.
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Main app layout
│   └── page.tsx         # Dashboard screen
├── components/          # Reusable UI components
│   ├── calendar/        # Calendar-related components
│   ├── AppointmentForm.tsx
│   ├── Sidebar.tsx
│   └── ThemeToggle.tsx
├── lib/
│   └── utils/           # Utility functions (date, validation, etc.)
├── types/
│   └── appointment.ts   # Appointment type definition
├── styles/
│   └── globals.css      # Custom CSS and Tailwind setup
└── README.md
```

---

### 🧩 Components Breakdown

#### `AppointmentForm.tsx`

- Popup form to create or edit an appointment
- Uses date/time pickers
- Validates form before saving

#### `AppointmentBlock.tsx`

- Visual appointment box in the calendar
- Displays patient & purpose

#### `Calendar.tsx`

- Weekly calendar layout (columns for each day, rows for each hour)
- Renders appointment blocks in correct time slots

#### `TimeSlot.tsx`

- Shows time labels (e.g., 9AM, 10AM) on the left side

#### `Sidebar.tsx`

- Filters for patient, doctor, and treatment
- Responsive for small screens

#### `ThemeToggle.tsx`

- Switch between light and dark themes
- Found in the header

---

### 🖼️ Screens / Pages

- **Dashboard Page (`app/page.tsx`)**  
  Shows the calendar, appointment form, filters, and theme toggle.

---

### 🎨 Styling

- **Tailwind CSS** – utility-first styling
- **shadcn/ui** – beautiful UI components
- **Responsive Design** – works well on mobile and desktop
- **Dark Mode** – fully supported using Tailwind's `.dark` variant

---

### 🌐 Context / Theme

Dark mode is managed via `class="dark"` on `<html>`.

If you're using a `ThemeToggle.tsx` component:

- It toggles `dark` class using `useEffect` and stores preference in `localStorage`.

---

## 🚀 Run the Project

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📌 Notes

- Appointments can't overlap in time
- Past dates are disabled when creating appointments

---

Happy coding! ✨
